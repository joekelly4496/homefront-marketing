import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative bg-navy min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn Every Completed Home Into Monthly Recurring Revenue
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Give homeowners their first year free as part of their warranty — let subcontractors
              handle the punch list so you don&apos;t have to. Convert them to recurring revenue at month
              13. And turn every finished home into a referral engine with a branded QR code that
              markets your business 24/7.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center"
              >
                Start for $49/mo
              </Link>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              No contracts. Cancel anytime. Setup in under 10 minutes.
            </p>
          </div>

          {/* Dashboard Mockup Placeholder */}
          <div className="mt-16 bg-navy-light rounded-2xl border border-white/10 p-8 max-w-5xl">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">Active Homes</p>
                <p className="text-white text-2xl font-bold">47</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">Monthly Revenue</p>
                <p className="text-gold text-2xl font-bold">$1,175</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">Open Tickets</p>
                <p className="text-white text-2xl font-bold">3</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { home: '142 Oak Ridge Dr', status: 'Resolved', color: 'bg-green-500' },
                { home: '88 Maple Lane', status: 'In Progress', color: 'bg-gold' },
                { home: '315 Cedar Blvd', status: 'New', color: 'bg-blue-400' },
              ].map((item) => (
                <div key={item.home} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                  <span className="text-white text-sm">{item.home}</span>
                  <span className={`${item.color} text-white text-xs px-3 py-1 rounded-full`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE PROBLEM ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
              What Happens After You Hand Over the Keys?
            </h2>
          </ScrollAnimation>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Warranty Chaos',
                description:
                  'Homeowners call your cell. Emails get lost. You\'re coordinating subs on sticky notes. Every callback costs you time and money you already spent.',
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                ),
              },
              {
                title: 'No Recurring Revenue',
                description:
                  'You close a home and walk away. That relationship — and that revenue — ends the day they move in. You\'re leaving money on the table on every single home.',
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Your Reputation Is at Risk',
                description:
                  'One bad warranty experience spreads fast. You worked too hard to lose referrals over a leaky faucet or a missed callback.',
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <ScrollAnimation key={card.title} delay={i * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE SOLUTION ===== */}
      <section id="how-it-works" className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
              One Platform. Happier Homeowners. New Revenue.
            </h2>
          </ScrollAnimation>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Warranty Management',
                description:
                  'Homeowners submit requests through a branded portal. You assign subs, track status, and close tickets — all in one place. No more phone tag, no more lost emails.',
                icon: '🛡️',
              },
              {
                title: 'Maintenance Reminders',
                description:
                  'Automated email and SMS reminders keep homeowners on top of their home maintenance. They stay engaged, you stay top of mind.',
                icon: '🔔',
              },
              {
                title: 'Subcontractor Coordination',
                description:
                  'Subs get their own portal to acknowledge, schedule, and complete jobs. Your homeowners deal directly with the right people. You stay out of the chaos.',
                icon: '🔧',
              },
              {
                title: 'Homeowner Portal',
                description:
                  'A white-labeled experience your homeowners log into with your branding. Professional. Polished. Yours. Not ours.',
                icon: '🏠',
              },
            ].map((feature, i) => (
              <ScrollAnimation key={feature.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: THE REVENUE ANGLE ===== */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Your Homeowners Will Pay for This
            </h2>
            <p className="mt-6 text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
              Most builders pay for software. Smart builders get paid for it. With Homefront, you can
              offer homeowners a premium maintenance and warranty portal for $15-25/month after their
              first year. You set the price. You keep the difference. On 50 homes, that&apos;s up to
              $1,250/month in recurring revenue — from homes you already built.
            </p>
          </ScrollAnimation>

          {/* Revenue Math */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation delay={0}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/10">
                <p className="text-gray-400 text-sm mb-2">Homeowner Revenue</p>
                <p className="text-3xl sm:text-4xl font-bold text-gold">$1,250/mo</p>
                <p className="text-gray-400 text-sm mt-2">50 homes &times; $25/mo</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center border border-white/10">
                <p className="text-gray-400 text-sm mb-2">Your Homefront Plan</p>
                <p className="text-3xl sm:text-4xl font-bold text-white">-$349/mo</p>
                <p className="text-gray-400 text-sm mt-2">Growth plan cost</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="bg-gold/20 backdrop-blur rounded-2xl p-8 text-center border border-gold/30">
                <p className="text-gold-light text-sm mb-2">Your Net Profit</p>
                <p className="text-3xl sm:text-4xl font-bold text-gold">$901/mo</p>
                <p className="text-gold-light/70 text-sm mt-2">From homes you already closed</p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <p className="mt-10 text-center text-xl font-bold text-white">
              Most builders profit on their second home.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className="inline-block bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                See the Plans
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SECTION 5: FIRST YEAR STRATEGY ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
              The First Year Is Your Secret Weapon
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              We recommend offering your homeowners their first year free as part of their home
              warranty. The first 12 months after closing are the hardest. Homeowners are discovering
              punch list items, appliances are being tested for the first time, and your phone won&apos;t
              stop ringing. With Homefront, homeowners submit everything through their portal —
              directly to the right subcontractor. You&apos;re not the middleman anymore. Your subs handle
              it. Your homeowners are happy. Your phone stays quiet. Then at month 13, they&apos;re already
              enrolled, already love the portal, and converting to a paid plan feels natural — not
              like a sales pitch.
            </p>
          </ScrollAnimation>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0}>
              <div className="border-2 border-gray-200 rounded-2xl p-8 h-full">
                <div className="bg-navy text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
                  Year 1 — Free for Homeowners
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Homeowner submits warranty requests through the portal
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Routed directly to the right subcontractor
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Builder stays out of the chaos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Homeowner builds the habit of using the platform
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Phone stops ringing
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="border-2 border-gold rounded-2xl p-8 h-full bg-gold/5">
                <div className="bg-gold text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
                  Month 13 — Natural Conversion
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Warranty period ends
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Homeowner is already enrolled and engaged
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Builder offers continued access for $15-25/mo
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Most say yes because they already rely on it
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No hard sell required
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="border-2 border-gray-200 rounded-2xl p-8 h-full">
                <div className="bg-navy text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
                  Year 2+ — Pure Recurring Revenue
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Maintenance reminders keep homeowners engaged
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SMS notifications keep them informed
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Builder collects monthly without lifting a finger
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Every home becomes an annuity
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Repeat for every home you close
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: QR CODE REFERRAL ENGINE ===== */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
              Every Home Is a Referral Machine
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              When someone visits your homeowner&apos;s house and asks who built it, what do they see?
              With Homefront, every home comes with a branded QR code your homeowner can display
              proudly. Guests scan it, see your branded portal, and experience your level of service
              firsthand — before they ever pick up the phone. No other builder in your market is doing
              this. Most hand over a key and hope for a referral. You hand over a key and hand them a
              system that keeps working for you long after closing day.
            </p>
          </ScrollAnimation>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">The QR Code</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Unique to each builder account</li>
                  <li>Links to your branded Homefront portal</li>
                  <li>Can be printed, framed, or added to a welcome packet</li>
                  <li>Scannable by any smartphone, no app required</li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">The Experience</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Guest scans the code</li>
                  <li>Sees your branded portal and logo</li>
                  <li>Sees the level of care and service you provide</li>
                  <li>Understands immediately why this builder is different</li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">The Lead</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Guest is building or buying soon</li>
                  <li>They already trust you before the first conversation</li>
                  <li>They reach out through your portal or contact page</li>
                  <li>You close another home — and another recurring revenue stream begins</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          {/* Founder Quote */}
          <ScrollAnimation>
            <div className="mt-16 bg-navy rounded-2xl p-8 sm:p-12">
              <blockquote className="text-lg sm:text-xl text-white italic leading-relaxed">
                &ldquo;The best referral I ever got came from a housewarming party. A guest scanned the QR
                code in my homeowner&apos;s kitchen, saw the portal, and called me the next week to build
                their home. That&apos;s when I knew Homefront was something every builder needed.&rdquo;
              </blockquote>
              <p className="mt-6 text-gold font-semibold">— Joe Kelly, Builder &amp; Founder</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SECTION 7: PRICING PREVIEW ===== */}
      <section id="pricing" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
              Simple Pricing. Serious ROI.
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Every plan includes a homeowner portal, warranty management, and email notifications.
              Upgrade as you grow.
            </p>
          </ScrollAnimation>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto">
            {[
              {
                name: 'Intro',
                price: '$49',
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
                price: '$149',
                features: [
                  'Up to 25 active homes',
                  '2 staff users',
                  'Everything in Intro',
                  'Advanced maintenance reminders',
                  'White label homeowner portal',
                  'Subcontractor portal',
                ],
                noFeatures: [],
                cta: 'Get Started',
                ctaLink: '/demo',
                popular: false,
              },
              {
                name: 'Growth',
                price: '$349',
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
                price: '$699',
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
            ].map((plan, i) => (
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
                    <span className="text-4xl font-bold text-navy">{plan.price}</span>
                    <span className="text-gray-500">/mo</span>
                  </div>
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
          <ScrollAnimation>
            <div className="mt-12 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <h3 className="font-bold text-navy text-lg mb-2">SMS Add-on — $10/mo per account</h3>
              <p className="text-gray-600">
                Add a dedicated phone number to any plan. Homeowners opt in to receive text
                notifications for maintenance reminders, warranty updates, and scheduling
                confirmations. Per-message rates apply. Available on all plans.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <p className="mt-8 text-center text-gray-600">
              Start with Intro — one home, no commitment, see the difference.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SECTION 8: FOUNDER STORY ===== */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built by a Builder, for Builders
            </h2>
            <blockquote className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed italic">
              &ldquo;I&apos;ve been building homes for years. After closing hundreds of homes, I got tired of
              managing warranty calls on my cell phone and chasing subs over email. So I built the
              platform I always wished existed — and started charging my homeowners for access to it.
              Homefront pays for itself on the first home.&rdquo;
            </blockquote>
            <p className="mt-6 text-gold font-semibold text-lg">
              — Joe Kelly, Builder &amp; Founder
            </p>
            <p className="mt-8 text-gray-500 text-sm">
              Placeholder for customer testimonials — coming soon
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL CTA ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Ready to Get Paid After Closing?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join builders who are turning completed homes into recurring revenue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-navy hover:bg-navy hover:text-white text-navy px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Start for $49/mo
              </Link>
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              No contracts. Cancel anytime. Setup in under 10 minutes.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
