import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { BuilderDashboard } from "@/components/mockups/BuilderDashboard";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { BinderMockup } from "@/components/mockups/BinderMockup";
import { WhiteLabelSwap } from "@/components/mockups/WhiteLabelSwap";
import { RequestFlow } from "@/components/mockups/RequestFlow";
import { graph, faqPageSchema, webPageSchema } from "@/lib/schema";
import {
  brand,
  steps,
  featureGroups,
  commitments,
  coreFaqs,
  pricing,
  pricingLine,
  whiteLabelPoints,
  signupHref,
  guarantee,
  perHomeFraming,
  primaryCta,
  competitorAnchor,
} from "@/lib/content";

/**
 * The problem, in the buyer's words. Three beats, not a symmetric list:
 * a builder should recognise his own week here before he reads a feature.
 */
const problemBeats = [
  {
    title: "The 9pm text.",
    body: "Three weeks after closing, the first “hey, quick question” lands on your cell. By August there are forty of them, and every one is a call, a drive, or a dig through old emails.",
  },
  {
    title: "The sub who says he went.",
    body: "The homeowner says nobody came. The sub says he called. There’s no record either way, so you eat the second trip.",
  },
  {
    title: "The binder that dies by June.",
    body: "Filter sizes, the water shutoff, the 11-month walkthrough. It lives on paper, or in a spreadsheet that leaves with your office manager.",
  },
];

/**
 * Objection handling: each section is headed by the objection itself as a
 * plain statement, answered in a few sentences with the mechanism. Prose
 * with one photograph each, never cards.
 */
const objections = [
  {
    heading: "Your homeowners will still call you.",
    body: [
      "Some will, the first month. Then they try the portal once: a photo, two sentences, and a status they can watch move. That’s easier than texting your cell and wondering whether it landed, so it’s what they do the next time.",
      "The calls you still get are the ones worth taking. Everything else lands on the home’s record instead of in your voicemail.",
    ],
    image: {
      src: "/images/reserve-brick-colonial.webp",
      alt: "A newly built brick-front colonial home at golden hour",
    },
  },
  {
    heading: "Your subs won’t use another app.",
    body: [
      "There’s nothing for them to learn. A sub signs in to one list: the jobs assigned to him, each with the address, the issue, the homeowner’s photos, and the home’s history. He taps a status and attaches a finished-work photo from the driveway.",
      "Subs use it free, and unlimited subs are included in your base. Adding a trade never changes your bill.",
    ],
    image: {
      src: "/images/reserve-truck-black.webp",
      alt: "A pickup truck pulling into the driveway of a white colonial home at dusk",
    },
  },
  {
    heading: "What Afterkey replaces.",
    body: [
      `The spreadsheet, the group text, the paper binder in the closing folder, and the warranty module inside ${competitorAnchor.name}, which starts at $${competitorAnchor.monthlyFrom} a month.`,
      "It doesn’t replace your CRM or your scheduling software. It starts the day those stop, at closing, and runs for the life of the house.",
    ],
    image: {
      src: "/images/reserve-shingle-golden.webp",
      alt: "A newly completed shingle-style home with white trim at golden hour",
    },
  },
];

const aiBinder = featureGroups.find((g) => g.id === "ai-binder")!;

/** The FAQs surfaced on the home page — the highest-intent subset. */
const homeFaqs = coreFaqs.filter((f) =>
  [
    "What is Afterkey?",
    "Who is Afterkey for?",
    "How much does Afterkey cost?",
    "What does the AI in Afterkey actually do?",
    "How is Afterkey different from a general CRM?",
  ].includes(f.q),
);

