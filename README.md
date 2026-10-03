# Afterkey marketing site

The public marketing site for **Afterkey** — a post-closing software platform
for residential home builders.

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Single source of truth: `src/lib/content.ts`

**Every fact on this site — the product definition, every price, every feature,
every FAQ answer — lives in `src/lib/content.ts` and nowhere else.** Pages,
JSON-LD structured data, and `/llms.txt` all read from it.

This is deliberate. Search engines and AI answer engines penalize conflicting
signals: if the pricing page says one thing and the FAQ says another, models
get an unreliable picture of what Afterkey is and costs. Changing a fact in one
place changes it everywhere, so the site cannot contradict itself.

**If you are updating a price, a feature, or a claim, edit `content.ts`.** Do
not hard-code it into a page.

Key exports:

| Export | What it controls |
| --- | --- |
| `brand` | Name, legal name, domain, support email, and the canonical one-sentence definition |
| `pricing` | Every dollar figure on the site |
| `smsStatus` | `'live'` or `'coming-soon'` — flips all SMS copy site-wide |
| `guarantee` | The 30-day money-back guarantee wording. Also quoted in `/terms` |
| `brand.whiteLabel` | The white-label fact — a top-tier selling point, state it high |
| `brand.founder` | Approved founder line. Do not extend it (see Copy rules) |
| `perHomeFraming` | Mandatory framing for the per-home fee (see Copy rules) |
| `featureGroups` | Feature list, each tagged `live` / `coming-soon` / `roadmap` |
| `portals` | The three-portal story |
| `commitments` | The six published pricing commitments |
| `coreFaqs`, `pricingFaqs` | FAQ copy *and* the `FAQPage` structured data |
| `useCases` | The four use-case pages, including their metadata and FAQs |
| `comparisons`, `notList` | Comparison page content and the "what Afterkey is not" boundaries |

## Copy rules

These are product-truth constraints, not style preferences. Breaking them
creates legal, carrier, or credibility exposure:

- **Never describe competitive quoting as a marketplace, network, or contractor
  directory.** It is private, closed-roster, and builder-only. No "find new
  subs" language.
- **Never promise a *branded* SMS sender.** Each builder gets their own
  dedicated number, but messages currently send under Afterkey Inc.'s carrier
  registration. Branded sender identity is a planned upgrade.
- **Keep AI claims grounded.** The AI cites its sources, the builder reviews and
  confirms every line, and it never invents a maintenance interval. This honesty
  is the selling point — do not soften it into generic "AI-powered" language.
- **Mark unreleased features.** Anything not shipping carries a `StatusPill` of
  `coming-soon` or `roadmap`.
- **There is no free trial.** Afterkey sells with a 30-day money-back
  guarantee instead. Never write "free trial," "try it free," or "start free" —
  the FAQ answers the trial question directly with a no, which is deliberate:
  an answer engine should find an explicit denial, not silence.
- **The guarantee covers subscription fees only.** The canonical wording is
  `guarantee.body` in `content.ts`: the monthly base and every per-home fee are
  refunded; the SMS add-on and SMS overage are not. Never write "every dollar
  Afterkey charged," and never promise refunds of processing on homeowner
  payments already collected.
- **Processing rates are "our published rates."** Cards 3.5% + 30¢, ACH flat
  1.25%, no platform fee (decision note dated Sept 2026 in `content.ts`). Never
  "at cost," "we never mark it up," or "Stripe's rate." Allowed: "you pay only
  processing." Not allowed: a bare "we take no cut" or "100% yours" without the
  processing mention.
- **Plan dues are paid by card or bank account.** Never describe billing as
  ACH-only and never disparage cards. If a payment method on file is mentioned,
  write "a payment method on file — card or bank account."
- **The per-home fee never appears as a naked recurring charge.** Wherever
  `$10 per active home` shows up outside `/pricing`, pair it with
  `perHomeFraming` — it is small enough to price into the home at closing, so
  post-closing is a line item on the home rather than overhead the builder
  absorbs.
