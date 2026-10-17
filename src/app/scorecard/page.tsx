import { Container } from "@/components/ui/Container";
import { Scorecard } from "@/components/Scorecard";
import { LandingFooter } from "@/components/LandingFooter";
import { pageMetadata } from "@/lib/seo";

/**
 * The After-the-Keys Scorecard: the quiz funnel for Instagram, cold email
 * follow-ups and ads. No site chrome (see HideOnLanding). Questions, scoring
 * and copy live in src/lib/scorecard.ts; leads go to Afterkey Sales through
 * /api/scorecard.
 */
export const metadata = pageMetadata({
  title: "After-the-Keys Scorecard for builders and remodelers",
  description:
    "Nine quick questions about the year after the keys. Get your score, the one change that cuts the most calls, and what a maintenance plan could bring in.",
  path: "/scorecard",
});

export default function ScorecardPage() {
  return (
    <>
      <section className="min-h-[calc(100vh-4rem)] bg-ink text-paper">
        <Container size="6xl" className="pb-16 pt-12 sm:pb-24 sm:pt-16">
          <div className="mx-auto max-w-2xl">
            <Scorecard />
          </div>
        </Container>
      </section>
      <LandingFooter />
    </>
  );
}