export default function HomePage() {
  const pageGraph = graph([
    webPageSchema({
      name: "Warranty Callback Software for Home Builders | Afterkey",
      description: brand.definition,
      path: "/",
    }),
    faqPageSchema(homeFaqs),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Hero — dark. Ink ground, the dusk photograph under a dark gradient
          so the lit windows glow, paper headline, brass CTA, and the builder
          dashboard breaking the bottom edge so the product is visible before
          anyone scrolls. */}
      <section className="relative z-10 flow-root bg-ink text-paper">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/hero-colonial-dusk.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo object-cover object-[70%_center]"
          />
          {/* Left-to-right: solid Ink behind the type, house visible right. */}
          <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/75 to-ink/35 sm:via-ink/60 sm:to-ink/25" />
          {/* Bottom fade to solid Ink so the mockup sits on a clean ground. */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink to-ink/0" />
        </div>

        <Container size="7xl" className="pt-20 sm:pt-28 lg:pt-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brass">
              For residential home builders
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.5rem]">
              You’ve built hundreds of homes. They should still be paying you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Afterkey runs under your brand — maintenance reminders, service
              requests, your subs on the work — so every home keeps earning
              long after closing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Button
                href="#how-it-works"
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                See a request handled
              </Button>
            </div>
            {/* The full price, both numbers, right under the CTA — "base"
                alone reads as $149 all-in. Always paired with its framing. */}
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <li className="tabular-nums">
                <span className="font-semibold text-paper">
                  ${pricing.base}/month
                </span>{" "}
                + ${pricing.perHome} per active home
              </li>
              <li className="border-l border-paper/25 pl-5">No contracts</li>
              <li className="border-l border-paper/25 pl-5">
                {guarantee.headline}
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-400">
              The per-home line is small enough to build into each
              home&rsquo;s cost at closing.
            </p>
          </div>

          {/* The product, breaking the fold. Desktop gets the dashboard;
              phones get the phone, which looks right on a phone. */}
          <div className="relative z-10 mt-14 -mb-16 sm:mt-16 sm:-mb-24 lg:-mb-28">
            <div className="flex justify-center sm:hidden">
              <PhoneMockup />
            </div>
            <div className="mx-auto hidden max-w-5xl sm:block">
              <BuilderDashboard />
            </div>
          </div>
        </Container>
      </section>

      {/* What it is — the definition, with room at the top for the mockup
          overlapping in from the hero. */}
      <section className="bg-paper pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pt-40">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-14">
            <div>
              <SectionLabel>What it is</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                One record of every home you’ve handed over
              </h2>
              {/* The definition, written as two self-contained factual
                  sentences an answer engine can quote without context. */}
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                <strong className="font-semibold text-ink">
                  {brand.definition}
                </strong>{" "}
                {brand.purpose}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                <strong className="font-semibold text-ink">
                  And it’s white-labeled.
                </strong>{" "}
                Your buyers see your business on the portal they use, not
                ours.
              </p>
            </div>
            <div className="hidden justify-center sm:flex">
              <PhoneMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* The problem, in the buyer's words */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-center lg:gap-16">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/section-punch-list-tape.webp"
                alt="Blue painter’s tape marking punch list spots on freshly painted white door casing"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="photo object-cover"
              />
            </div>
            <div>
              <SectionLabel>After closing</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What happens after closing when there’s no system
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Warranty obligations, sub dispatch, and homeowner questions
                run for years after the handoff. Usually on nobody’s system at
                all.
              </p>
              <div className="mt-8 space-y-6">
                {problemBeats.map((beat) => (
                  <div key={beat.title}>
                    <h3 className="text-lg font-semibold text-ink">
                      {beat.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-slate-700">
                      {beat.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works — the real request flow. Numbering is fine here
          because it IS a sequence. */}
      <section
        id="how-it-works"
        className="scroll-mt-24 bg-paper py-20 sm:py-28"
      >
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What happens when a homeowner reports a problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              A request goes from the homeowner’s phone to your sub’s list to
              the home’s permanent record without anyone calling you for a
              status.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <RequestFlow className="mx-auto w-full max-w-md" />
            <div>
              <ol className="space-y-7">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-ink text-sm font-semibold text-paper">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* The sub showing up: a wide, quiet band under the mechanism. */}
          <div className="relative mt-16 aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
            <Image
              src="/images/section-truck-driveway.webp"
              alt="A black pickup with a ladder rack turning into the driveway of a new white board-and-batten home at golden hour"
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="photo object-cover object-[center_38%]"
            />
          </div>
        </Container>
      </section>

      {/* Objections — one section per objection, headed by the objection
          itself. Prose and a photograph, photo side alternating. */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="space-y-20 sm:space-y-28">
            {objections.map((o, i) => (
              <div
                key={o.heading}
                className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden lg:col-span-6 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={o.image.src}
                    alt={o.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="photo object-cover"
                  />
                </div>
                <div
                  className={`lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
                  }`}
                >
                  <h2 className="text-3xl font-semibold tracking-tight text-ink">
                    {o.heading}
                  </h2>
                  {o.body.map((para) => (
                    <p
                      key={para}
                      className="mt-4 text-base leading-relaxed text-slate-700"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* White label — the strongest reason a builder buys */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-3xl">
            <SectionLabel>White label</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {brand.whiteLabelHeadline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              {brand.whiteLabel}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <WhiteLabelSwap />
            <p className="mt-4 text-sm text-slate-600">
              Two builders, one platform, and neither buyer has heard of us.
            </p>
          </div>

          {/* The surfaces that carry the builder's brand — titles only; the
              mockup above does the describing. */}
          <ul className="mx-auto mt-10 grid max-w-3xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {whiteLabelPoints.map((point) => (
              <li key={point.title} className="flex gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-tape"
                  aria-hidden="true"
                />
                <span className="text-sm text-slate-700">{point.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* AI Home Binder — the flagship */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionLabel>{aiBinder.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {aiBinder.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                {aiBinder.summary}
              </p>
              {/* The four selling points, titles only — the full versions
                  live on /features; the mockup makes the argument here. */}
              <ul className="mt-6 space-y-2.5">
                {aiBinder.points.map((point) => (
                  <li key={point.title} className="flex gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-tape"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-700">
                      {point.title}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link
                  href="/use-cases/home-maintenance-reminders"
                  className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  See how the maintenance schedule is built
                </Link>
              </p>
            </div>
            <BinderMockup />
          </div>

          {/* The honesty claim, stated plainly enough to be quoted */}
          <Card className="mx-auto mt-12 max-w-3xl p-6 sm:p-8">
            <div className="flex gap-4">
              <Quote
                className="h-6 w-6 shrink-0 text-brass"
                aria-hidden="true"
              />
              <p className="text-base font-medium leading-relaxed text-ink">
                Every AI suggestion in Afterkey carries a numbered footnote:
                the manufacturer’s published maintenance, the document you
                uploaded, or an honest “typical schedule — verify against the
                manual” label. The AI never invents an interval, and you
                review and confirm every line before a homeowner sees it.
              </p>
            </div>
          </Card>
        </Container>
      </section>

      {/* Proof — only what's real: who built it, and what's in writing */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Who built it</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Built by a builder. Priced in writing.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                <strong className="font-semibold text-ink">
                  {brand.founder}
                </strong>{" "}
                It was shaped by someone who has handed over keys and then
                taken the call three weeks later, which is why the product
                starts with the 9pm text and not with a dashboard.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                We don’t have customer logos to show you yet, and we’re not
                going to invent any. What we can put in writing is the price,
                the meters, and the guarantee.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-ink">
                  Seven things we put in writing
                </h3>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {commitments.map((c) => (
                    <li key={c.title} className="flex gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-tape"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{c.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  <Link
                    href="/pricing#commitments"
                    className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                  >
                    Read all seven in plain language
                  </Link>
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/*
        TESTIMONIAL / CUSTOMER LOGO SECTION — intentionally not rendered.
        Afterkey has no customers to quote yet, and inventing social proof is
        both dishonest and a liability. When real quotes and logos exist, add
        the section back here (between proof and pricing) rather than
        shipping placeholder names that read as real customers.
      */}

      {/* Pricing preview */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One plan. Published price. No sales call.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {pricingLine}
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {perHomeFraming}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Optional add-ons: AI at ${pricing.ai.price}/month per active
              home, SMS at ${pricing.sms.price}/month. Every metered feature
              has a live meter and a ceiling you set.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink sm:ml-4"
              >
                See the full breakdown
              </Link>
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
                Questions builders ask first
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                <Link
                  href="/faq"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  Read all {coreFaqs.length} questions
                </Link>{" "}
                or{" "}
                <Link
                  href="/compare"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  see how Afterkey compares
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={homeFaqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Run your next closing on Afterkey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Set up your first home, add your subs, and log a real request
              today. Self-serve setup, no sales call required.{" "}
              {guarantee.short}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                Ask a question
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
