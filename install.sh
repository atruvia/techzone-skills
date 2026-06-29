#!/usr/bin/env bash
set -euo pipefail
# TechZone Skills — Onboarding-Installer.
# Installiert standardmäßig nur die Atruvia-Skills (Kern) nach ~/.claude/skills.
# Externe Extras (Matt Pocock, BMAD) laden Fremdinhalte und sind Opt-in.
# © 2026 Atruvia AG — proprietär. Alle Rechte vorbehalten.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=scripts/_lib.sh
. "$SCRIPT_DIR/scripts/_lib.sh"

WITH_POCOCK=0
WITH_BMAD=0
FORWARD=()   # flags forwarded to sub-scripts (--force, --dry-run)

usage() {
  cat <<'EOF'
TechZone Skills — Installer

Verwendung:
  ./install.sh [Optionen]

Ohne Optionen: installiert die Atruvia-Skills (Kern) nach ~/.claude/skills.

Optionen:
  --with-external   Externe Extras zusätzlich installieren (Pocock + BMAD).
  --with-pocock     Nur Matt Pococks Skills zusätzlich installieren.
  --with-bmad       Nur den BMAD-Starter zusätzlich installieren.
  --force           Vorhandene externe Installationen überschreiben/aktualisieren.
  --dry-run         Nur anzeigen, was passieren würde (nichts verändern).
  -h, --help        Diese Hilfe.

Externe Extras laden Fremdinhalte aus dem Netz:
  • Matt Pocock Skills — github.com/mattpocock/skills (MIT)
  • BMAD-METHOD        — npx bmad-method (Node >= 20.12 erforderlich),
                         scaffolded nach ~/Documents/bmad-starter
EOF
}

while [ $# -gt 0 ]; do
  case "$1" in
    --with-external) WITH_POCOCK=1; WITH_BMAD=1 ;;
    --with-pocock)   WITH_POCOCK=1 ;;
    --with-bmad)     WITH_BMAD=1 ;;
    --force)         FORWARD+=(--force) ;;
    --dry-run)       FORWARD+=(--dry-run); DRY_RUN=1 ;;
    -h|--help)       usage; exit 0 ;;
    *) die "Unbekannte Option: $1 (siehe --help)" ;;
  esac
  shift
done

# Expand a possibly-empty array safely under `set -u` (bash 3.2 compatible).
forward() { "$@" "${FORWARD[@]+"${FORWARD[@]}"}"; }

failures=()

# --- Core: Atruvia (abort on failure) -------------------------------------
log_step "Kern: Atruvia-Skills"
if ! forward "$SCRIPT_DIR/scripts/install-atruvia-skills.sh"; then
  die "Kern-Installation (Atruvia) fehlgeschlagen — Abbruch."
fi

# --- Optional: Matt Pocock (warn + continue) ------------------------------
if [ "$WITH_POCOCK" = "1" ]; then
  echo
  log_step "Extra: Matt Pocock Skills"
  if ! forward "$SCRIPT_DIR/scripts/install-pocock-skills.sh"; then
    log_warn "Pocock-Installation fehlgeschlagen — übersprungen."
    failures+=("Pocock")
  fi
fi

# --- Optional: BMAD (warn + continue) -------------------------------------
if [ "$WITH_BMAD" = "1" ]; then
  echo
  log_step "Extra: BMAD-Starter"
  if ! forward "$SCRIPT_DIR/scripts/install-bmad.sh"; then
    log_warn "BMAD-Installation fehlgeschlagen/übersprungen."
    failures+=("BMAD")
  fi
fi

echo
if [ "${#failures[@]}" -eq 0 ]; then
  log_ok "Fertig."
else
  log_warn "Fertig mit Warnungen — nicht erfolgreich: ${failures[*]}"
  exit 1
fi
