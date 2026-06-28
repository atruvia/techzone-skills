import React from "react";

const ICONS = {
  info: <path d="M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />,
  success: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" />,
  warning: <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />,
  error: <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />,
};

/** Inline contextual alert. */
export function Alert({ variant = "info", title, children, className = "", ...rest }) {
  return (
    <div className={`atr-alert atr-alert--${variant} ${className}`} role="status" {...rest}>
      <span className="atr-alert__icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {ICONS[variant]}
        </svg>
      </span>
      <div>
        {title && <p className="atr-alert__title">{title}</p>}
        {children && <p className="atr-alert__body">{children}</p>}
      </div>
    </div>
  );
}
