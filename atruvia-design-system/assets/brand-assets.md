# Atruvia assets — manual upload checklist

> ✅ **All assets received and wired in** (fonts, logos, icon sprite, full photo
> set) and the palette is now extracted verbatim from the live `main.css`
> (kept at `assets/brand/atruvia-site.css`). This checklist is retained for
> provenance / re-import. Nothing outstanding.

My build sandbox **cannot download binary files** from atruvia.de (cross-origin),
and the site's images are hotlink-protected, so they can't be referenced live
either. To make the design system **fully self-hosted and pixel-faithful**, please
download each file below and upload it to the **exact destination path** shown via
the Import/upload menu. I'll then wire them in and switch the system from
"substitute" to "official".

Priority key:  🔴 critical (defines fidelity) · 🟠 high · 🟢 nice-to-have
Every destination path is project-root absolute (starts with `/`).

---

## ✅ 1. Typeface — "ATRUVIA" (custom, licensed)
The real Atruvia corporate typeface, self-hosted in `assets/fonts/`. The brand
ships **four real weights** (confirmed against the live atruvia.de stylesheet,
`assets/brand/atruvia-site.css`). `fonts/fonts.css` declares the `ATRUVIA` family.
- [x] `/assets/fonts/VIAType-Light.woff2`      — Light (300)
- [x] `/assets/fonts/VIAType-Regular.woff2`    — Regular (400)
- [x] `/assets/fonts/VIAType-Medium.woff2`     — Medium (500)
- [x] `/assets/fonts/VIAType-Bold.woff2`       — Bold (700)
- there is **no separate SemiBold / Display / Mono cut** in the brand — weight
  600 and 800 reuse the real Bold, and `--font-mono` is a system mono stack.
> Earlier this folder held placeholder `VIAType-*.woff2` files that were actually
> HTML pages (not fonts); they have been replaced with the real WOFF2 weights.

## 🔴 2. Exact colours / Corporate Design manual
To confirm the interactive + gradient hues (I have only the 3 anchor colours).
- [ ] `/assets/brand/atruvia-cd-manual.pdf`    — CD/brand manual (colour page), **or**
- [ ] `/assets/brand/atruvia-site.css`         — the compiled site CSS file
- [ ] (note in PR) exact VIA-Line gradient stops
- [ ] (note in PR) accent/semantic colours (success/warning/error) if brand-defined
> Confirmed so far: Navy `#000064`, Chambray `#325688`, Polar `#F2FAFC`.

## 🔴 3. Logos (SVG)
| Destination path | Download from |
|---|---|
| `/assets/logos/atruvia-wordmark.svg` | https://atruvia.de/assets/images/logo.f03d21dd9d.svg |
| `/assets/logos/finanzgruppe.svg` | https://atruvia.de/assets/images/logo-finanzgruppe.88f35eb4db.svg |
| `/assets/logos/finanzgruppe-inverted.svg` | https://atruvia.de/assets/images/logo-finanzgruppe-inverted.f8d3efcaa0.svg |
| `/assets/logos/favicon.ico` | https://atruvia.de/favicon.ico |

---

## 🟠 4. Icon set
The site's UI icons could not be located as files. Provide whichever applies:
- [ ] `/assets/icons/atruvia-icons.svg`        — the icon **SVG sprite**, **or**
- [ ] `/assets/icons/` (folder)                — individual icon SVGs, **or**
- [ ] Confirmation we may keep the **Lucide** substitute (current default)

