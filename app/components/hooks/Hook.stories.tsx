import type { Meta, StoryObj } from "@storybook/react";
import { usePortal } from "./hook.usePortal";
import { createPortal } from "react-dom";

const meta: Meta = {
  title: "Hooks",
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UsePortal = () => {
  const { isOpen, portalRoot, togglePortal } = usePortal();

  return (
    <div>
      <button onClick={togglePortal}>Toggle Portal</button>
      {isOpen && createPortal(<div>Portal Content</div>, portalRoot)}
    </div>
  );
};
