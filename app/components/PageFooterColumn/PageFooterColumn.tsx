import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-footer-column.module.css";

export type PageFooterColumnProps = JSX.IntrinsicElements["section"] & {
  title: string;
};
export const PageFooterColumn = forwardRef<HTMLElement, PageFooterColumnProps>(
  function PageFooterColumn({ children, className, title, ...restProps }, ref) {
    return (
      <section
        {...restProps}
        className={clsx(styles.root, className)}
        ref={ref}
      >
        <h3 className={styles.title}>{title}</h3>
        <div>{children}</div>
      </section>
    );
  }
);
