import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Home, Layers, Plus, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import {
  pricingModel,
  pricingIncludes,
  addOns,
  signupHref,
  trialLength,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Start with a 30-day free trial. Simple, usage-based pricing for home builders — $89/month plus $7 per active home. No rigid tiers. Subcontractors join free.',
};

const modelIcons = [Layers, Home];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: `Yes. Every account starts with a ${trialLength} free trial, so you can set up a home and run a real punch list and warranty request before you pay a cent.`,
  },
  {
    q: 'How does pricing work?',
    a: 'After your trial, Homefront is usage-based: an $89/month base platform fee plus $7 per active home. Your cost scales with the homes you’re actively servicing, so you’re never paying for capacity you don’t use.',
  },
  {
    q: 'Do subcontractors pay?',
    a: 'No. Subcontractors join free and get a mobile job list, status updates, and photo uploads at no cost.',
  },
  {
    q: 'What counts as an active home?',
    a: 'You decide. For new-construction builders it’s typically homes under warranty or on a paying membership; for remodeling companies it’s homes on an active service agreement. Dormant or archived homes are never charged.',
  },
  {
    q: 'Can I charge homeowners for ongoing service?',
    a: 'Yes. You set a monthly homeowner membership price, collected through Stripe Connect. Most builders keep it free during the warranty period — billing starts automatically when the warranty ends, so homeowners never have to opt in early.',
  },
  {
    q: 'What about text messaging?',
    a: 'SMS is a $19/month add-on (up to 500 messages) and isn’t included in the free trial. All texting comes from one business number, and subs can confirm or decline jobs with a simple reply — no app to install. Everything else works over email.',
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
              Pricing that scales with your homes
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              Start with a {trialLength} free trial. Then $89 a month plus $7 per
              active home — no rigid tiers, no paying for capacity you don’t use.
              Subcontractors always join free.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Pricing model */}
      <section className="py-16 sm:py-20">
        <Container size="6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {pricingModel.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <Card className="h-full p-6 sm:p-8">
                  <IconBox icon={modelIcons[i]} accent="brand" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {point.title}
                  </p>
                  <p className="mt-2">
                    <span className="text-4xl font-semibold tracking-tight text-slate-900">
                      {point.price}
                    </span>
                    <span className="text-base text-slate-500">{point.unit}</span>
                  </p>
                  <p className="mt-3 text-base text-slate-600">
                    {point.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-6">
            <p className="text-center text-sm text-slate-500">
              For example, 40 active homes is{' '}
              <span className="font-semibold text-slate-700">$369/month</span> —
              the $89 base plus $280.
            </p>
          </Reveal>

          {/* Add-ons */}
          {addOns.map((addOn, i) => (
            <Reveal key={addOn.title} delay={140 + i * 80} className="mt-8">
              <Card className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-900">
                        {addOn.title}
                      </h3>
                      {addOn.comingSoon && (
                        <Pill color="amber">Coming soon</Pill>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      {addOn.description}
                    </p>
                  </div>
                </div>
                <p className="shrink-0">
                  <span className="text-2xl font-semibold tracking-tight text-slate-900">
                    {addOn.price}
                  </span>
                  <span className="text-sm text-slate-500">{addOn.unit}</span>
                </p>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={220} className="mt-8">
            <Card className="flex flex-col items-center gap-5 p-8 text-center sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                Start your free trial
              </h3>
              <p className="max-w-xl text-base text-slate-600">
                Create your account and run your first home free for{' '}
                {trialLength.replace('-day', ' days')}. No demo, no sales call.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={signupHref} size="lg">
                  Start free trial
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Questions? Contact us
                </Button>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* ROI line */}
      <section className="pb-4">
        <Container size="6xl">
          <Reveal>
            <div className="rounded-3xl bg-brand-700 px-6 py-10 text-center sm:px-12 sm:py-12">
              <p className="mx-auto max-w-3xl text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
                All-in-one platforms bury warranty in an $800-a-month tier full
                of tools you’ll never use. Homefront does the one job that
                actually drives your referrals — for a fraction of the price.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What's included */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Everything’s included
            </h2>
            <p className="mt-4 text-base text-slate-600">
              No feature gates and no surprise add-ons. Every builder gets the
              full platform — you only pay for the homes you’re servicing.
            </p>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {pricingIncludes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
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
