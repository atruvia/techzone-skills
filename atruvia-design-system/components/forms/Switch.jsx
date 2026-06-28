import React from "react";

/** Toggle switch with optional label. */
export function Switch({ label, className = "", ...rest }) {
  return (
    <label className={`atr-switch ${className}`}>
      <input type="checkbox" role="switch" {...rest} />
      <span className="atr-switch__track" aria-hidden="true">
        <span className="atr-switch__thumb" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
