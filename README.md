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
- **The per-home fee never appears as a naked recurring charge.** Wherever
  `$10 per active home` shows up outside `/pricing`, pair it with
  `perHomeFraming` — it is small enough to price into the home at closing, so
  post-closing is a line item on the home rather than overhead the builder
  absorbs.
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

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Overrides the canonical origin. Defaults to `https://getafterkey.com`; Vercel deploy URLs are detected automatically. |

The app itself (all three portals) lives at `https://app.getafterkey.com` —
configured as `appBase` in `content.ts`.
