import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NativeAnchor } from "../native";
import { useDrawerContext } from "../dialogs/Drawer";
import { ResponsiveMobile } from "../../utils";
import { Responsive } from "../../utils/Responsive";
import { useMenuContext } from "../dialogs/Menu";
// import { useMenuContext } from "../dialogs/Menu";

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

const ContentMobile = forwardRef<HTMLAnchorElement, NavbarDropdownLinkProps>(
  function ContentMobile({ children, ...restProps }, ref) {
    const { closeDialog } = useDrawerContext();
    return (
      <Link {...restProps} ref={ref} onClose={closeDialog}>
        {children}
      </Link>
    );
  },
);

const ContentDesktop = forwardRef<HTMLAnchorElement, NavbarDropdownLinkProps>(
  function ContentDesktop({ children, ...restProps }, ref) {
    const { closeDialog } = useMenuContext();
    return (
      <Link {...restProps} ref={ref} onClose={closeDialog}>
        {children}
      </Link>
    );
  },
);

export const NavbarDropdownLink = forwardRef<
  HTMLAnchorElement,
  NavbarDropdownLinkProps
>(function NavbarDropdownLink({ children, ...restProps }, ref) {
  return (
    <>
      <ResponsiveMobile>
        <ContentMobile {...restProps} ref={ref}>
          {children}
        </ContentMobile>
      </ResponsiveMobile>
      <Responsive from="tablet">
        <ContentDesktop {...restProps} ref={ref}>
          {children}
        </ContentDesktop>
      </Responsive>
    </>
  );
});
