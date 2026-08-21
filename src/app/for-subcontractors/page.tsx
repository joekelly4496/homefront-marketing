import { ArrowRight, Smartphone, Camera, CheckCircle2, Bell, ListChecks, FileCheck2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { FaqList } from '@/components/ui/FaqList';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import {
  graph,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from '@/lib/schema';
import { brand, loginUrls, type Faq } from '@/lib/content';

const title = 'For Subcontractors — Free Builder Job Portal';
const description =
  'See the jobs builders assign you, update status and upload photos from the jobsite, and keep insurance and license documents current. Free for subcontractors.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/for-subcontractors',
});

const benefits = [
  {
    icon: ListChecks,
    title: 'Your jobs, in one list',
    description:
      'Every job a builder assigns you shows up in one place — address, issue, and what’s expected — with the home’s history attached so you arrive knowing the job. No more digging through texts.',
  },
  {
    icon: Smartphone,
    title: 'Update from the field',
    description:
      'Mark yourself on the way or the job complete right from your phone. The builder and the homeowner both see it, so nobody calls you for a status check.',
  },
  {
    icon: Camera,
    title: 'Photos that protect you',
    description:
      'Upload before and after photos on every job. When a question comes up six months later, the proof that you did the work right is on the record.',
  },
  {
    icon: FileCheck2,
    title: 'Documents in one place',
    description:
      'Upload your general liability, workers’ comp, auto, trade license, and W-9 once. Afterkey tracks the expiration dates and reminds you before anything lapses — so a stale certificate never costs you a dispatch.',
  },
  {
    icon: Bell,
    title: 'Never miss an assignment',
    description:
      'Get notified the moment a builder assigns you work, so you can schedule it before it stacks up.',
  },
];

const subIncludes = [
  'A clear job list from every builder you work with',
  'One-tap status updates from the jobsite',
  'Before and after photo uploads on every job',
  'Compliance document uploads with expiration reminders',
  'Instant notification the moment you’re assigned work',
];

const subFaqs: Faq[] = [
  {
    q: 'Do subcontractors pay to use Afterkey?',
    a: 'No. Afterkey is free for subcontractors. The builder pays for the platform, and their subscription includes unlimited subcontractors, so there is never a charge to you and never a reason for a builder to limit how many trades they add.',
  },
  {
    q: 'Do I need to install an app?',
    a: 'No. The Afterkey subcontractor portal runs in a web browser on any phone. You sign in and see your assigned jobs without installing anything.',
  },
  {
    q: 'What documents will a builder ask me to upload?',
    a: 'Each builder defines their own requirements, and they can vary by trade. The most common are a general liability certificate, workers’ compensation coverage, commercial auto insurance, a trade license, and a W-9. You upload them once in your portal, the builder approves them with an expiration date, and Afterkey reminds you before any of them lapse.',
  },
  {
    q: 'What happens if my insurance expires?',
    a: 'Afterkey reminds you ahead of the expiration date so you can upload a renewed certificate. If coverage does lapse, the builder is warned before assigning you new work. They can still override that warning in an emergency, but keeping documents current is the reliable way to keep getting dispatched.',
  },
];

export default function ForSubcontractorsPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: '/for-subcontractors' }),
    breadcrumbSchema([
      { name: 'For Subcontractors', path: '/for-subcontractors' },
    ]),
    faqPageSchema(subFaqs),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <Pill color="violet">For subcontractors</Pill>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Get the job. Do the work. Get the next one.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-xl text-lg text-slate-600">
                  When a builder runs on {brand.name}, your assignments land in
                  one place with everything you need to show up ready. Update
                  status, upload photos, keep your documents current — free, in
                  a browser, on the phone you already have.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={loginUrls.sub} external size="lg">
                    Subcontractor sign in
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/features" size="lg" variant="secondary">
                    See what builders get
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-sm text-slate-500">
                  Free for subcontractors · No app to install
                </p>
              </Reveal>
            </div>

            <Reveal delay={140} className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why subs like it</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Built for the jobsite, not the office
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 70}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={b.icon} accent="violet" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {b.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Always free */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal>
            <Card className="overflow-hidden p-0">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <Pill color="violet">Always free</Pill>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                    Free for subcontractors. No catch.
                  </h2>
                  <p className="mt-3 text-base text-slate-600">
                    There is no charge to use {brand.name} as a subcontractor,
                    and there never will be. The builder’s plan includes
                    unlimited subs, so nobody is counting seats.
                  </p>
                  <Button href={loginUrls.sub} external className="mt-6">
                    Get started free
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
                <ul className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  {subIncludes.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-violet-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Subcontractor questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <FaqList faqs={subFaqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Your builder isn’t on {brand.name} yet?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Send them the link. When they’re set up, your jobs, photos, and
              documents all live in one place — and the work you completed is
              documented, which is usually the part that matters when an invoice
              gets questioned.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/features" size="lg">
                Show my builder {brand.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href={loginUrls.sub} external size="lg" variant="secondary">
                Subcontractor sign in
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
