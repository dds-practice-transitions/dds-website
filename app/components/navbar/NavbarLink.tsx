import { FC, forwardRef, useMemo } from "react";
import { clsx } from "clsx";

import styles from "./navbar.module.css";
import { Down } from "@icon-park/react";
import { Icon } from "../display/Icon";
import { NativeAnchor } from "../native";
import { useDrawerContext } from "../dialogs/Drawer";

export type NavbarLinkProps = JSX.IntrinsicElements["a"] & {
  ddLabel: string;
  ddActive?: boolean;
  LinkComponent?: FC;
};
export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLink(
    {
      children,
      className: cn,
      ddLabel,
      ddActive = false,
      LinkComponent = NativeAnchor,
      ...restProps
    },
    ref,
  ) {
    const isMenu = typeof children !== "undefined";
    const { closeDialog } = useDrawerContext();

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

    return (
      <LinkComponent
        {...restProps}
        onClick={closeDialog}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className={clsx(styles["navbar-link"], className, {
          menu: isMenu,
          active: ddActive || className.includes("active"),
        })}
        ref={ref}
      >
        {Content}
        {children}
      </LinkComponent>
    );
  },
);
