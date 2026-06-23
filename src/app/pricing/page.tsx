import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Minus, HardHat, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { tiers, comparison } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple monthly plans for residential home builders — Intro $49, Starter $199, Growth $449, Pro $899. Subcontractors join free. Start a free trial.',
};

const faqs = [
  {
    q: 'Do subcontractors pay?',
    a: 'No. Subcontractors join free and get a mobile job list, status updates, and photo uploads. A Sub Pro add-on ($29/mo) unlocks premium features for subs who want more.',
  },
  {
    q: 'Are the entitlements fixed?',
    a: 'The figures shown — active homes, staff seats, advanced reporting — are illustrative. Final entitlements are configurable to fit how your business actually runs.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every builder plan starts with a free trial — no credit card required. Book a demo and we’ll get you set up.',
  },
  {
    q: 'Can homeowners be billed through Homefront?',
    a: 'Where applicable, homeowner subscription billing runs through Stripe Connect on Growth and Pro plans, so you can offer paid service or maintenance plans under your own brand.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              One subscription. Your whole service operation.
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              Pick a builder plan that fits your volume. Subcontractors always
              join free. Every plan starts with a free trial.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Tiers */}
      <section className="py-16 sm:py-20">
        <Container size="7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={(i % 4) * 60}>
                <Card
                  className={`relative flex h-full flex-col p-6 ${
                    tier.popular ? 'border-brand-300 ring-1 ring-brand-200' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Pill color="brand">Most popular</Pill>
                    </div>
                  )}
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {tier.name}
                  </h2>
                  <p className="mt-3">
                    <span className="text-4xl font-semibold tracking-tight text-slate-900">
                      ${tier.price}
                    </span>
                    <span className="text-sm text-slate-500">/mo</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{tier.blurb}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
                    {tier.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/demo"
                    variant={tier.popular ? 'primary' : 'secondary'}
                    className="mt-6 w-full"
                  >
                    Start free trial
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Sub Pro add-on */}
          <Reveal delay={120} className="mt-8">
            <Card className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <HardHat className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      Subcontractors join free
                    </h3>
                    <Pill color="violet">Sub Pro · $29/mo</Pill>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Every sub gets a mobile job list at no cost. Sub Pro adds
                    premium features for trade partners who want more visibility.
                  </p>
                </div>
              </div>
              <Button href="/for-subcontractors" variant="secondary">
                For subcontractors
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Compare every plan
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Higher-volume and advanced features unlock as you grow. Final
              entitlements are configurable.
            </p>
          </Reveal>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white py-4 pr-4 align-bottom">
                    <span className="text-sm font-semibold text-slate-900">
                      Features
                    </span>
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="px-4 py-4 align-bottom text-center"
                    >
                      <div className="flex flex-col items-center gap-1">
                        {tier.popular && <Pill color="brand">Popular</Pill>}
                        <span className="text-sm font-semibold text-slate-900">
                          {tier.name}
                        </span>
                        <span className="text-xs text-slate-500">
                          ${tier.price}/mo
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((group) => (
                  <FeatureGroupRows key={group.group} group={group} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/demo" size="lg">
              Start free trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-sm text-slate-500">
              Questions about a plan?{' '}
              <a
                href="/contact"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Talk to us
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Pricing questions
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-base font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <Plus
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function FeatureGroupRows({
  group,
}: {
  group: (typeof comparison)[number];
}) {
  return (
    <>
      <tr>
        <td
          colSpan={5}
          className="border-t border-slate-200 bg-slate-50 px-0 py-2.5"
        >
          <span className="sticky left-0 pl-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {group.group}
          </span>
        </td>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.label} className="border-t border-slate-100">
          <td className="sticky left-0 z-10 bg-white py-3 pr-4 text-sm text-slate-700">
            {row.label}
          </td>
          {row.values.map((value, i) => (
            <td key={i} className="px-4 py-3 text-center">
              {typeof value === 'boolean' ? (
                value ? (
                  <CheckCircle2
                    className="mx-auto h-5 w-5 text-brand-600"
                    aria-label="Included"
                  />
                ) : (
                  <Minus
                    className="mx-auto h-5 w-5 text-slate-300"
                    aria-label="Not included"
                  />
                )
              ) : (
                <span className="text-sm font-medium text-slate-700">
                  {value}
                </span>
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
