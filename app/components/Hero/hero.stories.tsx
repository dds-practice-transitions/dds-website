import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta: Meta = {
  title: "Inputs / Heros",
  component: Hero,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutDualPane: Story = {
  args: {
    ddHeight: 1000,
    ddBackground: "/bg-wave-2.webp",
    ddBackgroundAlt: "gradient-1",
    ddLayout: "dual-pane",
    ddTitle: "Your practice. Our Expertise. Full Transparency.",
    ddSubtitle:
      "Finally, a brokerage company formed to help dentists by dentists. We are here not just to maximize the value of your dental practice, but educate you on the various avenues available to dentists. We have one central goal in mind when we work with you: to consummate a transaction that fits your particular needs.",
    ddPaneImage: "https://picsum.photos/500/300",
    ddPaneImageAlt: "random-image",
  },
};
