import type { Meta, StoryObj } from "@storybook/react";

import { InputCheckbox, type InputCheckboxProps } from "./InputCheckbox";
import { InputGroup } from "../InputGroup";

const meta: Meta = {
  title: "Inputs / Input Checkbox",
  // @ts-expect-error Props mismatch
  component: InputCheckbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pill: Story = {
  args: {
    ddVariant: "pill",
    ddLabel: "theseeek",
    name: "check-me",
  } as InputCheckboxProps,
};

export const ManyBoxes = () => {
  return (
    <InputGroup ddVariant="checkbox">
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Mike Boyd" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Helena Phelps" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Ronald Jefferson" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Henrietta Evans" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Anthony Romero" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Rhoda Hogan" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Matilda Hunt" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Gregory Moore" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Blake Haynes" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Sarah Schwartz" />
      <InputCheckbox name="pill" ddVariant="pill" ddLabel="Hulda Wilkerson" />
    </InputGroup>
  );
};
