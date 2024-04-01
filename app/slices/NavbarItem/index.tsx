import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  NavbarItem as NavItem,
  NavbarLink,
  NavbarDropdown,
  useMenu,
  NavbarDropdownItem,
  NavbarDropdownLink,
} from "../../components";
import { exhaustiveMatchGuard } from "../../utils";
import { withAdapterNavLink } from "../../adapters";

/**
 * Props for `NavbarItem`.
 */
export type NavbarItemProps = SliceComponentProps<Content.NavbarItemSlice>;

/**
 * Component for "NavbarItem" Slices.
 */
const NavbarItem = ({ slice }: NavbarItemProps) => {
  const sMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
    strategy: "fixed",
  });

  switch (slice.variation) {
    case "default":
      return (
        <NavItem>
          <NavbarLink
            ddLabel={slice.primary.label as string}
            LinkComponent={withAdapterNavLink({
              field: slice.primary.link,
            })}
          />
        </NavItem>
      );

    case "withSubmenu":
      return (
        <NavItem>
          <NavbarLink
            ddLabel={slice.primary.label as string}
            {...sMenu.openProps}
          >
            <NavbarDropdown {...sMenu}>
              {slice.items.map((item, i) => {
                return (
                  <NavbarDropdownItem key={`dropdown-${i}`}>
                    <NavbarDropdownLink
                      LinkComponent={withAdapterNavLink({
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

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default NavbarItem;
