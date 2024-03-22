import type { Meta, StoryObj } from "@storybook/react";
import { AvatarCard } from "./AvatarCard";
import { randJobTitle, randProductDescription, randWord } from "@ngneat/falso";

const meta: Meta = {
  title: "Display / Avatar / Card",
  // @ts-expect-error forwardRef mismatch
  component: AvatarCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ddFullName: "Cameron Fee",
    ddTitle: randJobTitle(),
    ddDescription: randProductDescription(),
    ddImgSrc: "/images/test-4.jpg",
    ddImgAlt: randWord(),
  },
};
