import type { Meta } from "@storybook/react";
import { Button } from "../../inputs/Button";
import { Menu } from "./Menu";
import { useMenu } from "./menu.useMenu";
import { MenuList } from "./MenuList";
import { MenuListItem } from "./MenuListItem";

const meta: Meta = {
  title: "Dialogs / Menu",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;

export const Hover = () => {
  const { menuRef, openMenu, closeMenu } = useMenu({
    placement: "bottom-start",
  });

  return (
    <>
      <Button onMouseEnter={openMenu}>Hover to open menu</Button>
      <Menu ref={menuRef}>
        <MenuList onMouseLeave={closeMenu}>
          <MenuListItem>
            <button>Test content 1</button>
          </MenuListItem>
          <MenuListItem>Test content 2</MenuListItem>
          <MenuListItem>Test content 3</MenuListItem>
        </MenuList>
      </Menu>
    </>
  );
};
