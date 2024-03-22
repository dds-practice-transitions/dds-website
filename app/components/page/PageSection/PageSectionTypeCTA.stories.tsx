import type { Meta, StoryObj } from "@storybook/react";
import { PageSectionTypeCTA } from "./PageSectionTypeCTA";

const meta: Meta = {
  title: "Page / Section / CTA",
  // @ts-expect-error forwardRef mismatch
  component: PageSectionTypeCTA,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ddVariant: "default",
    ddTitle: "Excited to work together on your next project?",
    ddSubtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    ddActionLabel: "Get in touch",
    ddBackground: "primary",
  },
};

export const DefaultWithoutSubtitle: Story = {
  args: {
    ddVariant: "default",
    ddTitle: "Excited to work together on your next project?",
    ddActionLabel: "Get in touch",
    ddBackground: "secondary",
  },
};

export const SplitImage: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    ddVariant: "split-image",
    ddTitle: "Excited to work together on your next project?",
    ddSubtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    ddActionLabel: "Get in touch",
    ddBackground: "primary",
    ddImgSrc: "/images/test-3.jpg",
    ddImgAlt: "test-photo",
  },
};

export const SplitImageWithoutSubtitle: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    ddVariant: "split-image",
    ddTitle: "Excited to work together on your next project?",
    ddActionLabel: "Get in touch",
    ddBackground: "secondary",
    ddImgSrc: "/images/test-3.jpg",
    ddImgAlt: "test-photo",
  },
};
