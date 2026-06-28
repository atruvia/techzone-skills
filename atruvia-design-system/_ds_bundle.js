/* @ds-bundle: {"format":3,"namespace":"AtruviaDesignSystem_79ca21","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Avatar","sourcePath":"components/feedback/Avatar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"4ed0b3aa9e95","components/core/Icon.jsx":"9b0d6defd7a3","components/core/IconButton.jsx":"cfdf4751b621","components/core/Logo.jsx":"76af5d0bb9a5","components/feedback/Alert.jsx":"42291be5c4b6","components/feedback/Avatar.jsx":"563bd91dc613","components/feedback/Badge.jsx":"3d00e107eaa5","components/feedback/Tag.jsx":"6c96ac2fac77","components/forms/Checkbox.jsx":"e376ee766ff2","components/forms/Input.jsx":"0b9b9e398ee9","components/forms/Radio.jsx":"4caa0f9b777d","components/forms/Select.jsx":"0caacefc6ea7","components/forms/Switch.jsx":"a03a603a06f9","components/forms/Textarea.jsx":"aa50b46f81ce","components/surfaces/Card.jsx":"fc005a194499","components/surfaces/Dialog.jsx":"d937e5f23215","components/surfaces/Tabs.jsx":"943089db4f21","ui_kits/website/sections.jsx":"2473eb171227"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AtruviaDesignSystem_79ca21 = window.AtruviaDesignSystem_79ca21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Atruvia primary button. Variants map to brand action tokens.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  ...rest
}) {
  const Tag = as;
  const classes = ["atr-btn", `atr-btn--${variant}`, size !== "md" ? `atr-btn--${size}` : "", block ? "atr-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject the sprite once per URL so same-document <use href="#icon-..."> resolves
   reliably (external-file <use> references don't render in many engines). */
const _injected = {};
function ensureSprite(url) {
  if (typeof document === "undefined" || _injected[url]) return;
  _injected[url] = true;
  fetch(url).then(r => r.text()).then(txt => {
    const d = document.createElement("div");
    d.style.display = "none";
    d.setAttribute("data-atruvia-icons", "");
    d.innerHTML = txt;
    document.body.insertBefore(d, document.body.firstChild);
  }).catch(() => {});
}

/**
 * Atruvia icon. Renders a symbol from the official sprite
 * (assets/icons/atruvia-icons.svg), tinted by currentColor.
 * `name` is the icon id with or without the "icon-" prefix.
 */
