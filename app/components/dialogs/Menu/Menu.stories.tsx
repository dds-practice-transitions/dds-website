import type { Meta } from "@storybook/react";
import { Button } from "../../inputs/Button";
import { Menu } from "./Menu";
import { useMenu } from "./menu.useMenu";

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
        <ul onMouseLeave={closeMenu}>
          <li>Test content 1</li>
          <li>Test content 2</li>
          <li>Test content 3</li>
        </ul>
      </Menu>
    </>
  );
};
