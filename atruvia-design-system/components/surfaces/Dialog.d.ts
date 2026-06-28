import * as React from "react";

export interface DialogProps {
  /** Controls visibility. */
  open: boolean;
  /** Fires on overlay click or close button. */
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  /** Footer action nodes (e.g. Buttons). */
  actions?: React.ReactNode;
}

/** Centred modal dialog with overlay blur. */
export function Dialog(props: DialogProps): JSX.Element | null;
