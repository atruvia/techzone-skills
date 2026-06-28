import React from "react";

/**
 * Tab bar with VIA-gradient active underline.
 * Controlled: pass `value` + `onChange`. Uncontrolled: pass `defaultValue`.
 * `tabs` = [{ value, label }].
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, className = "" }) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value !== undefined ? value : internal;

  const select = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };

  return (
    <div className={`atr-tabs ${className}`} role="tablist">
      {tabs.map((t) => (
        <button
          key={t.value}
          role="tab"
          aria-selected={active === t.value}
          className={`atr-tab ${active === t.value ? "atr-tab--active" : ""}`}
          onClick={() => select(t.value)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
