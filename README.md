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

[MIT](LICENSE) © 2026 Atruvia AG
