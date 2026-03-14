'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const plans = [
  {
    name: 'Intro',
    monthlyPrice: 49,
    features: [
      '1 active home',
      '1 staff user',
      'Homeowner portal',
      'Warranty management',
      'Email notifications',
      'Maintenance reminders (basic)',
    ],
    noFeatures: ['White label', 'Subcontractor portal', 'Analytics', 'Payment processing'],
    cta: 'Get Started',
    ctaLink: '/demo',
    popular: false,
  },
  {
    name: 'Starter',
    monthlyPrice: 149,
    features: [
      'Up to 25 active homes',
      '2 staff users',
      'Everything in Intro',
      'Advanced maintenance reminders',
      'White label homeowner portal',
      'Subcontractor portal',
    ],
    noFeatures: ['Analytics', 'Payment processing'],
    cta: 'Get Started',
    ctaLink: '/demo',
    popular: false,
  },
  {
    name: 'Growth',
    monthlyPrice: 349,
    features: [
      'Up to 100 active homes',
      '5 staff users',
      'Everything in Starter',
      'Basic analytics',
      'Payment processing',
    ],
    noFeatures: [],
    cta: 'Get Started',
    ctaLink: '/demo',
    popular: true,
  },
  {
    name: 'Pro',
    monthlyPrice: 699,
    features: [
      'Unlimited homes',
      'Unlimited staff',
      'Everything in Growth',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    noFeatures: [],
    cta: 'Contact Us',
    ctaLink: '/demo',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Do my homeowners have to pay?',
    a: 'Not at first. We recommend offering the first year free as part of your home warranty package. After that, most builders charge homeowners $15-25/month for continued access. You set the price, you keep the difference.',
  },
  {
    q: 'What happens at the end of the warranty year?',
    a: 'You decide. You can extend access for free, convert them to a paid plan, or offer a tiered maintenance-only plan. The platform handles the billing if you choose to charge.',
  },
  {
    q: 'Will my homeowners actually use it?',
    a: "Yes — because it makes their life easier. Instead of calling you when something breaks, they open the app and submit a request. It gets routed to the right sub automatically. Most homeowners prefer this to playing phone tag.",
  },
  {
    q: "What if a homeowner doesn't want to pay after year one?",
    a: "That's fine. You can offer a free tier with limited features, or simply let their access expire. But in practice, homeowners who use the portal for a year rarely want to give it up.",
  },
  {
    q: 'Do my subcontractors need to use it too?',
    a: "Yes, and they'll thank you for it. Subs get their own portal to view assigned jobs, update status, and communicate with homeowners. No more missed calls or unclear scopes.",
  },
  {
    q: 'Can I white label it with my own branding?',
    a: 'Yes, on Starter plans and above. Your homeowners see your logo, your colors, your name — not ours.',
  },
  {
    q: 'How does the QR code work?',
    a: 'Every builder account gets a unique QR code you can include in your homeowner welcome packet, frame for display in the home, or add to any printed materials. When scanned, it takes visitors directly to your branded Homefront portal. Your finished homes literally market for you.',
  },
  {
    q: 'What does SMS cost?',
    a: 'The SMS add-on is $10/month for a dedicated phone number, available on any plan. Per-message rates apply at a small markup over carrier costs. Most builders spend less than $20/month total on messaging.',
  },
  {
    q: 'Is there a contract?',
    a: "No contracts, no setup fees. Cancel anytime. We're confident you won't want to.",
  },
  {
    q: 'Can my office staff use it too?',
    a: 'Yes. Every plan includes staff user seats. Starter includes 2, Growth includes 5, and Pro includes unlimited. Your whole team can manage homes, requests, and homeowners from one dashboard.',
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPrice = (monthly: number) => {
    if (annual) {
      const yearlyTotal = monthly * 10; // 2 months free
      return Math.round(yearlyTotal / 12);
    }
    return monthly;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Simple Pricing. Serious ROI.
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Homefront is the only platform that lets builders manage warranty requests, automate
            maintenance reminders, generate recurring revenue from completed homes, and turn every
            finished house into a 24/7 referral machine. Most builders profit on their second home.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!annual ? 'text-navy' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                annual ? 'bg-gold' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                  annual ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-navy' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 text-gold text-xs font-bold">Save 2 months</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <ScrollAnimation key={plan.name} delay={i * 100}>
                <div
                  className={`rounded-2xl p-6 sm:p-8 h-full flex flex-col ${
                    plan.popular
                      ? 'border-2 border-gold bg-gold/5 relative'
                      : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-navy">${getPrice(plan.monthlyPrice)}</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-xs text-gold mt-1">
                      ${getPrice(plan.monthlyPrice) * 12}/yr (2 months free)
                    </p>
                  )}
                  <ul className="mt-6 space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {plan.noFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-gold font-medium">+$10/mo</span> SMS add-on available
                    </li>
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    className={`mt-8 block text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-gold hover:bg-gold-dark text-white'
                        : 'bg-navy hover:bg-navy-light text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* SMS Callout */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 className="font-bold text-navy text-lg mb-2">SMS Add-on — $10/mo per account</h3>
            <p className="text-gray-600">
              Add a dedicated phone number to any plan. Homeowners opt in to receive text
              notifications for maintenance reminders, warranty updates, and scheduling
              confirmations. Per-message rates apply. Available on all plans.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mt-4 text-gray-300">
            No contracts. Cancel anytime. Setup in under 10 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Book a Demo
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Start with Intro — $49/mo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
