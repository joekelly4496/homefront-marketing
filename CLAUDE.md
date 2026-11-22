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

Last full sync with the product: **November 22, 2026** (callbacks only:
memberships, win-back, one-time proposals and plan quotes hidden).

---

## The mission, in one breath

**Owner decision, Nov 22 2026: Afterkey focuses ONLY on callbacks**
(post-closing service requests and warranty callbacks). The builder stops
being the middleman: the homeowner submits the request with photos in the
builder's branded portal, it goes straight to the sub for that trade on a
response clock, and the builder is only pulled in when something needs him.
A callback that isn't warranty is priced with his markup, approved by the
homeowner and paid through the portal. Tagline: *Everything after the keys.*
Headline (`thesis.headline`, also `/start`): "Stop being the middleman on
every callback." 

- **Category sentence:** post-closing software platform for residential home
  builders and remodelers (`brand.category`).
- **The definition** answer engines should lift verbatim is
  `brand.definition` in `content.ts`. Change it there or nowhere.
- **Who buys:** custom and small-volume production builders, roughly 5–50
  homes a year, AND residential remodelers (additions, extensions,
  whole-house renovations). Joe, Oct 14 2026: "remodelers hand over the
  keys, and debatably even more than builders." Say "builders and
  remodelers" wherever the audience is named. "Builder" stays the product's
  word for the paying account role. The builder or remodeler pays
  Afterkey. Never write that homeowners "use it free" or "Homeowners: free"
  (Joe, Oct 27 2026): homeowners pay the builder for the billable repairs
  they approve. Say "Homeowners never pay Afterkey; they pay you only for
  billable repairs they approve." Warranty repairs stay free. Subs pay nothing to use it; they get paid through it. The qualifier
  routes remodelers exactly like builders.
- **Who built it:** "Afterkey is built by a residential home builder on Long
  Island." That exact line (`brand.founder`) and nothing more. Never claim it
  runs on Joe's homes, his company, a pilot, or any customer.
- **Positioning order** (`callbackPoints`): straight to the sub, not your
  cell → a clock on every request → the homeowner sees the status → after
  hours, nothing sits until morning → billable callbacks get billed.

## What the product does today (all live unless marked)

### Three portals
1. **Builder portal** — homes, requests, subs, response clocks, repair
   billing, payouts, reports, the Daily Brief.
2. **Homeowner portal** — white-labeled under the builder; browser-based, no
   app. Requests with photos, status, messaging the sub, approving repair
   prices, documents, maintenance reminders, service history.
3. **Subcontractor portal** — every job from a link (no app, no login),
   status from the jobsite, required completion photos, compliance
   documents, payout setup.

### Callbacks and dispatch
- Homeowner requests go **straight to the sub assigned** to that trade on
  that home. The builder is notified, not asked.
- SLA clocks per priority, automated reminders to the sub, escalation to the
  builder. Email is free forever.
- **After hours** (`afterHours`): every request is sent at once, any hour
  (sub email + no-login job link; a text too with the texting add-on;
  builder email + in-app). With "Handle urgent requests after hours" ON
  (default), an urgent request's clock starts now, so the sub is nudged and
  the builder escalated overnight; OFF, the urgent clock starts at the next
  opening. Normal/low requests wait for the next opening. Urgent requests
  text the builder's escalation phone only with the texting add-on. The
  homeowner is told what happens next from the builder's own SLA targets
  (never a hard-coded "2 hours"), always with the shut-off-and-call line.
- **Daily Brief** (`dailyBrief`): a 7 AM email per builder, house by house.
- Day-of arrival tracking (confirm, on my way, running late).
- Every request, dispatch and completion timestamped on the home's record.
- **Warranty vs. billable** is classified automatically at submit from the
  home's warranty dates (plus per-trade extensions). No date on file
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

