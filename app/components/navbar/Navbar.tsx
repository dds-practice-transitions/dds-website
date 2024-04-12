import { ReactElement, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NavbarLauncher } from "./NavbarLauncher";
import { NavbarLinkProps } from "./NavbarLink";
import { Drawer, useDrawer } from "../dialogs/Drawer";
import { useBreakpoint } from "../../hooks";
import { match } from "ts-pattern";
import { Icon } from "../display/Icon";
import { Close } from "@icon-park/react";

export type NavbarProps = Omit<JSX.IntrinsicElements["nav"], "children"> & {
  children: ReactElement<NavbarLinkProps>[] | ReactElement<NavbarLinkProps>;
  ddLogoSrc: string;
  ddLogoAlt: string;
};

export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { children, className, ddLogoAlt, ddLogoSrc, ...restProps },
  ref,
) {
  const isDesktop = useBreakpoint({ from: "tablet" });
  const { openDrawer, drawerRef, closeDrawer } = useDrawer();

  // const toggle = useCallback(() => {
  //   setIsOpen((prevState) => !prevState);
  // }, []);

  // const getBody = useCallback(() => {
  //   if (!bodyRef.current) {
  //     bodyRef.current = document.body;
  //   }
  //   return bodyRef.current;
  // }, []);

  // useEffect(() => {
  //   const bodyNode = getBody();
  //   if (isOpen) {
  //     bodyNode.style.overflow = "hidden";
  //     return;
  //   }
  //   bodyNode.style.overflow = "auto";

  //   return () => {
  //     const bodyNode = getBody();
  //     bodyNode.style.overflow = "auto";
  //   };
  // }, [getBody, isOpen]);

  return (
    <nav {...restProps} className={clsx(styles.navbar, className)} ref={ref}>
      <NavbarLauncher onClick={openDrawer} />
      {match(isDesktop)
        .with(false, () => (
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
        ))
        .with(true, () => <ul>{children}</ul>)
        .exhaustive()}
    </nav>
  );
});
