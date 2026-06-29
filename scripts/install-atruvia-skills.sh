#!/usr/bin/env bash
set -euo pipefail
# Installs the first-party Atruvia skills from this repo into ~/.claude/skills.
# Core / first-party. Copies (mirrors) every top-level folder containing a SKILL.md.
# © 2026 Atruvia AG — proprietär. Alle Rechte vorbehalten.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
# shellcheck source=scripts/_lib.sh
. "$SCRIPT_DIR/_lib.sh"

# CLAUDE_SKILLS_DIR override exists mainly for testing (e.g. --dry-run smoke tests).
SKILLS_DIR="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"

usage() {
  cat <<'EOF'
install-atruvia-skills.sh — Atruvia-Skills (Kern) nach ~/.claude/skills installieren.

Optionen:
  --force     Akzeptiert (ohne Wirkung): der Kern-Installer spiegelt immer.
  --dry-run   Nur anzeigen, was passieren würde.
  -h, --help  Diese Hilfe.
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

require_cmd rsync "Bitte rsync installieren."

[ "$FORCE" = "1" ] && log_info "(--force ist für den Kern-Installer ohne Wirkung — es wird immer gespiegelt.)"

log_step "Installiere Atruvia-Skills nach $SKILLS_DIR"
run mkdir -p "$SKILLS_DIR"

found=0
for skill_md in "$REPO_ROOT"/*/SKILL.md; do
  [ -e "$skill_md" ] || continue   # literal glob when nothing matches
  src="$(dirname "$skill_md")"
  name="$(basename "$src")"
  found=$((found + 1))
  log_step "$name"
  # Mirror into the skill's OWN subfolder only. --delete is scoped to "$dest/",
  # never the whole skills dir. Exclude the nested .git (atruvia-design-system
  # ships one) and macOS cruft; excluded paths are also protected from --delete.
  run rsync -a --delete \
    --exclude '.git' \
    --exclude '.DS_Store' \
    "$src/" "$SKILLS_DIR/$name/"
  log_ok "$name installiert/aktualisiert"
done

if [ "$found" -eq 0 ]; then
  die "Keine Skills (Ordner mit SKILL.md) in $REPO_ROOT gefunden."
fi
log_ok "$found Atruvia-Skill(s) verarbeitet."
