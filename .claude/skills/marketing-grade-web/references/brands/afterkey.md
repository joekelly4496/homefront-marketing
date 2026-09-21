# Afterkey — Art Direction

## What the brand is (30-second recap)

Afterkey ("Everything after the keys") is white-label software for residential home builders — homeowner binder, maintenance, warranty/callback intake, sub coordination — for everything that happens after closing. The founder is a working Long Island builder. The buyer is a builder doing roughly 5–50 homes a year: practical, skeptical of software, allergic to Silicon Valley polish. The homeowner sees the *builder's* brand, not Afterkey's — white-labeling is a top-three selling point.

## The feel

**A premium construction company that happens to make software** — not a software company cosplaying construction. Think: the confidence of a well-run builder's office. Clean, sturdy, warm, unfussy. If the site feels like a YC landing page, it has failed; if it feels like a builder's trusted supplier, it's working. The credibility asset is that a real builder built this — the design should carry that the way good workwear brands do: quality materials, no decoration for decoration's sake.

## Palette — "punch list"

Deliberately NOT construction-yellow-and-black (safety-vest cliché) and NOT blueprint-blue-everywhere (the other cliché).

- **Ink** `#1A2332` — deep blue-black, the workhorse dark. Headlines, footer, primary buttons.
- **Site paper** `#FAF8F4` — warm paper white, page background. Warmer than pure white, but NOT cream-beige territory.
- **Drywall** `#E8E4DC` — warm neutral for section breaks and card fills.
- **Brass** `#B08D42` — the accent. Keys, hardware, door fixtures — brass is literally the object the brand is named for. Use sparingly: key CTAs, small marks, one underline. Never wash sections in it.
- **Tape blue** `#3A5A80` — secondary, for links and UI details. Nods to painter's tape and blueprints without going full blueprint.

These are the starting palette; the art-direction pass may tune values, but stay in this family and never drift toward purple gradients or terracotta-on-cream.

## Typography

- **Display / headlines: Bricolage Grotesque** (Google Fonts) — confident, slightly characterful grotesque; set tight, generous sizes. Weight 600–700 for headlines, never ultra-black.
- **Body: Hanken Grotesk** (Google Fonts) — clean, warm, highly readable, doesn't read as "default."
- Load both via `next/font/google`. Line lengths under 80 characters. No all-caps eyebrow labels; if a section needs a kicker, use sentence case in Tape blue.

## Layout notes

- Left-aligned content as the default; asymmetry over centered symmetry. Real marketing sites breathe unevenly.
- Generous whitespace; sections separated by background shifts (Site paper ↔ Drywall) rather than hairline dividers everywhere.
- Border-radius: one small value (6–8px) used consistently on interactive elements; photography can be square-cornered or radiused, pick ONE per site.
- The one bold element candidate: a large, beautiful hero photograph with the headline set directly on or beside it — imagery is Afterkey's differentiator against icon-and-gradient competitors, so let a photo be the memorable thing.

## The imagery world — this is where the site stops looking AI

Afterkey photography lives in **the first year after closing**: new-construction realism, documentary not glossy. Every shot should feel like it was taken on a real Long Island jobsite or inside a just-closed home. Higgsfield Soul's built-in grain and camera imperfections are an asset here — lean into them.

**Shoot these (subject bank):**
- House keys on an unfinished kitchen counter or granite island, closing paperwork nearby
- Blue painter's tape marking punch-list items on fresh trim and drywall
- A clipboard punch list, pencil, tape measure on a plywood subfloor
- Builder's pickup truck in the driveway of a nearly-finished house at dusk
- Framing details: fresh lumber, nail plates, morning light through studs
- A homeowner's first boxes in an empty, bright new living room
- The unglamorous truths: a furnace filter, a water shutoff valve, an electrical panel with fresh labels
- A builder on the phone at the tailgate, golden hour, tired but in control
- New front door with brass hardware, key in the lock (the brand shot)

**Never shoot:**
- Handshakes, hard hats with suits, anyone pointing at a laptop
- Glossy architectural renders or drone McMansion shots
- Soft-focus stock-style happy families
- Any signage, documents, or screens where legible text would need to appear (AI garbles text — keep lettering out of frame)
- The product's own UI (real screenshots only, per the honesty rules)

**Fixed style tail (append verbatim to every Afterkey prompt):** `, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones`

**Light and style language for prompts:** natural window light, golden hour, overcast jobsite light, iPhone-flash realism for gritty shots; 35mm documentary feel, shallow depth of field on detail shots, visible grain. Faces are allowed but prefer environmental and detail shots for heroes — they age better and can't be mistaken for customer claims.

## Lead capture

The Afterkey diagnostic quiz ("The Post-Closing Callback Scorecard") is fully designed in `references/quiz-funnel.md` — questions, scoring, four result buckets, gating. Build from that spec; don't redesign it.

## Copy reminder

All Afterkey copy follows the afterkey-content skill: plain-spoken builder voice, real specifics, banned-word list, pricing stated openly ($149/month base) with the $10/active-home fee always framed as baked into the home's cost at closing. No deployment or customer claims, ever, without Joe's written sign-off.

---

## Template for new brand files

When Joe wants this treatment for another venture, interview him briefly (what should it feel like? who's the skeptical buyer? what physical objects/places belong to this brand's world?) then create `references/brands/<name>.md` with these sections: **What the brand is · The feel · Palette (4–6 named hex) · Typography (2 Google fonts, roles) · Layout notes · The imagery world (subject bank + never-shoot + light/style language) · Copy reminder.** Propose everything yourself and let Joe react — don't make him fill in blanks.
