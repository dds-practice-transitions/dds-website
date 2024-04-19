import { FC, forwardRef, useMemo } from "react";
import { clsx } from "clsx";

import styles from "./navbar.module.css";
import { Down } from "@icon-park/react";
import { Icon } from "../display/Icon";
import { NativeAnchor, NativeButton } from "../native";
import { useDrawerContext } from "../dialogs/Drawer";
import { useBreakpoint } from "../../hooks";

export type NavbarLinkProps = JSX.IntrinsicElements["a"] & {
  ddLabel: string;
  ddActive?: boolean;
  LinkComponent?: FC;
};

export const Link = forwardRef<
  HTMLAnchorElement,
  NavbarLinkProps & { onClose?: () => void }
>(function Link(
  {
    children,
    className: cn,
    ddLabel,
    ddActive = false,
    LinkComponent = NativeAnchor,
    onClose,
    ...restProps
  },
  ref,
) {
  const isMenu = typeof children !== "undefined";

  const className = clsx(styles["navbar-link"], cn, {
    menu: isMenu,
    active: ddActive,
  });

  const Content = useMemo(
    () => (
      <div className={styles["navbar-link-content"]}>
        <span>{ddLabel}</span>
        {isMenu && <Icon DDIcon={Down} />}
      </div>
    ),
    [ddLabel, isMenu],
  );

  const Component = isMenu ? NativeButton : LinkComponent;

  return (
    <Component
      {...restProps}
      onClick={onClose}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={isMenu ? undefined : 0}
      className={clsx(styles["navbar-link"], className, {
        menu: isMenu,
        active: ddActive || className.includes("active"),
      })}
      // @ts-expect-error Button can change the ref here but we don't really care
      ref={ref}
    >
      {Content}
      {children}
    </Component>
  );
});

const NavbarLinkMobile = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLinkMobile({ children, ...restProps }, ref) {
    const { closeDialog } = useDrawerContext();
    return (
      <Link {...restProps} ref={ref} onClose={closeDialog}>
        {children}
      </Link>
    );
  },
);

const NavbarLinkDesktop = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLinkDesktop({ children, ...restProps }, ref) {
    return (
      <Link {...restProps} ref={ref}>
        {children}
      </Link>
    );
  },
);

export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLink({ children, ...restProps }, ref) {
    const isMobile = useBreakpoint({ to: "tablet" });

    if (isMobile) {
      return (
        <NavbarLinkMobile {...restProps} ref={ref}>
          {children}
        </NavbarLinkMobile>
      );
    }

    return (
      <NavbarLinkDesktop {...restProps} ref={ref}>
        {children}
      </NavbarLinkDesktop>
    );
  },
);
