import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-header.module.css";

export type PageHeaderProps = JSX.IntrinsicElements["header"];
export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  function PageHeader({ className, children, ...restProps }, ref) {
    return (
      <header {...restProps} className={clsx(styles.root, className)} ref={ref}>
        <div>{children}</div>
      </header>
    );
  },
);
