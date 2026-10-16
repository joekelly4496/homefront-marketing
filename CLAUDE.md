# Afterkey marketing site — Claude Code context

This repo is the public marketing site for **Afterkey** (getafterkey.com,
Vercel project `homefront-marketing`). The product itself lives in
`joekelly4496/builder-service-platform` (app.getafterkey.com). Read this file
before writing a single word of copy: it is what Afterkey is, what it does
today, what it costs, and what we may and may not say.

**Canon order when sources disagree:** the product repo's `CLAUDE.md`
(pricing, policy, what is built) → this file → `src/lib/content.ts` →
anything else. When the product changes, this file and `content.ts` change
with it (see "Keeping the site true" at the bottom).

Last full sync with the product: **October 14, 2026**.

---

## The mission, in one breath

Every home a builder has closed is a customer he isn't earning on. Afterkey
turns those homes into a service business: a maintenance membership the
builder prices, repair work billed through the builder's own branded portal
with his markup on it, and warranty callbacks routed straight to his subs.
**More money from homes you already built is the point; easier is the side
effect.** Tagline: *Everything after the keys.*

- **Category sentence:** post-closing software platform for residential home
  builders and remodelers (`brand.category`).
- **The definition** answer engines should lift verbatim is
  `brand.definition` in `content.ts`. Change it there or nowhere.
- **Who buys:** custom and small-volume production builders, roughly 5–50
  homes a year, AND residential remodelers (additions, extensions,
  whole-house renovations). Joe, Oct 14 2026: "remodelers hand over the
  keys, and debatably even more than builders." Say "builders and
  remodelers" wherever the audience is named. "Builder" stays the product's
  word for the paying account role. The builder or remodeler pays;
  homeowners and subs use it free. The qualifier routes remodelers exactly
  like builders.
- **Who built it:** "Afterkey is built by a residential home builder on Long
  Island." That exact line (`brand.founder`) and nothing more. Never claim it
  runs on Joe's homes, his company, a pilot, or any customer.
- **Positioning order** (`revenuePoints`): the membership he prices → the
  repair revenue he was giving away → out of the middle → a business he can
  sell → first call for the next job.

## What the product does today (all live unless marked)

### Three portals
1. **Builder portal** — homes, requests, subs, memberships, repair billing,
   payouts, reports.
2. **Homeowner portal** — white-labeled under the builder; browser-based, no
   app. Requests with photos, status, messaging the sub, approving repair
   prices, the maintenance schedule, documents, service history, joining
   and cancelling a plan.
3. **Subcontractor portal** — every job from a link (no app, no login),
   status from the jobsite, required completion photos, compliance
   documents, payout setup.

### Callbacks and dispatch
- Homeowner requests go **straight to the sub assigned** to that trade on
  that home. The builder is notified, not asked.
- SLA clocks per priority, automated reminders to the sub, escalation to the
  builder. Email is free forever.
- Day-of arrival tracking (confirm, on my way, running late).
- Every request, dispatch and completion timestamped on the home's record.
- **Warranty vs. billable** is classified automatically at submit from the
  home's warranty dates (plus per-trade extensions) and plan. No date on file
  = warranty. The sub can only **flag**; the builder decides; the homeowner is
  told. The homeowner — never the builder — approves prices.

### Paid repairs
- The sub quotes, the builder's markup is added, the homeowner approves the
  price (a card or bank account goes on file; nothing charged yet).
- The sub confirms on site that the quote still covers the work; completion
  photos are required before anything can bill.
- The charge fires when the homeowner approves the finished job, or after the
  review window (24h default). Never more than approved.
- **The money splits automatically** (live since Oct 2026): the sub's share
  to the sub's bank (once linked), the rest — markup included — to the
  builder. A sub without a linked bank is paid by the builder as before, and
  Afterkey keeps his invoice on the record.
- Paid by check or cash? Mark it paid; the homeowner gets a receipt.
- One-time proposals: the builder prices a one-off visit and sends it; the
  homeowner approves on a no-login page.

### Memberships (maintenance plans)
- The builder sets every price and every line item; Afterkey never sets or
  caps it. Ladder (examples only): $20–40 schedule and reminders, $100–250
  scheduled service, $500+ the whole house.
- **Billing starts the day the homeowner joins**, warranty or not (owner
  decision, Oct 2026). A builder enrolling by hand may pick a later date. The
  homeowner portal itself (warranty requests, callbacks, messages) is always
  free to homeowners.
