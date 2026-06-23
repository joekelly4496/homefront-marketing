import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Homefront collects, uses, and protects your information.',
};

const sections: LegalSection[] = [
  {
    heading: 'Information we collect',
    body: 'We collect information you provide directly to us, including your name, email address, phone number, company information, and any other information you choose to provide when using our services or contacting us. When you use the platform, we also process service requests, photos, and messages on behalf of builders, homeowners, and subcontractors.',
  },
  {
    heading: 'How we use your information',
    body: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments, questions, and customer service requests.',
  },
  {
    heading: 'Information sharing',
    body: 'We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with service providers who assist us in operating our platform, processing payments, or servicing you — and with the builder, homeowner, or subcontractor parties to a given service request.',
  },
  {
    heading: 'Data security',
    body: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    heading: 'Cookies',
    body: 'We may use cookies and similar tracking technologies to track activity on our website and hold certain information to improve and analyze our service.',
  },
  {
    heading: 'Contact',
    body: 'For questions about this privacy policy, please contact us at joekelly4496@gmail.com.',
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="January 2025"
      intro="Your privacy matters. This policy explains what we collect and how we use it."
      sections={sections}
      disclaimer="This is a placeholder Privacy Policy. Please consult a legal professional to create a comprehensive policy appropriate for your business and jurisdiction."
    />
  );
}
