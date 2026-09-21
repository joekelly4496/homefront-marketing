# Higgsfield Workflow — writing shot lists Joe can run

Higgsfield's image models are the Soul family, built specifically to avoid the "AI plastic" look — outputs include camera-like imperfections (grain, flash, dust) and are tuned by art directors for realism. That's exactly the quality that makes a website feel photographed rather than generated. This file is how to write prompts that get there on the first or second try.

## Two ways to run a shot list

**Connector present (preferred).** If the Higgsfield MCP is connected in this session (tools for generating images/videos/characters are loaded), Claude generates each shot itself: run the prompt, get the 4 variations, show them to Joe with the shot name, and let Joe pick the winner. Save the chosen image straight into the project's image folder under the shot-list file name; Joe never downloads or renames anything. Generate one shot at a time and wait for his pick before the next so credits aren't spent on shots he'd reword. Generations through the connector always deduct plan credits — negligible for Soul images (a fraction of a credit each), so generate freely; for video, hand Joe the prompt to run on the website where his plan's unlimited allowance applies.

**No connector.** Hand Joe the paste-ready shot list in the format from SKILL.md; he generates on higgsfield.ai, picks, and drops files into one folder.

## Which model to specify

- **Soul 2.0** — the default for website work. Full creative control: text prompts, Moodboard, reference images, Soul ID. Cheapest per image. Use for 90% of shots.
- **Soul Cinema** — for cinematic hero shots: moody close-ups, textures, natural-light scenes, and keyframes if Joe later wants video. Use when a hero needs extra atmosphere.
- **Soul (original)** — quick preset-driven generation. Fine for experiments; not the default.

Practical notes to pass along when relevant: each prompt returns 4 variations; attaching a reference image replaces the prompt field entirely (reference mode OR prompt mode, not both); Soul ID trains on 20–80 photos of one face and is tied to the specific model it was trained in.

## Prompt anatomy

Soul is designed for simple prompts — heavy prompt engineering hurts more than it helps. Build each prompt from five short parts, in this order:

**[subject + action] , [setting with one or two specific details] , [light] , [camera/film language] , [mood]**

Keep it to 1–3 sentences. Concrete nouns beat adjectives: "fresh lumber and nail plates" beats "construction materials." One subject per shot — don't ask for a scene with four things happening.

**Camera/film vocabulary that works:** shot on 35mm film, natural window light, golden hour, overcast daylight, direct flash photography, shallow depth of field, documentary photography, slight film grain, candid.

**Keep out of prompts:** any request for legible text, logos, or signage (AI garbles lettering — a garbled sign is the #1 giveaway); more than one or two people; "hyperrealistic / 8k / ultra-detailed" spam (Soul doesn't need it and it pushes toward the plastic look).

## The consistency system — one photographer, not twelve

A page of individually gorgeous images still looks AI-made if they don't cohere. Three mechanisms, in order of importance:

1. **The style tail.** Every brand gets ONE fixed closing phrase appended verbatim to every prompt for that site. Afterkey's style tail: `, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones`. Write the tail into the brand file if it changes. This is the single highest-leverage consistency trick.
2. **Reference image / Moodboard.** Once Joe generates one shot he loves, tell him to use it as the reference image (or add it to a Moodboard) for related shots — Soul picks up composition, lighting, and mood from it.
3. **Soul ID** — only if the brand needs a recurring person (e.g., the same "builder" appearing across the site). Mention it as an option; don't require it.

Also keep the *time of day and season* consistent within a page. A golden-hour hero next to an overcast card next to a flash-lit closeup reads as three sources.

## Aspect ratios and sizes by slot

- Full-bleed hero: 16:9 (or 21:9 for very wide heroes) — generate at the largest size offered
- Split hero (image beside headline): 4:5 or 3:4
- Section/feature images: 3:2 or 4:3
- Card or column images: 4:5 or 1:1
- Tall sidebar/mobile-first shots: 4:5

State the ratio on every shot in the list. If Higgsfield's ratio options don't match exactly, pick the closest larger one and note the crop.

## Picking the winner (teach Joe what to reject)

Each prompt yields 4 images. Include a one-line "picking the winner" note per shot. Universal rejects: warped or extra fingers, plastic-smooth skin, garbled text anywhere in frame, physically impossible reflections or shadows, objects merging into each other. Universal keeps: believable imperfection — dust, uneven light, slightly messy real-world detail. When in doubt: would this survive as a photo on a real company's site?

If a shot misses twice, change the *subject specifics*, not the style words — the style tail stays fixed.

## Example prompts — Afterkey (style tail already appended)

```
A set of house keys with a brass key fob resting on an unfinished granite kitchen island in a newly built home, closing folder slightly out of focus behind, morning window light, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones
```

```
Blue painter's tape marking small spots on freshly painted white trim in a new construction hallway, close up, shallow depth of field, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones
```

```
A contractor's pickup truck parked in the driveway of a nearly finished suburban home at dusk, warm light in one window, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones
```

```
Interior of a house under construction, fresh lumber framing with morning light coming through the studs, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones
```

```
A furnace filter being slid into a furnace in a clean unfinished basement, hands visible, close up, shallow depth of field, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones
```

```
Moving boxes stacked in the corner of a bright empty living room in a brand new home, sunlight across new hardwood floors, natural light, shot on 35mm film, documentary photography, slight grain, muted warm tones
```

Adapt subjects per page; the tail never changes. For other brands, write a new subject bank and tail in that brand's file first.
