import { FC, forwardRef, useMemo } from "react";
import { clsx } from "clsx";

import styles from "./navbar.module.css";
import { Down } from "@icon-park/react";
import { Icon } from "../display/Icon";
import { useBreakpoint, useToggle } from "../../hooks";
import { NativeAnchor } from "../native";

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
    const isMobile = useBreakpoint({ to: "tablet" });
    const [isOpen, toggle] = useToggle(ddActive);

    const className = clsx(styles["navbar-link"], cn, {
      menu: isMenu,
      active: ddActive,
      open: isOpen,
    });

    const Content = useMemo(
      () => (
        <div className="content">
          <span>{ddLabel}</span>
          {isMenu && <Icon DDIcon={Down} />}
        </div>
      ),
      [ddLabel, isMenu],
    );

    if (isMobile && isMenu) {
      return (
        <>
          <button className={className} onClick={toggle}>
            {Content}
          </button>
          {isOpen && children}
        </>
      );
    }

    return (
      <LinkComponent
        {...restProps}
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
