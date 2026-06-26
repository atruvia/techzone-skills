# Atruvia Design System

Ein einsatzbereites Design System für die **Atruvia AG** — den Digitalisierungspartner der genossenschaftlichen Bankengruppe Deutschlands (Volksbanken Raiffeisenbanken). Nutze dieses Skill, um gut gebrandete Oberflächen, Präsentationen und Mockups in der visuellen Sprache von Atruvia zu erstellen.

---

## Index — was in diesem Ordner liegt

```
README.md                   ← du bist hier
SKILL.md                    ← Skill-Manifest (Claude Code kompatibel)
colors_and_type.css         ← Marken-Tokens (CSS-Variablen)

assets/                     ← Logos, Marken, Icons (echte SVGs)
  atruvia-logo.svg          ← offizielle Wortmarke + VIA-Mark, von Wikimedia Commons
  bvr-logo.svg              ← Partner: Bundesverband Volksbanken Raiffeisenbanken
  bvr-logo-neu.svg          ← Partner: BVR (aktuelle abgerundete Variante)
  via-line.svg              ← rekonstruiertes VIA-Linien-Motiv für Layouts
  via-mark.svg              ← isoliertes VIA-Symbol (die Mark aus der Wortmarke)

fonts/                      ← Atruvia woff2, direkt vom CDN geladen (siehe CSS)

preview/                    ← Karten, gerendert im Design-System-Tab
ui_kits/atruvia-website/    ← hochauflösendes UI-Kit, das atruvia.de nachbildet
_research/                  ← Scratch-Referenzen (nicht Teil des Systems)
```

---

## Quellen

- **Live-Seite:** https://atruvia.de — beobachtet, aber nicht vollständig scrapebar (CORS/X-Frame blockieren das iframe)
- **Marken-Case-Studies (gelesen):**
  - https://www.kms-team.com/en/cases/atruvia/ — KMS TEAM (Designagentur)
  - https://www.carlet.studio/work/atruvia — Patrick Carlet (Design Director, KMS)
  - https://rebrand.com/2024-atruvia/ — REBRAND-Award-Bericht
  - https://www.german-brand-award.com/en/the-winners/gallery/detail/41005-atruvia-ag.html
  - https://www.whydobirds.de/en/cases/atruvia-audio-branding — Via Sound
- **Logo-Quelle:** https://commons.wikimedia.org/wiki/File:Atruvia_logo.svg (in `assets/` heruntergeladen)
- **Marke-Seite:** https://atruvia.de/unternehmen/wir-sind-atruvia/marke

Das Wikimedia-Logo-SVG war das einzige autoritative Markenasset, das ich direkt ziehen konnte — sowohl das CDN von atruvia.de als auch der Brandfetch-Eintrag blockierten Cross-Origin-Fetches. **Die nutzende Person sollte hochauflösendere Dateien einsetzen** (vollständige Wortmarken-Varianten, Via-Sound-Assets, Fotografie), sofern verfügbar.

---

## INHALTLICHE GRUNDLAGEN

Atruvia schreibt auf **Deutsch**, mit einem warmen, gemeinschaftlichen, leicht formellen Ton. Das System baut auf einigen spezifischen Sprachmustern auf:

### Stimme & Ton

