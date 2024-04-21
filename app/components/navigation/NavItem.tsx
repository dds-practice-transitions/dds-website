import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";

export const NavItem = forwardRef<HTMLLIElement, JSX.IntrinsicElements["li"]>(
  function NavItem({ children, className, ...restProps }, ref) {
    return (
      <li
        {...restProps}
        className={clsx(styles["navbar-item"], className)}
        ref={ref}
      >
        {children}
      </li>
    );
  },
);