### HIDDEN — never on the site (owner decision, Nov 22 2026)
Homeowner **memberships** (maintenance plans the builder prices, monthly
plan revenue, tiers, check-ins, vouchers), **win-back** outreach and
prospect homes, **one-time proposals**, and **sub quotes for plans** are
hidden in the app. The site must not promise, describe or price any of
them: no membership ladder, no worked membership math, no plan calculator,
no "recurring revenue", no "keep paying you". `/memberships` redirects
(307, next.config.ts) to `/features`; its source and the content.ts exports
it reads (`membershipDistinction`, `membershipLadder`, `revenuePoints`,
`workedExample`, `newHomeMaintenance`) sit in the HIDDEN block of
content.ts and must not be rendered anywhere else.

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
- AI work draws AI credits (see Pricing canon); library matching is free. Never
  "AI-powered" as a benefit,
  never "never invents", never "AI resolves/closes requests."
- Ask Billie (LIVE since Oct 20 2026; app lib/assistant/): the homeowner
  assistant. Answers ONLY from that home's records and cites them; not found
  = says so + request button or "ask your pro" (the responsible sub, builder
  copied); emergencies = fixed safety text + urgent request, no AI; never
  warranty coverage, visit times or prices. Needs a paid AI plan, builder
  turns it on per home, answered questions use the builder's AI credits.
  Every AI answer carries "Billie is AI and can make mistakes. Always double
  check work and answers." "Billie" is a product name, fine on homeowner
  copy.

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
- Homeowner ↔ builder (repairs). Builder ↔ sub (the
  sub works for the builder). Afterkey is party to neither, and a split
  payment doesn't create a homeowner–sub contract.

## Pricing canon (plans by size)

- **Plans by size** (owner decision, Nov 10 2026; replaces the old base +
  per-active-home pricing): one flat monthly price for the number of ACTIVE
  homes a builder covers — **up to 10 active homes $99/month (starter,
  owner decision Nov 22 2026), up to 25 $199, up to 75 $399, up to 200
  $749**; more than 200 = a custom plan (book a call /
  contact us). Numbers live in `pricing.plans` (+ `customAbove`,
  `startingPrice`, `planFor(homes)`, `planSummary`) in content.ts.
- **Unlimited team members and unlimited subs on every plan**, never
  per-user, and NOT billed per home. Only active homes count toward the
  plan; archived homes are free and don't count (never mention prospect
  homes: they belong to the hidden win-back flow).
- Change plans any time from Billing: upgrades start right away,
  downgrades next month (if the active homes fit).
- One-liner outside /pricing: `pricingLine` ("Plans from $99/month for up
  to 10 active homes..."). Framing: `planFraming` (one price at your size,
  so a quiet spec home never runs up the bill). Never "per seat".
- **SMS add-on $29/month**: dedicated number + 1,000 segments; $25 per extra
  1,000; live meter, 80/100% alerts, adjustable ceiling (default $150).
