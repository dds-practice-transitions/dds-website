import { FC, ReactNode } from "react";
import { Menu, useMenu } from "../dialogs/Menu";
import { MenuList } from "../dialogs/Menu/MenuList";

export type TopNavDropdownPropsCustom = ReturnType<typeof useMenu> & {
  children: ReactNode;
};
export type TopNavDropdownProps = TopNavDropdownPropsCustom;

export const TopNavDropdown: FC<TopNavDropdownProps> = ({
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
