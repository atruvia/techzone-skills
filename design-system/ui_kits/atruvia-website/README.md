# Atruvia website — UI kit

A high-fidelity recreation of the **atruvia.de** marketing site visual language, factored as React components.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Full homepage demo — open this to see the kit in action |
| `styles.css` | Local styles, builds on `../../colors_and_type.css` |
| `components.jsx` | All components, attached to `window` so you can grab any of them |

## Components

- **`TopNav`** — sticky top navigation with logo, links, CTA
- **`Hero`** — the "Wir verbinden. Füreinander." hero block with photo placeholder + VIA Line
- **`ViaLine`** — primary design device, animatable stroke
- **`ManifestoBlock`** — three-column bold lead-in pattern from the brand page
- **`QuoteSection` / `QuoteCard`** — Vorständ\*innen quote pattern with German guillemets
- **`StatsRow`** — "Zahlen & Fakten" navy band with big numerals
- **`FeatureBlock`** — full-bleed photo + headline + CTA
- **`CTAStrip`** — "Und was erwartest du von Atruvia?" closer
- **`Footer`** — full nav-mirror footer on navy

## How to compose

```jsx
<App />
// or pick what you want:
<TopNav activeKey="karriere" />
<Hero />
<StatsRow />
<Footer />
```

## What's fake

- **Photos** — render as warm gradient placeholders with their content description. Drop in real `<img>` tags once licensed assets are available.
- **Quote attributions** — names/roles are paraphrased from the live site. Replace with real copy before any external use.
- **Navigation** — links go to `#`; no real routing.

## What's confirmed against the live site

- Layout patterns (hero, manifesto, stats, quotes, full-bleed feature, footer) come from `atruvia.de` and the *Marke* page (`/unternehmen/wir-sind-atruvia/marke`).
- Logo is the real wordmark from Wikimedia Commons.
- Copy patterns (»German guillemets«, gender-asterisk plurals, *du*-form address) match the site.
- Color anchor (`#000064`) is extracted from the logo SVG.
