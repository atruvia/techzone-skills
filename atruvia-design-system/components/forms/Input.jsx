import React from "react";

let _id = 0;

/** Labelled text input with optional hint / error. */
export function Input({ label, hint, error, id, className = "", ...rest }) {
  const fieldId = id || `atr-input-${++_id}`;
  return (
    <div className="atr-field">
      {label && <label className="atr-label" htmlFor={fieldId}>{label}</label>}
      <input
        id={fieldId}
        className={`atr-input ${className}`}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />
      {(error || hint) && (
        <span className={`atr-hint ${error ? "atr-hint--error" : ""}`}>{error || hint}</span>
      )}
    </div>
  );
}
