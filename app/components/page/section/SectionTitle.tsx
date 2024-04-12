import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section.module.css";

export const SectionTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements["h2"]
>(function SectionTitle({ children, className, ...restProps }, ref) {
  return (
    <h2
      {...restProps}
      className={clsx(styles.title, className, "title")}
      ref={ref}
    >
      {children}
    </h2>
  );
});