- **„Wir", nicht „ich".** Die erste Person Plural ist der Standard. Das Kollektiv spricht.
- **„du" (informell), nicht „Sie" (formell).** Modern, nahbar. Karriere- und Markenseiten sprechen die Lesenden mit `du`/`dir`/`dich` an. Bemerkenswert für ein 100 Jahre altes Banken-IT-Unternehmen.
- **Inklusives, gendergerechtes Deutsch mit Stern.** *Kund\*innen, Mitarbeiter\*innen, Kolleg\*innen, Vorständ\*innen, Partner\*innen.* Das ist markenübergreifend nicht verhandelbar — der Gender-Stern ist Hausstil und Atruvia hat eine öffentliche „Gender-Hinweis"-Seite, die ihn erklärt.
- **Kurze, deklarative Sätze.** Überschriften sind klare Aussagen: *„Wir sind Atruvia."* — *„Verbindungen zu schaffen ist der Kern unserer Dienstleistung."* — *„Füreinander in eine bessere Zukunft."*
- **Wiederholung für Rhythmus.** Wörter wie *Wir, Füreinander, Verbindung, gemeinsam* werden bewusst wiederholt. *„Füreinander. Für uns. Für unsere Partner\*innen und Kund\*innen."*
- **Keine Ausrufezeichen, kein Marketing-Sprech.** Selbstbewusst, ruhig. Selbst die mobilisierenden Zeilen wirken zurückhaltend.
- **Fette Einleitungen**, um thematische Absätze einzuführen (z. B. **„Verbindungen zu schaffen ist der Kern unserer Dienstleistung."** gefolgt von der Erläuterung).

### Schreibweise & Interpunktion

- **Gemäßigte Kleinschreibung (Sentence Case)** für Überschriften und Fließtext. Das Logo ist die seltene Ausnahme in Großbuchstaben (**ATRUVIA**).
- **Deutsche Anführungszeichen** für Zitate: »Zitat« — *nicht* "gerade" oder „englisch-kursive" Variante.
- **Title-Case bei Navigationspunkten**, wenn kurz (*Karriere, Unternehmen, Leistungen, News, Kontakt, Newsroom*).
- Zahlen in Überschriften werden sachlich verwendet, nicht zur Übertreibung: *10 Teams · 18 Teammitglieder · 170 Meetings · 20.000 Tassen Kaffee*. Der freche letzte Eintrag ist Absicht — *etwas Wärme in den Daten*.

### Vibe / Persona

Die Stimme ist **eine erfahrene Kollegin, die dich willkommen heißt** — selbstbewusst, plural, nie aufdringlich. Nicht die quirlige Startup-Stimme, nicht die steife Bank-Stimme. **Genossenschaftsbank-Energie: ernstes Geld, warme Menschen.**

### Beispiele (wörtlich von atruvia.de)

> *Unser Unternehmen steht für Gemeinschaft, Zugehörigkeit und eine gemeinsame Vision. Bei uns steht das „Wir" im Vordergrund.*

> *Atruvia ist der Aufbruch in eine neue Zeit.*

> *Und was erwartest **du** von Atruvia?*

### Emoji

**Wird nicht verwendet auf Markenoberflächen.** Keine Emoji in Überschriften, Fließtext oder Navigation. (Social-Media-Posts des Karriere-Teams nutzen sie ggf. informell — nicht die Unternehmensseite.)

### Englisch als Rückfallebene

Wenn Englisch benötigt wird (internationale Presse, Awards), übertragen sich dieselben Prinzipien: **„We connect. For each other."** Weiterhin plural, weiterhin zurückhaltend. Englisch nur verwenden, wenn das Publikum eindeutig nicht deutschsprachig ist.

---

## VISUELLE GRUNDLAGEN

### Farben — verifiziert anhand des Live-CD

Die tatsächliche Markenpalette von Atruvia ist **kleiner und kräftiger als bei typischen Unternehmenssystemen**: reinweiße Flächen, tiefes Navy überall (Überschriften UND Fließtext), ein einzelnes helles Royalblau als Akzent für Links und ein sanftes Cyan für Icon-Button-Flächen. Kein Koralle, kein Waldgrün, keine warmen Neutraltöne — das waren meine früheren Vermutungen und wurden entfernt.

| Token | Hex | Verwendung |
|---|---|---|
| `--atr-navy` | `#000064` | Primäre Marke — Logo, Überschriften **und Fließtext** |
| `--atr-blue` | `#0a5ae1` | Akzent — Links, **primäre Buttons**, Icon-Glyphen |
| `--atr-coral` | `#fd5f4c` | **Farbe der VIA-Linie** — nur für das verbindende Grafikelement |
| `--atr-cyan-soft` | `#d4f2f5` | **Abschnitts-Hintergrundfläche** (sehr häufig — z. B. Werte-Seite, Ansprechpartner) |
| `--atr-navy-deep` | `#00004A` | Hover- / Pressed-Zustände auf Navy |
| `--atr-navy-20` | `rgba(0,0,100,0.2)` | Pager- / Overlay-Hintergründe (laut CD) |
| `--atr-white` | `#FFFFFF` | Seitenhintergrund |
| `--atr-line` | `#D6DCE9` | Rahmen, Trennlinien (kühl, nicht warm) |
| `--atr-ink` | `#000064` | Fließtext — identisch mit Navy (Absatzfarbe des CD) |
| `--atr-ink-2` | `#4B4B85` | Sekundärtext |

**Quelle:** Live-CSS-Custom-Properties von atruvia.de, bestätigt durch eine\*n Atruvia-Mitarbeiter\*in. Koralle und Cyan-soft zusätzlich bestätigt durch Pixel-Sampling aus Live-Site-Screenshots, die die nutzende Person bereitgestellt hat.

### Typografie — verifiziert, echte Schriften eingebunden

Die Schriftart der Marke ist eine **eigens entwickelte Schrift namens *Atruvia*** — eine geometrische, humanistische Grotesk in vier Schnitten:

- **Light 300**, **Regular 400**, **Medium 500**, **Bold 700**

Die Schriften werden direkt von `https://atruvia.de/assets/fonts/atruvia-*.woff2` per `@font-face` in `colors_and_type.css` geladen. **Manrope (Google Fonts) ist der Offline-/Blockiert-Fallback** — sie springt automatisch ein, wenn das Atruvia-CDN nicht erreichbar ist.

Laut CD nutzen **Seitentitel standardmäßig den Schnitt 300 (Light)**, während **Abschnittstitel 700 (Bold)** verwenden — live beobachtet auf *Kontakt*, *Werte* und den Abschnittsüberschriften. Die Hero-Titel von „Kontakt" und „Werte" sind luftig, fast geometrisch, in Light. Abschnittsüberschriften wie „Falls du Fragen…", „Banking mit der Omnikanalplattform", „Ansprechpartner" sind kräftig in Bold.

- **Seitentitel / Hero:** Atruvia 300 (Light), groß, clamp-skaliert. Zentriert oder linksbündig. Immer Navy.
- **Abschnittstitel (h2, h3):** Atruvia 700 (Bold), engere Skalierung.
- **Fließtext:** Atruvia 400, 18px (CD-Baseline), Zeilenhöhe 1,5. Farbe: Navy.
- **Links:** Atruvia 400, Farbe `--atr-blue`, **standardmäßig unterstrichen** (1,5px, 3px Offset). Hover → Farbe wechselt zu `--atr-navy`.
- **Mono / Numerik** (für Daten/Tabellen): JetBrains Mono — ersetzt das, was Atruvia intern verwendet. Bitte markieren, falls die echte Schrift bekannt ist.

### Hintergründe & Bildwelt

- **Warme, natürliche Fotografie.** Wälder, Tageslicht, echte Menschen. Nicht stock-corporate-glänzend. Der Hero der Seite ist buchstäblich ein Waldstandbild aus einem Markenfilm.
- **Vollflächige (full-bleed)** Bildnutzung auf Landingpages. Fotos reichen von Kante zu Kante.
- **Avatar-Kreise** für Porträts (Interview-Karten der Vorständ\*innen).
- **Keine Verläufe auf Schrift oder Markenflächen.** Solide Farben mit fotografischen Akzenten.
- **Kein Illustrationssystem auf der Marketingseite** — das visuelle Gewicht liegt auf Fotografie + Wortmarke/VIA-Linie.

### Die VIA-Linie (primäres Designelement) — Koralle

Die VIA-Linie ist die Signatur-Grafik der Marke: **ein durchgehender Korallen-Strich (`#fd5f4c`)**, der Wörter, Abschnitte oder Inhalte verbindet. Sie mischt gerade kantige Segmente mit weichen, geschwungenen Bögen und kleinen Schlaufen — und verkörpert so die Spannung „Mensch + Technologie".

Beobachtet im Einsatz auf der **Werte**-Seite: fünf Werte (*Füreinander, Respektvoll, Offen & Ehrlich, Ergebnisorientiert, Eigenverantwortlich*) werden durch eine einzige Korallen-Linie physisch verbunden, die sich biegt, verzweigt und schlängelt.

Strichstärke: **3–4px**, immer Koralle, auf Weiß oder Cyan-soft. Niemals Blau oder Navy für die VIA-Linie verwenden — sie ist immer Koralle. Mit vollen Pixelstärken sowie `stroke-linecap="round"` und `stroke-linejoin="round"` rendern.

### Layout & Abstände

- **8px-Grundeinheit.** Alle Abstände rasten auf Vielfache von 8 ein (8, 16, 24, 32, 48, 64, 96, 128).
- **Großzügiger Weißraum.** Die Marke-Seite lässt viel Luft zwischen den Abschnitten.
- **Einspaltig auf Mobil, großzügig zweispaltig auf Desktop.** Keine dichten Raster.
- **Maximale Inhaltsbreite** ~ 1200–1280px, zentriert.

### Eckenradien

- **Dezent.** Atruvia ist keine „alles weich abgerundete" Marke — hier zeigt sich die kantige Seite der DNA.
- Buttons: **999px (Pill)** — volle Rundung, hier zeigt sich die weiche Seite.
- Karten: **8–12px**.
- Bilder: **0px** (volle Ecken) für redaktionelle Fotografie; **12px** für Thumbnails in Karten.

### Schatten & Elevation

- **Minimal.** Banken-IT-Zurückhaltung — keine dramatischen Schatten.
- `--shadow-soft`: `0 1px 2px rgba(0,0,100,0.04), 0 4px 12px rgba(0,0,100,0.06)` — kaum merkliche Karten-Anhebung.
- `--shadow-pop`: `0 8px 24px rgba(0,0,100,0.12)` — nur für Menüs / Dropdowns / Modals.
- Keine inneren Schatten.

### Rahmen

- **1px solid `--atr-line`** für kühl-graustufige Trennlinien.
- Die VIA-Linie ist eine *Grafik*, kein Rahmen — nicht verwechseln.

### Hover- / Press-Zustände

- **Buttons (primär Navy):** Hover → `--atr-navy-deep` (8 % dunkler). Keine Skalierung, keine Schattenänderung. Press → 96 % Skalierung und leichte Farbverschiebung.
- **Buttons (Outline):** Hover → Füllung mit Navy bei 6 % Deckkraft. Press → 12 % Deckkraft.
- **Links:** Unterstreichung bei Hover. Farbe bleibt Navy.
- **Karten:** sehr dezenter `--shadow-soft` bei Hover, keine Bewegung.
- **Kein Tilt, kein 3D, keine federnden Springs.** Atruvia ist ruhig.

### Animation

- **Dezent, kurz.** 150–250ms Übergänge. `cubic-bezier(0.4, 0, 0.2, 1)` ist das Standard-Easing.
- **Fades statt Slides.** Seitenabschnitte blenden ein; Slider nutzen Opacity-Crossfades, keine Whoosh-Übergänge.
- **Die VIA-Linie zeichnet sich.** Bei Animation wird das VIA-Linien-Motiv *gezeichnet* (stroke-dashoffset-Animation) über 600–1200ms — langsam, bewusst.
- **Keine Bounces, keine Springs, keine Parallax.**

### Transparenz & Blur

- **Selten.** Die Marke setzt nicht auf Glasmorphismus. Die eine häufige Nutzung: ein dünnes **weißes Overlay** (Alpha 0,7) auf Hero-Fotografie hinter Navy-Text, um den WCAG-Kontrast zu wahren. Keine Backdrop-Blur-Stapel.

### Bildwelt-Farbstimmung

- **Warm.** Tageslicht, goldene Stunde, warme Innenraumtöne.
- **Echte Menschen, kein Stock.** Mitarbeiter\*innen, Führungskräfte, Kund\*innen, fotografiert als sie selbst.
- **Wald / Outdoor häufig.** Unterstreicht die Botschaft „in der Gemeinschaft verwurzelt".
- Kein S/W, kein starkes Korn, keine extreme Sättigung. Redaktionell-fotografische Neutralität.

---

## IKONOGRAFIE

- **Keine proprietäre Icon-Schrift erkennbar.** Die Marketingseite atruvia.de nutzt sehr wenige Icons — es ist ein *fotogeführtes* Design System. Wo Icons auftauchen (Social, Video-Play, Navigations-Chevrons), sind es schlichte Linien-Glyphen, ~1,5–2px Strichstärke, Navy auf hell oder Weiß auf dunkel.
- **Für dieses Skill standardisieren wir auf [Lucide](https://lucide.dev/)** — Open-Source, 1,5px Strichstärke, geometrisch und passend zur ruhigen/kantigen Seite der Marke. Geladen per CDN: `https://unpkg.com/lucide@latest`.
- **Substitutions-Hinweis:** Falls die internen Produkt-UIs von Atruvia (z. B. Banking-Back-Office, agree21-Admin-Tools) ein bestimmtes Icon-Set verwenden, Lucide dagegen tauschen. Lucide ist ein Platzhaltersystem, keine bestätigte Marke.
- **Keine Emoji auf Markenoberflächen.**
- **Keine Unicode-als-Icon-Hacks** (kein ▸ ★ ✓ etc.). Lucide verwenden.
- **Das Logo ist heilig.** `assets/atruvia-logo.svg` ist die Quelle der Wahrheit. Das VIA-Linien-Motiv (`assets/via-line.svg`) und die isolierte Mark (`assets/via-mark.svg`) sind für Layout-Flexibilität rekonstruiert.

---

## HINWEISE — bitte lesen

1. **Fotografie ist Platzhalter.** Ich kann die Hero-Fotografie von atruvia.de wegen CORS nicht ziehen — das UI-Kit nutzt an Stellen, wo Fotos stünden, kühle Verlaufsflächen, klar gekennzeichnet.
2. **Hero- / Detailseiten-UI ist angenähert.** Ich konnte die Live-Seite nicht im iframe laden (X-Frame-Options blockiert das Einbetten). Layout-Entscheidungen basieren auf dem gelesenen Live-HTML plus Screenshots aus öffentlichen Case-Studies. **Gegen die Live-Seite gegenprüfen und mir sagen, was nicht stimmt.**
3. **Mono-Schrift ist ersetzt** (JetBrains Mono). Ich kenne die Daten-Tabellen-Schrift von Atruvia nicht — markieren und ersetzen, falls es eine echte gibt.
4. **Kein agree21- / internes Produkt-UI.** Dieses System deckt nur die öffentliche Marketing-Marke ab. Die internen Bankprodukte (agree21, VR-Bank-Apps) sind ein separates visuelles System, zu dem ich keinen Zugang habe.
5. **Schriftdateien sind selbst gehostet.** Die vier Atruvia-woff2-Schnitte liegen in `fonts/` und werden per `@font-face` in `colors_and_type.css` mit relativen URLs geladen. Funktioniert offline.

---

## So nutzt du dieses System

Wenn du ein\*e KI-/Claude-Agent bist: Lies dieses README, dann `colors_and_type.css`. Sieh dir die Karten in `preview/` an, öffne das UI-Kit unter `ui_kits/atruvia-website/index.html` und kopiere Assets aus `assets/` in deinen Output. Erfinde keine neuen Farben oder Schriften — nutze die Tokens.

Wenn du ein Mensch bist: Öffne den Design-System-Tab in der Projekt-Sidebar, um jede Komponente auf einen Blick zu sehen.
