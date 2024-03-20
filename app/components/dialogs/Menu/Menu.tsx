import {
  ForwardedRef,
  ReactNode,
  RefCallback,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { usePopper } from "react-popper";

import { DialogProvider } from "../Dialog.context";
import { DialogDefaultState, DialogRef, useDialog } from "../dialog.useDialog";
import { Options } from "@popperjs/core";

export type MenuProps = { children: ReactNode };

export type MenuOptions = Omit<Partial<Options>, "modifiers">;

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
    type: "modal",
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

  return useMemo(
    () => (
      <Portal>
        <DialogProvider initialState={dialogState}>
          <dialog
            ref={combinedRef}
            style={styles.popper}
            {...attributes.popper}
          >
            {children}
          </dialog>
        </DialogProvider>
      </Portal>
    ),
    [
      Portal,
      attributes.popper,
      children,
      combinedRef,
      dialogState,
      styles.popper,
    ],
  );
});
