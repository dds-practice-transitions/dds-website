import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-section.module.css";

export const PageSectionSubtitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["h3"] & { ddColor?: "primary" | "secondary" }
>(function PageSectionSubtitle(
  { children, className, ddColor, ...restProps },
  ref,
) {
  return (
    <h3
      {...restProps}
      className={clsx(styles["sub-title"], ddColor, className)}
      ref={ref}
    >
      {children}
    </h3>
  );
});
