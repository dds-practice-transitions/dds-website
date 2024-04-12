import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section.module.css";

export const SectionSubtitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["h3"] & { ddColor?: "primary" | "secondary" }
>(function SectionSubtitle(
  { children, className, ddColor, ...restProps },
  ref,
) {
  if (!children) return null;
  return (
    <h3
      {...restProps}
      className={clsx(styles["sub-title"], ddColor, className, "subtitle")}
      ref={ref}
    >
      {children}
    </h3>
  );
});
