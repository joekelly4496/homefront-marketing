import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of Homefront.',
};

const sections: LegalSection[] = [
  {
    heading: 'Acceptance of terms',
    body: 'By accessing or using Homefront’s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
  },
  {
    heading: 'Description of service',
    body: 'Homefront provides a post-closing service and warranty management platform for residential home builders. Our services include builder, homeowner, and subcontractor portals, service request management, SLA tracking, maintenance reminders, photo documentation, cost intelligence, and related features as described on our website.',
  },
  {
    heading: 'Account registration',
    body: 'You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.',
  },
  {
    heading: 'Billing and payments',
    body: 'Builder subscription fees are billed monthly as selected during registration. Where applicable, homeowner subscription billing is processed via Stripe Connect. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days’ notice.',
  },
  {
    heading: 'Cancellation',
    body: 'You may cancel your subscription at any time. Upon cancellation, your account will remain active until the end of your current billing period. No contracts, no cancellation fees.',
  },
  {
    heading: 'Contact',
    body: 'For questions about these terms, please contact us at joekelly4496@gmail.com.',
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="January 2025"
      intro="The terms that govern your use of Homefront."
      sections={sections}
      disclaimer="This is a placeholder Terms of Service. Please consult a legal professional to create comprehensive terms appropriate for your business."
    />
  );
}
