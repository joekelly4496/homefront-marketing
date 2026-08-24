import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { brand, pricing, guarantee } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of ${brand.name}, the post-closing platform for residential home builders.`,
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: `By accessing or using ${brand.name}'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    heading: "Description of service",
    body: `${brand.name} provides a post-closing software platform for residential home builders. The service includes builder, homeowner, and subcontractor portals; warranty and service request management with SLA tracking and automated reminders; subcontractor dispatch, ratings, and cost intelligence; subcontractor compliance document tracking; AI-assisted home maintenance schedules; homeowner membership and service plan billing; photo documentation; and related features as described on our website.`,
  },
  {
    heading: "AI-generated content",
    body: `${brand.name} uses automated systems to propose home maintenance schedules from documents you provide and from publicly available manufacturer information. These proposals are suggestions that cite their sources and require your review and confirmation before they are published to a homeowner. You remain responsible for the accuracy of any maintenance guidance you approve and distribute. ${brand.name} does not warrant that automated suggestions are complete or suitable for a particular home, and they do not replace the manufacturer's documentation.`,
  },
  {
    heading: "Subcontractor compliance features",
    body: `Compliance tracking, expiration reminders, and dispatch warnings are administrative tools to help you manage your own requirements. They do not verify the authenticity or adequacy of any insurance policy, license, or other document, and they do not constitute legal, insurance, or risk-management advice. You remain solely responsible for determining which documents to require and whether a subcontractor is adequately covered, including when you choose to override a compliance warning.`,
  },
  {
    heading: "Account registration",
    body: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.",
  },
  {
    heading: "Billing and payments",
    body: `Builder subscription fees are billed monthly and consist of a $${pricing.base} platform base plus $${pricing.perHome} per active home, together with any optional add-ons you enable. Metered features are billed against the allowances described on our pricing page, subject to any spending ceiling you set. Where applicable, homeowner subscription and service billing is processed through our payment processor, and a ${pricing.platformFeePercent}% platform fee applies to homeowner payments processed through ${brand.name}, with card processing passed through at cost. Except as provided under the money-back guarantee below, fees are non-refundable except as required by law.`,
  },
  {
    heading: "Money-back guarantee",
    body: `New ${brand.name} accounts are covered by a ${guarantee.days}-day money-back guarantee beginning on the date of your first paid charge. ${guarantee.body} Those usage costs are amounts already remitted to third parties on your behalf — such as SMS segments already sent and card processing fees already incurred — and cannot be recovered once spent. To request a refund under this guarantee, contact ${brand.email} within ${guarantee.days} days of your first charge.`,
  },
  {
    heading: "Price changes",
    body: "Any change to published pricing will be communicated with at least 60 days’ notice and will take effect at the start of your next billing cycle following that notice period. Price changes are never applied mid-term and are never applied retroactively.",
  },
  {
    heading: "Cancellation",
    body: "You may cancel your subscription at any time. Upon cancellation, your account remains active until the end of your current billing period. There are no contracts and no cancellation fees.",
  },
  {
    heading: "Contact",
    body: `For questions about these terms, please contact us at ${brand.email}.`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="August 2026"
      intro={`The terms that govern your use of ${brand.name}.`}
      sections={sections}
      disclaimer="This is a placeholder Terms of Service. Please consult a legal professional to create comprehensive terms appropriate for your business."
    />
  );
}
