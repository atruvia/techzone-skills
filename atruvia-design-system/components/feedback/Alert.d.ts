import * as React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colour + icon intent. */
  variant?: "info" | "success" | "warning" | "error";
  /** Bold title line. */
  title?: string;
  children?: React.ReactNode;
}

/** Inline contextual alert with leading icon. */
export function Alert(props: AlertProps): JSX.Element;
