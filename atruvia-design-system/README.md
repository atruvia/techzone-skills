# Atruvia Design System

Selbst hostbares **Marken-Designsystem der Atruvia AG** – des
Digitalisierungspartners der **Genossenschaftlichen FinanzGruppe Volksbanken
Raiffeisenbanken**: Design-Tokens, React-UI-Komponenten, Marken-Assets und
Richtlinien für die Entwicklung markengerechter Oberflächen. Es bündelt
Typografie, Farbsystem, Spacing, Motion und vollflächige Produkt-Nachbauten,
damit Design-Agents marken­konforme Interfaces und Assets erzeugen können.

> **Status: vollständig auf offiziellen Markenassets.** Schriften, Logos,
> Icon-Sprite und Fotografie sind eingebunden; die Farbwerte sind direkt aus dem
> Live-Stylesheet (`main.css`) von atruvia.de extrahiert. Verbleibende
> Kleinigkeiten sind unter **§ 6 Hinweise & offene Punkte** vermerkt.

---

## 1. Unternehmens- & Markenkontext

Die Atruvia AG entstand am **1. September 2021** aus der Fusion der **Fiducia &
GAD IT AG** und positionierte sich neu – vom „IT-Dienstleister“ zum
**„Digitalisierungspartner“** innerhalb der Genossenschaftlichen FinanzGruppe.
Die Wurzeln reichen bis **1924** (Gründung der Fiducia in Karlsruhe) und **1963**
(GAD in Münster) zurück – über ein Jahrhundert Banken-IT-Erfahrung.

- **Leistungen:** Betrieb von Hochsicherheits-Rechenzentren und des
  Bankverfahrens (historisch *agree21*, heute im Umbau zur offenen,
  cloud-basierten Plattformarchitektur), Entwicklung der **VR-BankingApp** sowie
  Betrieb von Geld-/Selbstbedienungs­geräten für die Genossenschaftsbanken.
- **Größenordnung:** ~8.400 Mitarbeiter*innen; ~1,77 Mrd. € Konzernumsatz;
  ~820 Volksbanken und Raiffeisenbanken sowie Privatbanken und weitere
  Unternehmen (u. a. ADAC) als Kund*innen; ~91 Millionen Konten und ~153.000
  Bankarbeitsplätze.
- **Markenidee (KMS Team, 2021):** *„Wir verbinden. Füreinander.“* Die Marke
  vereint zwei Welten: **gemeinschaftliches, menschliches, genossenschaftliches
  Denken** und **wegweisende Finanztechnologie**. Visuell ausgedrückt durch
  **weiche Rundungen, die auf eckige Details treffen** – Mensch + Technologie.
- **Die „VIA-Line“:** das zentrale, prägende Gestaltungselement – eine
  verbindende Linie, die Komponenten, Abschnitte und Ideen miteinander verknüpft.
  Sie ist das visuelle Rückgrat der Identität (und inspirierte sogar den „Via
  Sound“ der Audio-Identität).
- **Positionierungs-Wörter von der Website:** *Smart. Agil. Bewusst. Effizient.
  Interaktiv. Intuitiv.* Claim-Cluster: *einfach. sicher. digital.*

### Verwendete Quellen
Die folgenden Quellen wurden zum Aufbau genutzt und sind zur Nachvollziehbarkeit
dokumentiert.

- **Live-Unternehmenswebsite:** https://atruvia.de (und `/en`)
- **Unternehmensgeschichte (Texte + Fotografie):**
  https://atruvia.de/unternehmen/unternehmensgruppe/geschichte
- **Live-Stylesheet** (Farb-Extraktion): eine Kopie liegt unter
  `assets/brand/atruvia-site.css`.
- **Markenstrategie / Identitäts-Hintergrund:** KMS-Team-Case-Study
  (kms-team.com/en/cases/atruvia), German Brand Award, REBRAND.
- **Offizielle Assets bereitgestellt:** ATRUVIA-Schriftfamilie, Logo-SVGs,
  Icon-Sprite und Fotografie (alle in `assets/`).

---

## 2. INHALTLICHE GRUNDLAGEN — wie Atruvia schreibt

**Tonalität:** warm, menschlich, selbstbewusst, klar. Stolz auf die Tradition,
aber zukunftsgewandt. Technologie steht immer im Dienst des Menschen („Human in
the Loop“, *„Mensch und Maschine im Tandem“*). Vermeidet Hype und Fachjargon;
erklärt verständlich.

- **Ansprache:** direkt und informell – das deutsche **„du“** („Geh mit uns auf
  eine Zeitreise“). Über das Unternehmen wird in der **„wir“**-Form gesprochen.
