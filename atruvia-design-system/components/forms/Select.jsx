import React from "react";

let _id = 0;

/** Labelled native select with brand chevron. */
export function Select({ label, hint, error, id, children, className = "", ...rest }) {
  const fieldId = id || `atr-select-${++_id}`;
  return (
    <div className="atr-field">
      {label && <label className="atr-label" htmlFor={fieldId}>{label}</label>}
      <select id={fieldId} className={`atr-select ${className}`} {...rest}>
        {children}
      </select>
      {(error || hint) && (
        <span className={`atr-hint ${error ? "atr-hint--error" : ""}`}>{error || hint}</span>
      )}
    </div>
  );
}