- **Lead with white-labeling.** It is one of the strongest reasons a builder
  buys, so it gets its own home-page section and a `/features` group — not a
  bullet. What is confirmed real: logo upload in settings, brand color theming
  across the homeowner portal, the builder's business name on the portal, every
  email, payment receipts and the handoff binder, and (with the SMS add-on) a
  dedicated business number homeowners text. Frame it as the builder's brand
  *leading* with Afterkey *in the background* — never as Afterkey being
  "invisible" or the homeowner "never seeing" us: Afterkey appears in the terms
  of service and in small platform references, and an absolute claim would be
  falsified the first time a homeowner reads a footer. Two further claims are
  **forbidden**, and `whiteLabelPoints` in `content.ts` documents why:
  - **No custom domains.** Homeowners arrive via branded links, never a typed
    URL. This is deliberate — the FAQ says so plainly rather than implying a
    vanity domain exists.
  - **Emails do not send from the builder's own address.** The builder's *name*
    appears on every email; the sending domain is Afterkey's. Never write
    "emails come from your address."

  The mockups encode the positioning too: `BuilderDashboard` shows Afterkey
  (the builder's working tool), `PhoneMockup` shows the builder's brand in
  neutral slate. Keep that contrast if you edit them.
- **The founder line is exactly `brand.founder` and nothing more.** You may say
  Afterkey is built by a residential home builder on Long Island. Do NOT claim
  it is piloted, tested, or running on his own homes — that claim has been
  explicitly declined.
- **Do not fabricate social proof.** There are no customers to quote yet. The
  testimonial and logo sections are intentionally not rendered (see the comment
  in `src/app/page.tsx`). Add them back when real quotes exist.

## SEO / AEO

- `src/lib/seo.ts` — `pageMetadata()` builds title, description, canonical, Open
  Graph, and Twitter card for every page. No page should ship without it.
- `src/lib/schema.ts` — JSON-LD builders. `Organization`, `WebSite`, and
  `SoftwareApplication` (with an `Offer` per pricing line) are emitted site-wide
  from the root layout; pages add `WebPage`, `BreadcrumbList`, and `FAQPage`.
- `src/app/llms.txt/route.ts` — plain-text summary for AI answer engines,
  generated from `content.ts` so it can never drift from the site.
- `src/app/robots.ts` — permissive, with reputable AI crawlers named explicitly.
- One primary keyword per page, no cannibalization:

| Route | Primary keyword |
| --- | --- |
| `/` | post-closing software for home builders |
| `/features` | home builder warranty management software |
| `/use-cases/warranty-service-requests` | punch list / service request software |
| `/use-cases/subcontractor-management` | subcontractor management for builders |
| `/use-cases/home-maintenance-reminders` | home maintenance reminder software for builders |
| `/use-cases/homeowner-portal` | builder homeowner portal |

`/login` is `noindex` and excluded from the sitemap — it is a sign-in doorway
with no search value.

## Ad landing page: `/start`

The destination for paid ads. Promise, video, one decision. It is `noindex`,
absent from the sitemap, and renders without the site navigation, footer, or
contact widget so there's nothing to click away to.

Everything campaign-specific lives in `adLanding` in `src/lib/content.ts`:

| Field | What it does |
| --- | --- |
| `videoUrl` | YouTube, Vimeo or Loom share link, or `/videos/<file>.mp4`. Empty shows the request-flow walkthrough instead. |
| `videoDuration` | Shown on the play button, e.g. `1:05`. |
| `bookCallUrl` | Cal.com / Calendly link, shown only after a lead passes the qualifier. Both embed inline with name and email prefilled; other tools open in a new tab. Empty: qualified leads are told you'll email them to set a time. |

"Book a 15-minute call" goes to **`/start/book`**, a three-question qualifier
(homes per year, what kind of business, biggest time sink). The rules live in
`src/lib/qualifier.ts`:

| Answers | Where they go |
| --- | --- |
| New-home builder, 5+ homes a year | Name, company, email, optional phone, then the calendar. The lead is emailed to `CONTACT_EMAIL` through `/api/qualify` (same `RESEND_API_KEY` as the contact form). |
| Sub or trade | The subs page. Subs use Afterkey free. |
| Builder under 5 homes a year | Self-serve signup, no call. |
| Remodeler or something else | Self-serve signup, no call. |

Every button carries the ad's `utm_*`, `gclid` and `fbclid` parameters through
to its destination, and the lead email includes them. PostHog events:
`ad_lp_cta_click`, `ad_video_play`, `qualifier_started`,
`qualifier_step_completed`, `qualifier_result`, `qualifier_lead_submitted`,
`qualifier_booking_opened`. The video script is in
`docs/ad-landing-video-script.md`.

**Rebuilding the video.** The explainer is assembled from the site's own
photography and mockups, so it stays honest and can be re-cut without a
shoot. `video/timeline.json` maps each narrated line to its visual and
captions. With the dev server running:

```bash
node video/render-frames.mjs        # product-screen frames + caption PNGs → video/frames/
node video/build.mjs --root . --ffmpeg ffmpeg --ffprobe ffprobe --out out   # needs ffmpeg with libx264
```

Narration goes in `video/vo/1.m4a … 7.m4a` (any format ffmpeg reads) (one file per line; timings follow
the audio lengths). Copy the result to `public/videos/afterkey-explainer.mp4`
and `public/videos/afterkey-explainer-poster.jpg`.

## Positioning (Oct 2026)

The site sells revenue, not relief. Every home a builder has closed is a
customer he isn't earning on; Afterkey turns those homes into a service
business. "Easier" is the side effect. The five points, in order of weight,
live in `revenuePoints` in `src/lib/content.ts`: the membership the builder
prices, the repair revenue he was giving away, being out of the middle, a
business he can sell, and first call for the next job.

Copy rules that follow from it:

- Every mention of the membership carries `membershipDistinction`: warranty
  covers what the builder got wrong and stays free; the membership covers
  maintenance, which every house needs from day one. Never imply a homeowner
  pays monthly for warranty service or that non-members wait longer.
- Say the "my homes are new" objection out loud and answer it with
  `newHomeMaintenance` (HVAC twice a year, boiler annually, dryer vent, water
  heater, appliances on the manufacturer's schedule).
- The builder sets the membership price ($20, $40, $60 — whatever his market
  carries); Afterkey never sets or caps it. Plans bill monthly to the
  builder's own account from a card or bank account on file.
- Paid repairs: the builder prices the job, the homeowner approves before any
  charge, the platform adds the builder's markup, deducts processing, and
  pays the sub and the builder separately. Describe it plainly as a feature.
- Warranty vs. billable (`classification`) is a feature sold to both sides:
  no surprise bills for the homeowner; no after-the-fact argument for the
  builder. Any billable classification needs both approvals before a charge.
- The worked example (`workedExample`: 60 homes, $40 plan, one $400 repair a
  quarter at 15% markup) is labeled an example everywhere. Never a customer
  result.
- The $10 per-home fee is framed as small next to what the same home can
  carry. Never tell the builder how to account for or pass it through.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Overrides the canonical origin. Defaults to `https://getafterkey.com`; Vercel deploy URLs are detected automatically. |

The app itself (all three portals) lives at `https://app.getafterkey.com` —
configured as `appBase` in `content.ts`.

## Analytics: PostHog

Product analytics, **Session Replay** and **Error Tracking** run through
PostHog. Nothing is sent unless the project key is present.

```bash
# .env.local (git-ignored) — also set both in Vercel → Project → Environment Variables
NEXT_PUBLIC_POSTHOG_KEY=phc_...            # PostHog → Settings → Project → Project API key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Where it lives:

- `src/instrumentation-client.ts` — browser init: pageviews on client
  navigation, session recording (all form inputs masked), exception capture.
- `src/instrumentation.ts` + `src/lib/posthog-server.ts` — server-side
  `onRequestError` hook reporting render / API route errors to Error Tracking.
- `next.config.ts` — `/ingest/*` reverse proxy to PostHog Cloud (US) so events
  stay first-party and aren't dropped by ad blockers.
- `.mcp.json` — PostHog MCP server for Claude Code. Needs
  `POSTHOG_AUTH_HEADER="Bearer phx_..."` (a PostHog *personal* API key) in
  your shell environment.
