# Image Integration — wiring Joe's images in

Joe will come back with downloaded Higgsfield images, probably with auto-generated filenames, and he should not have to do anything technical beyond dropping them in one folder. Handle everything else.

## Intake

1. Tell Joe ONE folder to drop files into (in his Next.js repos: `public/images/`). Say it once, plainly: "drag the downloaded files into the `public/images` folder in the file list on the left, then tell me you're done."
2. Rename files yourself to the shot-list names (`hero-keys-counter.jpg` etc.). Never make him rename.
3. Convert to WebP and resize with a small script (use `sharp` — it's in the Next.js ecosystem and installs cleanly). Targets: heroes max 2400px wide, section images max 1600px, cards max 1200px; quality ~80. Keep originals out of the repo or in an `/originals` folder that's gitignored if he wants them kept.
4. Sanity-check each image at integration time: no garbled text, no warped hands visible at display size. If one fails, say so plainly and put the shot back on the list with an adjusted prompt.

## Next.js wiring

- Use `next/image` everywhere. Hero: `fill` + `priority` + a `sizes` attribute; everything below the fold lazy-loads by default.
- Set explicit aspect-ratio containers (`aspect-[16/9]` etc.) matching the shot list so layout never shifts while loading.
- `object-position` is the art-direction tool: crop toward the subject on mobile rather than letting the middle of the frame win.
- Alt text: describe the scene plainly ("house keys on an unfinished kitchen counter"). Never mention AI. Decorative texture images get `alt=""`.

## The unifying treatment — make separate generations read as one shoot

Even with a consistent style tail, images generated across sessions drift slightly in color temperature and saturation. Unify them in CSS so the page reads as one photographer's work:

1. **Match the grade.** Apply one shared class to all photography, e.g. a subtle filter (`saturate(0.92) contrast(1.03)` as a starting point — tune per brand) so warmth and punch are consistent.
2. **Brand tint (optional, subtle).** A pseudo-element overlay of the brand ink color at 4–8% opacity, `mix-blend-mode: multiply`, seats every image in the palette. This is the difference between "images on a page" and "an art-directed page."
3. **Grain (optional).** One shared SVG noise overlay at 3–5% opacity flattens differences in AI grain rendering. Skip if the images already carry film grain well.
4. **One corner policy.** All photos square-cornered or all radiused at the site's single radius value — never mixed.

## Composition rules on the page

- Text over an image needs a legibility plan: a gradient scrim from the ink color, or set the headline beside the image, not on top of a busy area. Never rely on the image happening to be dark enough.
- Never bake text into images; all words live in HTML.
- Don't use two crops of the same generation on one page — it reads as budget.
- 3–6 strong images per page. If a section doesn't need a photo, a Drywall-toned background block is better than a filler image.

## Performance floor

WebP delivered, correct `sizes`, hero preloaded via `priority`, everything else lazy. After integration, state total image weight for the page; if above ~1.5MB, compress further before calling it done.
