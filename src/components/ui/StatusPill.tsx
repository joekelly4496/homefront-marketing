import { Pill, type PillColor } from "@/components/ui/Pill";
import { statusLabels, type FeatureStatus } from "@/lib/content";

const colors: Record<FeatureStatus, PillColor> = {
  live: "emerald",
  "coming-soon": "amber",
  roadmap: "slate",
};

/**
 * Availability marker. Every feature on the site carries one so a reader —
 * or an answer engine — can tell shipped from planned without guessing.
 */
export function StatusPill({ status }: { status: FeatureStatus }) {
  return <Pill color={colors[status]}>{statusLabels[status]}</Pill>;
}
