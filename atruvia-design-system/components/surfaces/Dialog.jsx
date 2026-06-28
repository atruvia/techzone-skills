import React from "react";
import { IconButton } from "../core/IconButton.jsx";

/** Modal dialog. Render conditionally on `open`; `onClose` fires on overlay/✕. */
export function Dialog({ open, onClose, title, children, actions = null }) {
  if (!open) return null;
  return (
    <div className="atr-dialog__overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose && onClose(); }}>
      <div className="atr-dialog" role="dialog" aria-modal="true" aria-label={title}>
        <div className="atr-dialog__close">
          <IconButton label="Close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </IconButton>
        </div>
        {title && <h2 className="atr-dialog__title">{title}</h2>}
        <div className="atr-dialog__body">{children}</div>
        {actions && <div className="atr-dialog__actions">{actions}</div>}
      </div>
    </div>
  );
}
