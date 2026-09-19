// Next.js server instrumentation hook.
//
// `onRequestError` fires for every uncaught error while rendering a page,
// running a Server Component, or handling a Route Handler (e.g. the contact
// form at /api/contact). We forward each one to PostHog Error Tracking with
// the request path and the rendering context attached.
import type { Instrumentation } from "next";

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context,
) => {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const { getPostHogServer } = await import("./lib/posthog-server");
  const posthog = getPostHogServer();
  if (!posthog) return;

  // Correlate the server error with the visitor's browser session when the
  // PostHog cookie is present (cookie name is ph_<project key>_posthog).
  let distinctId: string | undefined;
  const cookieHeader = request.headers.cookie;
  const cookie = Array.isArray(cookieHeader) ? cookieHeader.join("; ") : cookieHeader;
  if (cookie) {
    const match = cookie.match(/ph_phc_[^=]+_posthog=([^;]+)/);
    if (match) {
      try {
        const parsed = JSON.parse(decodeURIComponent(match[1])) as { distinct_id?: string };
        distinctId = parsed.distinct_id;
      } catch {
        // Cookie was not in the expected shape; report the error anonymously.
      }
    }
  }

  await posthog.captureException(err, distinctId, {
    path: request.path,
    method: request.method,
    routerKind: context.routerKind,
    routePath: context.routePath,
    routeType: context.routeType,
    renderSource: context.renderSource,
  });

  await posthog.shutdown();
};
