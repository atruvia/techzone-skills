import * as React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Initial value when uncontrolled. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/** Horizontal tab bar with the VIA-gradient active indicator. */
export function Tabs(props: TabsProps): JSX.Element;
