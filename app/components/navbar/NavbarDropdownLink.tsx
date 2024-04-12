import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NativeAnchor } from "../native";
import { useDrawerContext } from "../dialogs/Drawer";

export const NavbarDropdownLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements["a"] & { LinkComponent?: FC }
>(function NavbarDropdownLink(
  { children, className, LinkComponent = NativeAnchor, ...restProps },
  ref,
) {
  const { closeDialog } = useDrawerContext();

  return (
    <LinkComponent
      {...restProps}
      onClick={closeDialog}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
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
