/**
 * Build-time pre-renderer.
 *
 * After `vite build` produces the SPA bundle in `dist/`, this script:
 *   1. Starts `vite preview` against `dist/` on a local port
 *   2. Drives a headless Chromium through every marketing route
 *   3. Snapshots the fully-rendered HTML (including <head> metadata + JSON-LD
 *      injected by usePageMeta / SkillPage / LegalPage)
 *   4. Writes each snapshot to `dist/<route>/index.html`
 *
 * Vercel's static-first routing serves these files directly when a crawler
 * (or user) requests the URL, falling back to the SPA index.html only for
 * unknown paths. The SPA still hydrates in the browser exactly as before —
 * we just give crawlers real HTML to read.
 *
 * Failure mode: if puppeteer can't launch (missing system libs in the build
 * env) or any single route fails, we log the error and exit non-zero. The
 * existing SPA bundle in dist/ is left untouched, so a failed prerender
 * never produces a broken deploy on its own.
 */

import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");

const PORT = 4173; // Vite preview default
const ORIGIN = `http://localhost:${PORT}`;

// Routes to pre-render. Keep in sync with App.jsx <Route> entries that
// have stable, content-rich pages worth indexing.
const ROUTES = [
  "/",
  "/enquire",
  "/privacy",
  "/terms",
  "/skills/communication",
  "/skills/leadership",
  "/skills/creativity",
  "/skills/technology",
  "/skills/problem-solving",
];

// On Windows, npx is npx.cmd. spawn doesn't auto-resolve unless `shell: true`.
const isWindows = process.platform === "win32";

function startPreviewServer() {
  console.log("[prerender] starting vite preview on port", PORT);
  // On Windows, the npx executable is a .cmd file — Node's spawn refuses
  // to launch .cmd directly, so we route through the shell. On POSIX we
  // run npx as a normal binary.
  const server = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    {
      stdio: ["ignore", "pipe", "pipe"],
      shell: isWindows,
      cwd: join(__dirname, ".."),
    }
  );
  server.stdout.on("data", (b) => process.stdout.write(`[preview] ${b}`));
  server.stderr.on("data", (b) => process.stderr.write(`[preview] ${b}`));
  return server;
}

async function waitForServerReady(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {
      /* server not up yet */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`vite preview didn't become ready within ${timeoutMs}ms`);
}

function snapshotPathFor(route) {
  if (route === "/") return join(DIST_DIR, "index.html");
  // /skills/communication -> dist/skills/communication/index.html
  return join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

async function snapshotRoute(browser, route) {
  const url = `${ORIGIN}${route}`;
  const page = await browser.newPage();
  page.setDefaultTimeout(30000);
  // Surface page-side errors so build failures are loud.
  page.on("pageerror", (err) => {
    console.error(`[prerender] page error on ${route}:`, err.message);
  });

  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Give effects-based DOM updates (usePageMeta, JSON-LD injection in
    // SkillPage / LegalPage) a moment to flush before we snapshot.
    await new Promise((r) => setTimeout(r, 600));

    // Trigger any whileInView reveals throughout the page so their final
    // markup is in the snapshot. Crawlers read the HTML, not the animation
    // state, so this is mostly belt-and-suspenders.
    await page.evaluate(async () => {
      const max = document.documentElement.scrollHeight;
      const step = Math.max(window.innerHeight * 0.6, 400);
      for (let y = 0; y < max; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 200));

    const html = await page.content();
    const outPath = snapshotPathFor(route);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    console.log(
      `[prerender] ✓ ${route.padEnd(30)} → ${outPath.replace(DIST_DIR, "dist")}`
    );
  } finally {
    await page.close();
  }
}

async function main() {
  const server = startPreviewServer();
  let serverKilled = false;
  const killServer = () => {
    if (serverKilled) return;
    serverKilled = true;
    if (!server.killed) {
      // On Windows, .kill() is a soft request; force termination.
      if (isWindows) {
        try {
          spawn("taskkill", ["/pid", String(server.pid), "/f", "/t"]);
        } catch {
          server.kill("SIGKILL");
        }
      } else {
        server.kill("SIGTERM");
      }
    }
  };
  process.on("exit", killServer);
  process.on("SIGINT", () => {
    killServer();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    killServer();
    process.exit(143);
  });

  try {
    await waitForServerReady(ORIGIN);
    console.log("[prerender] vite preview ready");

    // On Vercel / AWS Lambda the build container is missing shared libs
    // (libnspr4, libnss3, etc.) that puppeteer's bundled Chromium expects.
    // @sparticuz/chromium ships a self-contained Chromium for those
    // environments. Locally we keep using puppeteer's bundled Chromium.
    const isServerless = !!(
      process.env.VERCEL ||
      process.env.AWS_LAMBDA_FUNCTION_VERSION ||
      process.env.AWS_EXECUTION_ENV
    );

    let launchOptions;
    if (isServerless) {
      console.log("[prerender] serverless env detected, using @sparticuz/chromium");
      const chromium = (await import("@sparticuz/chromium")).default;
      launchOptions = {
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      };
    } else {
      launchOptions = {
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      };
    }

    const browser = await puppeteer.launch(launchOptions);
    console.log("[prerender] chromium launched, snapshotting routes…");

    for (const route of ROUTES) {
      await snapshotRoute(browser, route);
    }

    await browser.close();
    console.log(`[prerender] done — ${ROUTES.length} routes snapshotted`);
  } finally {
    killServer();
  }
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
