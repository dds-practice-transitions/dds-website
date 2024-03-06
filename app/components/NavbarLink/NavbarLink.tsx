import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar-link.module.css";
import { Link } from "@remix-run/react";

export const NavbarLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements["a"] & { to: string }
>(function NavbarLink({ children, className, ...restProps }, ref) {
  return (
    <Link {...restProps} className={clsx(styles.root, className)} ref={ref}>
      {children}
    </Link>
  );
});
