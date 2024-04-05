import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";
import {
  ButtonLink,
  SectionVariantCardLeft,
  SectionVariantCardRight,
  SectionVariantCardColumns,
  SectionVariantCardColumn,
} from "../../components";
import { exhaustiveMatchGuard } from "../../utils";
import { withAdapterLink } from "../../adapters";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Cards = ({ slice }: ContentProps) => {
  switch (slice.variation) {
    case "default":
      return (
        <SectionVariantCardRight
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
        <SectionVariantCardLeft
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
        <SectionVariantCardColumns
          ddTitle={slice.primary.title ?? ""}
          ddSubtitle={slice.primary.description ?? undefined}
          ddBackgroundSrc={slice.primary.background_image?.url ?? undefined}
          ddBackgroundAlt={slice.primary.background_image?.alt ?? undefined}
        >
          {slice.items.map((item, i) => (
            <SectionVariantCardColumn
              key={i}
              ddTitle={item.column_title as string}
              ddSubtitle={item.column_description as string}
              ddImageSrc={item.column_image.url as string}
              ddImageAlt={item.column_image.alt as string}
            >
              {item.cta_label && item.cta_link && item.cta_variant && (
                <ButtonLink
                  key={`col-${slice.variation}-cta-${i}`}
                  ddVariant={item.cta_variant}
                  ddSize="md"
                  LinkComponent={withAdapterLink({
                    field: item.cta_link,
                  })}
                >
                  {item.cta_label}
                </ButtonLink>
              )}
            </SectionVariantCardColumn>
          ))}
        </SectionVariantCardColumns>
      );

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default Cards;
