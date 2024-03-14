import { forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./navbar.module.css";
import { Down } from "@icon-park/react";
import { Icon } from "../display/Icon";

export type NavbarLinkProps = JSX.IntrinsicElements["a"] & {
  ddLabel: string;
};
export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLink({ children, className, ddLabel, ...restProps }, ref) {
    const isMenu = typeof children !== "undefined";
    return (
      <a
        {...restProps}
        className={clsx(styles["navbar-link"], className, {
          menu: isMenu,
        })}
        ref={ref}
      >
        <div className={styles["content"]}>
          <span>{ddLabel}</span>
          {isMenu && <Icon DDIcon={Down} />}
        </div>
        {children}
      </a>
    );
  },
);
