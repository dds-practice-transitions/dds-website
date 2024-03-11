import { useRef, useCallback, useMemo, MutableRefObject } from "react";
import { DialogDefaultState, DialogRef } from "../../hooks/hook.useDialog";

export function useModal<T extends DialogDefaultState>() {
  const modalRef = useRef<DialogRef<T>>(null);

  const openModal = useCallback<DialogRef<T>["handleOpen"]>((e, initData) => {
    if (!modalRef.current) return;
    modalRef.current.handleOpen(e, initData);
  }, []);

  const closeModal = useCallback<DialogRef<T>["handleClose"]>(() => {
    if (!modalRef.current) return;
    modalRef.current.handleClose();
  }, []);

  return useMemo(
    () => ({
      modalRef: modalRef as unknown as MutableRefObject<DialogRef>,
      openModal,
      closeModal,
    }),
    [closeModal, openModal]
  );
}
