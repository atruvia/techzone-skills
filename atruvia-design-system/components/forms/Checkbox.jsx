import React from "react";

/** Checkbox with label. Controlled or uncontrolled. */
export function Checkbox({ label, className = "", ...rest }) {
  return (
    <label className={`atr-choice ${className}`}>
      <input type="checkbox" {...rest} />
      <span className="atr-choice__box" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
