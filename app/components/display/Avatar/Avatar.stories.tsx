import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { randJobTitle, randProductDescription } from "@ngneat/falso";

const meta: Meta = {
  title: "Display / Avatar",
  // @ts-expect-error forwardRef mismatch
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ddImgSrc: "/images/test-4.jpg",
  },
};

export const SizeSmall: Story = {
  args: {
    ddSize: "sm",
    ddPosition: "top",
    ddImgSrc: "/images/test-4.jpg",
  },
};

export const SizeMediumCenter: Story = {
  args: {
    ddSize: "md",
    ddPosition: "center",
    ddImgSrc: "/images/test-4.jpg",
  },
};

export const SizeLargeTop: Story = {
  args: {
    ddSize: "lg",
    ddPosition: "top",
    ddImgSrc: "/images/test-4.jpg",
  },
};
const withDetails = {
  ddImgSrc: "/images/test-4.jpg",
  ddFullName: "Cameron Fee",
  ddJobTitle: randJobTitle(),
  ddDescription: randProductDescription(),
};
export const SmallWithDetails: Story = {
  args: {
    ...withDetails,
    ddSize: "sm",
  },
};
export const MediumWithDetails: Story = {
  args: {
    ...withDetails,
    ddSize: "md",
  },
};
export const LargeWithDetails: Story = {
  args: {
    ...withDetails,
    ddSize: "lg",
  },
};
