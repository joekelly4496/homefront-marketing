import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { BuilderDashboard } from "@/components/mockups/BuilderDashboard";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { graph, faqPageSchema, webPageSchema } from "@/lib/schema";
import {
  brand,
  portals,
  builderValue,
  homeownerValue,
  steps,
  featureGroups,
  commitments,
  coreFaqs,
  pricing,
  pricingLine,
  signupHref,
  trialLength,
  trial,
  useCases,
} from "@/lib/content";

const withoutAfterkey = [
  "Warranty requests arrive by text and voicemail, and the only queue is your memory.",
  "A sub says they called, the homeowner says nobody came, and there is no record either way.",
  "Insurance certificates expire in an inbox until a claim makes you go looking.",
  "Maintenance guidance is a paper binder the homeowner loses inside a year.",
  "Post-closing is a cost center you absorb, and the callbacks come out of your margin.",
];

const withAfterkey = [
  "Every request lands in one queue with a response clock and an assigned trade.",
  "Each dispatch, arrival, and completion is timestamped on the home’s permanent record.",
  "Compliance documents are tracked with expirations, and lapsed coverage warns you before dispatch.",
  "Each home gets an AI-built maintenance schedule with a cited source on every line.",
  "Memberships turn homes you already built into recurring revenue.",
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
      name: "Afterkey — Post-Closing Software for Home Builders",
      description: brand.definition,
      path: "/",
    }),
    faqPageSchema(homeFaqs),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <Reveal>
                <Pill color="brand">For residential home builders</Pill>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                  Post-closing that earns referrals instead of eating margin.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                {/*
                  The definition paragraph, placed high on the page and written
                  as two self-contained factual sentences an answer engine can
                  quote without surrounding context.
                */}
                <p className="mt-5 max-w-xl text-lg text-slate-600">
                  <strong className="font-semibold text-slate-900">
                    {brand.definition}
                  </strong>{" "}
                  {brand.purpose}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={signupHref} size="lg">
                    Start your {trialLength} free trial
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/pricing" size="lg" variant="secondary">
                    See pricing
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-sm text-slate-500">
                  ${pricing.base}/month + ${pricing.perHome} per active home ·
                  Unlimited users and subs · No contracts
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-2 text-sm text-slate-500">{trial.terms}</p>
              </Reveal>
            </div>

            <Reveal delay={160} className="relative">
              <BuilderDashboard />
              <div className="absolute -bottom-8 -right-2 hidden sm:block lg:-right-6">
                <PhoneMockup />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Problem and solution */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              The work doesn’t stop at closing. Most builders just stop tracking
              it.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Warranty obligations, subcontractor coordination, and homeowner
              questions run for years after handoff — usually on nobody’s system
              at all. Here is what changes when they run on one.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <IconBox icon={XCircle} accent="red" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Post-closing without a system
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {withoutAfterkey.map((item) => (
                    <li key={item} className="flex gap-3">
                      <XCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={80}>
              <Card className="h-full border-brand-200 bg-brand-50/40 p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <IconBox icon={CheckCircle2} accent="emerald" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Post-closing on {brand.name}
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {withAfterkey.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Three portals */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>How it’s built</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Three portals, one record of the home
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Afterkey gives the builder, the homeowner, and the subcontractor
              each their own view of the same home — so everyone works from the
              same facts and nobody has to be the switchboard.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {portals.map((portal, i) => (
              <Reveal key={portal.name} delay={i * 80}>
                <Card interactive className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <IconBox icon={portal.icon} accent={portal.accent} />
                    <Pill color={portal.accent}>{portal.audience}</Pill>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {portal.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {portal.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {portal.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Home Binder — the flagship */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionLabel>{aiBinder.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {aiBinder.title}
              </h2>
              <p className="mt-5 text-base text-slate-600">
                {aiBinder.summary}
              </p>
              <p className="mt-4 text-base text-slate-600">
                Most AI writes something plausible and hopes you don’t check.
                Afterkey shows you where every interval came from — and when it
                doesn’t have a manufacturer source, it says so instead of
                guessing.
              </p>
              <div className="mt-8">
                <Link
                  href="/use-cases/home-maintenance-reminders"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  See how the maintenance schedule is built
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {aiBinder.points.map((point, i) => (
                <Reveal key={point.title} delay={(i % 2) * 80}>
                  <Card className="h-full p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-slate-900">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600">
                      {point.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* The honesty claim, stated plainly enough to be quoted */}
          <Reveal delay={120} className="mt-12">
            <Card className="mx-auto max-w-3xl border-violet-200 bg-violet-50/50 p-6 sm:p-8">
              <div className="flex gap-4">
                <Quote
                  className="h-6 w-6 shrink-0 text-violet-500"
                  aria-hidden="true"
                />
                <p className="text-base font-medium leading-relaxed text-slate-800">
                  Every AI suggestion in Afterkey carries a numbered footnote:
                  the manufacturer’s published maintenance, the document you
                  uploaded, or an honest “typical schedule — verify against the
                  manual” label. The AI never invents an interval, and you
                  review and confirm every line before a homeowner sees it.
                </p>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Builder value */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>What you get</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Fewer callbacks. Subs who show up. Homeowners who refer you.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The easier and more professional the post-closing relationship,
              the stickier your brand. That is the entire thesis.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {builderValue.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={item.icon} accent={item.accent} />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              See every feature
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Homeowner value */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>What your buyers get</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              The handoff that keeps your name on the house
            </h2>
            <p className="mt-4 text-base text-slate-600">
              A homeowner who can see what’s happening doesn’t call to ask. One
              who’s handed a real maintenance schedule tells their neighbors who
              built it.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeownerValue.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={item.icon} accent={item.accent} />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              What happens when a homeowner reports a problem
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <div className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <IconBox icon={step.icon} accent="slate" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Use case links — internal linking to the supporting pages */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Built for the work you already do</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Where builders put Afterkey to work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase, i) => (
              <Reveal key={useCase.slug} delay={(i % 2) * 70}>
                <Link
                  href={`/use-cases/${useCase.slug}`}
                  className="group block h-full"
                >
                  <Card interactive className="h-full p-6 sm:p-7">
                    <IconBox icon={useCase.icon} accent={useCase.accent} />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {useCase.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600">
                      {useCase.lede}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                      Read more
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Commitments band */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-700 px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Six things we put in writing
                </h2>
                <p className="mt-3 text-base text-brand-100">
                  Published prices, honest meters, and no clause that only works
                  in our favor.
                </p>
              </div>
              <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {commitments.map((c) => (
                  <div key={c.title}>
                    <p className="text-base font-semibold text-white">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-sm text-brand-100">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/*
        TESTIMONIAL / CUSTOMER LOGO SECTION — intentionally not rendered.
        Afterkey has no customers to quote yet, and inventing social proof is
        both dishonest and a liability. When real quotes and logos exist, add
        the section back here (between the commitments band and pricing) rather
        than shipping placeholder names that read as real customers.
      */}

      {/* Pricing preview */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              One plan. Published price. No sales call.
            </h2>
            <p className="mt-4 text-base text-slate-600">{pricingLine}</p>
            <p className="mt-3 text-sm text-slate-500">
              Optional add-ons: AI at ${pricing.ai.price}/month per active home,
              SMS at ${pricing.sms.price}/month. Every metered feature has a
              live meter and a ceiling you set.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={signupHref} size="lg">
              Start your {trialLength} free trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              See the full breakdown
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Straight answers
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <FaqList faqs={homeFaqs} />
            <p className="mt-6 text-center text-sm text-slate-600">
              <Link
                href="/faq"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Read all {coreFaqs.length} questions
              </Link>{" "}
              or{" "}
              <Link
                href="/compare"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                see how Afterkey compares
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Run your next closing on Afterkey
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Set up your first home, add your subs, and log a real request
              today. {trialLength} free trial, self-serve setup, no sales call
              required.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                See pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
