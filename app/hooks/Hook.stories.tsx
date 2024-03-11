import type { Meta } from "@storybook/react";
import { usePortal } from "./hook.usePortal";

const meta: Meta = {
  title: "Hooks",
} satisfies Meta<typeof meta>;

export default meta;

export const UsePortal = () => {
  const { togglePortal, Portal } = usePortal();

  return (
    <div>
      <button onClick={togglePortal}>Toggle Portal</button>
      <Portal>
        {/* This content can be dynamically imported */}
        <div>Portal Content</div>
      </Portal>
    </div>
  );
};
