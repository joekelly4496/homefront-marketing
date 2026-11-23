import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { BinderMockup } from "@/components/mockups/BinderMockup";
import { RequestFlow } from "@/components/mockups/RequestFlow";
import { WarrantyVsBillable } from "@/components/WarrantyVsBillable";
import { LandingFooter } from "@/components/LandingFooter";
import { pageMetadata } from "@/lib/seo";
import {
  brand,
  loginUrls,
  homeownerFaqs,
  welcomePath,
  builderNameFrom,
} from "@/lib/content";

type Props = { searchParams: Promise<{ builder?: string }> };

/**
 * The page a builder sends a homeowner after closing: what the portal is,
 * why to use it instead of texting, and a walkthrough. Written to the
 * homeowner in the builder's name (?builder=Whitfield+Homes). Not indexed —
 * the builder sends it; nobody searches for it.
 */
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const name = builderNameFrom((await searchParams).builder);
  return pageMetadata({
    title: name ? `Your home portal from ${name}` : "Welcome to your home portal",
    description:
      "One place for everything about your new house: requests to the trades who built it, their status, your documents, and the history.",
    path: welcomePath,
    noIndex: true,
  });
}

export default async function WelcomePage({ searchParams }: Props) {
  const name = builderNameFrom((await searchParams).builder) ?? "your builder";
  const Name = name; // read as a proper noun throughout

  const whyNotText = [
    {
      title: "It goes to the right person",
      body: `The plumber who installed your plumbing, the HVAC company that set the system — not a message that gets forwarded twice and answered Thursday.`,
    },
    {
      title: "You can see what’s happening",
      body: "Received, assigned, when they’re coming, and photos when it’s done. You don’t have to call anyone to ask.",
    },
    {
      title: "Nothing gets lost",
      body: "Every request, document, and visit stays on your home’s record for as long as you own it — not in a text thread you’ll never find again.",
    },
  ];

  const steps = [
    {
      title: "Accept the invite",
      body: `The email from ${Name} has one link. Open it, set a password, and you’re in with your home already set up. No app to install — bookmark it on your phone.`,
      visual: null,
    },
    {
      title: "Something’s wrong? Submit a request",
      body: "A photo and two sentences: what, and where. It’s marked warranty or billable from your home’s warranty dates, and goes straight to the trade who knows your house, nights and weekends included.",
      visual: null,
    },
    {
      title: "The trade picks it up",
      body: `They message you in the portal to schedule, post status from the driveway, and photos when it’s done. ${Name} sees every step without being in the middle of it.`,
      visual: <RequestFlow className="w-full max-w-md" />,
    },
    {
      title: "Nothing is charged without your OK",
      body: "Warranty work is free, always. If something is billable, you see the price in the portal and approve it before any work is charged; after the job you get a completion notice and can approve it or report a problem before the charge goes through.",
      visual: null,
    },
    {
      title: "Your home, documented",
      body: `Manuals, warranties, appliance details, and a maintenance schedule built from them, with the source on every line. When something’s due, the reminder comes from ${Name} by email or text.`,
      visual: <BinderMockup className="w-full max-w-md" />,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-drywall bg-paper">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-tape">Your home portal</p>
              <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                {name === "your builder"
                  ? "Your builder set you up with a home portal"
                  : `${Name} set you up with a home portal`}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
                One place for everything about your house: requests to the
                trades who built it, the status of each one, your documents,
                and the history — from {Name}, not a stranger.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={loginUrls.homeowner} external size="lg">
                  Open your portal
                </Button>
                <Button href="#walkthrough" size="lg" variant="secondary">
                  See how it works
                </Button>
              </div>
              <p className="mt-6 text-sm text-slate-600">
                Look for the invite email from {Name}. Open it, set a password,
                and you’re in.
              </p>
            </div>
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* Why not just text */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>Why the portal</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Why this instead of texting {Name}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyNotText.map((item) => (
              <Card key={item.title} className="p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Walkthrough */}
      <section id="walkthrough" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Five things you’ll do in it
            </h2>
          </div>
          <ol className="mt-12 space-y-16">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16"
              >
                <div
                  className={`lg:col-span-6 ${step.visual ? "" : "lg:col-span-8"}`}
                >
                  <div className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-ink text-base font-semibold text-paper">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-700">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
                {step.visual && (
                  <div className="flex justify-center lg:col-span-6">
                    {step.visual}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What's warranty, what's maintenance */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Two different lists</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What’s warranty, what isn’t
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Some things are {Name}’s to fix. Others are upkeep and wear
                that every house needs, whoever built it. Every request is
                marked one or the other when you send it.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink">
                Warranty work is free. Anything billable is priced first, and
                nothing is charged until you approve it.
              </p>
            </div>
            <div className="lg:col-span-7">
              <WarrantyVsBillable />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Common questions
              </h2>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={homeownerFaqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Open your portal
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Your home is already set up. Didn’t get the invite? Ask {Name} to
              resend it — it’s one click on their side.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={loginUrls.homeowner} external size="lg">
                Open your portal
              </Button>
            </div>
            <p className="mt-8 text-sm text-slate-400">
              The portal is {Name}’s service. {brand.name} is the software
              underneath it.{" "}
              <Link
                href="/for-homeowners"
                className="underline decoration-brass decoration-2 underline-offset-4 hover:text-paper"
              >
                More for homeowners
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <LandingFooter />
    </>
  );
}