function Icon({
  name,
  size = 24,
  sprite = "assets/icons/atruvia-icons.svg",
  title,
  className = "",
  ...rest
}) {
  React.useEffect(() => ensureSprite(sprite), [sprite]);
  const id = name.startsWith("icon-") ? name : "icon-" + name;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    className: className,
    fill: "currentColor",
    role: title ? "img" : undefined,
    "aria-label": title || undefined,
    "aria-hidden": title ? undefined : "true",
    focusable: "false"
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("use", {
    href: `#${id}`,
    xlinkHref: `#${id}`
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button. Pass a single icon node as children.
 */
function IconButton({
  children,
  variant = "default",
  label,
  className = "",
  ...rest
}) {
  const classes = ["atr-iconbtn", variant !== "default" ? `atr-iconbtn--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Official Atruvia wordmark (VIA Type lettering + symbol), inlined as SVG so it
 * recolours via currentColor and needs no asset path. Navy on light surfaces;
 * pass variant="light" to reverse to white on Ink/dark backgrounds.
 */
const ATRUVIA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282 47" style="height:var(--logo-h,28px);width:auto;display:block"><path fill="currentColor" d="M90.4681194,11.8965517 L75.2535613,45.3028017 L81.5732116,45.3028017 L84.7716052,38.2367127 L101.064221,38.2367127 L104.215218,45.3028017 L110.632915,45.3028017 L95.3681718,11.8965517 L90.4681194,11.8965517 Z M87.1837599,32.8152155 L92.9620578,19.950753 L98.6590367,32.8152155 L87.1837599,32.8152155 Z M106.450329,11.8965517 L134.026309,11.8965517 L134.026309,17.365102 L123.23783,17.365102 L123.23783,45.3028017 L117.239738,45.3028017 L117.239738,17.365102 L106.450329,17.365102 L106.450329,11.8965517 Z M151.236669,11.8965517 L159.129261,11.8965517 L159.129261,17.4578506 L151.427652,17.4578506 C145.334301,17.4578506 142.37243,19.9462287 142.37243,25.066406 L142.37243,45.3028017 L136.374803,45.3028017 L136.374803,25.066406 C136.374803,16.8199209 141.930519,11.8965517 151.236669,11.8965517 M187.839526,11.8965517 L193.837152,11.8965517 L193.837152,30.8769951 C193.837152,39.7813169 187.509603,46 178.449733,46 C169.389864,46 163.062314,39.7813169 163.062314,30.8769951 L163.062314,11.8965517 L169.059941,11.8965517 L169.059941,30.8769951 C169.059941,35.6827319 171.963263,40.5319022 178.449733,40.5319022 C184.936204,40.5319022 187.839526,35.6827319 187.839526,30.8769951 L187.839526,11.8965517 Z M225.113381,11.8965517 L231.525967,11.8965517 L216.758431,45.3028017 L212.136258,45.3028017 L197.269745,11.8965517 L203.826847,11.8965517 L214.493115,36.8604134 L225.113381,11.8965517 Z M235.574261,11.8965517 L241.572352,11.8965517 L241.572352,45.3028017 L235.572402,45.3028017 L235.574261,11.8965517 Z M265.734327,11.8965517 L260.835669,11.8965517 L245.621111,45.3028017 L251.940761,45.3028017 L255.139155,38.2367127 L271.431306,38.2367127 L274.582302,45.3028017 L281,45.3028017 L265.734327,11.8965517 Z M257.551774,32.8152155 L263.329607,19.950753 L269.026121,32.8152155 L257.551774,32.8152155 Z M51.5180891,16.985769 L42.4126523,16.985769 L42.4126523,14.5475983 C42.4126523,9.39523767 46.2227219,5.65839609 51.4802109,5.65839609 L63.5358832,5.65839609 L63.5358832,0 L51.4802109,0 C43.0111272,0 36.5879378,6.27759943 36.5879378,14.5071155 L36.5879378,16.9880692 L29.8603026,16.9880692 L29.8603026,0.318802316 L3.48052968,0.318802316 L3.48052968,5.65517586 L24.0355881,5.65517586 L24.0355881,16.985769 L14.9301513,16.985769 C6.22432909,16.985769 0,23.4938446 0,31.4928845 C0,39.7362015 6.22432909,46 14.9301513,46 C23.4371132,46 29.8598291,39.7362015 29.8598291,31.5089856 L29.8598291,22.6450852 L36.5869908,22.6450852 L36.5869908,31.5085256 C36.5869908,39.7362015 43.0101803,46 51.5171421,46 C60.2229644,46 66.4472934,39.7357415 66.4472934,31.4924245 C66.4472934,23.4933845 60.2229644,16.985309 51.5171421,16.985309 M24.0355881,31.4928845 L24.0355881,31.4928845 C24.0355881,36.5992419 20.2255185,40.3406838 14.9301513,40.3406838 C9.43781771,40.3406838 5.82471447,36.6015421 5.82471447,31.4928845 C5.82471447,26.6165432 9.43592381,22.6450852 14.9301513,22.6450852 L24.0355881,22.6450852 L24.0355881,31.4928845 Z M51.5180891,40.3406838 C46.2227219,40.3406838 42.4126523,36.6015421 42.4126523,31.4928845 L42.4126523,31.4928845 L42.4126523,22.6450852 L51.5180891,22.6450852 C57.0104227,22.6450852 60.6235259,26.614703 60.6235259,31.4928845 C60.6235259,36.5992419 57.0123166,40.3406838 51.5180891,40.3406838" transform="translate(.5 .5)"></path></svg>`;
function Logo({
  variant = "dark",
  height = 28,
  withMark,
  className = "",
  ...rest
}) {
  const color = variant === "light" ? "var(--atr-white)" : "var(--atr-ink-900)";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    role: "img",
    "aria-label": "Atruvia",
    style: {
      display: "inline-flex",
      color,
      ["--logo-h"]: height + "px"
    },
    dangerouslySetInnerHTML: {
      __html: ATRUVIA_SVG
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"
  }),
  error: /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"
  })
};

/** Inline contextual alert. */
function Alert({
  variant = "info",
  title,
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `atr-alert atr-alert--${variant} ${className}`,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "atr-alert__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[variant])), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "atr-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "atr-alert__body"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — image or initials fallback. */
function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `atr-avatar atr-avatar--${size} ${className}`
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact status/label badge. */
function Badge({
  children,
  variant = "neutral",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `atr-badge atr-badge--${variant} ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill tag, optionally removable. */
function Tag({
  children,
  onRemove,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `atr-tag ${className}`
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "atr-tag__remove",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Controlled or uncontrolled. */
function Checkbox({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `atr-choice ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atr-choice__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/** Labelled text input with optional hint / error. */
function Input({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || `atr-input-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "atr-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "atr-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: `atr-input ${className}`,
    "aria-invalid": error ? "true" : undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `atr-hint ${error ? "atr-hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio with label. Group by passing the same `name`. */
function Radio({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `atr-choice ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atr-choice__box atr-choice__box--radio",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atr-choice__dot"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/** Labelled native select with brand chevron. */
function Select({
  label,
  hint,
  error,
  id,
  children,
  className = "",
  ...rest
}) {
  const fieldId = id || `atr-select-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "atr-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "atr-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: `atr-select ${className}`
  }, rest), children), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `atr-hint ${error ? "atr-hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch with optional label. */
function Switch({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `atr-switch ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atr-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atr-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _id = 0;

/** Labelled multi-line text input. */
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || `atr-textarea-${++_id}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "atr-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "atr-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: `atr-textarea ${className}`,
    "aria-invalid": error ? "true" : undefined
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `atr-hint ${error ? "atr-hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Content card. `media` renders a flush top image area. */
function Card({
  children,
  raised = false,
  interactive = false,
  media = null,
  className = "",
  ...rest
}) {
  const classes = ["atr-card", raised ? "atr-card--raised" : "", interactive ? "atr-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "atr-card__media"
  }, media), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
/** Modal dialog. Render conditionally on `open`; `onClose` fires on overlay/✕. */
function Dialog({
  open,
  onClose,
  title,
  children,
  actions = null
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "atr-dialog__overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-dialog",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-dialog__close"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), title && /*#__PURE__*/React.createElement("h2", {
    className: "atr-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "atr-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "atr-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
/**
 * Tab bar with VIA-gradient active underline.
 * Controlled: pass `value` + `onChange`. Uncontrolled: pass `defaultValue`.
 * `tabs` = [{ value, label }].
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = ""
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `atr-tabs ${className}`,
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": active === t.value,
    className: `atr-tab ${active === t.value ? "atr-tab--active" : ""}`,
    onClick: () => select(t.value)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Atruvia corporate website — section components.
   Recreates the structure/voice of atruvia.de using the design-system
   primitives. Photography is shown as labelled placeholders (the real
   images are hotlink-protected — see assets/brand-assets.md).
   Exposes all sections on window for index.html. */

const DS = window.AtruviaDesignSystem_79ca21;
const {
  Button,
  Card,
  Badge,
  Logo,
  Input
} = DS;

/* ---- Official Atruvia icon (same-document sprite symbol) ---- */
function Icon({
  name,
  size = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    fill: "currentColor",
    style: style,
    "aria-hidden": "true",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("use", {
    href: `#icon-${name}`,
    xlinkHref: `#icon-${name}`
  }));
}

/* ---- Photo block — real image when `src` given, else placeholder ---- */
function Photo({
  label,
  src,
  h = 280,
  tone = "cool",
  round = "var(--radius-card)"
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        borderRadius: round,
        overflow: "hidden",
        background: "var(--atr-gray-100)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: label || "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }));
  }
  const bg = tone === "ink" ? "linear-gradient(135deg,#16276B,#000064)" : tone === "via" ? "var(--atr-via-gradient)" : "linear-gradient(135deg,#E8EDF4,#D8E0EA)";
  const fg = tone === "cool" ? "var(--text-subtle)" : "rgba(255,255,255,.85)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: round,
      background: bg,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: fg
    }
  }, "\u25A2 ", label));
}

/* ============================ HEADER ============================ */
function SiteHeader({
  page,
  setPage,
  onContact
}) {
  const [menu, setMenu] = React.useState(false);
  const nav = [["Startseite", "home"], ["Leistungen", "leistungen"], ["Unternehmen", "home"], ["Newsroom", "home"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255,255,255,.85)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container",
    style: {
      display: "flex",
      alignItems: "center",
      height: 76,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage("home");
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    withMark: true,
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 16,
      flex: 1
    },
    className: "atr-desktop-nav"
  }, nav.map(([label, p], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage(p);
    },
    style: {
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      fontWeight: 600,
      fontSize: 15,
      color: page === p && label !== "Unternehmen" ? "var(--text-strong)" : "var(--text-body)"
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    },
    className: "atr-desktop-nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onContact
  }, "Kontakt"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Karriere")), /*#__PURE__*/React.createElement("button", {
    className: "atr-iconbtn atr-mobile-only",
    "aria-label": "Men\xFC",
    onClick: () => setMenu(!menu)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menu ? "cross" : "menu"
  }))), menu && /*#__PURE__*/React.createElement("div", {
    className: "atr-container atr-mobile-only",
    style: {
      paddingBottom: 16,
      display: "grid",
      gap: 4
    }
  }, nav.map(([label], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      padding: "10px 4px",
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, label))));
}

