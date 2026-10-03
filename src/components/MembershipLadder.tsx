import { CheckCircle2 } from "lucide-react";
import { membershipLadder } from "@/lib/content";

/**
 * The membership ladder: the $40 plan is the floor, the whole house is the
 * ceiling. Each rung says what the homeowner physically gets, and whether
 * the visits and labor are in — the question a homeowner asks first.
 * `compact` keeps the one-line summary and the visits rule; the full version
 * lists every line item.
 */
export function MembershipLadder({
  className = "",
  compact = false,
  foot,
}: {
  className?: string;
  compact?: boolean;
  /** Replaces the builder-voiced footer on homeowner-facing pages. */
  foot?: string;
}) {
  const last = membershipLadder.tiers.length - 1;
  return (
    <div className={className}>
      <ol className="grid gap-4 md:grid-cols-3">
        {membershipLadder.tiers.map((tier, i) => {
          const dark = i === last;
          return (
            <li
              key={tier.name}
              className={`flex flex-col rounded-[6px] border p-5 ${
                dark ? "border-ink bg-ink text-paper" : "border-drywall bg-white text-ink"
              }`}
            >
              <p className={`text-sm font-medium ${dark ? "text-brass" : "text-tape"}`}>
                {tier.price}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{tier.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>
                {tier.summary}
              </p>
              {!compact && (
                <ul className="mt-4 space-y-1.5">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-brass" : "text-tape"}`}
                        aria-hidden="true"
                      />
                      <span className={`text-sm ${dark ? "text-paper" : "text-slate-700"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <p
                className={`mt-4 border-t pt-3 text-xs leading-relaxed ${
                  dark ? "border-paper/15 text-slate-300" : "border-drywall text-slate-600"
                }`}
              >
                {tier.visits}
              </p>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-slate-600">
        {foot ?? membershipLadder.foot}
      </p>
    </div>
  );
}
