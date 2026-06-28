import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  children?: React.ReactNode;
}

/** Labelled native `<select>` with the Atruvia chevron. */
export function Select(props: SelectProps): JSX.Element;
