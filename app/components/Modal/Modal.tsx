import { ForwardedRef, ReactNode, forwardRef } from "react";
import {
  DialogDefaultState,
  DialogRef,
  UseDialogOptions,
  useDialog,
} from "../../hooks/hook.useDialog";
import { ModalProvider } from "./Modal.context";

export type ModalProps = Pick<
  UseDialogOptions,
  "onClose" | "closeOnBackdropClick"
> & { children: ReactNode };

export const Modal = forwardRef(function Modal<T extends DialogDefaultState>(
  { children, ...restProps }: ModalProps,
  ref: ForwardedRef<DialogRef<T>>
) {
  const { Portal, dialogRef } = useDialog<T>({
    ref,
    type: "modal",
    ...restProps,
  });

  return (
    <Portal>
      <ModalProvider>
        <dialog ref={dialogRef}>
          <header>Modal</header>
          <section>{children}</section>
          <footer>modal footer</footer>
        </dialog>
      </ModalProvider>
    </Portal>
  );
});
