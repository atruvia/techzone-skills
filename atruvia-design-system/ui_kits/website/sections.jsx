/* Atruvia corporate website — section components.
   Recreates the structure/voice of atruvia.de using the design-system
   primitives. Photography is shown as labelled placeholders (the real
   images are hotlink-protected — see assets/brand-assets.md).
   Exposes all sections on window for index.html. */

const DS = window.AtruviaDesignSystem_79ca21;
const { Button, Card, Badge, Logo, Input } = DS;

/* ---- Official Atruvia icon (same-document sprite symbol) ---- */
function Icon({ name, size = 24, style }) {
  return (
    <svg width={size} height={size} fill="currentColor" style={style} aria-hidden="true" focusable="false">
      <use href={`#icon-${name}`} xlinkHref={`#icon-${name}`} />
    </svg>
  );
}

/* ---- Photo block — real image when `src` given, else placeholder ---- */
function Photo({ label, src, h = 280, tone = "cool", round = "var(--radius-card)" }) {
  if (src) {
    return (
      <div style={{ height: h, borderRadius: round, overflow: "hidden", background: "var(--atr-gray-100)" }}>
        <img src={src} alt={label || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  const bg = tone === "ink"
    ? "linear-gradient(135deg,#16276B,#000064)"
    : tone === "via"
    ? "var(--atr-via-gradient)"
    : "linear-gradient(135deg,#E8EDF4,#D8E0EA)";
  const fg = tone === "cool" ? "var(--text-subtle)" : "rgba(255,255,255,.85)";
  return (
    <div style={{ height: h, borderRadius: round, background: bg, position: "relative", overflow: "hidden",
      display: "flex", alignItems: "flex-end", padding: 16 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: fg }}>▢ {label}</span>
    </div>
  );
}

/* ============================ HEADER ============================ */
function SiteHeader({ page, setPage, onContact }) {
  const [menu, setMenu] = React.useState(false);
  const nav = [
    ["Startseite", "home"], ["Leistungen", "leistungen"], ["Unternehmen", "home"], ["Newsroom", "home"],
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,.85)",
      backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="atr-container" style={{ display: "flex", alignItems: "center", height: 76, gap: 24 }}>
        <a href="#" onClick={(e)=>{e.preventDefault();setPage("home");}} style={{ display: "flex" }}><Logo withMark height={24} /></a>
        <nav style={{ display: "flex", gap: 4, marginLeft: 16, flex: 1 }} className="atr-desktop-nav">
          {nav.map(([label, p], i) => (
            <a key={i} href="#" onClick={(e)=>{e.preventDefault();setPage(p);}}
              style={{ padding: "8px 14px", borderRadius: "var(--radius-pill)", fontWeight: 600, fontSize: 15,
                color: page===p && label!=="Unternehmen" ? "var(--text-strong)" : "var(--text-body)" }}>{label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }} className="atr-desktop-nav">
          <Button variant="ghost" size="sm" onClick={onContact}>Kontakt</Button>
          <Button variant="primary" size="sm" iconRight={<Icon name="arrow-right" size={18} />}>Karriere</Button>
        </div>
        <button className="atr-iconbtn atr-mobile-only" aria-label="Menü" onClick={() => setMenu(!menu)}>
          <Icon name={menu ? "cross" : "menu"} />
        </button>
      </div>
      {menu && (
        <div className="atr-container atr-mobile-only" style={{ paddingBottom: 16, display: "grid", gap: 4 }}>
          {nav.map(([label], i) => <a key={i} href="#" style={{ padding: "10px 4px", fontWeight: 600, color: "var(--text-body)" }}>{label}</a>)}
        </div>
      )}
    </header>
  );
}

/* ============================= HERO ============================= */
function Hero({ onContact }) {
  return (
    <section style={{ padding: "var(--space-11) 0", overflow: "hidden" }}>
      <div className="atr-container atr-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
        <div>
          <div className="atr-eyebrow">Digitalisierungspartner</div>
          <h1 style={{ fontSize: "var(--text-6xl)", margin: "16px 0 0", lineHeight: 1.04 }}>
            Wir verbinden.<br /><span className="atr-via-text">Füreinander.</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", maxWidth: "46ch", marginTop: 22 }}>
            Mit innovativen IT-Lösungen machen wir die Volksbanken und Raiffeisenbanken
            fit für die digitale Zukunft. einfach. sicher. digital.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
            <Button variant="gradient" size="lg" iconRight={<Icon name="arrow-right" size={20} />}>Leistungen entdecken</Button>
            <Button variant="secondary" size="lg" onClick={onContact}>Kontakt aufnehmen</Button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Photo src="../../assets/photos/hero-hub.jpg" label="Kolleg*innen am Hub" h={380} round="var(--radius-2xl)" />
          <div style={{ position: "absolute", left: -22, bottom: 34, background: "var(--surface-card)",
            boxShadow: "var(--shadow-lg)", borderRadius: "var(--radius-lg)", padding: "16px 20px", display: "flex", gap: 14, alignItems: "center" }}>
            <span style={{ width: 44, height: 44, borderRadius: "999px", background: "var(--atr-via-gradient)", flex: "none" }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--text-strong)" }}>91 Mio.</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Konten verwaltet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ STATS ============================= */
function StatsBand() {
  const stats = [
    ["8.400", "Mitarbeiter*innen"], ["~820", "Volks- & Raiffeisenbanken"],
    ["153.000", "Bankarbeitsplätze"], ["1,77 Mrd. €", "Konzernumsatz"],
  ];
  return (
    <section style={{ background: "var(--atr-ink-900)", padding: "var(--space-9) 0" }}>
      <div className="atr-container atr-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
        {stats.map(([n, l], i) => (
          <div key={i}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "var(--text-4xl)", color: "#fff", letterSpacing: "-.02em" }}>{n}</div>
            <div className="atr-via-rule" style={{ width: 40, margin: "12px 0" }} />
            <div style={{ color: "var(--atr-gray-400)", fontSize: 15 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================== SERVICES ========================== */
const SERVICES = [
  ["database", "Rechenzentrumsbetrieb", "Hochsichere Rechenzentren für das Bankverfahren — rund um die Uhr."],
  ["ecosystem", "Cloud-Plattform", "Vom monolithischen Kernbanksystem zur offenen, cloud-basierten Architektur."],
  ["smartphone", "App-Entwicklung", "Die VR-BankingApp und digitale Self-Services für Millionen Kund*innen."],
  ["bolt-circle", "IT-Sicherheit", "Banking muss einfach und sicher sein — Sicherheit im Kern jeder Lösung."],
  ["robot", "Smart Data & KI", "Human in the Loop: Mensch und Maschine im Tandem, nie als Ersatz."],
  ["shaking-hands", "Beratung & Regulatorik", "Prozessoptimierung und Regulatorik für die genossenschaftliche FinanzGruppe."],
];
function ServicesSection({ heading = "Unsere Leistungen", lead }) {
  return (
    <section style={{ padding: "var(--space-11) 0" }}>
      <div className="atr-container">
        <div style={{ maxWidth: "52ch", marginBottom: 44 }}>
          <div className="atr-eyebrow">Möglichmacher*innen</div>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: "14px 0 0" }}>{heading}</h2>
          {lead && <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", marginTop: 14 }}>{lead}</p>}
        </div>
        <div className="atr-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {SERVICES.map(([ic, t, d], i) => (
            <Card key={i} interactive>
              <span style={{ display: "inline-flex", width: 52, height: 52, borderRadius: "var(--radius-md)",
                background: "var(--atr-blue-050)", color: "var(--atr-blue-600)", alignItems: "center", justifyContent: "center" }}>
                <Icon name={ic} size={26} />
              </span>
              <h3 style={{ fontSize: "var(--text-xl)", margin: "18px 0 8px" }}>{t}</h3>
              <p style={{ color: "var(--text-body)", fontSize: 15, margin: 0 }}>{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= CONNECTION ========================== */
function ConnectionBand() {
  return (
    <section style={{ background: "var(--surface-sunken)", padding: "var(--space-11) 0" }}>
      <div className="atr-container" style={{ textAlign: "center", maxWidth: 820, marginInline: "auto" }}>
        <div className="atr-via-rule" style={{ width: 88, margin: "0 auto 26px" }} />
        <h2 style={{ fontSize: "var(--text-5xl)", lineHeight: 1.08 }}>
          Wir bringen <span className="atr-via-text">Menschen und Märkte</span> von morgen zusammen.
        </h2>
        <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", marginTop: 18 }}>
          Traditionell und innovativ, eckig und rund — seit über 100 Jahren der vertrauenswürdige
          Partner der Genossenschaftsbanken. Das Beständige bleibt der Wandel.
        </p>
      </div>
      <div className="atr-container" style={{ marginTop: "var(--space-8)" }}>
        <img src="../../assets/photos/team.jpg" alt="Das Atruvia-Team"
          style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: "var(--radius-2xl)", display: "block" }} />
      </div>
    </section>
  );
}

/* =========================== MAGAZINE ========================== */
function MagazineSection() {
  const items = [
    ["KI und Smart Analytics", "Datenstrategie für Banken: Datenmanagement, Governance und KI-Readiness", "../../assets/photos/data-centre.jpg"],
    ["KI und Smart Analytics", "Das KI-Kompetenzcenter: Zukunftssicherung für die GFG", "../../assets/photos/magazine-1.jpeg"],
    ["Prozesseffizienz", "Automatisierung: Gut gerüstet für die Zukunft", "../../assets/photos/business-woman.jpg"],
  ];
  return (
    <section style={{ padding: "var(--space-11) 0" }}>
      <div className="atr-container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, gap: 16 }}>
          <h2 style={{ fontSize: "var(--text-4xl)", margin: 0 }}>Aktuelles</h2>
          <Button variant="ghost" iconRight={<Icon name="arrow-right" size={18} />}>Zum Newsroom</Button>
        </div>
        <div className="atr-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {items.map(([cat, title, src], i) => (
            <Card key={i} interactive style={{ padding: 0, overflow: "hidden" }}>
              <Photo src={src} label={cat} h={180} round="0" />
              <div style={{ padding: "var(--space-5)" }}>
                <Badge variant="brand">{cat}</Badge>
                <h3 style={{ fontSize: "var(--text-lg)", margin: "12px 0 0", lineHeight: 1.3 }}>{title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER =========================== */
function SiteFooter() {
  const cols = [
    ["Unternehmen", ["Unsere Geschichte", "Vorstand", "Zahlen & Fakten", "Nachhaltigkeit"]],
    ["Leistungen", ["Bankverfahren", "Cloud-Plattform", "Apps", "Sicherheit"]],
    ["Karriere", ["Professionals", "Ausbildung", "Studierende", "Vielfalt"]],
  ];
  return (
    <footer style={{ background: "var(--atr-ink-900)", color: "var(--atr-gray-400)", paddingTop: "var(--space-9)" }}>
      <div className="atr-container">
        <div className="atr-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(3,1fr)", gap: 40, paddingBottom: "var(--space-8)" }}>
          <div>
            <Logo variant="light" withMark height={24} />
            <p style={{ marginTop: 16, maxWidth: "34ch", fontSize: 14 }}>
              Digitalisierungspartner der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken.
            </p>
          </div>
          {cols.map(([h, links], i) => (
            <div key={i}>
              <div style={{ color: "#fff", fontWeight: 700, marginBottom: 14, fontSize: 14 }}>{h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 14 }}>
                {links.map((l, j) => <li key={j}><a href="#" style={{ color: "var(--atr-gray-400)" }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", padding: "20px 0", display: "flex",
          justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 13 }}>
          <span>© 2026 Atruvia AG · Karlsruhe & Münster</span>
          <span>Datenschutz · Impressum · Barrierefreiheit</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, Hero, StatsBand, ServicesSection, ConnectionBand, MagazineSection, SiteFooter, AtrIcon: Icon });
