import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { BinderMockup } from "@/components/mockups/BinderMockup";
import { RequestFlow } from "@/components/mockups/RequestFlow";
import { WarrantyVsMaintenance } from "@/components/WarrantyVsMaintenance";
import { MembershipLadder } from "@/components/MembershipLadder";
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
      "One place for everything about your new house: the maintenance schedule, your documents, requests to the trades who built it, and the history.",
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
      body: `The email from ${Name} has one button. Tap it and you’re in, with your home already set up. No password to create first, no app to install — bookmark it on your phone.`,
      visual: null,
    },
    {
      title: "Your home, documented",
      body: `Manuals, warranties, appliance details, and a maintenance schedule built from them, with the source on every line. When something’s due, the reminder comes from ${Name} by email or text.`,
      visual: <BinderMockup className="w-full max-w-md" />,
    },
    {
      title: "Something’s wrong? Submit a request",
      body: "A photo and two sentences: what, and where. It’s marked warranty or maintenance and routed to the trade who knows your house.",
      visual: null,
    },
    {
      title: "The trade picks it up",
      body: `They message you in the portal to schedule, post status from the driveway, and photos when it’s done. ${Name} sees every step without being in the middle of it.`,
      visual: <RequestFlow className="w-full max-w-md" />,
    },
    {
      title: "Nothing is charged without your OK",
      body: "Warranty work is free, always. If something is billable, you see what it is and what it costs in the portal and approve it before anyone comes out. If you’re on a maintenance plan, it bills monthly to the card or bank account you put on file.",
      visual: null,
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
                One place for everything about your house: the maintenance
                schedule, your documents, requests to the trades who built it,
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
                Look for the invite email from {Name}. One tap signs you in.
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
                What’s warranty, what’s maintenance
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                A new house still needs maintenance from the day you get the
                keys, whoever built it — and that’s a different list from what{" "}
                {Name} is responsible for fixing.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink">
                Warranty covers what the builder got wrong, and it stays free.
                A maintenance plan covers what every house needs. One never
                stands in front of the other.
              </p>
            </div>
            <div className="lg:col-span-7">
              <WarrantyVsMaintenance />
            </div>
          </div>
        </Container>
      </section>

      {/* The maintenance plan, if offered */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>If {Name} offers a maintenance plan</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One company to call, for the life of the house
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Plans range from the schedule and the reminders to the whole
              house — the trades who built it handling the HVAC, the
              appliances, the lawn, the septic, on a schedule, for one number a
              month. What {Name} offers, what it includes, and what it costs
              is on your portal before you join.
            </p>
          </div>
          <MembershipLadder
            className="mt-10"
            foot={`Example plans. What ${Name} offers, and what it costs, is on your portal before you join. Whatever the plan, warranty work stays free.`}
          />
          <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {[
              "You see the full list of what’s included before you join",
              "It bills monthly to a card or bank account you put on file",
              "Anything outside the plan is priced and approved by you first",
              "Warranty repairs are free whether you join or not",
            ].map((line) => (
              <li key={line} className="flex gap-2.5">
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-tape"
                  aria-hidden="true"
                />
                <span className="text-base text-slate-700">{line}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-drywall py-20 sm:py-28">
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
