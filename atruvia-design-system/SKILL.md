---
name: atruvia-design
description: Use this skill to generate well-branded interfaces and assets for Atruvia AG (digitalisation partner of the cooperative Volksbanken Raiffeisenbanken FinanzGruppe), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. Link the root
`styles.css` to inherit all brand tokens, and mount the React components from
`_ds_bundle.js` (namespace `AtruviaDesignSystem_79ca21` on `window`). If working
on production code, copy assets and read the rules here to become an expert in
designing with this brand.

Key things to honour (full detail in `readme.md`):
- **Voice:** warm, human, plain-spoken German with inclusive `*innen` forms;
  "du"/"wir"; staccato triads ("einfach. sicher. digital."); **no emoji**.
- **Visuals:** the **VIA Line** gradient (blue→magenta) as the connecting motif;
  soft rounding meeting occasional sharp cuts; clean white/light surfaces; Ink
  for dark sections; soft cool shadows; smooth, never-bouncy motion.
- **Substitutions flagged:** colours reconstructed, typeface = Hanken Grotesk,
  icons = Lucide, logo = typographic placeholder. See `readme.md` § Caveats and
  `assets/brand-assets.md` to swap in official assets.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
