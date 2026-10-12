// PostHog browser initialisation for the marketing site.
//
// Next.js loads `instrumentation-client.ts` once, before the page becomes
// interactive, on every route — so this is the single place analytics is
// switched on. Configuration lives in .env.local / Vercel env vars:
//   NEXT_PUBLIC_POSTHOG_KEY   the project API key (starts with "phc_")
//   NEXT_PUBLIC_POSTHOG_HOST  the PostHog cloud host (US: https://us.i.posthog.com)
//
// Traffic is sent through the same-origin `/ingest` reverse proxy declared in
// next.config.ts, so ad blockers don't drop events and cookies stay first-party.
import posthog from "posthog-js";
import { REPLAY_CONSENT_KEY } from "@/lib/consent";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.posthog.com",
    defaults: "2025-05-24",

    // Automatic $pageview / $pageleave on App Router client navigations.
    capture_pageview: "history_change",
    capture_pageleave: true,

    // Error Tracking: unhandled exceptions and rejected promises become
    // $exception events in PostHog → Error tracking.
    capture_exceptions: true,

    // Session Replay is OFF until the visitor says yes (California
    // wiretapping law treats recording a visit without consent as a
    // wiretap). ReplayConsent asks once; "Allow" starts recording and the
    // choice is remembered. Typed text stays masked either way.
    disable_session_recording: true,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: "[data-ph-mask]",
    },

    // Marketing site only — no logged-in users, so keep visitors anonymous
    // until/unless we ever call posthog.identify().
    person_profiles: "identified_only",

    debug: process.env.NODE_ENV === "development",
  });
  try {
    if (localStorage.getItem(REPLAY_CONSENT_KEY) === "granted") posthog.startSessionRecording();
  } catch {
    // Storage blocked: no consent on record, so no recording.
  }
}
