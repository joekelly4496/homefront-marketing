"use client";

import { useEffect, useState, type ReactNode } from "react";
import posthog from "posthog-js";

/** Query keys worth carrying from the ad click into the signup/booking URL. */
const PASS_THROUGH = /^(utm_[a-z]+|gclid|fbclid|msclkid|li_fat_id)$/;

function withAttribution(href: string, search: string): string {
  const incoming = new URLSearchParams(search);
  const carried = [...incoming.entries()].filter(([k]) => PASS_THROUGH.test(k));
  if (carried.length === 0) return href;
  try {
    const url = new URL(href, window.location.origin);
    for (const [k, v] of carried) {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    }
    return url.origin === window.location.origin
      ? `${url.pathname}${url.search}${url.hash}`
      : url.toString();
  } catch {
    return href;
  }
}

/**
 * A call-to-action link that (1) reports the click to PostHog as
 * `ad_lp_cta_click` and (2) carries the ad's UTM / click-id parameters
 * through to the destination, so attribution survives the hop to the app
 * or the booking tool.
 */
export function TrackedCta({
  href,
  cta,
  className,
  children,
}: {
  href: string;
  cta: string;
  className?: string;
  children: ReactNode;
}) {
  const [target, setTarget] = useState(href);

  useEffect(() => {
    setTarget(withAttribution(href, window.location.search));
  }, [href]);

  return (
    <a
      href={target}
      className={className}
      onClick={() => {
        if (posthog.__loaded) posthog.capture("ad_lp_cta_click", { cta });
      }}
    >
      {children}
    </a>
  );
}
