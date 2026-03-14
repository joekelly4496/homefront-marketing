import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Homefront',
  description: 'Homefront privacy policy.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-gray-600 text-lg">Last updated: January 2025</p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information you provide directly to us, including your name, email address,
            phone number, company information, and any other information you choose to provide when
            using our services or contacting us.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to provide, maintain, and improve our services,
            process transactions, send you technical notices and support messages, and respond to
            your comments, questions, and customer service requests.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            We may share information with service providers who assist us in operating our platform,
            conducting our business, or servicing you.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate security measures to protect your personal information. However,
            no method of transmission over the Internet or method of electronic storage is 100%
            secure.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            We may use cookies and similar tracking technologies to track activity on our website
            and hold certain information to improve and analyze our service.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about this privacy policy, please contact us at joekelly4496@gmail.com.
          </p>

          <p className="text-gray-400 text-sm mt-12">
            This is a placeholder Privacy Policy. Please consult with a legal professional to
            create a comprehensive policy appropriate for your business and jurisdiction.
          </p>
        </div>
      </section>
    </>
  );
}
