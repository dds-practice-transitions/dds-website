import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PageSectionTypeFAQDefault } from "../../components/page/PageSection";

/**
 * Props for `Accordion`.
 */
export type AccordionProps = SliceComponentProps<Content.AccordionSlice>;

/**
 * Component for "Accordion" Slices.
 */
const Accordion = ({ slice }: AccordionProps): JSX.Element => {
  return (
    <PageSectionTypeFAQDefault
      ddVariant="default"
      ddTitle={slice.primary.title as string}
      ddSubtitle={slice.primary.description as string}
      ddItems={slice.items.map((item) => ({
        ddTitle: item.question as string,
        ddContent: item.answer as string,
      }))}
    />
  );
};

export default Accordion;