- **Groß-/Kleinschreibung:** normale Schreibung in Fließtext und den meisten
  Überschriften. Die Wortmarke **ATRUVIA** steht in Versalien (nur im Logo).
  Kurze, staccato-artige Adjektiv-Dreiklänge sind ein Motiv: *„einfach. sicher.
  digital.“* – kleingeschrieben, mit Punkten zwischen Einzelwörtern.
- **Satzrhythmus:** mischt prägnante Fragmente mit längeren, erklärenden
  Absätzen. Mag Kontrastpaare („traditionell und innovativ, eckig und rund“).
- **Inklusive Sprache:** durchgängig gendersensibel mit Asterisk –
  **„Mitarbeiter\*innen“, „Kund\*innen“, „Berater\*innen“** (es gibt einen
  eigenen *Gender-Hinweis*). Bei deutschen Texten unbedingt übernehmen.
- **Emoji:** **werden nicht verwendet** in der Unternehmens­kommunikation.
- **Zahlen als Beleg:** große, runde Zahlen als Vertrauenssignal – „91 Millionen
  Konten“, „153.000 Bankarbeitsplätze“. Deutsche Zahlenformatierung (Punkt als
  Tausender-, Komma als Dezimaltrennzeichen): `26,5 %`, `1,77 Milliarden`.
- **Ton-Beispiele (wörtlich):**
  - *„Keine Zukunft ohne Wandel.“*
  - *„Wir verbinden. Füreinander.“*
  - *„Banking muss einfach und sicher sein.“*
  - *„Das Beständige bleibt der Wandel.“*

**Do:** Menschen und Sinn voranstellen; konkrete Belege nutzen; einfach, sicher,
menschlich bleiben. **Don’t:** Buzzwords stapeln, bei KI überversprechen
(„ersetzen kann und soll KI den Menschen nicht“), Emoji verwenden oder den
inklusiven Asterisk im Deutschen weglassen.

---

## 3. VISUELLE GRUNDLAGEN

**Das Kernmotiv – Rundungen + Kanten.** Alles balanciert weiche, großzügige
Rundung (menschlich) gegen vereinzelte scharfe, eckige Details (Technologie). Die
Eckenradien sind überwiegend groß; einige Akzente bleiben bewusst scharf
(`--radius-none`). Die **VIA-Line** (eine dünne, gerundete Verlaufslinie) ist das
wiederkehrende Verbindungselement – unter Überschriften, zwischen Abschnitten,
zur Darstellung von Beziehungen.

**Farbe.** Aus dem Live-`main.css` extrahiert:
- **Navy** (`--atr-ink-900` = `#000064`) – primäre Markenfarbe / Ink / dunkle
  Flächen.
- **Blau** (`--atr-blue-500` = `#0a5ae1`) – primäre Aktion, Links, Fokus
  (entspricht `--button-color` der Website).
- **Aqua** (`--atr-aqua-100` = `#d4f2f5`) – Fläche für sekundäre / Icon-Buttons;
  sanfter Marken-Ton.
- **Coral** (`--atr-coral-500` = `#ff5a46`) – warmer Akzent / `--color-danger`.
- **Polar** (`--atr-polar` = `#f2fafc`) – charakteristisches, kühles Beinahe-Weiß.
- **Signatur-Verlauf** `--atr-via-gradient`: Navy → Blau → Aqua, die „Verbindung“
  sichtbar gemacht. Auf Fotos nutzt die Website Navy→transparent-Schutzverläufe
  (nie ein vollflächiger dekorativer Verlaufs-Hintergrund).
- Hintergründe sind überwiegend **weiß / sehr helles, kühles Grau**
  (`--atr-gray-050`), klar und luftig. Inverse Abschnitte nutzen Navy.

**Typografie.** Die markeneigene Schrift **ATRUVIA** (alias „VIA Type“) übernimmt
Display + UI (selbst gehostet, 7 Schnitte inkl. dediziertem Display-Cut;
Familienname `ATRUVIA` wie auf der Website), **ATRUVIA Mono** für Daten/Zahlen.
Display ist **extrafett, eng laufend, eng zeilig**; Fließtext regular mit
entspannter Zeilenhöhe. Eyebrows/Overlines sind **Versalien, weit laufend,
halbfett**, in Blau.

**Bildwelt.** Echte, warme, menschliche Fotografie – Menschen an modernen
Arbeitsplätzen, der Campus Karlsruhe, dazu archivische Schwarz-Weiß-/Sepia-Motive
aus der Firmengeschichte (Lochkarten, Großrechner, der Geldautomat von 1979). Der
Ton ist natürlich und optimistisch, nicht hochglanz-korporativ. Vollflächige
Foto-Header und Galerie-Raster sind üblich. Farbe für „heute“, Monochrom/gealtert
für „Geschichte“.

