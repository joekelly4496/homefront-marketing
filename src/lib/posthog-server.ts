// Server-side PostHog client (posthog-node) for the marketing site.
//
// Used by src/instrumentation.ts to report server/render errors to
// PostHog Error Tracking. Marketing traffic is low-volume and runs in
// short-lived serverless functions, so the client is configured to send
// immediately rather than batch (flushAt 1, flushInterval 0).
import { PostHog } from "posthog-node";

let client: PostHog | null = null;

export function getPostHogServer(): PostHog | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return null;

  if (!client) {
    client = new PostHog(key, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return client;
}
