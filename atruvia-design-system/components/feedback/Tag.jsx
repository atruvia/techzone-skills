import React from "react";

/** Pill tag, optionally removable. */
export function Tag({ children, onRemove, className = "", ...rest }) {
  return (
    <span className={`atr-tag ${className}`} {...rest}>
      {children}
      {onRemove && (
        <button type="button" className="atr-tag__remove" aria-label="Remove" onClick={onRemove}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </span>
  );
}
