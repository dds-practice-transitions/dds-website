import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-section.module.css";

export const PageSection = forwardRef<
  HTMLElement,
  JSX.IntrinsicElements["section"] & { ddType: string }
>(function PageSection({ children, ddType, className, ...restProps }, ref) {
  return (
    <section
      {...restProps}
      className={clsx(
        styles["page-section"],
        styles[`page-section-${ddType}`],
        className,
      )}
      ref={ref}
    >
      {children}
    </section>
  );
});
