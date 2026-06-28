import React from "react";

/** Avatar — image or initials fallback. */
export function Avatar({ src, alt = "", initials, size = "md", className = "", ...rest }) {
  return (
    <span className={`atr-avatar atr-avatar--${size} ${className}`} {...rest}>
      {src ? <img src={src} alt={alt} /> : <span>{initials}</span>}
    </span>
  );
}
