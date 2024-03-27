import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import {
  NavbarItem as NavItem,
  NavbarLink,
  NavbarDropdown,
  useMenu,
  NavbarDropdownItem,
  NavbarDropdownLink,
} from "../../components";
import { exhaustiveMatchGuard } from "../../utils";
import { withAdapterLink } from "../../adapters/AdapterLink";

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
            LinkComponent={withAdapterLink({
              adapter: "navlink",
              field: slice.primary.link,
            })}
          >
            {slice.primary.label}
          </NavbarLink>
        </NavItem>
      );

    case "withSubmenu":
      return (
        <NavItem>
          <NavbarLink ddLabel={slice.primary.label as string}>
            <NavbarDropdown {...sMenu}>
              {slice.items.map((item, i) => {
                return (
                  <NavbarDropdownItem key={`dropdown-${i}`}>
                    <NavbarDropdownLink
                      LinkComponent={withAdapterLink({
                        adapter: "navlink",
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
