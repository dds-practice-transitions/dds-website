import { FC, forwardRef, useMemo } from "react";
import { clsx } from "clsx";

import styles from "./navbar.module.css";
import { Down } from "@icon-park/react";
import { Icon } from "../display/Icon";
import { NativeAnchor, NativeButton } from "../native";

export type NavLinkProps = JSX.IntrinsicElements["a"] & {
  ddLabel: string;
  ddActive?: boolean;
  LinkComponent?: FC;
};

export const NavLink = forwardRef<
  HTMLAnchorElement,
  NavLinkProps & { onClose?: () => void }
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
