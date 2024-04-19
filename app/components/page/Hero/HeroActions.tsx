import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";

export const HeroActions = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function HeroActions({ children, className, ...restProps }, ref) {
  return (
    <div
      {...restProps}
      className={clsx(styles.actions, className, "actions")}
      ref={ref}
    >
      {children}
    </div>
  );
});
