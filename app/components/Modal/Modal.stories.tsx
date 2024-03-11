import type { Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { useModal } from "./modal.useModal";

const meta: Meta = {
  title: "Modal",
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  const { modalRef, openModal } = useModal();

  return (
    <>
      <button onClick={openModal}>Toggle Portal</button>
      <Modal ref={modalRef}>This is some modal content!</Modal>
    </>
  );
};
