import { ReactElement, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NavbarLauncher } from "./NavbarLauncher";
import { NavbarLinkProps } from "./NavbarLink";
import { Drawer, useDrawer } from "../dialogs/Drawer";
import { Icon } from "../display/Icon";
import { Close } from "@icon-park/react";

import { ResponsiveTablet } from "../../utils/ResponsiveTablet";

export type NavbarPropsNative = Omit<
  JSX.IntrinsicElements["nav"],
  "children"
> & {
  children: ReactElement<NavbarLinkProps>[] | ReactElement<NavbarLinkProps>;
};
export type NavbarPropsCustom = {
  ddLogoSrc: string;
  ddLogoAlt: string;
};
export type NavbarProps = NavbarPropsNative & NavbarPropsCustom;

// const Content = forwardRef<HTMLElement, NavbarProps>(
//   function Content(props, ref) {},
// );

export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { children, className, ddLogoAlt, ddLogoSrc, ...restProps },
  ref,
) {
  const { openDrawer, drawerRef, closeDrawer } = useDrawer();

  return (
    <nav {...restProps} className={clsx(styles.navbar, className)} ref={ref}>
      <NavbarLauncher onClick={openDrawer} />
      <Drawer ref={drawerRef} ddSize="lg" ddOrientation="right-to-left">
        <div className={styles["navbar-m"]}>
          <div className={styles["navbar-m-head"]}>
            <button onClick={closeDrawer}>
              <Icon DDIcon={Close} />
            </button>
          </div>
          <img
            className={styles["navbar-m-logo"]}
            src={ddLogoSrc}
            alt={ddLogoAlt}
          />
          <ul className={styles["navbar-m-body"]}>{children}</ul>
        </div>
      </Drawer>
      <ul>
        <ResponsiveTablet>{children}</ResponsiveTablet>
      </ul>
    </nav>
  );
});
