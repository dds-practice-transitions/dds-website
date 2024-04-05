import type { Meta, StoryObj } from "@storybook/react";

import { InputLabel, type InputLabelProps } from "./InputLabel";

const meta: Meta = {
  title: "Inputs / Input Label",
  // @ts-expect-error Props mismatch
  component: InputLabel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ddFor: "test",
    children: "Email Address",
  } as InputLabelProps,
};
