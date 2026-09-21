# SEO & AI-Search Playbook — Next.js edition

SEO for a site this size is not a tool problem; it's a discipline problem. Three things done well beat thirteen tools: **one target query per page, a clean heading tree, and structured data that tells search engines and AI assistants exactly who you are.** Do this on every page you build or edit, without being asked.

## Step 1 — The SEO map (one line per page, before building)

For each page produce: **URL slug · target query (the one search this page should win) · secondary phrasing (2–3) · title tag · meta description · H1.** Present the map to Joe as a simple list; he should be able to say "no, builders call that a punch list, not a defect list" and have the map corrected before any code exists.

Target-query rules: use the buyer's words (voice-of-customer file), pick queries a 5–50-home builder would actually type, and prefer specific over broad ("warranty callback software for home builders" over "construction software"). One page, one intent. Don't make the homepage chase three queries.

## Title and meta description — written to length

- **Title tag:** 50–60 characters. Target query near the front, brand at the end after a separator. Pattern: `[Target query phrased as a benefit] | Afterkey`. Never the H1 verbatim; the title is for the search result, the H1 is for the visitor.
- **Meta description:** 140–155 characters. A real sentence containing the target query and a reason to click. No "Welcome to," no keyword lists. Ends with the promise, not a CTA verb.
- Set both through the Next.js Metadata API (`export const metadata` or `generateMetadata`) — never hand-written `<head>` tags. Include `openGraph` and `twitter` blocks with a real image (1200×630) so shared links look designed.
- Unique title and description on every page. Duplicates are a bug.

## Heading tree — the rules Claude will otherwise break

- **Exactly one H1 per page**, containing the target query or a close natural variant, and it's the visible headline — never hidden, never a logo.
- **H2s are the page's outline** — each is a question or claim a searcher would recognize. Sections use H2; sub-points within a section use H3. Never skip levels (H2 → H4).
- Headings are never styled `<div>`s or `<p>` tags with big text. If it looks like a heading, it's an `<h*>` tag. If it's a heading tag, it's semantically a heading (not a card label used for styling).
- Answer-first: the first sentence under each H2 answers the heading directly. AI assistants extract this; so do featured snippets.

## Structured data (JSON-LD) — the AI-visibility work that actually matters

Add JSON-LD via a `<script type="application/ld+json">` rendered in the page (Next.js: a small component that JSON-stringifies an object; escape `<` as `\u003c`). Use an `@graph` with `@id` links so entities connect:

- **Organization** (site-wide, in the root layout): name, url, logo, founder, `sameAs` for real social profiles only, `areaServed` if relevant.
- **SoftwareApplication** on the product/home page: name, applicationCategory, operatingSystem "Web", `offers` with the real price and priceCurrency.
- **FAQPage** on any page with a real FAQ section — questions and answers must match the visible text exactly.
- **WebPage / BreadcrumbList** on inner pages.
- Validate mentally against schema.org types; never invent aggregateRating or review objects (that's fabricated proof and a Google penalty).

## Crawlability & the AI-assistant layer

- Marketing pages are **server-rendered** — no content that only exists after client-side JavaScript runs. AI crawlers largely don't execute JS.
- `robots.txt` allows all major crawlers including AI ones (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) unless Joe decides otherwise; `sitemap.xml` generated via Next.js `app/sitemap.ts`.
- `llms.txt` at the site root: a short markdown summary of what the company is, who it serves, key pages. Cheap to add; its ranking value is contested, so spend ten minutes on it, not an afternoon. The real GEO lever is answer-first H2s + JSON-LD + being described consistently across the web.
- Every image has descriptive alt text; hero and OG images have real filenames (`afterkey-warranty-callback-dashboard.webp`, not `img1.png`).
- Internal links use descriptive anchor text, and every important page is reachable within two clicks of the homepage.

## Technical floor (check on every build)

Canonical URL set · no duplicate H1 · 404 page exists · no orphan pages · Core Web Vitals sane (see image-integration for image weight) · mobile viewport meta present · no `noindex` leaking onto marketing pages · Google Search Console verified with sitemap submitted.

## Deeper audits

Joe has a `small-business:seo-ai-visibility` skill in his plugin catalog that runs a full crawlability, llms.txt, and schema audit. When a page is done, suggest running it once rather than re-implementing its checks here.
