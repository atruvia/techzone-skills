#!/usr/bin/env bash
set -euo pipefail
# Scaffolds a BMAD-METHOD starter project (npx bmad-method) into ~/Documents/bmad-starter.
# Third-party software, fetched over the network via npx. Requires Node >= 20.12.
# BMAD writes its skill pointers PROJECT-LOCALLY under <target>/.claude/skills, not global.
# © 2026 Atruvia AG — proprietär (dieses Skript). Installiert Fremdsoftware (BMAD-METHOD).

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=scripts/_lib.sh
. "$SCRIPT_DIR/_lib.sh"

BMAD_VERSION="${BMAD_VERSION:-latest}"
BMAD_MODULES="${BMAD_MODULES:-bmm}"
BMAD_TOOLS="${BMAD_TOOLS:-claude-code}"
TARGET="${BMAD_DIR:-$HOME/Documents/bmad-starter}"

usage() {
  cat <<'EOF'
install-bmad.sh — BMAD-METHOD-Starter nach ~/Documents/bmad-starter scaffolden.

Nicht-interaktiv via »npx bmad-method install --yes«. Benötigt Node >= 20.12 + npx.
Ein bereits vorhandenes Zielverzeichnis wird ohne --force NICHT verändert.

Optionen:
  --force     Vorhandenen Starter aktualisieren (--action update).
  --dry-run   Nur den npx-Befehl anzeigen (nichts ausführen).
  -h, --help  Diese Hilfe.

Umgebungsvariablen:
  BMAD_VERSION  npm-Version (Standard: latest).
  BMAD_MODULES  Komma-Liste der Module (Standard: bmm).
  BMAD_DIR      Zielverzeichnis (Standard: ~/Documents/bmad-starter).
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

# Preflight: Node >= 20.12 and npx. A missing/old Node is a skip, not a hard error,
# so the orchestrator can warn-and-continue.
require_cmd node "Bitte Node.js (>= 20.12) installieren."
require_cmd npx  "Bitte npx (Teil von npm) installieren."

node_ver="$(node --version | sed 's/^v//')"   # e.g. "20.12.0"
node_major="${node_ver%%.*}"
node_rest="${node_ver#*.}"
node_minor="${node_rest%%.*}"
if [ "$node_major" -lt 20 ] || { [ "$node_major" -eq 20 ] && [ "$node_minor" -lt 12 ]; }; then
  log_warn "BMAD benötigt Node >= 20.12 (gefunden: $node_ver) — übersprungen."
  exit 1
fi

# Skip-if-exists: ~/Documents/bmad-starter is a project the dev works in.
action=install
if [ -e "$TARGET" ] && [ -n "$(ls -A "$TARGET" 2>/dev/null || true)" ]; then
  if [ "$FORCE" != "1" ]; then
    log_skip "bmad-starter existiert bereits ($TARGET) — mit --force aktualisieren"
    exit 0
  fi
  action=update
fi

log_step "BMAD-Starter ($action) → $TARGET"
run mkdir -p "$TARGET"
run npx -y "bmad-method@${BMAD_VERSION}" install \
  --yes \
  --action "$action" \
  --tools "$BMAD_TOOLS" \
  --modules "$BMAD_MODULES" \
  --directory "$TARGET"

if [ "$DRY_RUN" != "1" ]; then
  log_ok "BMAD-Starter bereit unter $TARGET"
fi
log_info "BMAD-spezifische Skill-Pointer liegen projektlokal unter $TARGET/.claude/skills (nicht global)."
