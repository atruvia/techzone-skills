import * as React from "react";

/**
 * Props for the Atruvia action button.
 * @startingPoint section="Core" subtitle="Pill button — primary, secondary, ghost, gradient" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. */
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  /** Control height. */
  size?: "sm" | "md" | "lg";
  /** Full-width button. */
  block?: boolean;
  /** Icon element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  /**
 * Render as a different element/component (e.g. "a").
 */
  as?: any;
  children?: React.ReactNode;
}

/**
 * Atruvia action button. Pill-shaped; `primary` is the default blue,
 * `gradient` uses the signature VIA-Line gradient for hero CTAs.
 */
export function Button(props: ButtonProps): JSX.Element;
