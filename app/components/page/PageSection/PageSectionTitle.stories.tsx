import type { Meta, StoryObj } from "@storybook/react";
import { PageSectionTitle } from "./SectionTitle";

const meta: Meta = {
  title: "Page / Section",
  component: PageSectionTitle,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: "Excited to work together on your next project?",
  },
};
