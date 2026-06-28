import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials when absent. */
  src?: string;
  alt?: string;
  /** Initials shown when no image. */
  initials?: string;
  size?: "sm" | "md" | "lg";
}

/** User avatar with image or initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
