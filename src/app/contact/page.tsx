import type { Metadata } from 'next';
import { Mail, UserPlus, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { signupHref } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Homefront. Sign up, ask a question, or get help with your account.',
};

const options = [
  {
    icon: UserPlus,
    title: 'Start a free trial',
    description:
      'Create your account and set up your first home in minutes — no demo, no sales call.',
    cta: { label: 'Start free trial', href: signupHref },
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Questions about pricing, onboarding, or anything else.',
    cta: { label: 'joekelly4496@gmail.com', href: 'mailto:joekelly4496@gmail.com' },
  },
  {
    icon: HelpCircle,
    title: 'Already a customer?',
    description: 'Sign in to your portal — builder, homeowner, or subcontractor.',
    cta: { label: 'Go to sign in', href: '/login' },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Ready to get started or just have a question? We’re glad to help."
      />

      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {options.map((opt, i) => (
              <Reveal key={opt.title} delay={i * 70}>
                <Card className="flex h-full flex-col p-6">
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

          <Reveal delay={120} className="mt-12 text-center">
            <Button href={signupHref} size="lg">
              Start free trial
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
