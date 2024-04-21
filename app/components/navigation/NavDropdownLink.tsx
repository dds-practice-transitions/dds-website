import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NativeAnchor } from "../native";

export type NavDropdownLinkProps = JSX.IntrinsicElements["a"] & {
  LinkComponent?: FC;
};

export const NavDropdownLink = forwardRef<
  HTMLAnchorElement,
  NavDropdownLinkProps & { onClose?: () => void }
>(function Link(
  { children, className, LinkComponent = NativeAnchor, onClose, ...restProps },
  ref,
) {
  return (
    <LinkComponent
      {...restProps}
      onClick={onClose}
      tabIndex={0}
      className={clsx(
        styles["navbar-dropdown-link"],
        styles["navbar-link-content"],
        {
          active: className?.includes("active"),
        },
      )}
      ref={ref}
    >
      {children}
    </LinkComponent>
  );
});
