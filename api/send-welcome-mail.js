import { waitUntil } from "@vercel/functions";

const UPSTREAM_URL =
  "https://gmail-smtp-api.onrender.com/v1/send/welcome-mail";

// Allow time for Render's free tier to cold-start (30–60s) before the
// background fetch is killed by the platform.
export const config = {
  maxDuration: 60,
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.EMAIL_API_KEY;
  if (!apiKey) {
    console.warn(
      "[email-proxy] EMAIL_API_KEY not set — payload accepted but not forwarded"
    );
    return res.status(202).json({ accepted: true });
  }

  // Vercel auto-parses JSON bodies into req.body. Re-stringify so we
  // forward the exact same payload shape the upstream expects.
  const body =
    typeof req.body === "string"
      ? req.body
      : JSON.stringify(req.body ?? {});

  const upstream = fetch(UPSTREAM_URL, {
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

  // Keep the background fetch alive after we send the response so the
  // user sees an instant 202 even when the upstream is cold-starting.
  waitUntil(upstream);

  return res.status(202).json({ accepted: true });
}
