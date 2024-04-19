import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section.module.css";

export const SectionActions = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function SectionActions({ children, className, ...restProps }, ref) {
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
