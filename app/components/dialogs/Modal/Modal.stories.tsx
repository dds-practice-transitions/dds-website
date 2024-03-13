import type { Meta } from "@storybook/react";
import { Modal } from "./Modal";
import { useModal } from "./modal.useModal";
import { Button } from "../../inputs/Button";

const meta: Meta = {
  title: "Dialogs / Modal",
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  const { modalRef, openModal } = useModal();

  return (
    <>
      <Button onClick={openModal}>Toggle Portal</Button>
      <Modal ref={modalRef}>This is some modal content!</Modal>
    </>
  );
};
