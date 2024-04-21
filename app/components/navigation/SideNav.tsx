import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { Drawer, useDrawer } from "../dialogs/Drawer";
import { SideNavLauncher } from "./SideNavLauncher";
import { Close } from "@icon-park/react";
import { Icon } from "../display/Icon";
import { NavigationProvider } from "./Nav.context";

export type SideNavPropsNative = JSX.IntrinsicElements["nav"];
export type SideNavPropsCustom = {
  ddLogoSrc: string;
  ddLogoAlt: string;
};
export type SideNavProps = SideNavPropsNative & SideNavPropsCustom;

export const SideNav = forwardRef<HTMLElement, SideNavProps>(function SideNav(
  { children, className, ddLogoAlt, ddLogoSrc, ...restProps },
  ref,
) {
  const { openDrawer, drawerRef, closeDrawer } = useDrawer();

  return (
    <NavigationProvider navType="side">
      <SideNavLauncher onClick={openDrawer} />
      <Drawer ref={drawerRef} ddSize="lg" ddOrientation="right-to-left">
        <nav {...restProps} className={clsx(styles.root, className)} ref={ref}>
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
        </nav>
      </Drawer>
    </NavigationProvider>
  );
});
