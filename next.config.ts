import type { NextConfig } from "next";

// PostHog reverse proxy: the browser talks to /ingest on our own domain and
// Next forwards it to PostHog Cloud (US). Keeps analytics first-party and
// stops ad blockers from dropping events / session recordings.
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // PostHog API requests end with a trailing slash; don't redirect them.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
