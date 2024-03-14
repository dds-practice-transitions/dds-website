import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./icon.module.css";
import { Down } from "@icon-park/react";

export type IconProps = JSX.IntrinsicElements["span"] & {
  DDIcon: typeof Down;
  /**
   * The size of the icon in pixels
   * @default 16
   */
  ddSize?: number;
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { children, className, DDIcon, ddSize = 16, ...restProps },
  ref,
) {
  return (
    <DDIcon
      ref={ref}
      {...restProps}
      className={clsx(styles.root, className)}
      theme="outline"
      fill="currentColor"
      size={ddSize}
    >
      {children}
    </DDIcon>
  );
});
