import type { Meta } from "@storybook/react";

import { InputRadio } from "./InputRadio";
import { InputGroup } from "../InputGroup";

const meta: Meta = {
  title: "Inputs / InputRadio",
  // @ts-expect-error Props mismatch
  component: InputRadio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;

export const RadioButtons = () => {
  return (
    <InputGroup ddVariant="radio">
      <InputRadio name="button" ddVariant="button" ddLabel="Mike Boyd" />
      <InputRadio name="button" ddVariant="button" ddLabel="Helena Phelps" />
    </InputGroup>
  );
};
