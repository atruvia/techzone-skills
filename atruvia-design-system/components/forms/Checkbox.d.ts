import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Text label rendered beside the box. */
  label?: string;
}

/** Labelled checkbox. */
export function Checkbox(props: CheckboxProps): JSX.Element;
