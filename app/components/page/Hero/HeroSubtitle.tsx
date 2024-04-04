import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";

export const HeroSubtitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["p"]
>(function HeroSubtitle({ children, className, ...restProps }, ref) {
  return (
    <p {...restProps} className={clsx(styles.subtitle, className)} ref={ref}>
      {children}
    </p>
  );
});
