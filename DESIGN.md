---
name: Alissa Whittle
description: An editorial-cartographic system for a one-practitioner fiduciary practice at Mile Marker 92.
colors:
  bg: "oklch(96.5% 0.011 85)"
  bg-paper: "oklch(98% 0.007 85)"
  bg-deep: "oklch(92.5% 0.014 85)"
  ink: "oklch(22% 0.018 200)"
  ink-soft: "oklch(38% 0.014 200)"
  muted: "oklch(55% 0.012 200)"
  border: "oklch(86% 0.012 90)"
  rule: "oklch(74% 0.014 90)"
  teal: "oklch(43% 0.065 195)"
  teal-soft: "oklch(86% 0.035 195)"
  teal-deep: "oklch(28% 0.05 200)"
  teal-ink: "oklch(98% 0.01 195)"
  gold: "oklch(63% 0.09 75)"
  gold-soft: "oklch(89% 0.045 80)"
  gold-deep: "oklch(48% 0.08 70)"
typography:
  display:
    fontFamily: "Fraunces, 'Iowan Old Style', Charter, Georgia, serif"
    fontSize: "clamp(2.65rem, 5.5vw + 0.8rem, 5.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.018em"
    fontVariation: "'opsz' 144, 'SOFT' 30"
  headline:
    fontFamily: "Fraunces, 'Iowan Old Style', Charter, Georgia, serif"
    fontSize: "clamp(1.9rem, 2.8vw + 0.6rem, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.018em"
    fontVariation: "'opsz' 144, 'SOFT' 40"
  title:
    fontFamily: "Fraunces, 'Iowan Old Style', Charter, Georgia, serif"
    fontSize: "clamp(1.7rem, 1.6vw + 1.2rem, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.022em"
    fontVariation: "'opsz' 144, 'SOFT' 50"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.25vw + 0.95rem, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontFeature: "'ss01', 'kern'"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  xs: "2px"
  sm: "3px"
  md: "4px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  gutter: "clamp(1.25rem, 3vw, 2rem)"
  section-y: "clamp(4.5rem, 8vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.teal-ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.25rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.teal-deep}"
    textColor: "{colors.teal-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.25rem"
  button-on-teal:
    backgroundColor: "{colors.bg-paper}"
    textColor: "{colors.teal-deep}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.5rem"
  nav-cta:
    backgroundColor: "{colors.teal-deep}"
    textColor: "{colors.teal-ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.1rem"
  card-portrait:
    backgroundColor: "{colors.bg-paper}"
    rounded: "{rounded.xs}"
    padding: "0"
  card-state-info:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  tile-map:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "0"
  tile-map-securities:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.teal-ink}"
  tile-map-insurance:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
---

# Design System: Alissa Whittle

## 1. Overview

**Creative North Star: "The Atelier on the Overseas Highway"**

A single skilled hand working at one desk in one town. The system is editorial, place-aware, and quietly cartographic — coordinates as ornament, italic Fraunces for emphasis, mono labels reserved for record-keeping (CRD numbers, latitude/longitude, license metadata). Warm cream paper is the default ground, mangrove teal is the only voice that carries, and gold makes one appearance in the licensing legend and nowhere else. The interface should feel like the desk it describes, not the firm behind it.

What this system explicitly rejects: the big-bank corporate register — stock-photo handshakes, navy-and-gold corporate skylines, compliance theater that overwhelms the human. By extension it also rejects suburban-realtor gradients and circular headshots, robo-advisor neon dashboards, and tropical-Florida kitsch (palm trees, sunset gradients, beach-font headlines). The Keys are present in the work; they are not the decoration.

The voice is *trusted · warm · sharp*. Warmth is in the paper, the italics, and the line lengths; sharpness is in the small print — the credential stamp, the licensing tiles, the coordinate captions. Restraint is the discipline that lets the writing carry the room.

**Key Characteristics:**