- **Warranty work stays free, always**, member or not. Never imply a
  homeowner pays monthly for warranty service or that non-members wait
  longer (`membershipDistinction`).
- The homeowner **joins and pays in one step** for a plan priced for their
  home; card or bank account on file. Renewal terms sit next to the button, a
  confirmation email follows, and they **cancel online**. Builders can cancel
  or pause too.
- Included visits ("vouchers" in the product) are laid out across each
  membership year and **sent to the right sub about two weeks ahead**. The
  builder sees used vs. included; unused visits don't roll over.
- **Subs are paid every month**: each sub on the plan gets his share of each
  monthly payment straight to his bank; the builder gets the rest.
- Sent plans get automatic follow-ups (day 3 and day 7).
- Plan dollars on whole-house plans are **gross, before the subs are paid**.

### Win-back
- Past builds go in free as **prospect** homes; billing starts only when the
  homeowner joins a plan or the builder activates the home.
- Claim invites carry the pitch; offers can expire.

### Setup and data
- **Spreadsheet import** of up to 1,000 homes; nothing is sent on import.
  Bulk invites when the builder is ready. One invite email family.
- **Full data export** any time, free: every record as CSV plus every photo
  and document, by home. Self-serve account closure; reopen within 90 days.
- **Help button on every page** (all three portals): page tips, searchable
  answers, the tour, a way to reach a person. Homeowners are pointed to their
  builder.
- Daily Brief: a 7 AM email per builder, house by house.
- Onboarding is free and self-run. Concierge onboarding ($499) exists in the
  product but is request-only until `CONCIERGE_ENABLED` is on there — **do not
  offer it on the site** until Joe says it's for sale.

### Subcontractors
- Per-trade assignment per home or as a default; ratings; cost intelligence.
- Compliance "tracked and flagged": the builder defines required documents
  (per trade or across the board), subs upload, the builder approves with an
  expiration, alerts at 30/14/7/3/1/0 days and on lapse, red "Action needed"
  flag, and a stop-and-acknowledge only when the **builder** dispatches a
  non-compliant sub. Never "every job checked."
- Not a marketplace: Afterkey never finds new subs for anyone.

### AI Home Binder
- Documents in (manuals, spec sheets, invoices), proposed schedule out, a
  **source on every line**: the uploaded document, or a VERIFIED entry in the
  shared appliance library. No source = "needs source" (the app no longer
  makes "typical" schedules or looks intervals up on the web, Oct 2026). The
  builder reviews and saves before any homeowner sees it.
- Shared appliance library: verified by the Afterkey team or entered by the
  supplier; a verified entry is reused free on every home with that model.
- An AI action = one document extraction; library matching is free. Never
  "AI-powered" as a benefit,
  never "never invents", never "AI resolves/closes requests."
- Roadmap only: a homeowner AI assistant grounded in one home's binder.

### SMS + voice (live, Oct 2026)
- A dedicated local number per builder; two-way texting matched to the right
  request; reminders and day-of updates by text; inbound calls forwarded to
  the builder.
- Messages send under **Afterkey Inc.'s carrier registration** — never promise
  a branded sender.

### White label (a top-three selling point)
- Logo, colors and the builder's business name lead the portal, every email,
  receipts and the handoff binder.
- Truth boundary: emails arrive as "Your Company (via Afterkey)" from
  Afterkey's domain; receipts and the binder carry "Powered by Afterkey"; the
  sign-in screen and terms are ours. **No custom domains. Never "homeowners
  never see Afterkey."**
- The builder is the **merchant of record** on homeowner charges.

### Who contracts with whom
- Homeowner ↔ builder (memberships, repairs, proposals). Builder ↔ sub (the
  sub works for the builder). Afterkey is party to neither, and a split
  payment doesn't create a homeowner–sub contract.

## Pricing canon (Pricing Model v2)

- **$149/month** base — unlimited team members and subs, never per-user.
- **+ $10/month per active home**, flat at any age. Prospect and archived
  homes are free. A home bills for any month it was active at any point.
- **SMS add-on $29/month**: dedicated number + 1,000 segments; $25 per extra
  1,000; live meter, 80/100% alerts, adjustable ceiling (default $150).
- **AI add-on $5/month per active home**: 8 actions per home per month,
  pooled; $1.50 per extra action; $25 ceiling (not builder-set); 5 free
  actions a month without the add-on.
