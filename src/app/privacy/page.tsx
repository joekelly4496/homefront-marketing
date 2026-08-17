import { LegalPage, type LegalSection } from '@/components/ui/LegalPage';
import { pageMetadata } from '@/lib/seo';
import { brand } from '@/lib/content';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${brand.name} collects, uses, and protects builder, homeowner, and subcontractor information.`,
  path: '/privacy',
});

const sections: LegalSection[] = [
  {
    heading: 'Information we collect',
    body: 'We collect information you provide directly to us, including your name, email address, phone number, company information, and any other information you choose to provide when using our services or contacting us. When you use the platform, we also process service requests, photos, messages, home and appliance details, uploaded documents, and subcontractor compliance records on behalf of builders, homeowners, and subcontractors.',
  },
  {
    heading: 'How we use your information',
    body: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send technical notices, reminders, and support messages, and respond to your comments, questions, and support requests.',
  },
  {
    heading: 'Documents and AI processing',
    body: `Documents you upload to a home's binder — such as owner's manuals, spec sheets, and invoices — are processed to build that home's maintenance record and may be sent to third-party AI providers for that purpose. ${brand.name} also maintains a shared library of appliance maintenance schedules keyed to manufacturer make and model. That library contains equipment maintenance information only; it does not contain your customers' names, addresses, documents, or any other identifying details about a home or the people in it.`,
  },
  {
    heading: 'Access between parties',
    body: 'The platform separates access by role. Builders see the homes, requests, subcontractors, and records belonging to their own company. Homeowners see only their own home. Subcontractors see only the jobs assigned to them and the compliance documents they have uploaded. Subcontractor cost data, ratings, and competitive quoting are visible only to the builder.',
  },
  {
    heading: 'Information sharing',
    body: 'We do not sell, trade, or otherwise transfer your personal information to third parties. We share information with service providers who help us operate the platform, process payments, or support you, and with the builder, homeowner, or subcontractor parties to a given service request.',
  },
  {
    heading: 'Payments',
    body: 'Homeowner payments processed through the platform are handled by a third-party PCI-compliant payment processor. We do not store full payment card numbers.',
  },
  {
    heading: 'Data security',
    body: 'We implement appropriate security measures to protect your information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    heading: 'Cookies',
    body: 'We may use cookies and similar technologies to keep you signed in, remember preferences, and analyze how the service is used.',
  },
  {
    heading: 'Contact',
    body: `For questions about this privacy policy, please contact us at ${brand.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="August 2026"
      intro="Your privacy matters. This policy explains what we collect and how we use it."
      sections={sections}
      disclaimer="This is a placeholder Privacy Policy. Please consult a legal professional to create a comprehensive policy appropriate for your business and jurisdiction."
    />
  );
}
