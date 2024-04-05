import type { Meta } from "@storybook/react";
import { Hero } from "./Hero";
import { HeroVariantBasic } from "./HeroVariantBasic";
import { Button } from "../../inputs/Button";
import { HeroVariantImageRight } from "./HeroVariantImageRight";

const meta: Meta = {
  title: "Page / Hero / Variants",
  //@ts-expect-error forwardRef error
  component: Hero,
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