**Layout.** Zentrierter Container mit max. Breite (~1240px), großzügiger
vertikaler Rhythmus, klare Hierarchie. Inhaltsorientiert, viel Weißraum. Die
VIA-Line leitet Abschnitte ein und verbindet Spalten.

**Elevation & Flächen.** Weiche, kontrastarme, kühl getönte Schatten
(`--shadow-md/lg`) – nie hartes Schwarz. Karten: weiße Fläche, großer Radius
(`--radius-lg`), dezente Border *oder* weicher Schatten (nicht beides kräftig).
Vertiefte Bereiche nutzen `--atr-gray-050` bzw. Polar.

**Borders.** Haarfeines, kühles Grau (`--border-subtle/default`), 1px Standard.
Marken-Border (`--border-brand`) für selektierte/aktive Zustände.

**Motion.** Geschmeidig und souverän, **nie federnd**. Sanftes Ease-out
(`--ease-standard`), kurze Dauern (120–320 ms). Fades und kleine Versätze; die
VIA-Line kann Verlauf/Länge animieren, um „Verbinden“ auszudrücken.
`prefers-reduced-motion` respektieren.

**Interaktionszustände.**
- *Hover:* primäre Aktion wird eine Stufe dunkler; neutrale Flächen gehen auf
  `--atr-gray-050`; Links werden dunkler.
- *Press/Active:* eine weitere Stufe dunkler; dezentes Verkleinern (≈0,98)
  erlaubt, kein Bounce.
- *Fokus:* 3px blauer Fokusring (`--focus-ring`), stets sichtbar (Barrierefrei­heit
  ist im Banking zentral).
- *Disabled:* reduzierte Deckkraft, neutrale Füllung, kein Schatten.

**Transparenz / Blur.** Sparsam – z. B. ein transluzenter Sticky-Header über
Inhalt. Kein Hauptmotiv; dezent halten.

---

## 4. IKONOGRAFIE

> ✅ **Offizielles Set eingebunden.** Das Atruvia-Icon-**Sprite** (60 Symbole)
> liegt unter `assets/icons/atruvia-icons.svg`; Einbindung über die
> `Icon`-Komponente (`<Icon name="robot" />`) oder `<use href="…#icon-name">`.
> Die Symbole sind gefüllte Glyphen, eingefärbt über `currentColor`.

- **Stil:** überwiegend **gefüllte** Piktogramme (keine Haarlinien), mit der
  weich-eckigen Silhouette der Marke. Einige Outline-Varianten existieren.
- **Farbe:** erbt die Textfarbe (`currentColor`); Blau bei Interaktion/aktiv.
- **Größen:** 20px in dichten UIs, 24px Standard, 32–40px für Feature/Marketing.
- **Set-Highlights:** `robot`, `shaking-hands`, `hand-leaf`, `ecosystem`,
  `database`, `smartphone`, `idea`, `routes`, `entry-point`, `quote`, komplette
  Pfeil-/Caret-Familie, Status (`success`/`warning`/`error`/`info`) sowie Social
  (`linkedin`/`instagram`/`facebook`/`twitter`/`xing`/`youtube`).
- **Emoji:** werden nie als Iconografie verwendet.
- **Logos & Markenzeichen:** die **ATRUVIA-Wortmarke** (`Logo`-Komponente) und
  das **FinanzGruppe-Lockup** in `assets/logos/`. Schutzraum wahren, nicht
  umfärben, nicht verzerren.

Verwendung: `<Icon name="arrow-right" size={24} />` (Design-System-Komponente)
oder in reinem HTML
`<svg><use href="assets/icons/atruvia-icons.svg#icon-arrow-right"></use></svg>`.

---

## 5. Index / Manifest

Vom Compiler erwarteter Wurzel-Einstieg:
- **`styles.css`** – globaler Einstieg (ausschließlich eine `@import`-Liste).

Grundlagen:
- **`tokens/colors.css`** – Palette + semantische Aliase (Navy/Blau/Aqua/Coral)
- **`tokens/typography.css`** – ATRUVIA-Familien, Skala, Schnitte, Rollen
- **`tokens/spacing.css`** – 8px-Spacing-Skala + Layout
- **`tokens/radius.css`** – Eckenradien (Rundungen + Kanten)
- **`tokens/shadows.css`** – weiche Elevation
- **`tokens/motion.css`** – Easing + Dauern
- **`tokens/base.css`** – Element-Resets + Marken-Helfer (`.atr-eyebrow`,
  `.atr-via-line`, `.atr-via-text`, `.atr-container`)
- **`fonts/fonts.css`** – Webfont-Laden (`@font-face`, selbst gehostet)

Assets:
- **`assets/brand-assets.md`** – Asset-Manifest / Bezugsquellen (zur
  Nachvollziehbarkeit)
