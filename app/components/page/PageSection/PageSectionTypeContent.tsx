import { ReactNode, forwardRef } from "react";

import { exhaustiveMatchGuard } from "../../../utils";
import { PageSectionPropsCustom } from "./PageSection";
import { PageSectionTypeContentCardRight } from "./PageSectionTypeContentCardRight";
import { PageSectionTypeContentCardLeft } from "./PageSectionTypeContentCardLeft";
import { PageSectionTypeContentColumns } from "./PageSectionTypeContentColumns";

export type PageSectionTypeContentPropsNative =
  JSX.IntrinsicElements["section"];
export type PageSectionTypeContentPropsShared = PageSectionPropsCustom;
export type PageSectionTypeContentPropsVariantCardRight =
  PageSectionTypeContentPropsShared & {
    ddVariant: "card-right";
    ddTitle: string;
    ddSubtitle?: string;
    ddImageSrc: string;
    ddImageAlt: string;
  };
export type PageSectionTypeContentPropsVariantCardLeft =
  PageSectionTypeContentPropsShared & {
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
export type PageSectionTypeContentPropsVariantColumns =
  PageSectionTypeContentPropsShared & {
    ddVariant: "columns";
    ddTitle: string;
    ddSubtitle?: string;
  };

export type PageSectionTypeContentPropsVariantThumbnailGrid =
  PageSectionTypeContentPropsShared & {
    ddVariant: "thumbnail-grid";
    ddTitle: string;
    ddSubtitle?: string;
    ddCards: ContentColumn[];
  };
type ContentCardPane = ContentColumn & { ddContent: ReactNode };
export type PageSectionTypeContentPropsVariantCardPanes =
  PageSectionTypeContentPropsShared & {
    ddVariant: "card-panes";
    ddTitle: string;
    ddSubtitle?: string;
    ddCards: [ContentCardPane, ContentCardPane];
  };

export type PageSectionTypeContentPropsVariant =
  | PageSectionTypeContentPropsVariantCardRight
  | PageSectionTypeContentPropsVariantCardLeft
  | PageSectionTypeContentPropsVariantColumns
  | PageSectionTypeContentPropsVariantThumbnailGrid
  | PageSectionTypeContentPropsVariantCardPanes;

export type PageSectionTypeContentProps = PageSectionTypeContentPropsNative &
  PageSectionTypeContentPropsVariant;

export const PageSectionTypeContent = forwardRef<
  HTMLElement,
  PageSectionTypeContentProps
>(function PageSectionTypeContent(props, ref) {
  switch (props.ddVariant) {
    case "card-right":
      return <PageSectionTypeContentCardRight {...props} ref={ref} />;

    case "card-left":
      return <PageSectionTypeContentCardLeft {...props} ref={ref} />;

    case "columns":
      return <PageSectionTypeContentColumns {...props} ref={ref} />;
    case "card-panes":
    case "thumbnail-grid":
      return;

    default:
      return exhaustiveMatchGuard(props);
  }
});
