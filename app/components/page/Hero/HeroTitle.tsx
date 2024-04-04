import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";

export const HeroTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["h1"]
>(function HeroTitle({ children, className, ...restProps }, ref) {
  return (
    <h1 {...restProps} className={clsx(styles.title, className)} ref={ref}>
      {children}
    </h1>
  );
});
