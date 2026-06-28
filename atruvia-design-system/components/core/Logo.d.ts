import * as React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "dark" for light backgrounds, "light" for Ink/dark backgrounds. */
  variant?: "dark" | "light";
  /** Show the gradient VIA mark before the wordmark. */
  withMark?: boolean;
  /** Wordmark cap height in px. */
  height?: number;
}

/** Atruvia wordmark. ⚠ Typographic placeholder pending official SVG. */
export function Logo(props: LogoProps): JSX.Element;
