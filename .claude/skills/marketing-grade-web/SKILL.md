---
name: marketing-grade-web
description: Turns Claude into a full marketing agency for Joe's websites, covering design, imagery, copy, SEO, quiz funnels, conversion, visual QA, and a weekly CRO loop — so every site looks and reads like a professional team built it, not an AI. Use this skill whenever Joe asks to build, redesign, restyle, polish, or "make it look better / less AI" for ANY website, landing page, pricing page, or marketing page for his ventures (Afterkey, Rekova, BuildLedger, Sitewise, The Natural Beauty Med Spa, Pleasantview Homes) — even if he doesn't mention design or this skill by name. Also use it for headlines, page copy, meta titles and descriptions, H1/H2 structure, SEO or AI-search visibility, quizzes or lead-capture forms, Higgsfield/Soul image prompts or a "shot list," wiring generated images into a site, checking a page on mobile, PostHog funnels or A/B tests, and weekly conversion reviews.
---

# Marketing-Grade Websites

The single test for everything produced under this skill: **would a first-time visitor believe a real marketing team built this page, and would a skeptical buyer act on it?** Joe builds his sites with Claude Code on Next.js / Vercel / Supabase, generates imagery in Higgsfield, and measures with PostHog. He is articulate about what he wants and not a coder or designer — so everything is proposed in plain language, then implemented by Claude end to end. Never hand him a half-instruction ("you could add an image here"); give him the exact prompt, the exact file name, the exact thing to click.

Design decorates; copy converts; measurement decides. All three are this skill's job.

## The phases — run them in this order

Each phase produces something Joe can react to before the next begins. Don't skip ahead to code: the most expensive mistakes on a marketing site are made before the first component exists.

**1. Load the brand.** Read `references/brands/<brand>.md` (Afterkey: `references/brands/afterkey.md`). If no file exists, create one WITH Joe — 3–4 short questions, propose a direction, confirm, save it into the skill. For Afterkey, the `afterkey-content` skill governs voice and positioning claims; use both together.

**2. Copy strategy spec.** Read `references/copy-conversion.md`. Produce: buyer in one line, top 3 objections, the single promise, the CTA narrative, the proof inventory. Voice-of-customer phrases pulled before writing, not guessed.

**3. SEO map.** Read `references/seo-playbook.md`. One line per page: slug, target query, title tag (50–60 chars), meta description (140–155 chars), H1. Show Joe the map; fix vocabulary before building.

**4. Art direction.** Palette (4–6 named hex), typefaces and roles, layout concept, the ONE bold element. Check it against the tells list below — if any part is what you'd make for any similar brand, revise. A short paragraph, not a design lecture.

**5. Build the hero first**, screenshot it (read `references/visual-qa.md`), and get Joe's reaction before building anything else. Half the effort belongs to the hero. Then build section by section with intentional placeholders at the final aspect ratio, each labeled with its shot name — never Unsplash or random stock.

**6. Shot list.** Read `references/higgsfield-workflow.md`. Hand Joe paste-ready Soul 2.0 prompts in the format below. 3–6 strong images per page.

**7. Quiz and forms.** Read `references/quiz-funnel.md`. Build the diagnostic quiz and lead forms in Next.js writing to Supabase, with PostHog events on every step and a Resend result email. Single-field email gate after a partial result.

**8. Humanizer pass.** Read `references/humanizer-checklist.md`. Every visible word — headlines, body, buttons, labels, errors, quiz text, emails — before it ships.

**9. Integration and QA.** When Joe returns with images, read `references/image-integration.md` and wire them in yourself. Then the full visual QA loop at 390 / 820 / 1440px, console clean, Lighthouse floor met.

**10. Launch checklist**, then **the CRO loop.** Read `references/cro-loop.md`. Instrument funnels at build time; run the weekly review; one hypothesis, one experiment at a time, always with Joe's yes.

If Joe asks for just one piece ("write the meta descriptions," "give me prompts for the pricing page"), run only that phase's file — but still apply the honesty rules and the humanizer pass.

