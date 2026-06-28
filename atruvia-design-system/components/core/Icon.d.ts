import * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon id from the Atruvia sprite, with or without the "icon-" prefix
   *  (e.g. "robot", "arrow-right", "shaking-hands"). 60 icons available. */
  name: string;
  /** Pixel size (width = height). Default 24. */
  size?: number;
  /** Path to the sprite, relative to the page. Default "assets/icons/atruvia-icons.svg". */
  sprite?: string;
  /** Accessible label; when set the icon is exposed to AT, otherwise hidden. */
  title?: string;
}

/** Official Atruvia icon (sprite symbol, tinted via currentColor). */
export function Icon(props: IconProps): JSX.Element;
