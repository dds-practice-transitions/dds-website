import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SeoSocial`.
 */
export type SeoSocialProps = SliceComponentProps<Content.SeoSocialSlice>;

/**
 * Component for "SeoSocial" Slices.
 */
const SeoSocial = ({ slice }: SeoSocialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for seo_social (variation: {slice.variation}) Slices
    </section>
  );
};

export default SeoSocial;