/* ============================= HERO ============================= */
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-11) 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container atr-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "atr-eyebrow"
  }, "Digitalisierungspartner"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-6xl)",
      margin: "16px 0 0",
      lineHeight: 1.04
    }
  }, "Wir verbinden.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "atr-via-text"
  }, "F\xFCreinander.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-body)",
      maxWidth: "46ch",
      marginTop: 22
    }
  }, "Mit innovativen IT-L\xF6sungen machen wir die Volksbanken und Raiffeisenbanken fit f\xFCr die digitale Zukunft. einfach. sicher. digital."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })
  }, "Leistungen entdecken"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onContact
  }, "Kontakt aufnehmen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/hero-hub.jpg",
    label: "Kolleg*innen am Hub",
    h: 380,
    round: "var(--radius-2xl)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -22,
      bottom: 34,
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-lg)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 20px",
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "999px",
      background: "var(--atr-via-gradient)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--text-strong)"
    }
  }, "91 Mio."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Konten verwaltet"))))));
}

/* ============================ STATS ============================= */
function StatsBand() {
  const stats = [["8.400", "Mitarbeiter*innen"], ["~820", "Volks- & Raiffeisenbanken"], ["153.000", "Bankarbeitsplätze"], ["1,77 Mrd. €", "Konzernumsatz"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--atr-ink-900)",
      padding: "var(--space-9) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container atr-stats-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, stats.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--text-4xl)",
      color: "#fff",
      letterSpacing: "-.02em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "atr-via-rule",
    style: {
      width: 40,
      margin: "12px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--atr-gray-400)",
      fontSize: 15
    }
  }, l)))));
}

