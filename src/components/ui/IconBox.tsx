import type { LucideIcon } from "lucide-react";

export type Accent = "brand" | "emerald" | "amber" | "red" | "violet" | "slate";

// Full class strings so Tailwind can detect them at build time.
const accentClasses: Record<Accent, string> = {
  brand: "bg-drywall text-tape",
  emerald: "bg-drywall text-tape",
  amber: "bg-drywall text-brass-dark",
  red: "bg-red-50 text-red-600",
  violet: "bg-drywall text-tape",
  slate: "bg-drywall text-slate-600",
};

export function IconBox({
  icon: Icon,
  accent = "brand",
  className = "",
}: {
  icon: LucideIcon;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-10 h-10 rounded-[6px] items-center justify-center ${accentClasses[accent]} ${className}`.trim()}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </span>
  );
}
