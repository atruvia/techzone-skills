#!/usr/bin/env bash
set -euo pipefail
# Installs Matt Pocock's skills (github.com/mattpocock/skills, MIT) non-interactively
# into ~/.claude/skills. Third-party content, fetched over the network via git.
# © 2026 Atruvia AG — proprietär (dieses Skript). Installiert MIT-lizenzierte Fremdinhalte.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=scripts/_lib.sh
. "$SCRIPT_DIR/_lib.sh"

SKILLS_DIR="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"
POCOCK_REPO="${POCOCK_REPO:-https://github.com/mattpocock/skills.git}"
# POCOCK_REF must be a branch or tag (cloned with --branch). Default: main.
POCOCK_REF="${POCOCK_REF:-main}"
# Allowlist of categories considered ready for general use. Edit to taste.
# Deliberately excludes: deprecated, in-progress, personal.
CATEGORIES=(engineering productivity misc)

usage() {
  cat <<'EOF'
install-pocock-skills.sh — Matt Pococks Skills nach ~/.claude/skills installieren.

Nicht-interaktiv: klont das Repo flach und kopiert ausgewählte Skill-Ordner.
Vorhandene gleichnamige Skills werden standardmäßig NICHT überschrieben.

Optionen:
  --force     Vorhandene gleichnamige Skills überschreiben/aktualisieren.
  --dry-run   Nur anzeigen, was passieren würde (kein Clone, keine Änderungen).
  -h, --help  Diese Hilfe.

Umgebungsvariablen:
  POCOCK_REF   Branch oder Tag (Standard: main).
EOF
}

FORCE=0
while [ $# -gt 0 ]; do
  case "$1" in
    --force)   FORCE=1 ;;
    --dry-run) DRY_RUN=1 ;;
    -h|--help) usage; exit 0 ;;
    *) die "Unbekannte Option: $1" ;;
  esac
  shift
done

require_cmd git   "Bitte git installieren."
require_cmd rsync "Bitte rsync installieren."

log_step "Installiere Matt Pococks Skills (Ref: $POCOCK_REF) nach $SKILLS_DIR"

if [ "$DRY_RUN" = "1" ]; then
  log_info "[dry-run] git clone --depth 1 --branch $POCOCK_REF $POCOCK_REPO <tmp>"
  log_info "[dry-run] Kategorien ${CATEGORIES[*]} → flach nach $SKILLS_DIR/<skill>"
  log_info "[dry-run] vorhandene gleichnamige Skills würden ohne --force übersprungen"
  exit 0
fi

run mkdir -p "$SKILLS_DIR"

tmp="$(mktemp -d "${TMPDIR:-/tmp}/pocock-skills.XXXXXX")"
cleanup() { rm -rf "$tmp"; }
trap cleanup EXIT

if ! git clone --depth 1 --branch "$POCOCK_REF" "$POCOCK_REPO" "$tmp" >/dev/null 2>&1; then
  die "git clone fehlgeschlagen (Ref: $POCOCK_REF)."
fi

license_src="$tmp/LICENSE"  # MIT — travels with each copied skill

installed=0
skipped=0
for cat in "${CATEGORIES[@]}"; do
  cat_dir="$tmp/skills/$cat"
  if [ ! -d "$cat_dir" ]; then
    log_warn "Kategorie »$cat« nicht im Repo gefunden — übersprungen."
    continue
  fi
  for skill_md in "$cat_dir"/*/SKILL.md; do
    [ -e "$skill_md" ] || continue
    src="$(dirname "$skill_md")"
    name="$(basename "$src")"
    dest="$SKILLS_DIR/$name"
    if [ -e "$dest" ] && [ "$FORCE" != "1" ]; then
      log_skip "$name (bereits vorhanden — mit --force überschreiben)"
      skipped=$((skipped + 1))
      continue
    fi
    # Flatten skills/<cat>/<skill> -> ~/.claude/skills/<skill>. --delete scoped
    # to "$dest/" only. Exclude any nested .git and macOS cruft.
    rsync -a --delete --exclude '.git' --exclude '.DS_Store' "$src/" "$dest/"
    [ -f "$license_src" ] && cp "$license_src" "$dest/LICENSE.mattpocock"
    log_ok "$name installiert ($cat)"
    installed=$((installed + 1))
  done
done

log_ok "Pocock-Skills: $installed installiert, $skipped übersprungen."
if [ "$installed" -gt 0 ]; then
  log_info "Hinweis: einige Skills sind erst nach »/setup-matt-pocock-skills« (interaktiv in Claude Code) vollständig konfiguriert."
fi