/* =========================== SERVICES ========================== */
const SERVICES = [["database", "Rechenzentrumsbetrieb", "Hochsichere Rechenzentren für das Bankverfahren — rund um die Uhr."], ["ecosystem", "Cloud-Plattform", "Vom monolithischen Kernbanksystem zur offenen, cloud-basierten Architektur."], ["smartphone", "App-Entwicklung", "Die VR-BankingApp und digitale Self-Services für Millionen Kund*innen."], ["bolt-circle", "IT-Sicherheit", "Banking muss einfach und sicher sein — Sicherheit im Kern jeder Lösung."], ["robot", "Smart Data & KI", "Human in the Loop: Mensch und Maschine im Tandem, nie als Ersatz."], ["shaking-hands", "Beratung & Regulatorik", "Prozessoptimierung und Regulatorik für die genossenschaftliche FinanzGruppe."]];
function ServicesSection({
  heading = "Unsere Leistungen",
  lead
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-11) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "52ch",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-eyebrow"
  }, "M\xF6glichmacher*innen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: "14px 0 0"
    }
  }, heading), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-body)",
      marginTop: 14
    }
  }, lead)), /*#__PURE__*/React.createElement("div", {
    className: "atr-services-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    }
  }, SERVICES.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--atr-blue-050)",
      color: "var(--atr-blue-600)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)",
      margin: "18px 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: 15,
      margin: 0
    }
  }, d))))));
}