- Warm cream paper ground with a low-contrast radial wash, never pure white.
- Fraunces (variable, opsz 144) as the display voice; Inter for body; mono only for coordinates and record fields.
- Italic-via-variation-axis is the *only* form of headline emphasis. No bold, no color highlight, no gradient.
- One accent (mangrove teal) carries everything; a second accent (late-afternoon gold) is reserved for one purpose only.
- 1px hairlines separate sections and cards. Shadows appear as response to touch, not decoration.
- Coordinate notation (`25.0078°N · 80.5147°W · MM 92`) is treated as ornament; mono labels mark the metadata.

## 2. Colors: The Coastal Vernacular Palette

A paper-and-tidewater palette. Cream warmer than white, ink cooler than black, one teal that ranges from tidewater to inkstone, and a single brass-warm gold held in reserve.

### Primary

- **Mangrove Teal** (`oklch(43% 0.065 195)`): the only accent that carries. Appears on the primary CTA, the monogram strokes, securities-licensed map tiles, the legend chip, and hover/focus colors. About 5–8% of any given screen.
- **Inkstone Teal** (`oklch(28% 0.05 200)`): the deeper sibling. Used for eyebrow text, italic-axis headline emphasis (`<i>` inside h1/h2), focus outlines, link hover states, the dropped-cap on the bio paragraph, and the drenched ground of the final CTA section.
- **Tidewater** (`oklch(86% 0.035 195)`): light tint reserved for soft fills if needed; currently unused but available for hover backgrounds and quiet badges.
- **Salt Paper** (`oklch(98% 0.01 195)`): the paper-on-teal foreground. Used as text/icon color whenever a surface is painted in Mangrove or Inkstone Teal.

### Secondary

- **Late-Afternoon Gold** (`oklch(63% 0.09 75)`): a brass-warm yellow reserved *exclusively* for the licensing map's insurance-only states and its legend chip. Never appears in headlines, CTAs, links, dividers, or anywhere else.
- **Brass Buoy Gold** (`oklch(48% 0.08 70)`): the deeper sibling, used for `:focus-visible` outlines on insurance-state tiles and the border on the same.
- **Conch Soft Gold** (`oklch(89% 0.045 80)`): light tint, available for the gold-channel equivalent of Tidewater; currently unused.

### Neutral

