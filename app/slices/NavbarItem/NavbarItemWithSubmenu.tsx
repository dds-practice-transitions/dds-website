import { FC } from "react";

import { useMenu } from "../../components";
import { withPrismicAdapterNavLink } from "../../adapters";
import { type NavbarItemSliceWithSubmenu } from "../../../prismicio-types";
import { useNavigationContext } from "../../components/navigation";

export const NavbarItemWithSubmenu: FC<NavbarItemSliceWithSubmenu> = (
  slice,
) => {
  const {
    NavigationItem,
    NavigationLink,
    NavigationDropdown,
    NavigationDropdownItem,
    NavigationDropdownLink,
  } = useNavigationContext();
  const sMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
    strategy: "fixed",
  });

  return (
    <NavigationItem>
      <NavigationLink
        ddLabel={slice.primary.label as string}
        ddHasMenu
        {...sMenu.openProps}
      >
        <NavigationDropdown {...sMenu}>
          {slice.items.map((item, i) => (
            <NavigationDropdownItem key={`dropdown-${i}`}>
              <NavigationDropdownLink
                LinkComponent={withPrismicAdapterNavLink({
                  field: item.link,
                })}
              >
                {item.label}
              </NavigationDropdownLink>
            </NavigationDropdownItem>
          ))}
        </NavigationDropdown>
      </NavigationLink>
    </NavigationItem>
  );
};
