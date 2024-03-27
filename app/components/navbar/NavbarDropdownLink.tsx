import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";

export const NavbarDropdownLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements["a"]
>(function NavbarDropdownLink({ children, className, ...restProps }, ref) {
  return (
    <a
      {...restProps}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={clsx(styles["navbar-dropdown-link"], {
        active: className?.includes("active"),
      })}
      ref={ref}
    >
      {children}
    </a>
  );
});
