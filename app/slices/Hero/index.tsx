import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { exhaustiveMatchGuard } from "../../utils";
import {
  ButtonLink,
  HeroVariantBasic,
  HeroVariantImageRight,
} from "../../components";
import { withAdapterLink } from "../../adapters";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps) => {
  switch (slice.variation) {
    case "default":
      return (
        <HeroVariantBasic
          ddBackgroundSrc={slice.primary.background_image.url ?? undefined}
          ddBackgroundAlt={slice.primary.background_image.alt ?? undefined}
          ddOverline={slice.primary.overline ?? undefined}
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle as string}
        >
          {slice.items.map((item, i) => (
            <ButtonLink
              key={`hero-${slice.variation}-cta-${i}`}
              ddVariant={item.cta_variant}
              ddSize="md"
              LinkComponent={withAdapterLink({
                field: item.cta_link,
              })}
            >
              {item.cta_label}
            </ButtonLink>
          ))}
        </HeroVariantBasic>
      );

    case "imageRight":
      return (
        <HeroVariantImageRight
          ddBackgroundSrc={slice.primary.background_image.url ?? undefined}
          ddBackgroundAlt={slice.primary.background_image.alt ?? undefined}
          ddOverline={slice.primary.overline ?? undefined}
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle as string}
          ddImageAlt={slice.primary.image.alt as string}
          ddImageSrc={slice.primary.image.url as string}
        >
          {slice.items.map((item, i) => (
            <ButtonLink
              key={`hero-${slice.variation}-cta-${i}`}
              ddVariant={item.cta_variant}
              ddSize="md"
              LinkComponent={withAdapterLink({
                field: item.cta_link,
              })}
            >
              {item.cta_label}
            </ButtonLink>
          ))}
        </HeroVariantImageRight>
      );

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default Hero;
