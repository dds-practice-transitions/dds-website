import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";

export const HeroOverline = forwardRef<
  HTMLSpanElement,
  JSX.IntrinsicElements["span"]
>(function HeroOverline({ children, className, ...restProps }, ref) {
  if (!children) return null;

  return (
    <span {...restProps} className={clsx(styles.overline, className)} ref={ref}>
      {children}
    </span>
  );
});
