import React from "react";

/**
 * Circular icon button. Pass a single icon node as children.
 */
export function IconButton({
  children,
  variant = "default",
  label,
  className = "",
  ...rest
}) {
  const classes = [
    "atr-iconbtn",
    variant !== "default" ? `atr-iconbtn--${variant}` : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button className={classes} aria-label={label} {...rest}>
      {children}
    </button>
  );
}
