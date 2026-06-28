import React from "react";

/* Inject the sprite once per URL so same-document <use href="#icon-..."> resolves
   reliably (external-file <use> references don't render in many engines). */
const _injected = {};
function ensureSprite(url) {
  if (typeof document === "undefined" || _injected[url]) return;
  _injected[url] = true;
  fetch(url)
    .then((r) => r.text())
    .then((txt) => {
      const d = document.createElement("div");
      d.style.display = "none";
      d.setAttribute("data-atruvia-icons", "");
      d.innerHTML = txt;
      document.body.insertBefore(d, document.body.firstChild);
    })
    .catch(() => {});
}

/**
 * Atruvia icon. Renders a symbol from the official sprite
 * (assets/icons/atruvia-icons.svg), tinted by currentColor.
 * `name` is the icon id with or without the "icon-" prefix.
 */
export function Icon({ name, size = 24, sprite = "assets/icons/atruvia-icons.svg", title, className = "", ...rest }) {
  React.useEffect(() => ensureSprite(sprite), [sprite]);
  const id = name.startsWith("icon-") ? name : "icon-" + name;
  return (
    <svg
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <use href={`#${id}`} xlinkHref={`#${id}`} />
    </svg>
  );
}
