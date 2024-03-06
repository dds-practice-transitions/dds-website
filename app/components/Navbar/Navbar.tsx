import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";

export const Navbar = forwardRef<HTMLElement, JSX.IntrinsicElements["nav"]>(
  function Navbar({ children, className, ...restProps }, ref) {
    return (
      <nav {...restProps} className={clsx(styles.navbar, className)} ref={ref}>
        {children}
      </nav>
    );
  }
);
