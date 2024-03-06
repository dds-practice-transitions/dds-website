import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-container.module.css";

export const PageContainer = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function PageContainer({ children, className, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(styles.root, className)} ref={ref}>
      {children}
    </div>
  );
});
