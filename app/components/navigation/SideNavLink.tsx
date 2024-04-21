import { forwardRef } from "react";
import { useDrawerContext } from "../dialogs/Drawer";
import { NavLink, NavLinkProps } from "./NavLink";

export const SideNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function SideNavLink({ children, ...restProps }, ref) {
    const { closeDialog } = useDrawerContext();
    return (
      <NavLink {...restProps} ref={ref} onClose={closeDialog}>
        {children}
      </NavLink>
    );
  },
);
