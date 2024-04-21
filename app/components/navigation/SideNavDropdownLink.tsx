import { forwardRef } from "react";
import { useDrawerContext } from "../dialogs/Drawer";
import { NavDropdownLink, NavDropdownLinkProps } from "./NavDropdownLink";

export const SideNavDropdownLink = forwardRef<
  HTMLAnchorElement,
  NavDropdownLinkProps
>(function SideNavDropdownLink({ children, ...restProps }, ref) {
  const { closeDialog } = useDrawerContext();
  return (
    <NavDropdownLink {...restProps} ref={ref} onClose={closeDialog}>
      {children}
    </NavDropdownLink>
  );
});
