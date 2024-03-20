import type { Meta } from "@storybook/react";
import { Navbar } from "./Navbar";
import { NavbarLink } from "./NavbarLink";
import { Menu, useMenu } from "../dialogs/Menu";
import { MenuList } from "../dialogs/Menu/MenuList";
import { MenuListItem } from "../dialogs/Menu/MenuListItem";
import { MouseEventHandler, useCallback } from "react";
import { NavbarMenuLink } from "./NavbarMenuLink";

const meta: Meta = {
  title: "Page / Navbar",
  component: Navbar,
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  const menuServices = useMenu({
    placement: "bottom-start",
  });
  const menuCompany = useMenu({
    placement: "bottom-start",
  });

  const openMenuServices = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      menuCompany.closeMenu();
      menuServices.openMenu(e);
    },
    [menuCompany, menuServices],
  );

  const openMenuCompany = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      menuServices.closeMenu();
      menuCompany.openMenu(e);
    },
    [menuCompany, menuServices],
  );

  return (
    <Navbar>
      <NavbarLink ddLabel="about" />
      <NavbarLink ddLabel="services" onMouseEnter={openMenuServices}>
        <Menu ref={menuServices.menuRef}>
          <MenuList>
            {/* <MenuList onMouseLeave={menuServices.closeMenu}> */}
            <MenuListItem>
              <NavbarMenuLink className="active">Web Design</NavbarMenuLink>
            </MenuListItem>
            <MenuListItem>
              <NavbarMenuLink>Web Development</NavbarMenuLink>
            </MenuListItem>
            <MenuListItem>
              <NavbarMenuLink>Conversion Optimization</NavbarMenuLink>
            </MenuListItem>
          </MenuList>
        </Menu>
      </NavbarLink>
      <NavbarLink ddLabel="our company" ddActive onMouseEnter={openMenuCompany}>
        <Menu ref={menuCompany.menuRef}>
          <MenuList onMouseLeave={menuCompany.closeMenu}>
            <MenuListItem>
              <button>test 1</button>
              <button>test 2</button>
              <button>test 3</button>
              <button>test 4</button>
            </MenuListItem>
          </MenuList>
        </Menu>
      </NavbarLink>
      <NavbarLink ddLabel="contact us" />
    </Navbar>
  );
};
