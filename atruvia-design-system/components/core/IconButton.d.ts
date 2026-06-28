import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: "default" | "solid" | "bordered";
  /** Accessible label (required — icon-only control). */
  label: string;
  /** A single icon node. */
  children: React.ReactNode;
}

/** Circular, icon-only button (44px hit target). */
export function IconButton(props: IconButtonProps): JSX.Element;
