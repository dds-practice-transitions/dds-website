import type { Meta, StoryObj } from "@storybook/react";

import {
  HeroVariantBasic,
  type HeroVariantBasicProps,
} from "./HeroVariantBasic";

const meta: Meta = {
  title: "Page / Hero / SEO Banner",
  // @ts-expect-error Props mismatch
  component: HeroVariantBasic,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    ddOverline: "DDS Practice Transitions",
    ddTitle: "Frequently Asked Questions",
    ddBackgroundSrc: "/images/backgrounds/blob-scene-1.svg",
    ddBackgroundAlt: "hero-bg",
    style: {
      height: "100vh",
      display: "grid",
      placeItems: "center",
    },
  } as HeroVariantBasicProps,
};
