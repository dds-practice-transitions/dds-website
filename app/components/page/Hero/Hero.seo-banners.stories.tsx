import type { Meta, StoryObj } from "@storybook/react";

import {
  HeroVariantSEOBanner,
  type HeroVariantSEOBannerProps,
} from "./HeroVariantSEOBanner";

const meta: Meta = {
  title: "Page / Hero / SEOBanner",
  // @ts-expect-error Props mismatch
  component: HeroVariantSEOBanner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    ddTitle: "Dental Practice Brokerage. For Dentists. By Dentists",
    ddBackgroundSrc: "/images/backgrounds/blob-scene-1.svg",
    ddBackgroundAlt: "hero-bg",
    ddLogoSrc: "/images/logos/logo-wordmark-horiztonal-2-tone-transparent.png",
    ddLogoAlt: "dds-practice-transitions",
    style: {
      height: "100vh",
      display: "grid",
      placeItems: "center",
    },
  } as HeroVariantSEOBannerProps,
};
