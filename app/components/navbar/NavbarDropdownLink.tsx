import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NativeAnchor } from "../native";
import { useDrawerContext } from "../dialogs/Drawer";
import { useMenuContext } from "../dialogs/Menu";

export type NavbarDropdownLinkProps = JSX.IntrinsicElements["a"] & {
  LinkComponent?: FC;
};

const Link = forwardRef<
  HTMLAnchorElement,
  NavbarDropdownLinkProps & { onClose?: () => void }
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

const NavbarDropdownLinkMobile = forwardRef<
  HTMLAnchorElement,
  NavbarDropdownLinkProps
>(function NavbarDropdownLinkMobile({ children, ...restProps }, ref) {
  const { closeDialog } = useDrawerContext();
  return (
    <Link {...restProps} ref={ref} onClose={closeDialog}>
      {children}
    </Link>
  );
});

const NavbarDropdownLinkTablet = forwardRef<
  HTMLAnchorElement,
  NavbarDropdownLinkProps
>(function NavbarDropdownLinkTablet({ children, ...restProps }, ref) {
  const { closeDialog } = useMenuContext();
  return (
    <Link {...restProps} ref={ref} onClose={closeDialog}>
      {children}
    </Link>
  );
});

export const NavbarDropdownLink = {
  Mobile: NavbarDropdownLinkMobile,
  Tablet: NavbarDropdownLinkTablet,
};
