import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "6xl",
}: {
  children: ReactNode;
  className?: string;
  size?: "6xl" | "7xl";
}) {
  const max = size === "7xl" ? "max-w-7xl" : "max-w-6xl";
  return (
    <div className={`${max} mx-auto px-4 sm:px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
      {children}
    </p>
  );
}
