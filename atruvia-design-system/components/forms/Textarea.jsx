import React from "react";

let _id = 0;

/** Labelled multi-line text input. */
export function Textarea({ label, hint, error, id, className = "", ...rest }) {
  const fieldId = id || `atr-textarea-${++_id}`;
  return (
    <div className="atr-field">
      {label && <label className="atr-label" htmlFor={fieldId}>{label}</label>}
      <textarea
        id={fieldId}
        className={`atr-textarea ${className}`}
        aria-invalid={error ? "true" : undefined}
        {...rest}
      />
      {(error || hint) && (
        <span className={`atr-hint ${error ? "atr-hint--error" : ""}`}>{error || hint}</span>
      )}
    </div>
  );
}
