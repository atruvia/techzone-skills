import React from "react";

/**
 * Atruvia primary button. Variants map to brand action tokens.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  ...rest
}) {
  const Tag = as;
  const classes = [
    "atr-btn",
    `atr-btn--${variant}`,
    size !== "md" ? `atr-btn--${size}` : "",
    block ? "atr-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <Tag className={classes} {...rest}>
      {iconLeft}
      {children != null && <span>{children}</span>}
      {iconRight}
    </Tag>
  );
}
