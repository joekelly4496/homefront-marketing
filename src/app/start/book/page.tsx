import { Container } from "@/components/ui/Container";
import { Qualifier } from "@/components/Qualifier";
import { LandingFooter } from "@/components/LandingFooter";
import { pageMetadata } from "@/lib/seo";
import { adLanding } from "@/lib/content";

/**
 * Step two of the ad funnel: qualify, then book. noindex, no site chrome.
 * The questions and the fit rule live in src/lib/qualifier.ts.
 */
export const metadata = pageMetadata({
  title: "Book a 15-minute call",
  description:
    "Three quick questions, then pick a time. Fifteen minutes on how Afterkey runs callbacks, subs, and maintenance under your brand.",
  path: `${adLanding.path}/book`,
  noIndex: true,
});

export default function BookPage() {
  return (
    <>
      <section className="min-h-[calc(100vh-4rem)] bg-ink text-paper">
        <Container size="6xl" className="pb-16 pt-12 sm:pb-24 sm:pt-16">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-medium text-brass">Book a 15-minute call</p>
            <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
              Three quick questions, then pick a time.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              So the call is about your homes, not a sales script.
            </p>
            <div className="mt-8">
              <Qualifier />
            </div>
          </div>
        </Container>
      </section>
      <LandingFooter />
    </>
  );
}
