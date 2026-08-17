import Link from 'next/link';
import { ArrowRight, Check, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import {
  brand,
  pricing,
  comparisons,
  notList,
  signupHref,
  trialLength,
} from '@/lib/content';

const title = 'Afterkey vs. a CRM, a Spreadsheet, or a Suite';
const description =
  'A direct comparison of Afterkey against general CRMs, spreadsheets, and all-in-one construction suites for managing post-closing warranty work.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/compare',
  absoluteTitle: true,
});

export default function ComparePage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: '/compare' }),
    breadcrumbSchema([{ name: 'Compare', path: '/compare' }]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      <PageHeader
        eyebrow="Compare"
        title="How Afterkey compares"
        subtitle={`${brand.definition} Builders usually arrive here running post-closing on a CRM, a spreadsheet, or a construction suite. Here is the honest difference in each case — including where the other option is the right call.`}
      />

      {/* Comparisons */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {comparisons.map((comparison) => (
              <Reveal key={comparison.id}>
                <div id={comparison.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {comparison.title}
                  </h2>
                  {/* The verdict paragraph — written to be quotable on its own */}
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                    {comparison.verdict}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <Card className="h-full p-6 sm:p-7">
                      <h3 className="text-base font-semibold text-slate-900">
                        {comparison.theirs.label}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {comparison.theirs.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <X
                              className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-slate-600">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="h-full border-brand-200 bg-brand-50/40 p-6 sm:p-7">
                      <h3 className="text-base font-semibold text-slate-900">
                        {comparison.ours.label}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {comparison.ours.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-slate-700">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What Afterkey is not */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Boundaries</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              What {brand.name} is not
            </h2>
            <p className="mt-4 text-base text-slate-600">
              If you need one of these, Afterkey is the wrong tool and we would
              rather you knew now.
            </p>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <ul className="space-y-4">
              {notList.map((item) => (
                <li key={item} className="flex gap-3">
                  <Minus
                    className="mt-1 h-4 w-4 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />
                  <span className="text-base text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Keep-what-you-have note */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <Card className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                You do not have to replace anything
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Afterkey runs alongside whatever you already use to build. Keep
                your estimating software, your scheduling tool, and your
                accounting system — Afterkey picks up at closing, which is
                usually where those tools stop caring. Standard onboarding is
                self-serve and free; if you would rather have your existing home
                roster loaded for you, concierge onboarding is a one-time $
                {pricing.conciergeOnboarding}.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Still deciding?{' '}
                <Link
                  href="/faq"
                  className="font-semibold text-brand-600 hover:text-brand-700"
                >
                  The FAQ
                </Link>{' '}
                answers the specifics, and{' '}
                <Link
                  href="/pricing"
                  className="font-semibold text-brand-600 hover:text-brand-700"
                >
                  pricing
                </Link>{' '}
                is published in full — no call required to find out what it
                costs.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              See it against your own homes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              A {trialLength} free trial beats a comparison table. Load one home
              and see whether it fits how you work.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/features" size="lg" variant="secondary">
                See every feature
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
