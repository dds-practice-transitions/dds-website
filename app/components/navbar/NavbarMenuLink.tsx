import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";

export const NavbarMenuLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements["a"]
>(function NavbarMenuLink({ children, className, ...restProps }, ref) {
  return (
    <a
      {...restProps}
      className={clsx(styles["navbar-menu-link"], {
        [styles["navbar-menu-link-active"]]: className?.includes("active"),
      })}
      ref={ref}
    >
      {children}
    </a>
  );
});
