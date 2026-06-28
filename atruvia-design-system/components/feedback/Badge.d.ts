import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour intent. */
  variant?: "brand" | "neutral" | "success" | "warning" | "error" | "solid";
  children?: React.ReactNode;
}

/** Small status / category badge. */
export function Badge(props: BadgeProps): JSX.Element;
