import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  PageSectionTypeCTADefault,
  PageSectionTypeCTASplitImage,
} from "../../components/page/PageSection";
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
        <PageSectionTypeCTADefault
          ddVariant="default"
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? undefined}
          ddBackground={slice.primary.background}
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
        </PageSectionTypeCTADefault>
      );
      break;

    case "splitImage":
      return (
        <PageSectionTypeCTASplitImage
          ddVariant="split-image"
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? ""}
          ddBackground={slice.primary.background}
          ddImgSrc={slice.primary.image.url as string}
          ddImgAlt={slice.primary.image.alt as string}
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
        </PageSectionTypeCTASplitImage>
      );

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default CallToAction;
