import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const UPSTREAM_URL =
  "https://gmail-smtp-api.onrender.com/v1/send/welcome-mail";

/**
 * Fire-and-forget email proxy (dev server).
 *
 * The browser POSTs the form payload to /api/send-welcome-mail. We reply
 * 202 Accepted immediately, then forward the call to the upstream API in
 * the background without awaiting it. That way the user's submission feels
 * instant even when Render's free tier is cold-starting (30–60 seconds);
 * the upstream eventually wakes up and processes the queued send.
 *
 * The bearer token is read from a server-only env var (EMAIL_API_KEY,
 * no VITE_ prefix) so it never reaches the browser bundle.
 *
 * In production, replicate this handler as a serverless function on the
 * host (Vercel /api, Cloudflare Pages /functions, Netlify functions, etc.).
 */
function fireAndForgetEmailPlugin(env) {
  return {
    name: "edu-seek:fire-and-forget-email",
    configureServer(server) {
      server.middlewares.use(
        "/api/send-welcome-mail",
        async (req, res, next) => {
          if (req.method !== "POST") return next();

          // Read the request body off the stream.
          let body = "";
          try {
            for await (const chunk of req) body += chunk;
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Could not read body" }));
            return;
          }

          // Reply success right away — the user is unblocked.
          res.statusCode = 202;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ accepted: true }));

          const apiKey = env.EMAIL_API_KEY;
          if (!apiKey) {
            console.warn(
              "[email-proxy] EMAIL_API_KEY not set — payload accepted but not forwarded"
            );
            return;
          }

          // Forward to the upstream API in the background. We deliberately
          // do NOT `await` this — the dev server's event loop keeps the
          // promise alive until it settles.
          fetch(UPSTREAM_URL, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body,
          })
            .then(async (r) => {
              if (!r.ok) {
                const text = await r.text().catch(() => "");
                console.warn(
                  `[email-proxy] upstream ${r.status}: ${text.slice(0, 300)}`
                );
              } else {
                console.log("[email-proxy] welcome mail dispatched");
              }
            })
            .catch((err) =>
              console.error(
                "[email-proxy] failed to reach upstream:",
                err?.message || err
              )
            );
        }
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load .env vars including non-VITE_ ones so the dev plugin can read
  // EMAIL_API_KEY without leaking it to the client bundle.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), fireAndForgetEmailPlugin(env)],
    server: {
      host: true,
      port: 5173,
    },
    build: {
      target: "es2018",
      cssCodeSplit: true,
      sourcemap: false,
    },
  };
});
