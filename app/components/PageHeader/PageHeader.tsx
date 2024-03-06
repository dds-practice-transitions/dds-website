import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-header.module.css";
import { Navbar } from "../Navbar";

export const PageHeader = forwardRef<
  HTMLElement,
  JSX.IntrinsicElements["header"]
>(function PageHeader({ children, className, ...restProps }, ref) {
  return (
    <header {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div>
        <Navbar />
        {children}
      </div>
    </header>
  );
});
