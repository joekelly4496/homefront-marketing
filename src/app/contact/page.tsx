import { Mail, UserPlus, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema';
import { brand, signupHref, trialLength } from '@/lib/content';

const title = 'Contact';
const description =
  'Start a free trial, email the Afterkey team with a question about pricing or onboarding, or sign in to your builder, homeowner, or subcontractor portal.';

export const metadata = pageMetadata({
  title,
  description,
  path: '/contact',
});

const options = [
  {
    icon: UserPlus,
    title: 'Start a free trial',
    description: `Create your account and set up your first home in minutes. ${trialLength} trial, self-serve, no demo required.`,
    cta: { label: 'Start free trial', href: signupHref },
  },
  {
    icon: Mail,
    title: 'Email us',
    description:
      'Questions about pricing, onboarding, or whether Afterkey fits how you work. A person answers.',
    cta: { label: brand.email, href: `mailto:${brand.email}` },
  },
  {
    icon: BookOpen,
    title: 'Read the answers first',
    description:
      'Most questions are already answered in writing — what it is, what it costs, what the AI does, and how it compares.',
    cta: { label: 'Go to the FAQ', href: '/faq' },
  },
  {
    icon: HelpCircle,
    title: 'Already a customer?',
    description:
      'Sign in to your portal — builder, homeowner, or subcontractor.',
    cta: { label: 'Go to sign in', href: '/login' },
  },
];

export default function ContactPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: '/contact' }),
    breadcrumbSchema([{ name: 'Contact', path: '/contact' }]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />

      <PageHeader
        eyebrow="Contact"
        title="Talk to us — or skip us entirely"
        subtitle="Pricing is published and the trial is self-serve, so you never have to sit through a call to find out what Afterkey costs. But if you want to talk to somebody, we are glad to."
      />

      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {options.map((opt, i) => (
              <Reveal key={opt.title} delay={(i % 2) * 70}>
                <Card className="flex h-full flex-col p-6 sm:p-7">
                  <IconBox icon={opt.icon} accent="brand" />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">
                    {opt.title}
                  </h2>
                  <p className="mt-1.5 flex-1 text-sm text-slate-600">
                    {opt.description}
                  </p>
                  <a
                    href={opt.cta.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    {opt.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-12 text-center">
            <Button href={signupHref} size="lg">
              Start your {trialLength} free trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
