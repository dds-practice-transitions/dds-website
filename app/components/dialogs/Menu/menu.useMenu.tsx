import { useRef, useCallback, useMemo, MutableRefObject } from "react";
import { DialogDefaultState, DialogRef } from "../dialog.useDialog";
import { MenuOptions, MenuState } from "./Menu";

export function useMenu<T extends DialogDefaultState>(options?: MenuOptions) {
  const menuRef = useRef<DialogRef<MenuState<T>>>(null);

  const openMenu = useCallback<DialogRef<MenuState<T>>["handleOpen"]>(
    (e, initData = {} as MenuState<T>) => {
      if (!menuRef.current) return;
      menuRef.current.handleOpen(e, {
        ...initData,
        referenceElement: e?.currentTarget,
        menuOptions: options,
      });
    },
    [options],
  );

  const closeMenu = useCallback<DialogRef<MenuState<T>>["handleClose"]>(() => {
    if (!menuRef.current) return;
    menuRef.current.handleClose();
  }, []);

  return useMemo(
    () => ({
      menuRef: menuRef as unknown as MutableRefObject<DialogRef>,
      openMenu,
      closeMenu,
    }),
    [closeMenu, openMenu],
  );
}
