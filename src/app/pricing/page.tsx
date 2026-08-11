import type { Metadata } from 'next';
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  MessageSquare,
  BookOpenCheck,
  Lock,
  Users,
  FileX2,
  Gauge,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { signupHref } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple pricing. Published. Locked. $149/month plus $10 per active home — every feature included, rate locked for two years. Start free, no card required.',
};

const priceLines = [
  {
    price: '$149',
    unit: '/month',
    title: 'Platform base',
    description:
      'Unlimited team members and subs — no per-user fees, ever.',
  },
  {
    price: '+ $10',
    unit: '/month per active home',
    title: 'Per active home',
    description:
      'Only homes under warranty or an active service agreement. Dormant homes are never billed, and homes go dormant automatically.',
  },
  {
    price: '+ $29',
    unit: '/month (optional)',
    title: 'SMS add-on',
    description:
      'Your own branded business number with two-way texting, 1,000 messages included.',
  },
];

const exampleBills = [
  { homes: '15 active homes', bill: '$328', memberships: '~$405/mo' },
  { homes: '30 active homes', bill: '$478', memberships: '~$810/mo' },
  { homes: '50 active homes', bill: '$678', memberships: '~$1,350/mo' },
  { homes: '100 active homes', bill: '$1,178', memberships: '~$2,700/mo' },
];

const included = [
  'Builder dashboard with SLA tracking',
  'Homeowner portal, white-labeled with your branding',
  'Subcontractor dispatch by text — no app for subs to install',
  'Digital home binders with AI document import',
  'Maintenance schedules and reminders',
  'Maintenance membership plans with automated billing',
  'Service catalog with homeowner recommendations',
  'Punch lists',
  'Month-view scheduling calendar',
  'Per-home profit reporting',
  'Unlimited service requests',
  'Unlimited team seats',
  'Unlimited subs',
  'Email notifications, free and unmetered',
];

const promises = [
  {
    icon: BookOpenCheck,
    text: 'Prices are published. No quote calls, no volume brackets, no sales gate.',
  },
  {
    icon: Lock,
    text: 'No repricing surprises. Your rate is locked for your first 24 months. After that, any change comes with 60 days’ notice, applies at your next billing cycle, and is never mid-term or retroactive.',
  },
  {
    icon: Users,
    text: 'No per-user fees. Your whole team and every sub, included.',
  },
  {
    icon: FileX2,
    text: 'No contracts, no termination fees. Month-to-month; annual prepay is a discount, not a handcuff.',
  },
  {
    icon: Gauge,
    text: 'No surprise bills. SMS usage is visible live, capped by a ceiling you control.',
  },
  {
    icon: Mail,
    text: 'Email is free forever. We meter SMS because it costs us per message; we don’t meter what doesn’t.',
  },
];

const faqs = [
  {
    q: 'What counts as an "active home"?',
    a: 'A home is active while it’s under your builder warranty or has an active service agreement or membership. When neither applies, it goes dormant automatically and you pay nothing for it. If the homeowner later starts a membership — even after a resale — it reactivates automatically.',
  },
  {
    q: 'Do older homes cost more?',
    a: 'No. $10/month flat, whether the home is six months old or six years old.',
  },
  {
    q: 'Are there per-user fees?',
    a: 'Never. Add your whole team and every sub at no extra cost.',
  },
  {
    q: 'What’s the 2.5% platform fee?',
    a: 'It applies only to homeowner payments you process through the platform (like membership billing). Standard card processing fees are passed through at cost. If you don’t process payments through Homefront, you never see it.',
  },
  {
    q: 'Is there a contract?',
    a: 'No. Month-to-month, cancel anytime, no termination fees. Annual prepay just saves you 10%.',
  },
  {
    q: 'What’s concierge onboarding?',
    a: 'For a one-time $499, we build the digital binder for your entire home roster from your documents. Standard onboarding — doing it yourself with our AI import tools — is free.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Simple pricing. Published. Locked.
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              $149/month plus $10 per active home. Every feature included. Your
              rate is locked for two years — and any change after that comes with
              60 days’ notice, never a surprise.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free — no card required
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <a
                href="#included"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                See everything included ↓
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 2 — The price */}
      <section className="py-16 sm:py-20">
        <Container size="6xl">
          <Reveal>
            <Card className="mx-auto max-w-3xl p-6 sm:p-10">
              <ul className="divide-y divide-slate-200">
                {priceLines.map((line) => (
                  <li
                    key={line.title}
                    className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <p className="w-56 shrink-0">
                      <span className="text-3xl font-semibold tracking-tight text-slate-900">
                        {line.price}
                      </span>
                      <span className="text-sm text-slate-500">
                        {line.unit}
                      </span>
                    </p>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {line.title}
                      </p>
                      <p className="mt-1 text-base text-slate-600">
                        {line.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-5 max-w-3xl">
            <p className="text-center text-sm text-slate-500">
              Annual prepay: 10% off the base (and SMS), and active homes bill at
              $9/month while annual is active. Optional concierge onboarding — we
              build the digital binder for your entire home roster from your
              documents — $499 one-time. Standard onboarding is free. A 2.5%
              platform fee applies to homeowner payments processed through the
              platform (card processing at cost).
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Example bills */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              What builders actually pay — and what they earn back.
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th scope="col" className="px-5 py-3.5">
                      Your homes
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      Monthly bill
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      What memberships typically generate*
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {exampleBills.map((row) => (
                    <tr key={row.homes}>
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {row.homes}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{row.bill}</td>
                      <td className="px-5 py-4 font-semibold text-emerald-600">
                        {row.memberships}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              *At a 60% membership attach rate and $45/month membership pricing.
              Includes the SMS add-on. Builders offering premium service catalogs
              typically exceed these figures.
            </p>
            <p className="mt-6 text-center text-base font-bold text-slate-900">
              The average builder using memberships generates 2x their Homefront
              bill in maintenance revenue they had no way to collect before.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 5 — What's included */}
      <section id="included" className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              One plan. Everything in it.
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {included.map((item) => (
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

      {/* 6 — SMS detail */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <Card className="flex flex-col gap-5 p-8 sm:flex-row sm:items-start sm:p-10">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MessageSquare className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Texting that pays for itself
                </h2>
                <p className="mt-3 text-base text-slate-600">
                  Add a branded business number with two-way texting for
                  $29/month, including 1,000 messages. Heavy month? Additional
                  messages are $25 per 1,000, tracked on a live meter with a
                  spending cap you control. You’ll get alerts at 80% and 100% of
                  your included messages — no surprise bills, ever. Emergency
                  alerts and job dispatch texts always send.
                </p>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* 7 — Pricing promises */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Our pricing promises
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.text} delay={(i % 3) * 80}>
                <Card className="h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-sm text-slate-600">{p.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8 — FAQ */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
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

      {/* 9 — Footer CTA */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-balance text-lg text-slate-600">
              No contracts. No per-user fees. No termination fees. No sales calls
              required — but we’re happy to give you a tour.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Book a tour
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
