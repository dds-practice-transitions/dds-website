import {
  ForwardedRef,
  ReactNode,
  RefCallback,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { usePopper } from "react-popper";

import { DialogProvider } from "../Dialog.context";
import { DialogDefaultState, DialogRef, useDialog } from "../dialog.useDialog";
import { Options } from "@popperjs/core";

import clsx from "clsx";
import menuStyles from "./menu.module.css";

export type MenuProps = { children: ReactNode };

export type MenuOptionMode = "manual" | "focus";
export type MenuOptions = Omit<Partial<Options>, "modifiers"> & {
  mode?: MenuOptionMode;
};

export type MenuState<T extends DialogDefaultState> = T & {
  referenceElement: HTMLElement | undefined;
  menuOptions?: MenuOptions;
};

export const Menu = forwardRef(function Menu<T extends DialogDefaultState>(
  // eslint-disable-next-line react/prop-types
  { children, ...restProps }: MenuProps,
  ref: ForwardedRef<DialogRef<T>>,
) {
  const { Portal, dialogRef, dialogState } = useDialog<MenuState<T>>({
    ref,
    type: "default",
    ...restProps,
  });
  const [popperEl, setPopperEl] = useState<HTMLDialogElement | null>(null);
  const { styles, attributes } = usePopper(
    dialogState?.referenceElement,
    popperEl,
    dialogState?.menuOptions,
  );

  const combinedRef = useCallback<RefCallback<HTMLDialogElement>>(
    (node) => {
      if (!node) return;
      dialogRef(node);
      setPopperEl((prevState) => (!prevState ? node : prevState));
    },
    [dialogRef],
  );

  return (
    <Portal disabled={dialogState?.menuOptions?.strategy === "fixed"}>
      <DialogProvider initialState={dialogState}>
        <dialog
          ref={combinedRef}
          className={clsx(menuStyles["menu"])}
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
        </dialog>
      </DialogProvider>
    </Portal>
  );
});
