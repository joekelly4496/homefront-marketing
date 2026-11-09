import type { NextConfig } from "next";

// PostHog traffic goes through /ingest on our own domain, served by
// src/app/ingest/[...path]/route.ts, which re-sends it WITHOUT the visitor's
// IP address (a rewrite here would forward it in X-Forwarded-For). Keeps
// analytics first-party and stops ad blockers from dropping events.
const nextConfig: NextConfig = {
  // PostHog API requests end with a trailing slash; don't redirect them.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
