# UI Kit — Atruvia Corporate Website

An interactive, high-fidelity recreation of the **atruvia.de** corporate site,
built from the design-system primitives. It demonstrates the brand's voice,
the VIA-Line motif, the proof-number band, the services grid and the Ink footer.

## Files
- `index.html` — the runnable kit. Two pages (Startseite / Leistungen) with a
  working mobile menu and a contact dialog. Loads `_ds_bundle.js` + `sections.jsx`.
- `sections.jsx` — all section components, exported on `window`:
  `SiteHeader, Hero, StatsBand, ServicesSection, ConnectionBand, MagazineSection, SiteFooter`.

## Composition
Sections compose the primitives (`Button`, `Card`, `Badge`, `Logo`, `Input`,
`Dialog`) rather than re-implementing them. Inline `Icon` uses Lucide-style
strokes (the substitute icon set — see root `readme.md` § Iconography).

## ⚠ Placeholders
- **Photography** is shown as labelled `▢ Bild: …` placeholder blocks — the real
  atruvia.de images are hotlink-protected and could not be downloaded. Drop real
  images in and replace the `<Photo>` blocks (see `assets/brand-assets.md`).
- **Logo** is the typographic wordmark placeholder.
- Content/copy is real, lifted from atruvia.de (history, services, proof numbers).

## Recreated vs. omitted
Recreated: sticky translucent header, gradient hero with stat chip, dark stats
band, 6-card services grid, centred connection statement, 3-card news teasers,
multi-column Ink footer. Omitted (not enough source detail): mega-menu flyouts,
cookie-consent modal, full article templates.
