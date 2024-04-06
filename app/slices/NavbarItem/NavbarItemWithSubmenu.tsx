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
      <NavbarLink ddLabel={slice.primary.label as string} {...sMenu.openProps}>
        <NavbarDropdown {...sMenu}>
          {slice.items.map((item, i) => {
            return (
              <NavbarDropdownItem key={`dropdown-${i}`}>
                <NavbarDropdownLink
                  LinkComponent={withPrismicAdapterNavLink({
                    field: item.link,
                  })}
                >
                  {item.label}
                </NavbarDropdownLink>
              </NavbarDropdownItem>
            );
          })}
        </NavbarDropdown>
      </NavbarLink>
    </NavItem>
  );
};
