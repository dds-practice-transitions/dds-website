import type { Meta, StoryObj } from "@storybook/react";

import { InputText, type InputTextProps } from "./InputText";

const meta: Meta = {
  title: "Inputs / Input Text",
  // @ts-expect-error Props mismatch
  component: InputText,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    ddLabel: "First Name",
    id: "first-name",
    name: "first-name",
  } as InputTextProps,
};

export const WithoutLabel: Story = {
  args: {
    id: "first-name",
    name: "first-name",
  } as InputTextProps,
};