- **`assets/fonts/`** – ATRUVIA-Schriftdateien · **`assets/logos/`** – Logos ·
  **`assets/icons/`** – Icon-Sprite · **`assets/photos/`** – Fotografie ·
  **`assets/brand/`** – Original-Site-CSS

Specimen-Karten (Tab „Design System“): unter `guidelines/` – Colors, Type,
Spacing, Brand.

**Komponenten** (`components/`, React; Einbindung über `_ds_bundle.js`, Namespace
`window.AtruviaDesignSystem_79ca21`):
- `core/` – Button, IconButton, Icon, Logo
- `forms/` – Input, Textarea, Select, Checkbox, Radio, Switch
- `feedback/` – Badge, Tag, Alert, Avatar
- `surfaces/` – Card, Tabs, Dialog

Jede Gruppe hat ein `*.card.html`-Specimen (Tab „Design System“ → Components);
die Komponenten tragen `.d.ts`-Verträge, mehrere sind als Startpunkte markiert.

**UI-Kits** (`ui_kits/`):
- `website/` – interaktiver Nachbau der atruvia.de-Unternehmenswebsite
  (`index.html` + `sections.jsx`, mit eigener README).

**Templates** (`templates/`):
- `landing-page/` – Marken-Landingpage als Design-Component (`LandingPage.dc.html`).

Es sind keine Beispiel-Slides enthalten – es wurde kein Slide-Template
bereitgestellt.

---

## 6. Hinweise & offene Punkte

✅ **Erledigt (offizielle Assets + extrahierte Werte vorhanden):**
- **Schrift:** die **ATRUVIA**-Familie (alle 7 Schnitte inkl. Display + Mono)
  selbst gehostet in `assets/fonts/`; `fonts/fonts.css` lädt sie via `@font-face`
  (Familienname `ATRUVIA` wie auf der Website).
- **Farben:** die vollständige Palette ist **aus dem Live-`main.css` extrahiert**
  (Navy `#000064`, Blau `#0a5ae1`, Aqua `#d4f2f5`, Coral `#ff5a46`, Polar
  `#f2fafc`, dazu Grautöne + Status). Eine Kopie des Quell-CSS liegt unter
  `assets/brand/atruvia-site.css`. Die semantischen Rollen spiegeln die
  `--button-*` / `--color-*`-Properties der Website. (Nur einige wenige
  Ramp-Abstufungen sind ~abgeleitet.)
- **Logos:** offizielle ATRUVIA-Wortmarke + FinanzGruppe-Lockups in
  `assets/logos/`; die `Logo`-Komponente bettet die echte Wortmarke inline ein
  (umfärbbar via `currentColor`).
- **Icons:** das offizielle 60-Icon-Sprite liegt in `assets/icons/`; Einbindung
  über die `Icon`-Komponente.
- **Fotografie:** Hero, Team, Rechenzentrum, Portrait, „Julia“-Freisteller,
  Magazin sowie das Heritage-Set liegen in `assets/photos/` und sind im UI-Kit
  sowie im Template eingebunden.

⚠ **Kleinere offene Punkte:**
1. **VIA-Line-Verlauf** (`Navy → Blau → Aqua`) ist eine markenkonforme
   Komposition aus den echten Website-Farben; das gedruckte CD-Manual könnte
   exakte Verlaufs-Stops für einen 1:1-Abgleich vorgeben.
2. Einige optionale Heritage-Galeriebilder sind noch nicht eingebunden – siehe
   `assets/brand-assets.md`.

---

## 7. Lizenz

**Proprietär – kein Open Source.** © 2026 Atruvia AG. Alle Rechte vorbehalten.

Dieses Design-System und sämtliche enthaltenen Materialien (Markenassets, Logos,
VIA-Line, Schriften, Icons, Farben, Fotografie, Tokens, Komponenten, Templates
und Dokumentation) sind vertrauliches und geschütztes Eigentum der Atruvia AG.
Die Nutzung ist **ausschließlich** gestattet,

- wenn sie durch eine **berechtigte Person** erfolgt (aktuelle*r Mitarbeiter*in
  der Atruvia AG bzw. unter schriftlichem Vertrag mit Atruvia tätige Personen),
  **und**
- wenn sie einem **Atruvia-Zweck** dient (Produkte, Services und Markenauftritte
  der Atruvia AG bzw. der Genossenschaftlichen FinanzGruppe im offiziellen
  Auftrag).

Jede Nutzung in privaten, freiberuflichen, kunden- oder fremdbezogenen Projekten
ist untersagt. Eingebundene Drittanbieter-Materialien (z. B. Hanken Grotesk,
IBM Plex Mono, Lucide, React) unterliegen weiterhin ihren eigenen Lizenzen.

Vollständige Bedingungen siehe [`LICENSE`](./LICENSE).
