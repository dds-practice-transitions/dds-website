import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NativeAnchor } from "../native";

export const NavbarDropdownLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements["a"] & { LinkComponent?: FC }
>(function NavbarDropdownLink(
  { children, className, LinkComponent = NativeAnchor, ...restProps },
  ref,
) {
  return (
    <LinkComponent
      {...restProps}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={clsx(styles["navbar-dropdown-link"], {
        active: className?.includes("active"),
      })}
      ref={ref}
    >
      {children}
    </LinkComponent>
  );
});
