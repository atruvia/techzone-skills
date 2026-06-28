import * as React from "react";

/**
 * Props for the labelled text input.
 * @startingPoint section="Forms" subtitle="Text field with label, hint and error" viewport="700x140"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message (sets invalid state, overrides hint). */
  error?: string;
}

/** Labelled text input. */
export function Input(props: InputProps): JSX.Element;
