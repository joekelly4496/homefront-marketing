import type { ReactNode } from "react";

/**
 * Formerly a scroll-triggered fade-up. Motion was removed sitewide: one
 * static, confident page is stronger than an animated one. The component
 * remains so existing call sites keep working; `delay` is ignored.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
