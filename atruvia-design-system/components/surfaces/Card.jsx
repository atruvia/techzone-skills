import React from "react";

/** Content card. `media` renders a flush top image area. */
export function Card({ children, raised = false, interactive = false, media = null, className = "", ...rest }) {
  const classes = [
    "atr-card",
    raised ? "atr-card--raised" : "",
    interactive ? "atr-card--interactive" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {media && <div className="atr-card__media">{media}</div>}
      {children}
    </div>
  );
}
