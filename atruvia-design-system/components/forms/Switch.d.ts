import * as React from "react";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Text label rendered beside the switch. */
  label?: string;
}

/** On/off toggle switch. */
export function Switch(props: SwitchProps): JSX.Element;
