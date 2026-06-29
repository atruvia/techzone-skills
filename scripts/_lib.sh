#!/usr/bin/env bash
# Shared helpers for the TechZone Skills installer scripts.
# © 2026 Atruvia AG — proprietär. Alle Rechte vorbehalten.
#
# Note: user-facing messages are German to match the Atruvia brand voice;
# code and comments are English by convention. Sourced by the installers,
# not run directly.

# Guard against double-sourcing.
if [ -n "${_TZ_LIB_SOURCED:-}" ]; then return 0; fi
_TZ_LIB_SOURCED=1

# Colours only on an interactive TTY (and when not suppressed).
if [ -t 1 ] && [ -z "${NO_COLOR:-}" ]; then
  _C_RESET=$'\033[0m'; _C_DIM=$'\033[2m'
  _C_BLUE=$'\033[34m'; _C_GREEN=$'\033[32m'; _C_YELLOW=$'\033[33m'; _C_RED=$'\033[31m'
else
  _C_RESET=; _C_DIM=; _C_BLUE=; _C_GREEN=; _C_YELLOW=; _C_RED=
fi

# Dry-run is shared via the environment so the orchestrator can forward it.
DRY_RUN="${DRY_RUN:-0}"

log_step() { printf '%s» %s%s\n' "$_C_BLUE"  "$*" "$_C_RESET"; }
log_ok()   { printf '%s✓ %s%s\n' "$_C_GREEN" "$*" "$_C_RESET"; }
log_skip() { printf '%s• übersprungen: %s%s\n' "$_C_DIM" "$*" "$_C_RESET"; }
log_warn() { printf '%s⚠ %s%s\n' "$_C_YELLOW" "$*" "$_C_RESET" >&2; }
log_err()  { printf '%s✗ %s%s\n' "$_C_RED"    "$*" "$_C_RESET" >&2; }
log_info() { printf '  %s%s%s\n' "$_C_DIM"    "$*" "$_C_RESET"; }

die() { log_err "$*"; exit 1; }

# require_cmd <cmd> <hint> — abort if a program is missing.
require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "Benötigtes Programm »$1« nicht gefunden. ${2:-}"
}

# run <cmd...> — execute, or just print under DRY_RUN. Mutating commands go
# through this so --dry-run never touches the filesystem or network.
run() {
  if [ "$DRY_RUN" = "1" ]; then
    printf '%s[dry-run]%s %s\n' "$_C_DIM" "$_C_RESET" "$*"
  else
    "$@"
  fi
}
