import type { Meta, StoryObj } from "@storybook/react";
import { PageSectionTypeTeam } from "./PageSectionTypeTeam";
import { randJobTitle, randProductDescription, randWord } from "@ngneat/falso";
import { AvatarCardPropsCustom } from "../../display/Avatar";

const meta: Meta = {
  title: "Page / Section / Team",
  // @ts-expect-error forwardRef mismatch
  component: PageSectionTypeTeam,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

const ddMembers: AvatarCardPropsCustom[] = [...new Array(30)].map(() => ({
  ddFullName: "Cameron Fee",
  ddTitle: randJobTitle(),
  ddDescription: randProductDescription(),
  ddImgSrc: "/images/test-4.jpg",
  ddImgAlt: randWord(),
}));

export const Default: Story = {
  args: {
    ddVariant: "default",
    ddTitle: "Meet our talented team",
    ddSubtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.",
    ddMembers: ddMembers,
  },
};
