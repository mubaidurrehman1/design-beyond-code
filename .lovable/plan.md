## What I'll build

A one-page portfolio at `/` that faithfully ports the Scrapbook Editorial direction you picked, populated with the real content from your resume. No traditional dev-template tropes — every section carries a decorative, hand-crafted detail.

## Sections

1. **Nav** — `M.U.R / portfolio` wordmark + Work / Stack / Contact, accent-underlined active link.
2. **Hero** — oversized Fraunces display name ("Muhammad Ubaid *ur* Rehman"), "Available" pill with pulse, hand-script "hello!", short intro, three mono meta lines, and a tilted portrait card with an off-axis stamp ring ("Designed by hand") and a tape strip.
3. **Selected Works** — torn-edge dark `ink` section, four real projects in a staggered 2-col grid:
   - Intelligent PDF Search Engine
   - Full-Stack Blog Application
   - Web Maze Game
   - Currency Converter

   Each card has a **custom illustrated cover built in SVG/CSS** (a UI mock with a query bar, an editorial issue cover, an actual SVG maze with a player dot, and a typographic currency conversion) — no stock images, no generic icons. GitHub link → arrow button.
4. **Marquee** — slow italic Fraunces band of phrases (Front-end · Full-stack · React · Node …) divided by custom star glyphs.
5. **The bench (Stack)** — editorial table style: row per group (Languages / Frontend / Backend / Data / Tools) with serif tokens separated by accent dots. Plus an Education card for IIU Islamabad with a rotated "B.S. C.S." stamp and two small certification chips.
6. **Open Envelope (Contact)** — rotated terracotta card with email, GitHub, LinkedIn, phone from your resume, "— Ubaid" hand-script sign-off, decorative tag.
7. **Footer** — colophon ("Set in Fraunces & Inter — printed digitally in Islamabad").

## Designer details (the things that make it not feel AI-slop)

- **Custom SVG icon set**: asterisk, scribble arrow, 5-point star, dashed stamp ring — drawn inline, not Lucide defaults.
- **Paper grain**: subtle SVG noise overlay using `mix-blend-multiply`.
- **Torn paper edge** between hero and projects via `clip-path`.
- **Tape, stamps, rotated stickers** at intentional, sparse moments only.
- **Hand-script accents** in Caveat for "hello!", "~ that's me.", "— Ubaid".
- **Illustrated project covers** rendered with CSS/SVG so they're crisp and on-brand instead of generic screenshots.

## Design tokens (added to `src/styles.css`)

```text
--paper  cream  oklch(0.962 0.012 80)   → background
--ink    near-black oklch(0.241 0 0)    → foreground
--accent terracotta oklch(0.652 0.165 41)
--muted  warm sand
--font-serif Fraunces · --font-sans Inter · --font-hand Caveat · --font-mono JetBrains Mono
```

All colors live as semantic tokens; components use `bg-paper`, `text-ink`, `text-accent`, etc.

## Files touched

- `src/styles.css` — new color tokens, font registration, paper-texture + torn-edge utilities, marquee keyframes.
- `src/routes/index.tsx` — full page implementation (replaces placeholder).
- `src/assets/portrait.jpg` — already generated (warm vintage-style portrait for the hero card).

## What I'm not doing

- No backend, no Lovable Cloud, no forms — contact info is direct links per your resume.
- No additional routes (single-page portfolio matches the chosen direction).
- No image generation for project covers — handcrafted SVG/CSS illustrations are more designer-y and load instantly.
