import { ReactNode, forwardRef } from "react";

import { PageSectionTypeCTADefault } from "./PageSectionTypeCTADefault";
import { exhaustiveMatchGuard } from "../../../utils";
import { PageSectionTypeCTASplitImage } from "./PageSectionTypeCTASplitImage";

export type PageSectionTypeCTAPropsShared = {
  ddTitle: string;
  ddSubtitle?: string;
  ddBackground?: "primary" | "secondary";
  children: ReactNode;
};
export type PageSectionTypeCTAPropsVariantDefault =
  PageSectionTypeCTAPropsShared & {
    ddVariant: "default";
  };
export type PageSectionTypeCTAPropsVariantSplitImage =
  PageSectionTypeCTAPropsShared & {
    ddVariant: "split-image";
    ddImgSrc: string;
    ddImgAlt: string;
  };
export type PageSectionTypeCTAPropsVariant =
  | PageSectionTypeCTAPropsVariantDefault
  | PageSectionTypeCTAPropsVariantSplitImage;

export type PageSectionTypeCTAPropsNative = Omit<
  JSX.IntrinsicElements["section"],
  "children"
>;
export type PageSectionTypeCTAProps = PageSectionTypeCTAPropsNative &
  PageSectionTypeCTAPropsVariant;

export const PageSectionTypeCTA = forwardRef<
  HTMLElement,
  PageSectionTypeCTAProps
>(function PageSectionTypeCTA(props, ref) {
  switch (props.ddVariant) {
    case "default":
      return <PageSectionTypeCTADefault {...props} ref={ref} />;

    case "split-image":
      return <PageSectionTypeCTASplitImage {...props} ref={ref} />;

    default:
      return exhaustiveMatchGuard(props);
  }
});
