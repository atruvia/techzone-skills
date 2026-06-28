# Atruvia Design System — for `teach`

Every lesson and reference document this skill produces is built on the
**Atruvia Design System**. This folder is the self-contained, offline copy
that `teach` ships with — vendored from the upstream
[`atruvia-design-system`](../../atruvia-design-system) skill (palette extracted
from the live atruvia.de stylesheet; official ATRUVIA / VIA Type webfont).

The point: a learner returns to these lessons again and again, so they must
look like **one coherent, beautiful course** — not a pile of one-offs. The
Atruvia system is that visual foundation.

## What's in this folder

```
design-system/
  tokens/               ← the Atruvia design tokens (CSS custom properties), verbatim upstream:
    colors.css            palette + semantic aliases (--text-*, --surface-*, --border-*, --action-*)
    typography.css        ATRUVIA families, type scale, weights, semantic roles
    spacing.css           8px spacing ramp + layout (--container-*, --gutter)
    radius.css            corner radii (soft curves + angular cuts)
    shadows.css           soft, cool-tinted elevation
    motion.css            easing + durations (smooth, never bouncy)
    base.css              element resets + brand helpers (.atr-eyebrow, .atr-via-line, .atr-container)
  fonts/                ← fonts.css (@font-face) + the 7 official VIA Type woff2 cuts
                          (Light/Regular/Medium/SemiBold/Bold/Display + Mono).
  brand/                ← atruvia-logo.svg, via-line.svg (the gradient connector), via-mark.svg.
  lessons.css           ← teach's shared stylesheet. Pulls in the tokens + fonts and adds
                          the teaching components. THIS is the file lessons link.
  quiz.js               ← zero-dependency retrieval-practice quiz widget.
  lesson-template.html  ← a starter lesson in the full Atruvia brand. Copy it.
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

`lessons.css` `@import`s the tokens and `fonts/fonts.css`, which loads the
official ATRUVIA fonts from `fonts/` via relative URLs — so it all works
offline, no CDN needed. Don't re-link the token files separately; `lessons.css`
already pulls them all in.

The fastest way to start a lesson is to **copy `lesson-template.html`** into
`./lessons/0001-<name>.html` and replace the placeholders.

## Tokens — use these, never invent

Read the files in `tokens/` for the full set. The ones you reach for most:

| Token | Value | Use |
|---|---|---|
| `--text-strong` | `#000064` (navy) | Headlines, strong text, logo, icons |
| `--text-body` | `#3a3a44` (grey) | Body copy (long-form reading) |
| `--text-link` | `#0a5ae1` (blue) | Links, eyebrows, primary action |
| `--atr-via-gradient` | navy → blue → aqua | **The VIA Line only** — never for text or borders |
| `--surface-brand-subtle` | `#d4f2f5` (aqua) | Callout / brand section backgrounds |
| `--atr-blue-050` | `#e9f1fe` | Primary-source box background |
| `--surface-inverse` | `#000064` | Navy panels (the "ask your teacher" box) |
| `--font-display` / `--font-sans` | ATRUVIA (system-ui fallback) | All type |
| `--space-1 … --space-12` | 4 → 128px | Spacing — snap to these, base unit 8 |
| `--radius-md` / `--radius-lg` / `--radius-pill` | 12 / 18 / 999px | Inputs / cards & callouts / pills |
| `--focus-ring` | 3px blue halo | Every focusable control |

Type: lesson titles use the **Display cut (800)** — set `.lesson__title`;
section `h2`/`h3` are **Bold 700** navy; body is **400, 18px, line-height 1.65**
in `--text-body`. Eyebrows/overlines are **uppercase, wide-tracked, semibold**,
in blue.

## Components in `lessons.css`

| Class | Purpose |
|---|---|
| `.lesson`, `.reference` | The readable centered surface (Tufte measure) |
| `.lesson__eyebrow` / `.lesson__title` / `.lesson__lead` | Header: mission kicker → Display title → why |
| `.objectives` | "Das kannst du danach" list, VIA-gradient square markers |
| `.callout` / `.callout--note` | Key-insight box (aqua) / neutral note (polar) |
| `.primary-source` | The one best resource to read/watch next |
| `.cite` | Inline citation that backs up a claim |
| `.quiz` (+ `quiz.js`) | Retrieval-practice MCQ with instant feedback |
| `.ask-teacher` | Closing reminder to ask the agent (the teacher) |
| `.btn` / `.btn--primary` / `.btn--ghost` | Blue pill / outline buttons |
| `.lesson__nav` | Prev / next / reference footer links |
| `.via-line` (+ `--draw`) | The VIA Line graphic; `--draw` animates the stroke |

## The VIA Line — the signature device

A continuous stroke (3–4px, round caps) painted with the official **VIA
gradient** — navy → action-blue → aqua (`--atr-via-gradient`) — that *connects*
two ideas (mixing angular segments and soft curves: people + technology). Use
it as a section divider that means something — connect the two concepts a
lesson bridges. Inline the connector path (see the template) or drop in
`brand/via-line.svg`. It is a **graphic, not a border** — never repaint it a
flat colour. (Coral is reserved for danger/accent, not the VIA Line.)

## Brand voice — FULL Atruvia brand (chosen for this skill)

Lessons read like Atruvia surfaces. Apply consistently:

- **German**, first-person plural **»Wir«**, informal **»du«** (dir/dich).
- **Gender-Stern**: *Kund\*innen, Mitarbeiter\*innen, Kolleg\*innen, Lernende*.
- **»German guillemets«** for quotes — never "straight" or "curly".
- **Short, declarative, calm.** No exclamation points, no hype, no marketing-speak.
- **No emoji. No Unicode glyphs as icons** (no ▸ ★ ✓). Draw markers in CSS, or use the Atruvia icon sprite if real icons are needed.
- Sentence case for headlines; the logo is the rare uppercase **ATRUVIA**.

If a learner needs English (or the topic is inherently English, e.g. code
keywords), keep the same calm, plural, understated register — *"We connect.
For each other."*

## Caveats (inherited from upstream — flag, don't hide)

- The official **ATRUVIA / VIA Type** family is vendored (7 cuts) and loads
  offline. If the woff2 files are ever missing, the stack falls back to
  **system-ui** (no web fallback font is fetched — fully offline).
- The **mono** face is **ATRUVIA Mono** — fine for code in lessons.
- Photography is out of scope here; lessons are type-, token- and VIA-line-led.
