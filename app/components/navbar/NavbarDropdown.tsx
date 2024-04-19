import { FC, ReactNode, forwardRef } from "react";
import { Menu, useMenu } from "../dialogs/Menu";
import { MenuList } from "../dialogs/Menu/MenuList";

export type NavbarDropdownMobilePropsNative = JSX.IntrinsicElements["ul"];
export type NavbarDropdownMobileProps = NavbarDropdownMobilePropsNative;

export const NavbarDropdownMobile = forwardRef<
  HTMLUListElement,
  NavbarDropdownMobileProps
>(function NavbarDropdownMobile({ children, ...restProps }, ref) {
  return (
    <ul {...restProps} ref={ref}>
      {children}
    </ul>
  );
});

export type NavbarDropdownTabletPropsCustom = ReturnType<typeof useMenu> & {
  children: ReactNode;
};
export type NavbarDropdownTabletProps = NavbarDropdownTabletPropsCustom;

const NavbarDropdownTablet: FC<NavbarDropdownTabletProps> = ({
  children,
  menuRef,
  closeProps,
}) => {
  return (
    <Menu ref={menuRef}>
      <MenuList {...closeProps}>{children}</MenuList>
    </Menu>
  );
};

export const NavbarDropdown = {
  Mobile: NavbarDropdownMobile,
  Tablet: NavbarDropdownTablet,
};
