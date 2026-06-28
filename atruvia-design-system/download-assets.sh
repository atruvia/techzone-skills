#!/usr/bin/env bash
#
# download-assets.sh — fetch all publicly-available Atruvia website assets
# into the design-system folder structure.
#
# Usage:  bash download-assets.sh      (run from the project root)
#
# Notes:
#   • Items WITHOUT a public URL (the "VIA Type" font, the CD manual, the
#     icon set) are NOT downloadable — see the TODO block at the bottom and
#     drop those in manually.
#   • atruvia.de image endpoints sometimes check the Referer/User-Agent, so
#     we send browser-like headers. If a file comes back tiny/HTML, fetch it
#     in a browser instead and save it to the same path.

set -euo pipefail

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
REF="https://atruvia.de/"

# fetch <url> <destination-path>
fetch() {
  local url="$1" dest="$2"
  mkdir -p "$(dirname "$dest")"
  echo "↓ $dest"
  curl -fSL --retry 3 --connect-timeout 20 \
       -A "$UA" -e "$REF" \
       -o "$dest" "$url" \
    || echo "  ⚠ FAILED: $url  (download manually → $dest)"
}

echo "== Logos (SVG) =="
fetch "https://atruvia.de/assets/images/logo.f03d21dd9d.svg"                       "assets/logos/atruvia-wordmark.svg"
fetch "https://atruvia.de/assets/images/logo-finanzgruppe.88f35eb4db.svg"          "assets/logos/finanzgruppe.svg"
fetch "https://atruvia.de/assets/images/logo-finanzgruppe-inverted.f8d3efcaa0.svg" "assets/logos/finanzgruppe-inverted.svg"
fetch "https://atruvia.de/favicon.ico"                                             "assets/logos/favicon.ico"

echo "== Key photography =="
fetch "https://atruvia.de/uploads/images/_stageXxl/JPG-PowerPoint-Kollegen-sitzen-mit-Tablet-vor-dem-Hub.jpg"                          "assets/photos/hero-hub.jpg"
fetch "https://atruvia.de/uploads/images/_stageXxl/JPG-PowerPoint-Portrait-45.jpg"                                                     "assets/photos/portrait-stage.jpg"
fetch "https://atruvia.de/uploads/images/_stageXxl/GettyImages-1092323244.jpg"                                                         "assets/photos/team.jpg"
fetch "https://atruvia.de/uploads/images/_teaserImageXl/JPG-PowerPoint-Moderner-Rechenzentrumsraum.jpg"                                "assets/photos/data-centre.jpg"
fetch "https://atruvia.de/uploads/images/Veranstaltungen/_640xAUTO_crop_center-center_none/JPG-PowerPoint-Geschaeftsfrau-im-Buero.jpg" "assets/photos/business-woman.jpg"
fetch "https://atruvia.de/uploads/images/_personCutOutXl/jules_high.png"                                                               "assets/photos/julia-cutout.png"

echo "== Magazine / news teasers =="
fetch "https://atruvia.de/uploads/images/_teaserImageXl/IMG_4527.jpeg" "assets/photos/magazine-1.jpeg"
fetch "https://atruvia.de/uploads/images/_teaserImageXl/nBM.jpg"       "assets/photos/magazine-2.jpg"

echo "== Heritage / history imagery =="
fetch "https://atruvia.de/uploads/images/_teaserImageS/Kabel-Anschluss.jpg"                            "assets/photos/history/kabel-anschluss.jpg"
fetch "https://atruvia.de/uploads/images/Geschichte/_contentImageS/1979_Bankboy_GAD.jpg"               "assets/photos/history/bankboy-1979.jpg"
fetch "https://atruvia.de/uploads/images/Karriere/_contentImageS/1979_Datenerfassung-Kassette.jpg"     "assets/photos/history/datenerfassung-1979.jpg"
fetch "https://atruvia.de/uploads/images/Geschichte/_contentImageS/Konsole-1.jpg"                      "assets/photos/history/konsole-1.jpg"
fetch "https://atruvia.de/uploads/images/Geschichte/_contentImageS/JPG-PowerPoint-Bueroszenen.jpg"     "assets/photos/history/bueroszenen.jpg"
fetch "https://atruvia.de/uploads/images/Geschichte/_contentImageS/BTX.jpg"                            "assets/photos/history/btx.jpg"
fetch "https://atruvia.de/uploads/images/Geschichte/_contentImageS/Leitstand-in-MS.jpg"                "assets/photos/history/leitstand-ms.jpg"
fetch "https://atruvia.de/uploads/images/Geschichte/_contentImageS/EC-Cash.jpg"                        "assets/photos/history/ec-cash.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/Konsole-2.jpg"                                       "assets/photos/history/konsole-2.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/Konsole-158-MP.jpg"                                  "assets/photos/history/konsole-158-mp.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/Konsole-158-MP-2.jpg"                                "assets/photos/history/konsole-158-mp-2.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/Plattenkonfiguration.jpg"                            "assets/photos/history/plattenkonfiguration.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/Potterbaender.jpg"                                   "assets/photos/history/potterbaender.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/Technischer-Dienst.jpg"                              "assets/photos/history/technischer-dienst.jpg"
fetch "https://atruvia.de/uploads/images/_gallery/MP-Uebernahme-Back-up-alte-158-UP.jpg"               "assets/photos/history/mp-uebernahme.jpg"

cat <<'TODO'

== Done with public assets ==

Still needed MANUALLY (no public URL — from the Atruvia brand portal):
  • VIA Type font files   -> assets/fonts/VIAType-*.woff2
  • CD manual / site CSS  -> assets/brand/atruvia-cd-manual.pdf  (or atruvia-site.css)
  • Icon set (SVG sprite) -> assets/icons/atruvia-icons.svg
TODO
