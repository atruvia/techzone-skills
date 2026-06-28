import * as React from "react";

/**
 * Props for the rounded content card.
 * @startingPoint section="Surfaces" subtitle="Content card with optional media + elevation" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Use shadow elevation instead of a border. */
  raised?: boolean;
  /** Add hover lift + pointer cursor. */
  interactive?: boolean;
  /** Flush top media area (image/illustration). */
  media?: React.ReactNode;
  children?: React.ReactNode;
}

/** Rounded content card. */
export function Card(props: CardProps): JSX.Element;
