import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar-column.module.css";

export const NavbarColumn = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function NavbarColumn({ children, className, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(styles.root, className)} ref={ref}>
      {children}
    </div>
  );
});
