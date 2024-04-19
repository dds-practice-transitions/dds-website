import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { SectionVariantText } from "../../components";

/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <SectionVariantText>
      <PrismicRichText field={slice.primary.rich_text} />
    </SectionVariantText>
  );
};

export default RichText;
