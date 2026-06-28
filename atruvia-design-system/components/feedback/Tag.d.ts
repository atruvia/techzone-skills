import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a remove (×) button and handle its click. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

/** Bordered pill tag, optionally removable. */
export function Tag(props: TagProps): JSX.Element;
