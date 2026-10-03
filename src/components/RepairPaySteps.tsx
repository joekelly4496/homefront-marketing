import { repairPaySteps } from "@/lib/content";

/** How a repair gets paid — one line per step. Numbered because it is a sequence. */
export function RepairPaySteps({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const number =
    tone === "dark" ? "bg-brass text-ink" : "bg-ink text-paper";
  const text = tone === "dark" ? "text-slate-300" : "text-slate-700";
  return (
    <ol className={`space-y-3 ${className}`.trim()}>
      {repairPaySteps.map((step, i) => (
        <li key={step} className="flex gap-3">
          <span
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] text-xs font-semibold ${number}`}
          >
            {i + 1}
          </span>
          <span className={`text-sm leading-relaxed sm:text-base ${text}`}>
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
