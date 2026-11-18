"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { TrackedCta } from "@/components/TrackedCta";

/**
 * Phones only: the main button pinned to the bottom of the screen whenever
 * the button at the top of the page (`watchId`) is out of view, so a visitor
 * never has to scroll to act (small phones, or after scrolling down). Hidden
 * while the top button is visible so two identical buttons never show at once.
 */
export function StickyCta({
  watchId,
  href,
  cta,
  label,
}: {
  watchId: string;
  href: string;
  cta: string;
  label: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.getElementById(watchId);
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), {
      threshold: 0.6,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [watchId]);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-paper/10 bg-ink/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-200 motion-reduce:transition-none sm:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <TrackedCta
        href={href}
        cta={cta}
        className={buttonVariants({ size: "lg", className: "w-full" })}
      >
        {label}
      </TrackedCta>
    </div>
  );
}
