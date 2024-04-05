import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";
import {
  PageSectionTypeContentCardLeft,
  PageSectionTypeContentCardRight,
  PageSectionTypeContentColumns,
} from "../../components";
import { exhaustiveMatchGuard } from "../../utils";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const SectionContent = ({ slice }: ContentProps) => {
  switch (slice.variation) {
    case "default":
      return (
        <PageSectionTypeContentCardRight
          ddVariant="card-right"
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? undefined}
          ddImageSrc={slice.primary.image.url as string}
          ddImageAlt={slice.primary.image.alt as string}
          ddBackgroundSrc={slice.primary.background_image?.url ?? undefined}
          ddBackgroundAlt={slice.primary.background_image?.alt ?? undefined}
        />
      );

    case "cardLeft":
      return (
        <PageSectionTypeContentCardLeft
          ddVariant="card-left"
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? undefined}
          ddImageSrc={slice.primary.image.url as string}
          ddImageAlt={slice.primary.image.alt as string}
          ddBackgroundSrc={slice.primary.background_image?.url ?? undefined}
          ddBackgroundAlt={slice.primary.background_image?.alt ?? undefined}
        />
      );

    case "columns":
    case "columns3":
      return (
        <PageSectionTypeContentColumns
          ddVariant="columns"
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? undefined}
          ddBackgroundSrc={slice.primary.background_image?.url ?? undefined}
          ddBackgroundAlt={slice.primary.background_image?.alt ?? undefined}
          ddColumns={slice.items.map((item) => ({
            ddTitle: item.column_title as string,
            ddSubtitle: item.column_description as string,
            ddImageSrc: item.column_image.url as string,
            ddImageAlt: item.column_image.alt as string,
          }))}
        />
      );

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default SectionContent;
