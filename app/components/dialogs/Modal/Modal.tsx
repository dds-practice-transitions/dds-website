import { ForwardedRef, ReactNode, forwardRef } from "react";

import { DialogProvider } from "../Dialog.context";
import {
  UseDialogOptions,
  DialogDefaultState,
  DialogRef,
  useDialog,
} from "../dialog.useDialog";

export type ModalProps = Pick<
  UseDialogOptions,
  "onClose" | "closeOnBackdropClick"
> & { children: ReactNode };

export const Modal = forwardRef(function Modal<T extends DialogDefaultState>(
  { children, ...restProps }: ModalProps,
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
        <dialog ref={dialogRef}>{children}</dialog>
      </DialogProvider>
    </Portal>
  );
});
