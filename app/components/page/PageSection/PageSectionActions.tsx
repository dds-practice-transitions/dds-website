import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-section.module.css";

export const PageSectionActions = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function PageSectionActions({ children, className, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(styles.actions, className)} ref={ref}>
      {children}
    </div>
  );
});
