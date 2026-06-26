# Atruvia Design System — for `teach`

Every lesson and reference document this skill produces is built on the
**Atruvia Design System**. This folder is the self-contained, offline copy
that `teach` ships with. Source: <https://github.com/atruvia/design-system>.

The point: a learner returns to these lessons again and again, so they must
look like **one coherent, beautiful course** — not a pile of one-offs. The
Atruvia system is that visual foundation.

## What's in this folder

```
design-system/
  colors_and_type.css   ← brand tokens (CSS vars) + the Atruvia webfont. Verbatim upstream.
  lessons.css           ← teach's shared stylesheet. Imports the tokens, adds
                          teaching components. THIS is the file lessons link.
  quiz.js               ← zero-dependency retrieval-practice quiz widget.
  lesson-template.html  ← a starter lesson in the full Atruvia brand. Copy it.
  fonts/                ← the four Atruvia woff2 weights (Light/Regular/Medium/Bold).
  brand/                ← atruvia-logo.svg, via-line.svg (the connector), via-mark.svg.
  DESIGN-SYSTEM.md      ← you are here.
```

## Install into a teaching workspace (do this once per workspace)

Copy the whole folder into the workspace's assets, then build from it:

```sh
mkdir -p assets
cp -R "<this skill>/design-system" assets/design-system
```

After that, **every lesson and reference document links one stylesheet**:

```html
<link rel="stylesheet" href="../assets/design-system/lessons.css">
<!-- add at the end of <body> if the lesson uses a quiz: -->
<script src="../assets/design-system/quiz.js"></script>
```

`lessons.css` `@import`s `colors_and_type.css`, which loads the Atruvia fonts
from `fonts/` via relative URLs — so it all works offline, no CDN needed.
Don't re-link `colors_and_type.css` separately; `lessons.css` already pulls it in.

The fastest way to start a lesson is to **copy `lesson-template.html`** into
`./lessons/0001-<name>.html` and replace the placeholders.

## Tokens — use these, never invent

Read `colors_and_type.css` for the full set. The ones you reach for most:

| Token | Value | Use |
|---|---|---|
| `--atr-navy` | `#000064` | Headlines **and** body text, logo, icons |
| `--atr-blue` | `#0a5ae1` | Links, eyebrows, primary buttons |
| `--atr-coral` | `#fd5f4c` | **The VIA Line only** — never for text or borders |
| `--atr-surface-cyan` | `#d4f2f5` | Callout / section backgrounds |
| `--atr-blue-soft` | `#e8f0fc` | Primary-source box background |
| `--font-display` / `--font-body` | Atruvia (Manrope fallback) | All type |
| `--space-1 … --space-10` | 4 → 128px | Spacing — snap to these, base unit 8 |
| `--r-md` / `--r-lg` / `--r-pill` | 8 / 12 / 999px | Cards / callouts / buttons |

Type: page titles / `h1` are **Light 300** (airy); section `h2`/`h3` are
**Bold 700**; body is **400, 18px, line-height 1.5**, navy.

## Components in `lessons.css`

| Class | Purpose |
|---|---|
| `.lesson`, `.reference` | The readable centered surface (Tufte measure) |
| `.lesson__eyebrow` / `.atr-hero` / `.lesson__lead` | Header: mission kicker → Light title → why |
| `.objectives` | "Das kannst du danach" list, coral square markers |
| `.callout` / `.callout--note` | Key-insight box (cyan-soft) / neutral note |
| `.primary-source` | The one best resource to read/watch next |
| `.cite` | Inline citation that backs up a claim |
| `.quiz` (+ `quiz.js`) | Retrieval-practice MCQ with instant feedback |
| `.ask-teacher` | Closing reminder to ask the agent (the teacher) |
| `.btn` / `.btn--primary` / `.btn--ghost` | Navy pill / outline buttons |
| `.lesson__nav` | Prev / next / reference footer links |
| `.via-line` (+ `--draw`) | The VIA Line graphic; `--draw` animates the stroke |

## The VIA Line — the signature device

A continuous **coral** (`#fd5f4c`) stroke, 3–4px, round caps, that *connects*
two ideas (mixing angular segments and soft curves: people + technology). Use
it as a section divider that means something — connect the two concepts a
lesson bridges. Inline the path (see the template) or drop in `brand/via-line.svg`.
It is a **graphic, not a border** — never recolor it navy or blue.

## Brand voice — FULL Atruvia brand (chosen for this skill)

Lessons read like Atruvia surfaces. Apply consistently:

- **German**, first-person plural **»Wir«**, informal **»du«** (dir/dich).
- **Gender-Stern**: *Kund\*innen, Mitarbeiter\*innen, Kolleg\*innen, Lernende*.
- **»German guillemets«** for quotes — never "straight" or "curly".
- **Short, declarative, calm.** No exclamation points, no hype, no marketing-speak.
- **No emoji. No Unicode glyphs as icons** (no ▸ ★ ✓). Draw markers in CSS, or use Lucide (1.5px) if real icons are needed.
- Sentence case for headlines; the logo is the rare uppercase **ATRUVIA**.

If a learner needs English (or the topic is inherently English, e.g. code
keywords), keep the same calm, plural, understated register — *"We connect.
For each other."*

## Caveats (inherited from upstream — flag, don't hide)

- The four Atruvia **fonts are vendored** and load offline. If they're ever
  missing, `colors_and_type.css` swaps to **Manrope**.
- The **mono** face is **JetBrains Mono** (substitute) — fine for code in lessons.
- Photography is out of scope here; lessons are type-, token- and VIA-line-led.
