import { ReactNode, forwardRef } from "react";

import { exhaustiveMatchGuard } from "../../../utils";
import { PageSectionPropsCustom } from "./PageSection";
import { SectionVariantCardRight } from "./SectionVariantCardRight";
import { SectionVariantCardLeft } from "./SectionVariantCardLeft";
import { SectionVariantCardColumns } from "./SectionVariantCardColumns";

export type SectionVariantCardPropsNative = JSX.IntrinsicElements["section"];
export type SectionVariantCardPropsShared = PageSectionPropsCustom;
export type SectionVariantCardPropsVariantCardRight =
  SectionVariantCardPropsShared & {
    ddVariant: "card-right";
    ddTitle: string;
    ddSubtitle?: string;
    ddImageSrc: string;
    ddImageAlt: string;
  };
export type SectionVariantCardPropsVariantCardLeft =
  SectionVariantCardPropsShared & {
    ddVariant: "card-left";
    ddTitle: string;
    ddSubtitle?: string;
    ddImageSrc: string;
    ddImageAlt: string;
  };
export type ContentColumn = {
  ddTitle: string;
  ddSubtitle: string;
  ddImageSrc: string;
  ddImageAlt: string;
};
export type SectionVariantCardPropsVariantColumns =
  SectionVariantCardPropsShared & {
    ddVariant: "columns";
    ddTitle: string;
    ddSubtitle?: string;
  };

export type SectionVariantCardPropsVariantThumbnailGrid =
  SectionVariantCardPropsShared & {
    ddVariant: "thumbnail-grid";
    ddTitle: string;
    ddSubtitle?: string;
    ddCards: ContentColumn[];
  };
type ContentCardPane = ContentColumn & { ddContent: ReactNode };
export type SectionVariantCardPropsVariantCardPanes =
  SectionVariantCardPropsShared & {
    ddVariant: "card-panes";
    ddTitle: string;
    ddSubtitle?: string;
    ddCards: [ContentCardPane, ContentCardPane];
  };

export type SectionVariantCardPropsVariant =
  | SectionVariantCardPropsVariantCardRight
  | SectionVariantCardPropsVariantCardLeft
  | SectionVariantCardPropsVariantColumns
  | SectionVariantCardPropsVariantThumbnailGrid
  | SectionVariantCardPropsVariantCardPanes;

export type SectionVariantCardProps = SectionVariantCardPropsNative &
  SectionVariantCardPropsVariant;

export const SectionVariantCard = forwardRef<
  HTMLElement,
  SectionVariantCardProps
>(function SectionVariantCard(props, ref) {
  switch (props.ddVariant) {
    case "card-right":
      return <SectionVariantCardRight {...props} ref={ref} />;

    case "card-left":
      return <SectionVariantCardLeft {...props} ref={ref} />;

    case "columns":
      return <SectionVariantCardColumns {...props} ref={ref} />;
    case "card-panes":
    case "thumbnail-grid":
      return;

    default:
      return exhaustiveMatchGuard(props);
  }
});
