import React from "react";

/** Compact status/label badge. */
export function Badge({ children, variant = "neutral", className = "", ...rest }) {
  return (
    <span className={`atr-badge atr-badge--${variant} ${className}`} {...rest}>
      {children}
    </span>
  );
}
