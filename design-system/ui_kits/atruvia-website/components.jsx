/* global React */
const { useState } = React;

/* Resource lookup: bundled assets via window.__resources, with dev fallbacks. */
const __R = (typeof window !== 'undefined' && window.__resources) || {};
const ASSET = (key, fallback) => __R[key] || fallback;
const LOGO   = ASSET('logo',     '../../assets/atruvia-logo.svg');
const EIK    = ASSET('eik',      '../../assets/photos/portrait-eik.png');
const TOBIAS = ASSET('tobias',   '../../assets/photos/portrait-tobias.png');
const BVR    = ASSET('bvrLogo',  '../../assets/bvr-logo-neu.svg');

/* ============================================================
   TopNav — desktop nav matching atruvia.de pattern
   ============================================================ */
function TopNav({ activeKey = 'unternehmen' }) {
  const items = [
    { key: 'karriere',    label: 'Karriere' },
    { key: 'unternehmen', label: 'Unternehmen' },
    { key: 'leistungen',  label: 'Leistungen' },
    { key: 'news',        label: 'News' },
  ];
  return (
    <nav className="atr-nav">
      <a className="atr-nav__brand" href="#">
        <img src={LOGO} alt="Atruvia" />
      </a>
      <div className="atr-nav__spacer" />
      <div className="atr-nav__links">
        {items.map(i => (
          <a
            key={i.key}
            href="#"
            className={`atr-nav__link ${activeKey === i.key ? 'is-active' : ''}`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ============================================================
   Hero — large page-title pattern
   "Kontakt" / "Werte" style: centered, LIGHT weight, very airy
   ============================================================ */
function PageHero({ title, lead }) {
  return (
    <section className="atr-page-hero">
      <h1 className="atr-page-hero__title">{title}</h1>
      {lead && <p className="atr-page-hero__lead">{lead}</p>}
    </section>
  );
}

/* ============================================================
   ViaLine — the brand's primary design device, in coral
   Used in diagrams to literally CONNECT concepts.
   ============================================================ */
function ViaLine({ color = 'var(--atr-coral)', strokeWidth = 3 }) {
  return (
    <svg className="atr-via-line"
         viewBox="0 0 600 80" fill="none" preserveAspectRatio="none"
         stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
      <path d="M4 60 C 80 60, 100 12, 180 12 L 300 12 C 360 12, 380 60, 460 60 L 596 60" />
    </svg>
  );
}

/* ============================================================
   WerteDiagram — recreates the "Werte" values diagram pattern
   Coral VIA line connecting five values on cyan-soft background.
   ============================================================ */
function WerteDiagram() {
  return (
    <section className="atr-werte">
      <h1 className="atr-page-hero__title">Werte</h1>
      <p className="atr-werte__intro">
        <strong>Miteinander und füreinander:</strong> Diese Leitgedanken prägen Atruvia.
        Sie werden nach innen und nach außen gelebt. Was bedeutet das konkret?
      </p>
      <div className="atr-werte__diagram">
        <svg viewBox="0 0 800 500" className="atr-werte__svg" preserveAspectRatio="xMidYMid meet">
          {/* The VIA line connecting five values */}
          <g fill="none" stroke="var(--atr-coral)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Center: Füreinander */}
            {/* Right: Respektvoll - straight line */}
            <line x1="475" y1="260" x2="640" y2="260"/>
            {/* Left: Offen & Ehrlich — angular bend up then down */}
            <path d="M 325 260 L 295 260 L 295 200 L 230 200 L 230 270"/>
            {/* Top: Ergebnisorientiert — angular bend up */}
            <path d="M 420 245 L 420 175 L 470 175 L 470 90"/>
            {/* Bottom: Eigenverantwortlich — with loop! */}
            <path d="M 400 275 L 400 320 Q 400 360 380 360 Q 360 360 360 340 Q 360 320 380 320 L 400 320 L 400 460"/>
          </g>
          {/* Labels */}
          <g fontFamily="var(--font-display)" fontWeight="700" fontSize="22" fill="var(--atr-navy)" textAnchor="middle">
            <text x="400" y="270">Füreinander</text>
            <text x="720" y="270">Respektvoll</text>
            <text x="230" y="290">Offen &amp; Ehrlich</text>
            <text x="470" y="75">Ergebnisorientiert</text>
            <text x="400" y="490">Eigenverantwortlich</text>
          </g>
        </svg>
      </div>
    </section>
  );
}

/* ============================================================
   BankingTwoPane — Omnikanal-style two-pane selector
   Left: cyan-soft list, right-aligned. Active item shows a
   navy triangular notch pointing into the navy right pane.
   Right: navy detail panel with white text.
   ============================================================ */
function BankingTwoPane({
  intro,
  items = [],
  activeIndex: controlledIdx,
  onChange,
}) {
  const [internalIdx, setInternalIdx] = useState(0);
  const idx = controlledIdx ?? internalIdx;
  const setIdx = onChange ?? setInternalIdx;
  const active = items[idx] || {};

  return (
    <section className="atr-banking">
      {intro && (
        <div className="atr-banking__intro">
          <h2 className="atr-h2">{intro.title}</h2>
          <p>{intro.body}</p>
        </div>
      )}
      <div className="atr-banking__pane">
        <ul className="atr-banking__nav">
          {items.map((it, i) => (
            <li key={it.title} className={`atr-banking__nav-item ${i === idx ? 'is-active' : ''}`}>
              <button onClick={() => setIdx(i)}>
                {it.title}
              </button>
              {i === idx && <span className="atr-banking__pointer" aria-hidden="true" />}
            </li>
          ))}
        </ul>
        <div className="atr-banking__detail">
          <h3 className="atr-banking__detail-title">{active.title}</h3>
          {active.body && <p>{active.body}</p>}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ValueDiagram — generic VIA-line connector diagram
   Pass an array of nodes (label + position) and the SVG line.
   ============================================================ */
function ValueDiagram({ title, intro, children }) {
  return (
    <section className="atr-werte">
      {title && <h1 className="atr-page-hero__title">{title}</h1>}
      {intro && (
        <p className="atr-werte__intro">
          {typeof intro === 'string' ? intro : intro}
        </p>
      )}
      <div className="atr-werte__diagram">
        <svg viewBox="0 0 800 500" className="atr-werte__svg" preserveAspectRatio="xMidYMid meet">
          {children}
        </svg>
      </div>
    </section>
  );
}

/* Reusable diagram primitives — coral lines + navy labels */
function ViaLinePath({ d, strokeWidth = 4 }) {
  return <path d={d} fill="none" stroke="var(--atr-coral)" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />;
}
function ViaNode({ x, y, label, anchor = 'middle', size = 22 }) {
  return (
    <text x={x} y={y} fontFamily="var(--font-display)" fontWeight="700" fontSize={size} fill="var(--atr-navy)" textAnchor={anchor}>
      {label}
    </text>
  );
}


function ManifestoBlock() {
  const items = [
    {
      bold: 'Unser Unternehmen steht für Gemeinschaft, Zugehörigkeit und eine gemeinsame Vision.',
      body: '„Wir" bedeutet, zusammen zu wachsen, respektvoll und ehrlich miteinander umzugehen, die Kolleg*innen im Blick zu haben und Vielfalt als Bereicherung zu verstehen.'
    },
    {
      bold: 'Verbindungen zu schaffen ist der Kern unserer Dienstleistung.',
      body: 'Wir schaffen Verbindungen und bringen damit nicht nur Menschen, sondern auch Projekte, Aufgaben und Visionen zusammen. Wir leben Digitalisierung.'
    },
    {
      bold: 'Füreinander in eine bessere Zukunft.',
      body: 'Dafür gehen wir gemeinsam neue Wege und arbeiten stetig an der Leistungsfähigkeit unserer Produkte. Gemeinsam mit Kund*innen und Partner*innen.'
    },
  ];
  return (
    <section className="atr-manifesto">
      <div className="atr-manifesto__grid">
        {items.map((it, i) => (
          <article key={i} className="atr-manifesto__item">
            <p className="atr-body"><strong>{it.bold}</strong> {it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   ContactCard — Ansprechpartner pattern (rectangular portrait,
   white card on cyan-soft section background, mail link)
   ============================================================ */
function ContactCard({ portrait, name, role, email }) {
  return (
    <article className="atr-contact-card">
      <div className="atr-contact-card__row">
        <img className="atr-contact-card__portrait" src={portrait} alt={name} />
        <div className="atr-contact-card__info">
          <h3 className="atr-contact-card__name">{name}</h3>
          <p className="atr-contact-card__role">{role}</p>
        </div>
      </div>
      <div className="atr-contact-card__mail">
        <strong>E-Mail:</strong>
        <span className="atr-mail-icon" aria-hidden="true">
          <svg viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="22" height="16" rx="1"/>
            <path d="M2 3 L12 11 L22 3"/>
          </svg>
        </span>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </article>
  );
}

function AnsprechpartnerSection() {
  return (
    <section className="atr-ansprechpartner">
      <h2 className="atr-section-title">Ansprechpartner</h2>
      <div className="atr-ansprechpartner__list">
        <ContactCard
          portrait={EIK}
          name="Eik Wauschkuhn"
          role="Sales Manager Banking"
          email="sales@atruvia.de"
        />
        <ContactCard
          portrait={TOBIAS}
          name="Tobias Markus Schmitt"
          role="Tribe Lead Sales Management"
          email="sales@atruvia.de"
        />
      </div>
    </section>
  );
}

/* ============================================================
   FormSection — "Falls du Fragen oder Anregungen hast" Kontakt pattern
   Bold h2, large form on white
   ============================================================ */
function KontaktForm() {
  return (
    <section className="atr-kontakt-form">
      <h2 className="atr-h2">Falls du Fragen oder Anregungen hast,<br/>nimm bitte Kontakt mit uns auf.</h2>
      <p>
        Deine Daten werden gemäß unserer <a href="#">Datenschutzerklärung</a> lediglich
        zur Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben.
      </p>
      <form className="atr-form">
        <div className="atr-form__row">
          <div className="atr-field">
            <label htmlFor="vorname">Vorname</label>
            <input id="vorname" type="text" />
          </div>
          <div className="atr-field">
            <label htmlFor="nachname">Nachname</label>
            <input id="nachname" type="text" />
          </div>
        </div>
        <div className="atr-field">
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="email" />
        </div>
        <div className="atr-field">
          <label htmlFor="nachricht">Nachricht</label>
          <textarea id="nachricht" rows="5"></textarea>
        </div>
        <div className="atr-form__actions">
          <button type="submit" className="atr-btn atr-btn--primary">Senden →</button>
        </div>
      </form>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="atr-footer on-navy">
      <div className="atr-footer__inner">
        <div className="atr-footer__brand">
          <img src={LOGO} alt="Atruvia" className="atr-footer__logo" />
          <p className="atr-footer__tag">Wir verbinden. Füreinander.</p>
        </div>
        <div className="atr-footer__col">
          <h4>Karriere</h4>
          <a href="#">Professionals & Leads</a>
          <a href="#">Ausbildung & Duales Studium</a>
          <a href="#">Werkstudent*innen</a>
        </div>
        <div className="atr-footer__col">
          <h4>Unternehmen</h4>
          <a href="#">Vorstand</a>
          <a href="#">Wir sind Atruvia</a>
          <a href="#">Unternehmensgruppe</a>
        </div>
        <div className="atr-footer__col">
          <h4>News</h4>
          <a href="#">Magazin</a>
          <a href="#">Newsroom</a>
        </div>
        <div className="atr-footer__col">
          <h4>Genossenschaftliche FinanzGruppe</h4>
          <img src={BVR} alt="BVR" className="atr-footer__partner" />
        </div>
      </div>
      <div className="atr-footer__legal">
        <span>© Atruvia AG</span>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">Gender-Hinweis</a>
        <a href="#">Barrierefreiheit</a>
      </div>
    </footer>
  );
}

/* ============================================================
   App — sample composition demonstrating multiple patterns
   ============================================================ */
function App() {
  const [page, setPage] = useState('kontakt');
  const bankingItems = [
    { title: 'Omnikanal-Banking-Erlebnis', body: 'Banken agieren heute lebensbegleitend — und die Bedürfnisse der Kund*innen stehen im Fokus. Das bedeutet: Banken müssen ihnen Produkte und Dienstleistungen anbieten, die mit ihrer Lebens- und Arbeitswelt vereinbar sind. Kund*innen müssen frei wählen können, ob sie zum Beispiel ihr Konto in der Filiale, online, per Telefon, Chat oder Video eröffnen. Die Kombination verschiedener Kanäle, das Omnikanal-Banking, orientiert sich stark an den Gewohnheiten der privaten und gewerblichen Nutzer*innen.' },
    { title: 'Von Big Data zu Smart Data', body: 'Wir verwandeln große Datenmengen in gezielte, kontextrelevante Informationen für Banken. Aus Big Data wird Smart Data — Informationen, die im richtigen Moment am richtigen Ort genutzt werden können.' },
    { title: 'Intelligente Nutzung von Daten mit KI und machine learning: Smart Analytics', body: 'Mit Smart Analytics analysieren wir Verhaltens- und Transaktionsdaten in Echtzeit. KI-gestützte Modelle erkennen Muster, prognostizieren Bedarfe und helfen Banken, ihre Kund*innen besser zu verstehen.' },
  ];

  return (
    <div className="atr-app">
      <TopNav activeKey="leistungen" />
      <nav className="atr-page-switch">
        <button onClick={() => setPage('kontakt')} className={page === 'kontakt' ? 'is-active' : ''}>Kontakt</button>
        <button onClick={() => setPage('werte')} className={page === 'werte' ? 'is-active' : ''}>Werte</button>
        <button onClick={() => setPage('manifest')} className={page === 'manifest' ? 'is-active' : ''}>Manifest</button>
        <button onClick={() => setPage('banking')} className={page === 'banking' ? 'is-active' : ''}>Banking</button>
        <button onClick={() => setPage('diagrams')} className={page === 'diagrams' ? 'is-active' : ''}>Diagrams</button>
      </nav>
      <main>
        {page === 'kontakt' && (
          <>
            <PageHero title="Kontakt"/>
            <KontaktForm />
            <AnsprechpartnerSection />
          </>
        )}
        {page === 'werte' && <WerteDiagram />}
        {page === 'manifest' && (
          <>
            <PageHero
              title="Wir sind Atruvia."
              lead="Wir verbinden. Füreinander. Digitalisierungspartner der Genossenschaftlichen FinanzGruppe."
            />
            <ManifestoBlock />
          </>
        )}
        {page === 'banking' && (
          <BankingTwoPane
            intro={{
              title: 'Banking mit der Omnikanalplattform',
              body: 'Mit unserem Kernbankenverfahren agree21 bieten wir unseren Kunden eine komplette Banking-Lösung. Von Omnikanal bis Bankensteuerung. Unterstützt durch kompetenten Support und Consulting mit bankfachlichem Know-how.'
            }}
            items={bankingItems}
          />
        )}
        {page === 'diagrams' && <DiagramGallery />}
      </main>
      <Footer />
    </div>
  );
}

/* ============================================================
   DiagramGallery — showcase of three VIA-line patterns
   ============================================================ */
function DiagramGallery() {
  return (
    <div className="atr-diagram-gallery">

      {/* Diagram 1 — Linear journey */}
      <ValueDiagram
        title="Unser Weg"
        intro={<><strong>Von der Idee bis zur Lösung.</strong> Jede Verbindung führt zum nächsten Schritt.</>}
      >
        <ViaLinePath d="M 80 250 L 220 250 L 220 180 L 360 180 L 360 320 L 500 320 L 500 220 L 660 220 L 720 220" />
        <ViaNode x={80}  y={290} label="Idee" />
        <ViaNode x={290} y={150} label="Code" />
        <ViaNode x={360} y={360} label="Test" />
        <ViaNode x={570} y={190} label="Launch" />
        <ViaNode x={720} y={260} label="Erfolg" />
      </ValueDiagram>

      {/* Diagram 2 — Branching out from a single source */}
      <ValueDiagram
        title="Genossenschaftliche FinanzGruppe"
        intro={<><strong>Eine Idee, viele Wege.</strong> Wir verbinden Atruvia mit den Banken, Partner*innen und Märkten.</>}
      >
        {/* Center node radiates four lines */}
        <ViaLinePath d="M 400 260 L 400 140 L 200 140" />
        <ViaLinePath d="M 400 260 L 400 140 L 600 140" />
        <ViaLinePath d="M 400 260 Q 400 360 280 360 L 180 360" />
        <ViaLinePath d="M 400 260 Q 400 360 520 360 L 620 360" />
        <ViaNode x={400} y={290} label="Atruvia" size={26} />
        <ViaNode x={140} y={150} label="Volksbanken" anchor="start" size={18} />
        <ViaNode x={660} y={150} label="Raiffeisenbanken" anchor="end" size={18} />
        <ViaNode x={120} y={370} label="Privatbanken" anchor="start" size={18} />
        <ViaNode x={680} y={370} label="ADAC & Partner" anchor="end" size={18} />
      </ValueDiagram>

      {/* Diagram 3 — Loop / cycle */}
      <ValueDiagram
        title="Füreinander"
        intro={<><strong>Verbindung ist ein Kreislauf.</strong> Geben, empfangen, weitergeben — und wieder von vorn.</>}
      >
        {/* Circular path with a loop accent */}
        <ViaLinePath d="M 400 130 L 580 130 Q 660 130 660 220 L 660 320 Q 660 410 570 410 L 240 410 Q 140 410 140 320 L 140 230 Q 140 130 240 130 L 350 130 Q 380 130 380 160 Q 380 190 410 190 Q 440 190 440 160 Q 440 130 410 130 L 400 130" />
        <ViaNode x={400} y={120} label="Geben" />
        <ViaNode x={680} y={275} label="Empfangen" anchor="end" />
        <ViaNode x={400} y={460} label="Weitergeben" />
        <ViaNode x={120} y={275} label="Wachsen" anchor="start" />
      </ValueDiagram>

    </div>
  );
}

Object.assign(window, { App, TopNav, PageHero, ViaLine, WerteDiagram, ManifestoBlock, ContactCard, AnsprechpartnerSection, KontaktForm, BankingTwoPane, ValueDiagram, ViaLinePath, ViaNode, DiagramGallery, Footer });
