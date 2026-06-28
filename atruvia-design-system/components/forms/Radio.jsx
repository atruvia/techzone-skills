import React from "react";

/** Radio with label. Group by passing the same `name`. */
export function Radio({ label, className = "", ...rest }) {
  return (
    <label className={`atr-choice ${className}`}>
      <input type="radio" {...rest} />
      <span className="atr-choice__box atr-choice__box--radio" aria-hidden="true">
        <span className="atr-choice__dot" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
