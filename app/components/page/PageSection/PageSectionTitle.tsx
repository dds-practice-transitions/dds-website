import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-section.module.css";

export const PageSectionTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["h2"]
>(function PageSectionTitle({ children, className, ...restProps }, ref) {
  return (
    <h2 {...restProps} className={clsx(styles.title, className)} ref={ref}>
      {children}
    </h2>
  );
});
