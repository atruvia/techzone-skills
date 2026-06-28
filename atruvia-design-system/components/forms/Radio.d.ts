import * as React from "react";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Text label rendered beside the control. */
  label?: string;
}

/** Labelled radio button (group via shared `name`). */
export function Radio(props: RadioProps): JSX.Element;
