import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-section.module.css";

export const PageSectionSubtitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["h3"]
>(function PageSectionSubtitle({ children, className, ...restProps }, ref) {
  return (
    <h3
      {...restProps}
      className={clsx(styles["sub-title"], className)}
      ref={ref}
    >
      {children}
    </h3>
  );
});
