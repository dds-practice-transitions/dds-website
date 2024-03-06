import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
  title: "Inputs / Buttons",
  component: Button,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ddVariant: "primary",
    children: "Primary button",
  },
};

export const Secondary: Story = {
  args: {
    ddVariant: "secondary",
    children: "Secondary button",
  },
};