## 🟠 5. Key photography (hero + lead images)
| Destination path | Download from |
|---|---|
| `/assets/photos/hero-hub.jpg` | https://atruvia.de/uploads/images/_stageXxl/JPG-PowerPoint-Kollegen-sitzen-mit-Tablet-vor-dem-Hub.jpg |
| `/assets/photos/portrait-stage.jpg` | https://atruvia.de/uploads/images/_stageXxl/JPG-PowerPoint-Portrait-45.jpg |
| `/assets/photos/team.jpg` | https://atruvia.de/uploads/images/_stageXxl/GettyImages-1092323244.jpg |
| `/assets/photos/data-centre.jpg` | https://atruvia.de/uploads/images/_teaserImageXl/JPG-PowerPoint-Moderner-Rechenzentrumsraum.jpg |
| `/assets/photos/business-woman.jpg` | https://atruvia.de/uploads/images/Veranstaltungen/_640xAUTO_crop_center-center_none/JPG-PowerPoint-Geschaeftsfrau-im-Buero.jpg |
| `/assets/photos/julia-cutout.png` | https://atruvia.de/uploads/images/_personCutOutXl/jules_high.png |

## 🟢 6. Magazine / news teasers
| Destination path | Download from |
|---|---|
| `/assets/photos/magazine-1.jpeg` | https://atruvia.de/uploads/images/_teaserImageXl/IMG_4527.jpeg |
| `/assets/photos/magazine-2.jpg` | https://atruvia.de/uploads/images/_teaserImageXl/nBM.jpg |

## 🟢 7. Heritage / history imagery (monochrome/archival)
| Destination path | Download from |
|---|---|
| `/assets/photos/history/kabel-anschluss.jpg` | https://atruvia.de/uploads/images/_teaserImageS/Kabel-Anschluss.jpg |
| `/assets/photos/history/bankboy-1979.jpg` | https://atruvia.de/uploads/images/Geschichte/_contentImageS/1979_Bankboy_GAD.jpg |
| `/assets/photos/history/datenerfassung-1979.jpg` | https://atruvia.de/uploads/images/Karriere/_contentImageS/1979_Datenerfassung-Kassette.jpg |
| `/assets/photos/history/konsole-1.jpg` | https://atruvia.de/uploads/images/Geschichte/_contentImageS/Konsole-1.jpg |
| `/assets/photos/history/bueroszenen.jpg` | https://atruvia.de/uploads/images/Geschichte/_contentImageS/JPG-PowerPoint-Bueroszenen.jpg |
| `/assets/photos/history/btx.jpg` | https://atruvia.de/uploads/images/Geschichte/_contentImageS/BTX.jpg |
| `/assets/photos/history/leitstand-ms.jpg` | https://atruvia.de/uploads/images/Geschichte/_contentImageS/Leitstand-in-MS.jpg |
| `/assets/photos/history/ec-cash.jpg` | https://atruvia.de/uploads/images/Geschichte/_contentImageS/EC-Cash.jpg |
| `/assets/photos/history/konsole-2.jpg` | https://atruvia.de/uploads/images/_gallery/Konsole-2.jpg |
| `/assets/photos/history/konsole-158-mp.jpg` | https://atruvia.de/uploads/images/_gallery/Konsole-158-MP.jpg |
| `/assets/photos/history/konsole-158-mp-2.jpg` | https://atruvia.de/uploads/images/_gallery/Konsole-158-MP-2.jpg |
| `/assets/photos/history/plattenkonfiguration.jpg` | https://atruvia.de/uploads/images/_gallery/Plattenkonfiguration.jpg |
| `/assets/photos/history/potterbaender.jpg` | https://atruvia.de/uploads/images/_gallery/Potterbaender.jpg |
| `/assets/photos/history/technischer-dienst.jpg` | https://atruvia.de/uploads/images/_gallery/Technischer-Dienst.jpg |
| `/assets/photos/history/mp-uebernahme.jpg` | https://atruvia.de/uploads/images/_gallery/MP-Uebernahme-Back-up-alte-158-UP.jpg |

---

## How to upload
Use the project's **Import / upload** menu and place each file at the exact
destination path above. After fonts land, I switch `fonts/fonts.css` from the CDN
`@import` to the self-hosted `@font-face` block; after logos/photos land, I
repoint the `<Photo>`/logo placeholders to the local paths. The fastest single
win is **#1 (VIA Type)** + **#3 (logos)**.
