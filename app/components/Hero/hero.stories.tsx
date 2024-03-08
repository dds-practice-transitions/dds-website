import type { Meta, StoryObj } from "@storybook/react";
import { Hero, HeroBaseProps, HeroProps } from "./Hero";

const meta: Meta = {
  title: "Inputs / Heros",
  //@ts-expect-error forwardRef error
  component: Hero,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<HeroProps>;

const baseProps: HeroBaseProps = {
  ddHeight: 1000,
  ddBackground: "/bg-wave-1.webp",
  ddBackgroundAlt: "gradient-1",
  ddTitle: "Your practice. Our Expertise. Full Transparency.",
  ddSubtitle:
    "Finally, a brokerage company formed to help dentists by dentists. We are here not just to maximize the value of your dental practice, but educate you on the various avenues available to dentists. We have one central goal in mind when we work with you: to consummate a transaction that fits your particular needs.",
  ddCtaLabel: "Get in touch",
  ddCtaVariant: "paper",
  ddCtaPage: "contact-us",
};

export const LayoutDualPane: Story = {
  args: {
    ...baseProps,
    ddLayout: "dual-pane",
    ddPaneImage: "https://picsum.photos/500/300",
    ddPaneImageAlt: "dual-pane",
  },
};

export const LayoutImageGrid: Story = {
  args: {
    ...baseProps,
    ddLayout: "img-grid",
    ddImages: [
      { src: "https://picsum.photos/500/300", alt: "big-wave" },
      { src: "https://picsum.photos/500/200", alt: "big-wave" },
      { src: "https://picsum.photos/500/600", alt: "big-wave" },
      { src: "https://picsum.photos/500/500", alt: "big-wave" },
    ],
  },
};
