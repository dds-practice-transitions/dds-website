import { forwardRef } from "react";

import { PageSectionTypeTestimonialDefault } from "./PageSectionTypeTestimonialDefault";
import { exhaustiveMatchGuard } from "../../../utils";
import { AvatarPropsCustom } from "../../display/Avatar/Avatar";

export type Testimonial = {
  ddChannelImg: string;
  ddChannelAlt: string;
  ddUser: Omit<AvatarPropsCustom, "ddDescription" | "ddSize">;
  ddQuote: string;
};
export type PageSectionTypeTestimonialPropsShared = {
  ddTitle: string;
  ddSubtitle?: string;
  ddTestimonials: Testimonial[];
};
export type PageSectionTypeTestimonialPropsVariantDefault =
  PageSectionTypeTestimonialPropsShared & {
    ddVariant: "default";
  };

export type PageSectionTypeTestimonialPropsVariant =
  PageSectionTypeTestimonialPropsVariantDefault;

export type PageSectionTypeTestimonialPropsNative = Omit<
  JSX.IntrinsicElements["section"],
  "children"
>;
export type PageSectionTypeTestimonialProps =
  PageSectionTypeTestimonialPropsNative &
    PageSectionTypeTestimonialPropsVariant;

export const PageSectionTypeTestimonial = forwardRef<
  HTMLElement,
  PageSectionTypeTestimonialProps
>(function PageSectionTypeTestimonial(props, ref) {
  switch (props.ddVariant) {
    case "default":
      return <PageSectionTypeTestimonialDefault {...props} ref={ref} />;

    default:
      return exhaustiveMatchGuard(props.ddVariant);
  }
});