/* ========================= CONNECTION ========================== */
function ConnectionBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)",
      padding: "var(--space-11) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container",
    style: {
      textAlign: "center",
      maxWidth: 820,
      marginInline: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-via-rule",
    style: {
      width: 88,
      margin: "0 auto 26px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-5xl)",
      lineHeight: 1.08
    }
  }, "Wir bringen ", /*#__PURE__*/React.createElement("span", {
    className: "atr-via-text"
  }, "Menschen und M\xE4rkte"), " von morgen zusammen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lg)",
      color: "var(--text-body)",
      marginTop: 18
    }
  }, "Traditionell und innovativ, eckig und rund \u2014 seit \xFCber 100 Jahren der vertrauensw\xFCrdige Partner der Genossenschaftsbanken. Das Best\xE4ndige bleibt der Wandel.")), /*#__PURE__*/React.createElement("div", {
    className: "atr-container",
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/team.jpg",
    alt: "Das Atruvia-Team",
    style: {
      width: "100%",
      height: 340,
      objectFit: "cover",
      borderRadius: "var(--radius-2xl)",
      display: "block"
    }
  })));
}

/* =========================== MAGAZINE ========================== */
function MagazineSection() {
  const items = [["KI und Smart Analytics", "Datenstrategie für Banken: Datenmanagement, Governance und KI-Readiness", "../../assets/photos/data-centre.jpg"], ["KI und Smart Analytics", "Das KI-Kompetenzcenter: Zukunftssicherung für die GFG", "../../assets/photos/magazine-1.jpeg"], ["Prozesseffizienz", "Automatisierung: Gut gerüstet für die Zukunft", "../../assets/photos/business-woman.jpg"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-11) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 36,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-4xl)",
      margin: 0
    }
  }, "Aktuelles"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Zum Newsroom")), /*#__PURE__*/React.createElement("div", {
    className: "atr-services-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    }
  }, items.map(([cat, title, src], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: src,
    label: cat,
    h: 180,
    round: "0"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      margin: "12px 0 0",
      lineHeight: 1.3
    }
  }, title)))))));
}

/* ============================ FOOTER =========================== */
function SiteFooter() {
  const cols = [["Unternehmen", ["Unsere Geschichte", "Vorstand", "Zahlen & Fakten", "Nachhaltigkeit"]], ["Leistungen", ["Bankverfahren", "Cloud-Plattform", "Apps", "Sicherheit"]], ["Karriere", ["Professionals", "Ausbildung", "Studierende", "Vielfalt"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--atr-ink-900)",
      color: "var(--atr-gray-400)",
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atr-footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: 40,
      paddingBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "light",
    withMark: true,
    height: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: "34ch",
      fontSize: 14
    }
  }, "Digitalisierungspartner der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken.")), cols.map(([h, links], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      marginBottom: 14,
      fontSize: 14
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 10,
      fontSize: 14
    }
  }, links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--atr-gray-400)"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.1)",
      padding: "20px 0",
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Atruvia AG \xB7 Karlsruhe & M\xFCnster"), /*#__PURE__*/React.createElement("span", null, "Datenschutz \xB7 Impressum \xB7 Barrierefreiheit"))));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  StatsBand,
  ServicesSection,
  ConnectionBand,
  MagazineSection,
  SiteFooter,
  AtrIcon: Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