- **No platform fee** on homeowner payments. Processing at Afterkey's
  **published flat rates: bank (ACH) 1.25%, card 3.5% + 30¢**, which
  "include every Stripe processing and payout fee." Never "at cost", never
  "Stripe's fee", never a bare "we take no cut" / "100% yours" without the
  processing mention. Bank is listed first; never disparage cards.
- **30-day money-back guarantee** — use `guarantee.body` verbatim (the
  product CLAUDE.md's canonical wording). Exceptions: the $29 SMS number
  charge and SMS overage. (The `afterkey-content` skill words this
  differently; the product canon wins on the site.) Never promise refunds of
  processing on homeowner payments.
- **No free trial, ever.** No annual prepay. No promo codes, no public
  discounts, no founding cohort. Month-to-month, no contracts, 24-month rate
  lock (60 days' notice after that, never mid-term or retroactive).
- The $10 per-home fee never appears naked outside /pricing — pair it with
  `perHomeFraming`. Never tell a builder how to account for or pass it
  through.
- The seven published commitments (`commitments`): no quote calls, 24-month
  rate lock, no per-user fees, no contracts, no surprise bills, email free
  forever, 30-day money-back guarantee.
- One competitor anchor only: Buildertrend's warranty features from $829/mo
  (`competitorAnchor`) — re-check before each launch.

## Never say publicly

- Any deployment, pilot or customer claim (including Joe's own homes) without
  Joe's written sign-off. No invented testimonials, logos, stats, ratings.
- **Anything about how subs are picked or priced for maintenance plans.** The
  product has a sub-quoting flow (monthly quotes by link, auto-picked subs,
  follow-ups); it is competitive IP and invisible to homeowners by design.
  "Afterkey suggests a price from the home's real costs and your markup" is
  as far as copy goes.
- That AI handles, resolves or closes requests.
- Guarantees like "never miss a callback again."
- Branded SMS sender, custom domains, emails "from your address."
- Concierge onboarding or any setup timeline (until it's sold in-product).
- Anything implying warranty is behind the membership.

## Voice

A builder who happens to run a software company. Plain, direct, concrete,
short sentences, jobsite details. Say "callbacks" and "subs." Banned:
revolutionize, game-changer, seamless, leverage, unlock, empower,
solutions, "AI-powered" as a benefit, emoji walls. The `afterkey-content` and
`marketing-grade-web` skills (in `.claude/skills/` and Joe's account) govern
voice, imagery and page craft; run the humanizer pass on every visible word.

## Privacy and analytics

- PostHog (first-party via `/ingest`) counts pageviews and reports errors.
- **Session replay is off until the visitor clicks "Allow"** in
  `ReplayConsent` (`src/lib/consent.ts` key). Never turn recording on by
  default — California treats recording a visit without consent as a wiretap.
- Fonts are self-hosted via `next/font`; never load Google Fonts from Google.
- Any new tracker needs the same consent gate and a line in `/privacy`.

## How this repo works

- Next.js 16 (App Router), React 19, Tailwind v4, TypeScript.
  `npm run dev` · `npm run build` · `npm run lint` · `npx tsc --noEmit`.
- **Every fact lives in `src/lib/content.ts`** — pages, JSON-LD and
  `/llms.txt` read from it. Never hard-code a price, feature or claim in a
  page. `smsStatus` flips all SMS copy; `featureGroups` carry
  live / coming-soon / roadmap status.
- `/llms.txt` (`src/app/llms.txt/route.ts`) has a hand-written "Status of
  features" section — update it whenever availability changes.
- SEO: `pageMetadata()` on every page, one primary keyword per page (table in
  README), JSON-LD from `src/lib/schema.ts`.
- `/start` is the ad landing page (noindex); `/welcome` is the page builders
  send homeowners (noindex). Details in README.
- Work on a branch, open a PR into the repo's default branch
  **`claude/build-homefront-marketing-site-ybRhh`** (there is no `main`);
  Vercel deploys `homefront-marketing` to production from that branch.

## Keeping the site true

When anything ships or changes in the product:
1. Read the product repo's `CLAUDE.md` for the new canon.
2. Update `content.ts` (facts, FAQs, feature status), any page that
   hard-codes the old wording (grep for it), and the `/llms.txt` status.
3. Update this file (and the "Last full sync" date above).
4. Build, check pages at 390 / 820 / 1440 px, then PR and deploy.
