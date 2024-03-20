import { ForwardedRef, ReactNode, forwardRef } from "react";

import { DialogProvider } from "../Dialog.context";
import {
  UseDialogOptions,
  DialogDefaultState,
  DialogRef,
  useDialog,
} from "../dialog.useDialog";
import styles from "./drawer.module.css";
import clsx from "clsx";

export type DrawerProps = Pick<
  UseDialogOptions,
  "onClose" | "closeOnBackdropClick"
> & {
  children: ReactNode;
  ddOrientation?: "left-to-right" | "right-to-left";
  ddSize?: "sm" | "md" | "lg";
};

export const Drawer = forwardRef(function Drawer<T extends DialogDefaultState>(
  {
    children,
    ddSize = "md",
    ddOrientation = "left-to-right",
    ...restProps
  }: DrawerProps,
  ref: ForwardedRef<DialogRef<T>>,
) {
  const { Portal, dialogRef, dialogState } = useDialog<T>({
    ref,
    type: "modal",
    ...restProps,
  });

  return (
    <Portal>
      <DialogProvider initialState={dialogState}>
        <dialog
          ref={dialogRef}
          className={clsx(
            styles["drawer"],
            styles[ddOrientation],
            styles[ddSize],
          )}
        >
          {children}
        </dialog>
      </DialogProvider>
    </Portal>
  );
});
