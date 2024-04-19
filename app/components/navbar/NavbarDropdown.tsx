import { forwardRef } from "react";
import { useBreakpoint } from "../../hooks";
import { Menu, useMenu } from "../dialogs/Menu";
import { MenuList } from "../dialogs/Menu/MenuList";

export type NavbarDropdown = JSX.IntrinsicElements["ul"] &
  ReturnType<typeof useMenu>;
export const NavbarDropdown = forwardRef<HTMLUListElement, NavbarDropdown>(
  function NavbarDropdown(
    {
      children,
      closeProps,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      openMenu,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      closeMenu,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      openProps,
      menuRef,
      ...restProps
    },
    ref,
  ) {
    const isMobile = useBreakpoint({ to: "tablet" });

    if (isMobile) {
      return (
        <ul {...restProps} ref={ref}>
          {children}
        </ul>
      );
    }

    return (
      <Menu ref={menuRef}>
        <MenuList {...closeProps}>{children}</MenuList>
      </Menu>
    );
  },
);
