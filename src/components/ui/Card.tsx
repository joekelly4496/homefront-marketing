import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      // `interactive` is accepted for compatibility; cards no longer lift on
      // hover — quiet surfaces, one radius, no decoration for its own sake.
      data-interactive={interactive || undefined}
      className={`bg-white rounded-[6px] border border-drywall ${className}`.trim()}
    >
      {children}
    </div>
  );
}