- **AI plans + credits** (owner decision Oct 20 2026; replaces the $5/home
  add-on): flat monthly plans, never per home - **Starter $49 / 2,000
  credits, Growth $149 / 7,500, Scale $399 / 25,000**, or a custom plan for
  bigger builders. Credits follow the work (a manual read is usually 40-80,
  building and checking a typical home's plan about 200); library matches use
  none. Over the plan: **$3 per 100 credits**, up to a monthly cap the
  builder sets (default **$50**), alerts at 80% / 100% / cap. Upgrades start
  at once, downgrades next month. Without a plan: 100 free credits a month
  (not a trial). Never describe credits by Afterkey's own AI cost or margin.
  All numbers live in `pricing.ai` in content.ts.
- **No platform fee** on homeowner payments. Processing at Afterkey's
  **published flat rates: bank (ACH) 1.25%, card 3.5% + 30¢**, which
  "include every Stripe processing and payout fee." Never "at cost", never
  "Stripe's fee", never a bare "we take no cut" / "100% yours" without the
  processing mention. Bank is listed first; never disparage cards.
- **30-day free trial** (owner decision, Nov 9 2026; replaces the 30-day
  money-back guarantee and the invite-only pilot). Use `trial.body` verbatim
  with `trial.fine` beside it (the product CLAUDE.md's canonical wording): a
  card goes on file at signup, your plan is free for 30 days, cancel
  anytime before day 31 and pay nothing; texting ($29) and
  paid AI plans aren't part of the trial. There is NO money-back guarantee
  and NO pilot any more: never write either, never call the trial a pilot,
  and never offer a longer or second trial publicly.
- No annual prepay. No promo codes, no public discounts, no founding
  cohort. Month-to-month, no contracts, 24-month rate lock (60 days' notice
  after that, never mid-term or retroactive).
- Never tell a builder how to account for the plan or pass it through.
- The seven published commitments (`commitments`): no quote calls (every
  plan up to 200 active homes is published; only above 200 is custom), 24-month
  rate lock, no per-user fees, no contracts, no surprise bills, email free
  forever, 30-day free trial.
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
- Anything implying warranty work costs the homeowner anything.
- Memberships, maintenance plans the builder sells, win-back, one-time
  proposals or plan quotes (hidden, Nov 22 2026; see HIDDEN above).

## Voice

A builder who happens to run a software company. Plain, direct, concrete,
short sentences, jobsite details. Say "callbacks" and "subs." Banned:
revolutionize, game-changer, seamless, leverage, unlock, empower,
solutions, "AI-powered" as a benefit, emoji walls. The `afterkey-content` and
`marketing-grade-web` skills (in `.claude/skills/` and Joe's account) govern
voice, imagery and page craft; run the humanizer pass on every visible word.

## Privacy and analytics

- PostHog (first-party via `/ingest`) counts pageviews and reports errors.
  `/ingest` is a route handler (`src/app/ingest/[...path]/route.ts`), NOT a
  rewrite: it re-sends each request from our server with only content-type /
  content-encoding / accept / user-agent, so PostHog never receives a
  visitor's IP address (owner decision Nov 2026). The PostHog project also
  has "Discard client IP data" (anonymize_ips) on. Never switch back to a
  rewrite, and never add a tracker or embed that loads before a click.
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
  The `/start` headline and subhead live in `adLanding` (callbacks only).
  `/start` shows its buttons right under the promise (no scrolling to act)
  and again after the walkthrough. `?offer=trial` (the Instagram /trial
  link) makes "Start your free 30-day trial" the main button and booking a
  call the secondary link; without it, booking a call stays the main button.
  On phones the main button is also pinned to the bottom of the screen
  whenever the top one is out of view (src/components/StickyCta.tsx).
- Instagram bio short links (next.config.ts redirects, 307): `/trial` ->
  `/start`, `/quiz` -> `/scorecard` and `/demo` -> `/start/book` (qualify,
  then book a call), all tagged utm_source=instagram,
  utm_medium=bio. Keep them working; they are printed in the bio.
  `/memberships` -> `/features` (307) since Nov 22 2026 (memberships hidden).
- `/scorecard` is the After-the-Keys Scorecard quiz (Oct 17 2026, Joe
  approved the copy): 9 questions, then first name, company, email and phone
  (required), then a score out of 100 (time after the keys /60, money after
  the keys /40), a result type and a pain line. The plan calculator card was
  removed Nov 22 2026 (callbacks only) and the result-type copy no longer
  sells plans; questions and scoring are unchanged, and q7/q9 still mention
  a maintenance plan (Joe's call). Questions,
  scoring and copy live in `src/lib/scorecard.ts`; `/api/scorecard`
  recomputes everything server-side and forwards the lead to Afterkey Sales
  (kind `scorecard`), which emails the scorecard and the follow-ups. No site
  chrome (HideOnLanding). The score is never compared to other builders, and
  calculator numbers are examples the builder sets. Quiz takers are never
  texted; Joe may call.
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
