# TechZone Skills

Eine Sammlung von **Skills für Claude / Claude Code** aus der TechZone der **Atruvia AG** — dem Digitalisierungspartner der genossenschaftlichen Bankengruppe Deutschlands (Volksbanken Raiffeisenbanken).

Jeder Skill ist ein eigenständiger Ordner mit einer `SKILL.md` und allen Assets, die er braucht. Du kopierst den Ordner in dein Claude-Code-Skills-Verzeichnis — fertig.

---

## Die Skills

### `atruvia-design-system/` — Atruvia Design System

Ein einsatzbereites Design System, um gut gebrandete Oberflächen, Präsentationen und Mockups in der visuellen Sprache von Atruvia zu erstellen. Enthält Marken-Tokens (Farben, Typografie), die selbst gehosteten Atruvia-Schriften, echte SVG-Assets (Logo, VIA-Mark, VIA-Linie, Partnerlogos), ein hochauflösendes UI-Kit, das atruvia.de nachbildet, sowie kopierfertige Komponenten-Previews.

→ Details in [`atruvia-design-system/README.md`](atruvia-design-system/README.md)

### `atruvia-teach/` — Teach

Verwandelt das aktuelle Verzeichnis in einen statefulen **Lern-Workspace**: Claude wird zum\*zur Tutor\*in und baut über mehrere Sitzungen hinweg aufeinander aufbauende Lektionen, Referenzdokumente und Lernaufzeichnungen auf — gegroundet in der Mission der lernenden Person. Jede Lektion ist ein eigenständiges, schön gestaltetes HTML-Dokument, gebaut auf der gebündelten Atruvia-Design-System-Variante in [`atruvia-teach/design-system/`](atruvia-teach/design-system/).

→ Details in [`atruvia-teach/SKILL.md`](atruvia-teach/SKILL.md)

---

## Installation

Skills sind Ordner, die Claude Code automatisch erkennt. Lege sie in eines der beiden Verzeichnisse:

- **Persönlich (alle Projekte):** `~/.claude/skills/`
- **Projektbezogen (geteilt im Repo):** `.claude/skills/`

### Schnellinstallation per Skript

Nach dem Klonen installierst du die Atruvia-Skills mit einem Befehl nach `~/.claude/skills/`:

```sh
git clone https://github.com/atruvia/techzone-skills.git
cd techzone-skills
./install.sh                 # nur die Atruvia-Skills (Kern)
./install.sh --dry-run       # vorher anzeigen, was passieren würde
```

Der Installer ist idempotent — ein erneuter Lauf bringt die Skills auf den Stand des Repos. Voraussetzung: `bash` und `rsync` (Linux-Desktop und macOS; Windows nur via WSL).

**Optionale externe Extras** (Opt-in, laden Fremdinhalte aus dem Netz):

```sh
./install.sh --with-external   # zusätzlich Pocock-Skills + BMAD-Starter
./install.sh --with-pocock     # nur Matt Pococks Skills (MIT)
./install.sh --with-bmad       # nur BMAD-Starter → ~/Documents/bmad-starter
```

- **Matt Pocock Skills** — [github.com/mattpocock/skills](https://github.com/mattpocock/skills) (MIT). Vorhandene gleichnamige Skills werden ohne `--force` nicht überschrieben.
- **BMAD-METHOD** — via `npx bmad-method` (benötigt Node ≥ 20.12), scaffolded nach `~/Documents/bmad-starter`. Ein vorhandener Starter bleibt ohne `--force` unangetastet.

Diese Extras stammen **nicht** von Atruvia und unterliegen ihren eigenen Lizenzen.

### Manuell (Fallback)

```sh
# Beispiel: das Design System persönlich verfügbar machen
git clone https://github.com/atruvia/techzone-skills.git
cp -R techzone-skills/atruvia-design-system ~/.claude/skills/atruvia-design-system
cp -R techzone-skills/atruvia-teach          ~/.claude/skills/atruvia-teach
```

Danach kannst du den Skill in Claude Code aufrufen — z. B. über `/atruvia-design-system` für das Design System oder `/atruvia-teach` zum Lernen.

---

## Markenstimme

Alle Artefakte aus diesen Skills folgen der Atruvia-Markenstimme: **Deutsch**, erste Person Plural **»Wir«**, informell **»du«**, mit Gender-Stern (*Kund\*innen, Mitarbeiter\*innen, Kolleg\*innen*). »Deutsche Anführungszeichen«, keine Emoji auf Markenoberflächen, ruhig und zurückhaltend. Farbanker ist **Atruvia Navy** `#000064`.

---

## Lizenz

**Proprietär** — © 2026 Atruvia AG. Alle Rechte vorbehalten.

Dieses Repository bündelt geschützte Markenmaterialien der Atruvia AG — Schriften, Logos, die VIA-Linie, Farbwerte und Design-Tokens. Es ist **keine** Open-Source-Software: Die Nutzung ist autorisierten Nutzer\*innen (Mitarbeiter\*innen und Vertragspartner\*innen der Atruvia AG) für Atruvia-Zwecke vorbehalten. Es gelten die vollständigen Bedingungen in der [LICENSE](LICENSE).
