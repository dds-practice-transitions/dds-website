import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  FooterColumn as FooterCol,
  FooterColumnLink as FooterColLink,
} from "../../components";
import { withAdapterLink } from "../../adapters";

/**
 * Props for `FooterColumn`.
 */
export type FooterColumnProps = SliceComponentProps<Content.FooterColumnSlice>;

/**
 * Component for "FooterColumn" Slices.
 */
const FooterColumn = ({ slice }: FooterColumnProps): JSX.Element => {
  return (
    <FooterCol ddTitle={slice.primary.title as string}>
      {slice.items.map((item, i) => (
        <FooterColLink
          key={`footer-col-link-${i}`}
          LinkComponent={withAdapterLink({ field: item.link })}
        >
          {item.label}
        </FooterColLink>
      ))}
    </FooterCol>
  );
};

export default FooterColumn;
