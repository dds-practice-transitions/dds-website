import type { Meta, StoryObj } from "@storybook/react";
import { PageSectionSubtitle } from "./SectionSubtitle";

const meta: Meta = {
  title: "Page / Section",
  component: PageSectionSubtitle,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subtitle: Story = {
  args: {
    children:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
};
