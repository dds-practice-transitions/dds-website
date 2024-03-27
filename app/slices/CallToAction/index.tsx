import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  PageSectionTypeCTADefault,
  PageSectionTypeCTASplitImage,
} from "../../components/page/PageSection";
import { exhaustiveMatchGuard } from "../../utils";

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
      <PageSectionTypeCTADefault
        ddVariant="default"
        ddTitle={slice.primary.title ?? ""}
        ddSubtitle={slice.primary.description ?? undefined}
        ddBackground={slice.primary.background}
        ddActionHref="test"
        ddActionLabel="test"
      />;
      break;

    case "splitImage":
      return (
        <PageSectionTypeCTASplitImage
          ddVariant="split-image"
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? ""}
          ddBackground={slice.primary.background}
          ddActionHref="test"
          ddActionLabel="test"
          ddImgSrc={slice.primary.image.url as string}
          ddImgAlt={slice.primary.image.alt as string}
        />
      );

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default CallToAction;
