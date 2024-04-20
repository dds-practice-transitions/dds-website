import { forwardRef } from "react";
import { useMenuContext } from "../dialogs/Menu";
import { NavDropdownLink, NavDropdownLinkProps } from "./NavDropdownLink";

export const TopNavDropdownLink = forwardRef<
  HTMLAnchorElement,
  NavDropdownLinkProps
>(function TopNavDropdownLink({ children, ...restProps }, ref) {
  const { closeDialog } = useMenuContext();
  return (
    <NavDropdownLink {...restProps} ref={ref} onClose={closeDialog}>
      {children}
    </NavDropdownLink>
  );
});
