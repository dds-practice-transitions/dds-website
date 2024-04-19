import type { Meta } from "@storybook/react";
import { HeroVariantBasic } from "./HeroVariantBasic";
import { Button } from "../../inputs/Button";
import { HeroVariantImageRight } from "./HeroVariantImageRight";
import { HeroVariantFadedImage } from "./HeroVariantFadedImage";

const meta: Meta = {
  title: "Page / Hero / Variants",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  return (
    <HeroVariantBasic
      ddOverline="features"
      ddTitle="Your practice. Our Expertise. Full Transparency."
      ddSubtitle="Finally, a brokerage company formed to help dentists by dentists. We are here not just to maximize the value of your dental practice, but educate you on the various avenues available to dentists. We have one central goal in mind when we work with you: to consummate a transaction that fits your particular needs."
    >
      <Button ddVariant="primary" ddSize="md">
        Learn more
      </Button>
      <Button ddVariant="paper" ddSize="md">
        Contact us
      </Button>
    </HeroVariantBasic>
  );
};

export const BasicWithBackground = () => {
  return (
    <HeroVariantBasic
      ddOverline="features"
      ddTitle="Your practice. Our Expertise. Full Transparency."
      ddBackgroundSrc="/images/backgrounds/dentist-office-1.jpeg"
      ddBackgroundAlt="dds-hero-1"
      style={{
        height: "100vh",
      }}
    >
      <Button ddVariant="primary" ddSize="md">
        Learn more
      </Button>
      <Button ddVariant="paper" ddSize="md">
        Contact us
      </Button>
    </HeroVariantBasic>
  );
};

export const ImageRight = () => {
  return (
    <HeroVariantImageRight
      ddOverline="features"
      ddTitle="Your practice. Our Expertise. Full Transparency."
      ddSubtitle="Finally, a brokerage company formed to help dentists by dentists. We are here not just to maximize the value of your dental practice, but educate you on the various avenues available to dentists. We have one central goal in mind when we work with you: to consummate a transaction that fits your particular needs."
      ddImageAlt="image"
      ddImageSrc="/images/test-3.jpg"
      ddBackgroundSrc="/images/backgrounds/layered-waves-1.svg"
      ddBackgroundAlt="layered-waves"
    >
      <Button ddVariant="primary" ddSize="md">
        Learn more
      </Button>
      <Button ddVariant="paper" ddSize="md">
        Contact us
      </Button>
    </HeroVariantImageRight>
  );
};

export const FadedImage = () => {
  return (
    <HeroVariantFadedImage
      ddTitle="Dentists that help other dentists buy and sell their practices."
      ddSubtitle="Finally, a brokerage company formed to help dentists by dentists. We are here not just to maximize the value of your dental practice, but educate you on the various avenues available to dentists. We have one central goal in mind when we work with you: to consummate a transaction that fits your particular needs."
      ddBackgroundSrc="/images/backgrounds/dentist-office-2.jpeg"
      ddBackgroundAlt="dds-hero-1"
      ddLogoSrc="/images/logos/logo-wordmark-horiztonal-2-tone.png"
      ddLogoAlt="dds-practice-transitions"
    >
      <Button ddVariant="primary" ddSize="md">
        Learn more
      </Button>
      <Button ddVariant="paper" ddSize="md">
        Contact us
      </Button>
    </HeroVariantFadedImage>
  );
};

export const ImageRightSEOBanner = () => {
  return (
    <HeroVariantImageRight
      ddOverline="DDS Practice Transitions"
      ddTitle="Cameron Fee"
      ddSubtitle=""
      ddImageAlt="image"
      ddImageSrc="/images/test-4.jpg"
      ddBackgroundSrc="/images/backgrounds/layered-waves-1.svg"
      ddBackgroundAlt="layered-waves"
      style={{
        width: 1200,
        height: 630,
        border: `1px solid #ccc`,
      }}
    />
  );
};
