import type { Meta, StoryObj } from "@storybook/react";
import { PageSectionTypeFAQ } from "./PageSectionTypeFAQ";
import { randAmericanFootballTeam, randSentence } from "@ngneat/falso";

const meta: Meta = {
  title: "Page / Section / FAQ",
  // @ts-expect-error forwardRef mismatch
  component: PageSectionTypeFAQ,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

const ddItems = [...new Array(30)].map(() => ({
  ddTitle: randAmericanFootballTeam(),
  ddContent: randSentence(),
}));

export const Default: Story = {
  args: {
    ddVariant: "default",
    ddTitle: "Frequently Asked Questions",
    ddSubtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    ddItems,
  },
};
