import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  SectionVariantCTABasic,
	SectionVariantCTAWithImage,
  ,
} from "../../components";
import { exhaustiveMatchGuard } from "../../utils";
import { withAdapterLink } from "../../adapters";
import { ButtonLink } from "../../components";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps) => {
  switch (slice.variation) {
    case "default":
      return (
        <SectionVariantCTABasic
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? undefined}
          ddBackgroundColor={slice.primary.background_color ?? undefined}
					ddBackgroundSrc={slice.primary.background_image.url ?? undefined}
					ddBackgroundAlt={slice.primary.background_image.alt ?? undefined}
        >
          {slice.items.map((item, i) => (
            <ButtonLink
              key={`hero-${slice.variation}-cta-${i}`}
              ddVariant={item.cta_variant ?? undefined}
              ddSize="md"
              LinkComponent={withAdapterLink({
                field: item.cta_link,
              })}
            >
              {item.cta_label}
            </ButtonLink>
          ))}
        </SectionVariantCTABasic>
      );
      break;

    case "splitImage":
      return (
        <SectionVariantCTAWithImage
					ddTitle={slice.primary.title ?? ""}
					ddSubtitle={slice.primary.description ?? undefined}
					ddImageSrc={slice.primary.image.url as string}
					ddImageAlt={slice.primary.image.alt as string}
					ddBackgroundColor={slice.primary.background_color ?? undefined}
					ddBackgroundSrc={slice.primary.background_image.url ?? undefined}
					ddBackgroundAlt={slice.primary.background_image.alt ?? undefined}
					>
          {slice.items.map((item, i) => (
            <ButtonLink
              key={`hero-${slice.variation}-cta-${i}`}
              ddVariant={item.cta_variant ?? undefined}
              ddSize="md"
              LinkComponent={withAdapterLink({
                field: item.cta_link,
              })}
            >
              {item.cta_label}
            </ButtonLink>
          ))}
        </SectionVariantCTAWithImage>
      );

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default CallToAction;
