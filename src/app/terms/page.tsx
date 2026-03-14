import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Homefront',
  description: 'Homefront terms of service.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-gray-600 text-lg">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using Homefront&apos;s services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 leading-relaxed">
            Homefront provides a warranty management and homeowner engagement platform for home
            builders. Our services include homeowner portals, warranty ticket management,
            maintenance reminders, subcontractor coordination, and related features as described on
            our website.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Account Registration</h2>
          <p className="text-gray-600 leading-relaxed">
            You must provide accurate and complete information when creating an account. You are
            responsible for maintaining the security of your account credentials and for all
            activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Billing and Payments</h2>
          <p className="text-gray-600 leading-relaxed">
            Subscription fees are billed monthly or annually as selected during registration. All
            fees are non-refundable except as required by law. We reserve the right to change
            pricing with 30 days notice.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Cancellation</h2>
          <p className="text-gray-600 leading-relaxed">
            You may cancel your subscription at any time. Upon cancellation, your account will
            remain active until the end of your current billing period. No contracts, no
            cancellation fees.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these terms, please contact us at joekelly4496@gmail.com.
          </p>

          <p className="text-gray-400 text-sm mt-12">
            This is a placeholder Terms of Service. Please consult with a legal professional to
            create comprehensive terms appropriate for your business.
          </p>
        </div>
      </section>
    </>
  );
}