- **Sun-bleached Cream** (`oklch(96.5% 0.011 85)`): the page ground. Sits under a soft radial-gradient wash; never used as a flat tile.
- **Bone Paper** (`oklch(98% 0.007 85)`): card and footer ground; the lighter cousin of the page background. Portrait card, state-info card, footer (colophon), and the on-teal button live here.
- **Linen** (`oklch(92.5% 0.014 85)`): the deeper cream; reserved for sectional washes (qualifying band's linear gradient ramp).
- **Squid Ink** (`oklch(22% 0.018 200)`): the body and headline ink. Never pure black — tinted toward the teal hue so it sits inside the palette.
- **Wet Slate** (`oklch(38% 0.014 200)`): secondary text — hero subhead, body prose, footer links.
- **Driftwood Gray** (`oklch(55% 0.012 200)`): tertiary text — captions, mono coordinate detail, the legend's tile count, "this/that" labels.
- **Hairline** (`oklch(86% 0.012 90)`): the soft 1px border for cards, footer divisions, and structural rules where the line should disappear into the page.
- **Dock Rule** (`oklch(74% 0.014 90)`): the slightly stronger 1px line for inter-section separators, process steps, and qualifying-item top borders — where the rule is meant to be *seen*, not felt.

### Named Rules

**The One Voice Rule.** Mangrove Teal and its deeper sibling Inkstone Teal are the *only* accent that carries the brand. Together they occupy no more than ~10% of any given screen. Their rarity is what makes them register as the practitioner's color, not a design flourish.

**The Reserved Gold Rule.** Late-Afternoon Gold (and its deep/soft tints) is reserved *exclusively* for the licensing map: the insurance-only state tiles, the both-licensed split-gradient tiles, the legend's insurance chip, and the focus outline on those tiles. Gold never appears in headlines, body copy, CTAs, links, dividers, eyebrows, or icons. If a future surface needs a second accent, *invent a third color* — do not borrow from the gold scale.

**The Tinted Neutrals Rule.** No pure white, no pure black. Cream neutrals tint toward hue 85–90 (warm); ink neutrals tint toward hue 200 (cool-teal). This keeps the page from looking like printer paper or a Material Light surface.

## 3. Typography

**Display Font:** Fraunces (variable, fallback: 'Iowan Old Style', Charter, Georgia, serif)
**Body Font:** Inter (fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif)
**Mono Font:** ui-monospace, 'JetBrains Mono', 'IBM Plex Mono', Menlo, monospace

**Character:** Fraunces is a contemporary serif with optical-size and softness axes — the system uses `opsz` 144 throughout (display-grade contrast) and modulates `SOFT` between 30 (upright, restrained) and 100 (italic emphasis, generous curves). Inter is the workhorse for everything that needs to *read* rather than *speak*. Mono is a third hand, used only for record-keeping: coordinates, CRD numbers, license metadata, process-step labels.

### Hierarchy

- **Display** (Fraunces, weight 400 with `'opsz' 144, 'SOFT' 30`, `clamp(2.65rem, 5.5vw + 0.8rem, 5.75rem)`, line-height 1.05): the hero H1 only. Capped at 14ch. Italic `<i>` inside the H1 takes `'SOFT' 100, 'wght' 360` and shifts to Inkstone Teal — this is the single license to deviate from solid ink in a headline.
- **Headline** (Fraunces, weight 400 with `'opsz' 144, 'SOFT' 40`, `clamp(1.9rem, 2.8vw + 0.6rem, 3.4rem)`, line-height 1.05): section H2s. Same italic-emphasis convention as Display.
- **Title** (Fraunces, weight 400 with `'opsz' 144, 'SOFT' 50`, `clamp(1.7rem, 1.6vw + 1.2rem, 2.5rem)`, line-height 1.1): process step titles, service titles, state-info names. The "lead step" in the process gets bumped to `clamp(2rem, 2.2vw + 1.4rem, 3.1rem)`.
- **Pullquote** (Fraunces italic, weight 350 with `'opsz' 144, 'SOFT' 100, 'wght' 360`, `clamp(1.4rem, 1.8vw + 0.6rem, 2.25rem)`, line-height 1.18): qualifying-section questions, fc-aside lines. Italic-by-default — these are *spoken* quotations.
- **Body** (Inter, weight 400, `clamp(1rem, 0.25vw + 0.95rem, 1.125rem)`, line-height 1.6): paragraph copy. Capped at 38–54ch for reading; the bio prose drops a Fraunces dropped-cap in Inkstone Teal on its first letter.
- **Subhead body** (Inter, weight 400, `clamp(1.0625rem, 0.4vw + 1rem, 1.25rem)`, line-height 1.55): hero subhead and lead paragraphs; sits one notch larger than body.
- **Eyebrow Label** (Inter, weight 500, `0.78rem`, letter-spacing `0.18em`, uppercase): preceded by a 1.6em-wide 1px Inkstone Teal rule. Marks section identity and credential lines. Mono variant uses the same dimensions but the mono family — reserved for coordinate ornament and tile counts.
- **Coordinate Mono** (ui-monospace, weight 400, `0.68rem`–`0.72rem`, letter-spacing `0.14em`–`0.18em`, uppercase): record fields only — `25.0078°N · 80.5147°W · MM 92`, `CRD 6445648`, process-step meta. Never used for paragraphs.

### Named Rules

**The Italic-Is-Emphasis Rule.** Emphasis inside a Fraunces headline is expressed *only* via the italic variation axis (`'SOFT' 100, 'wght' 360`), usually paired with a color shift to Inkstone Teal. Never use bold, never use a gradient, never use a background highlight, never use ALL CAPS for emphasis. Two emphases per headline maximum.

**The Mono-Is-Coordinate Rule.** Monospace is reserved for record-keeping: latitude/longitude coordinates, CRD numbers, license metadata, tile counts, process-step ordinals, footer meta. Running prose in mono is forbidden. Mono labels carry letter-spacing of 0.14em–0.18em and run uppercase.

**The Line-Length Discipline.** Body paragraphs are capped at 38–54ch. The bio drops at 46ch. The hero subhead capnines at 38ch. Long lines belong in a different design.

## 4. Elevation

A mixed system: surfaces are flat at rest, separated by 1px hairlines (Hairline `oklch(86% 0.012 90)` for soft, Dock Rule `oklch(74% 0.014 90)` for visible). Buttons and the portrait card carry a *subtle ambient shadow at rest* — barely visible, just enough to seat them on the page. Interaction (hover, focus, current-state) is when shadows actually appear with presence.

The body itself carries two radial-gradient washes — a warm-amber at top-left, a warm-peach at bottom-right — that suggest atmosphere without committing to a gradient. These wash up from the page; they are not shadows.

### Shadow Vocabulary

- **Button rest** (`box-shadow: 0 1px 0 oklch(20% 0.05 200 / .1), 0 8px 22px -16px oklch(20% 0.05 200 / .55)`): two-layer — a 1px seam shadow plus a soft 22px wash. Sits the button on the paper without lifting it.
- **Button hover lift** (`box-shadow: 0 1px 0 oklch(20% 0.05 200 / .15), 0 14px 28px -16px oklch(20% 0.05 200 / .65)`): the same vocabulary, twice as much wash. Paired with `transform: translateY(-1px)`.
- **Tile lift** (`box-shadow: 0 6px 16px -10px oklch(20% 0.04 200 / .55)`): single soft wash on map tile hover/focus.
- **Tile current** (`box-shadow: 0 0 0 2px var(--bg-paper), 0 0 0 3px var(--teal-deep)`): paper-gap ring plus an ink ring — a hand-set marker, not a glow. Gold tiles get a `--gold-deep` outer ring instead.
- **CTA wash** (`box-shadow: 0 14px 28px -16px oklch(0% 0 0 / 0.55)`): only on the cream button-on-teal hover, sitting on the drenched final-cta ground.

### Named Rules

**The Lift-on-Touch Rule.** Resting elevation is at-or-near zero. The portrait card, state-info card, footer, and map tiles sit on the page with hairlines only. Lift is reserved for `:hover` and `:focus-visible` — the page should look *still* until the cursor enters it.

**The No-Glow Rule.** Focus indicators are double-ring outlines (paper gap + ink ring) or solid 2px outlines offset by 3–4px from the element. Never use a colored blur as a focus state.

## 5. Components

### Buttons

Pill geometry across all variants (`border-radius: 999px`). The pill is the through-line — it makes every CTA read as a button without needing a fill or border to signal it.

- **Primary** (`.btn.btn-primary`): Mangrove Teal background, Salt Paper text, two-layer ambient shadow at rest. Padding `0.85rem 1.25rem`. Inline arrow icon (14px, currentColor, `stroke-width: 1.8`) follows the label with a 0.55rem gap. Hover: background shifts to Inkstone Teal, the wash shadow doubles, the button lifts 1px. Focus-visible: 2px Inkstone Teal outline at 3px offset.
- **Ghost** (`.btn.btn-ghost`): transparent background, Squid Ink text, Dock Rule border. Hover fills with Bone Paper and shifts the border to Wet Slate. Used when a button must yield to the primary CTA in the same row.
- **On-Teal** (`.btn-on-teal`): the cream button used on the final-cta drenched ground. Bone Paper background, Inkstone Teal text, slightly larger padding (`1rem 1.5rem`). Hover: lift 1px + the CTA-wash shadow.
- **Nav CTA** (`.btn.nav-cta`): tighter padding (`0.5rem 1.1rem`), Inkstone Teal background, no rest shadow. Hover adds a small soft shadow and a 1px lift.

### Eyebrow Label (signature)

The system's most-used ornamental element: an uppercase Inter 0.78rem label, letter-spacing 0.18em, in Inkstone Teal, preceded by a 1.6em-wide 1px rule in the same color. The rule is part of the element, not a separator. Used to mark section identity ("Independent fiduciary · Tavernier, Florida"), credential strips, and ornamental headers. A `.plain` variant drops the leading rule.

### Cards / Containers

Two card patterns; both flat at rest.

- **Portrait card** (`.portrait-photo`): 4:5 aspect ratio, `object-fit: cover` with `object-position: center 18%` (frames the face), 1px Hairline border, `border-radius: 2px`. A `.portrait-caption` sits below with name (Inter 500, Wet Slate), affiliation line, and a coordinate field (`.caption-coord` in mono, separated by a 1px Hairline rule).
- **State-info card** (`.state-info`): 1.25–1.75rem padding, 1px Hairline border, `border-radius: 4px`, Sun-bleached Cream background, sticky on desktop (`top: 5.5rem`). Internal structure: mono eyebrow → Fraunces state name with italic accent → status rows (label-left in body weight, mono value-right) divided by Dock Rule borders → italic Fraunces footnote anchored to bottom.

There is no generic "card" component. New surfaces that need elevation should pick one of these two patterns or be a new named component.

### Map Tiles (signature)

The licensing map is the system's centerpiece component — a 11×N grid of `clamp(38px, 5.5vw, 58px)` squares with `clamp(4px, 0.55vw, 7px)` gap. Each tile is a 3px-radius square with a 1px Dock Rule border, body-weight letter-spaced state abbreviation, default Driftwood Gray text. Active states:

- `data-active="sec"` — Mangrove Teal fill, Salt Paper text (securities licensed)
- `data-active="ins"` — Late-Afternoon Gold fill, dark ink text (insurance licensed)
- `data-active="both"` — diagonal split-gradient (Mangrove 0–49%, Gold 51–100%) with a faint text-shadow for legibility
- `.is-current` — paper-gap + Inkstone Teal ring (or Brass Buoy Gold ring for insurance-only)

Hover/focus on any active tile lifts 2px and adds the Tile Lift shadow. Inactive tiles remain non-interactive.

### Transient Links (`.tlink`)

Inline text links with a 1px Dock Rule baseline that becomes Inkstone Teal on hover. A trailing arrow character (`→`) lives in a `.arrow` span and translates 3px to the right on hover via a 0.25s ease. Used for "Read about Alissa" and similar secondary navigation gestures.

### Process Steps (signature)

A vertical list separated by Dock Rule top borders. Each step is a two-column grid: a marker column (`clamp(8rem, 12vw, 11rem)`) holding an italic Fraunces ordinal (Inkstone Teal, `clamp(2.5rem, 3.5vw + 0.5rem, 4rem)`, line-height 0.82) and a mono meta tag, and a body column holding the step title (Fraunces with italic accent), prose (`max-width: 54ch`), and an optional italic Fraunces aside. The first step gets a slight ordinal/title size bump (`.process-step--lead`).

### Navigation

Sticky top nav, `z-index: 50`. At the top of the page: backdrop-filter blur 10px + saturate 1.05 over a 78%-opacity cream background, with a transparent bottom border. After 8px of scroll, the `.scrolled` class swaps to a solid Sun-bleached Cream background with a Hairline bottom border (state managed by a 4-line inline script in `BaseLayout.astro`). Wordmark in Fraunces 1.1875rem with an italic `.a` accent; nav links in Inter 0.875rem Wet Slate. The CTA is a smaller, denser Inkstone Teal pill.

### Monogram Mark (signature)

A signature stroke-drawn SVG monogram (the "A" and "W") on the home page top. Strokes use `var(--teal-deep)`, vary in weight (`stroke-width` 7 for the main, 5.4 for the crossbar, 3 for serif decorations), and animate on load via a four-stage `stroke-dashoffset` sequence at 0s/0.35s/0.6s/0.9s. The serif decoration fades in after the strokes complete. The whole animation is wrapped in `@media (prefers-reduced-motion: no-preference)` — reduced-motion users see the final state instantly.

## 6. Do's and Don'ts

### Do:

- **Do** ground every page in Sun-bleached Cream `oklch(96.5% 0.011 85)`. Cards and the footer use Bone Paper `oklch(98% 0.007 85)` when they need to read as a separate surface.
- **Do** use Mangrove Teal (`oklch(43% 0.065 195)`) as the only accent that carries voice; reserve gold for the licensing map only.
- **Do** add emphasis inside Fraunces headlines via the italic variation axis (`'opsz' 144, 'SOFT' 100, 'wght' 360`) and a shift to Inkstone Teal — and only on one or two words per headline.
- **Do** treat 1px Hairline (`oklch(86% 0.012 90)`) and Dock Rule (`oklch(74% 0.014 90)`) as the primary separators between sections, cards, and process steps.
- **Do** use mono only for coordinates, CRD/license codes, tile counts, and process-step meta. Always uppercase, always letter-spaced 0.14em–0.18em.
- **Do** cap body paragraphs at 38–54ch. Pull quotes and process prose live at the tighter end.
- **Do** add the eyebrow-with-leading-rule pattern (`.eyebrow`) wherever a section needs an identity stamp.
- **Do** use the pill (`border-radius: 999px`) as the through-line for every button variant.
- **Do** respect `prefers-reduced-motion: reduce` — animations and the monogram draw must yield instantly.

### Don't:

- **Don't** use pure black (`#000`) or pure white (`#fff`) anywhere. Neutrals tint warm (hue 85–90) for paper and cool (hue 200) for ink.
- **Don't** introduce navy and gold as a paired palette — that is the exact big-bank visual language this site rejects. Gold appears alone, and only in the licensing legend.
- **Don't** use stock photography of handshakes, beach sunsets, palm trees, or generic "advisor in a suit" imagery. The only photograph in the system is Alissa's portrait, framed by a 1px Hairline border at 2px radius.
- **Don't** use circular headshots, gradient buttons, or testimonial carousels with star ratings — that is the suburban-realtor register, equally rejected.
- **Don't** use a hero-metric template (big number + small label + supporting stats with a gradient accent). The hero is a sentence, not a billboard.
- **Don't** use gradient text or `background-clip: text`. Emphasis is italic + Inkstone Teal, nothing else.
- **Don't** add `border-left` or `border-right` greater than 1px as a colored stripe on cards or callouts. Separation is hairline-and-paper, never stripe-and-fill.
- **Don't** add decorative glassmorphism beyond the navigation's one functional blur. Backdrop-filter is a navigation utility, not a card style.
- **Don't** stack cards inside cards. Nested cards are always wrong.
- **Don't** use Fraunces for paragraph copy — it is the display voice. Use Inter for anything that must *read* rather than *speak*.
- **Don't** use mono for running prose. Mono is the record-keeping hand, never the narrative hand.
- **Don't** add em dashes (`—` or `--`) to copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** ship a component without `:focus-visible` styling. Outlines are 2px Inkstone Teal (or Brass Buoy Gold on insurance-state tiles) offset 3–4px from the element. No colored blur glows.
- **Don't** convert "deliberate" into "thoughtful," "intentional," or any softer synonym. The site's voice is specific; protect the words.
