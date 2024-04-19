import { FC } from "react";

import {
  NavbarItem as NavItem,
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarDropdownLink,
  NavbarLink,
  useMenu,
} from "../../components";
import { withPrismicAdapterNavLink } from "../../adapters";
import { type NavbarItemSliceWithSubmenu } from "../../../prismicio-types";
import { ResponsiveMobile } from "../../utils";
import { ResponsiveTablet } from "../../utils/ResponsiveTablet";

export const NavbarItemWithSubmenu: FC<NavbarItemSliceWithSubmenu> = (
  slice,
) => {
  const sMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
    strategy: "fixed",
  });

  return (
    <NavItem>
      <ResponsiveMobile>
        <NavbarLink.Mobile ddLabel={slice.primary.label as string}>
          <NavbarDropdown.Mobile>
            {slice.items.map((item, i) => {
              return (
                <NavbarDropdownItem key={`dropdown-${i}`}>
                  <NavbarDropdownLink.Mobile
                    LinkComponent={withPrismicAdapterNavLink({
                      field: item.link,
                    })}
                  >
                    {item.label}
                  </NavbarDropdownLink.Mobile>
                </NavbarDropdownItem>
              );
            })}
          </NavbarDropdown.Mobile>
        </NavbarLink.Mobile>
      </ResponsiveMobile>
      <ResponsiveTablet>
        <NavbarLink.Tablet
          ddLabel={slice.primary.label as string}
          {...sMenu.openProps}
        >
          <NavbarDropdown.Tablet {...sMenu}>
            {slice.items.map((item, i) => {
              return (
                <NavbarDropdownItem key={`dropdown-${i}`}>
                  <NavbarDropdownLink.Tablet
                    LinkComponent={withPrismicAdapterNavLink({
                      field: item.link,
                    })}
                  >
                    {item.label}
                  </NavbarDropdownLink.Tablet>
                </NavbarDropdownItem>
              );
            })}
          </NavbarDropdown.Tablet>
        </NavbarLink.Tablet>
      </ResponsiveTablet>
    </NavItem>
  );
};
