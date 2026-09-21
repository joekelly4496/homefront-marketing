import type { ReactNode } from "react";

export type PillColor =
  | "brand"
  | "emerald"
  | "amber"
  | "red"
  | "violet"
  | "slate";

const colors: Record<PillColor, string> = {
  // Tape blue on Drywall is the default tag; brass marks "coming soon";
  // the old emerald/violet keys are kept for call sites and land on Tape.
  brand: "bg-drywall text-tape border-transparent",
  emerald: "bg-drywall text-tape border-transparent",
  amber: "bg-drywall text-brass-dark border-transparent",
  red: "bg-red-50 text-red-700 border-red-200",
  violet: "bg-drywall text-tape border-transparent",
  slate: "bg-drywall text-slate-600 border-transparent",
};

export function Pill({
  children,
  color = "brand",
  className = "",
}: {
  children: ReactNode;
  color?: PillColor;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-[4px] border ${colors[color]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
