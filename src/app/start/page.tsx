import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AdVideo } from "@/components/AdVideo";
import { TrackedCta } from "@/components/TrackedCta";
import { RequestFlow } from "@/components/mockups/RequestFlow";
import { LandingFooter } from "@/components/LandingFooter";
import { pageMetadata } from "@/lib/seo";
import {
  adLanding,
  guarantee,
  pricing,
  primaryCta,
  signupHref,
  steps,
} from "@/lib/content";

/**
 * The ad landing page. Paid traffic only: noindex (it would compete with the
 * homepage for the same query), absent from the sitemap, and no site
 * navigation. Promise, video, one decision.
 */
export const metadata = pageMetadata({
  title: "Callbacks handled under your brand",
  description:
    "See how Afterkey turns the after-closing phone calls into one queue your subs close, under your name. $149/month plus $10 per active home.",
  path: adLanding.path,
  noIndex: true,
});

const videoTitle = "What happens after closing";

export default function AdLandingPage() {
  // Every call goes through the qualifier first; signup is the shortcut for
  // builders who already know they want it.
  const primary = {
    href: `${adLanding.path}/book`,
    label: "Book a 15-minute call",
    cta: "book_call",
  };
  const secondary = {
    href: signupHref,
    label: `Or ${primaryCta.toLowerCase()} now`,
    cta: "signup",
  };

  return (
    <>
      <section className="bg-ink text-paper">
        <Container size="6xl" className="pb-16 pt-12 sm:pb-24 sm:pt-16">
          {/* The promise */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-brass">
              For builders doing 5 to 50 homes a year
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.5rem]">
              You’ve built hundreds of homes. They should still be paying you.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-slate-300">
              A maintenance membership you price, repairs paid through your
              portal with your markup on them, and your subs on the work.
              Here’s how the homes you’ve already closed start paying you.
            </p>
          </div>

          {/* The video — or, until it exists, the walkthrough it will show */}
          <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
            <AdVideo
              url={adLanding.videoUrl}
              poster={adLanding.videoPoster}
              title={videoTitle}
              duration={adLanding.videoDuration}
              fallback={
                <div className="grid items-center gap-8 rounded-[6px] bg-paper/[0.04] p-6 ring-1 ring-paper/10 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
                  <RequestFlow className="mx-auto w-full max-w-md" />
                  <ol className="space-y-6 text-left">
                    {steps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-brass text-sm font-semibold text-ink">
                          {i + 1}
                        </span>
                        <div>
                          <h2 className="text-base font-semibold text-paper">
                            {step.title}
                          </h2>
                          <p className="mt-1 text-sm leading-relaxed text-slate-300">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              }
            />
          </div>

          {/* The decision */}
          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrackedCta
                href={primary.href}
                cta={primary.cta}
                className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
              >
                {primary.label}
              </TrackedCta>
              <TrackedCta
                href={secondary.href}
                cta={secondary.cta}
                className="text-sm font-semibold text-paper underline decoration-brass decoration-2 underline-offset-4 hover:text-brass sm:ml-4"
              >
                {secondary.label}
              </TrackedCta>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-300">
              <li className="tabular-nums">
                <span className="font-semibold text-paper">
                  ${pricing.base}/month
                </span>{" "}
                + ${pricing.perHome} per active home
              </li>
              <li className="border-l border-paper/25 pl-5">No contracts</li>
            </ul>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
              The per-home line is small enough to build into each home’s cost
              at closing. {guarantee.short}
            </p>
          </div>
        </Container>
      </section>

      <LandingFooter />
    </>
  );
}