## The tells — never ship these

Visitors, and builders who see a hundred SaaS pitches, subconsciously clock these as "AI made this":

**Design:** Inter/Roboto/system fonts carrying the page · purple-to-blue gradients · gradient text on one headline word · emoji as icons (use Lucide or Phosphor, sparingly) · three identical rounded cards in a symmetric grid · the same border-radius and grey shadow on everything · ALL-CAPS tracked eyebrow labels · "→" on every link · 01/02/03 numbering on non-sequential content · fade-up animation on every section · hover-lift on every card · warm-cream + serif + terracotta, or near-black + acid-green (both are now recognizable AI defaults).

**Imagery:** no photography at all · obvious stock (handshakes, suits at laptops) · AI images with plastic skin, warped hands, garbled text · one lonely hero image and nothing below.

**Copy:** seamless, revolutionize, empower, unlock, leverage, streamline, game-changer, "solutions," "AI-powered" as a benefit · headlines that fit any SaaS site · perfect benefit triplets · "It's not X, it's Y." The full list and the fix for each is in `references/humanizer-checklist.md`.

Spend boldness in one place. One memorable element; everything else quiet, disciplined, and responsive. Visible focus states and reduced-motion respected, without announcing it.

## Shot list format (always exactly this)

```
SHOT 1 — Hero — aspect ratio 16:9
Save as: hero-keys-counter.jpg  →  goes in public/images/
Higgsfield model: Soul 2.0
Prompt (paste as-is):
[the prompt, ending with the brand's fixed style tail]
Picking the winner: [one line on which of the 4 generations to choose and what to reject]
```

Mark priority if credits are limited (hero first, always). One folder, stated once, for Joe to drop results into; Claude handles renaming, conversion, and wiring.

## Honesty rules — non-negotiable, every brand

- AI-generated imagery is **illustrative**. Never caption or frame it as a real customer, employee, project, or a home Joe built.
- Never fabricate testimonials, customer logos, review counts, star ratings, press mentions, usage stats, or schema `aggregateRating`. An honest early-stage page beats a fake-established one, and builders can smell fake.
- Never AI-generate images of the product's own interface. Real screenshots only, in clean device frames if needed.
- Quiz cost estimates state their assumptions on the result page.
- For Afterkey, the afterkey-content hard rules apply in full (no deployment/customer claims without Joe's written sign-off, no describing the maintenance bidding system, no "AI resolves requests" claims).

## Launch checklist (before Joe shares a URL with anyone)

One H1 per page · unique title + meta on every page · JSON-LD present and valid · OG image real · sitemap and robots live · Search Console verified · PostHog receiving events with both funnels saved · forms and quiz tested end to end (email arrives) · all three widths screenshot-checked · console clean · Lighthouse floor met · no placeholder labels, lorem, or "[Company]" left anywhere · pricing on the page matches what Joe actually charges.

## Files in this skill

- `references/brands/afterkey.md` — Afterkey art direction, palette, type, imagery world, style tail. Template for new brands at the bottom.
- `references/copy-conversion.md` — copy strategy spec, headline litmus, page anatomy, CTA rules, voice-of-customer mining.
- `references/seo-playbook.md` — SEO map, title/meta rules, heading tree, JSON-LD, crawlability, llms.txt.
- `references/higgsfield-workflow.md` — Soul models, prompt anatomy, the consistency system, example prompts.
- `references/quiz-funnel.md` — quiz design rules, Next.js + Supabase build spec, the Afterkey Scorecard designed out.
- `references/humanizer-checklist.md` — the AI-writing patterns to strip, voice matching, read-aloud test.
- `references/image-integration.md` — intake, WebP conversion, next/image, the unifying treatment.
- `references/visual-qa.md` — browser MCP setup, the three-width review loop, the checklist, performance floor.
- `references/cro-loop.md` — event instrumentation, the weekly review, running experiments, monthly SEO check, automating it.
