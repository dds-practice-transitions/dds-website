import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  SectionContactContentLeft,
  SectionContactContentRight,
  SectionContactLocation,
} from "../../components";
import { ReactNode } from "react";
import { WithContactUsForm } from "./WithContactUsForm";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({
  slice,
  children,
}: ContactProps & { children?: ReactNode }) => {
  switch (slice.variation) {
    case "default":
      return (
        <SectionContactContentRight
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle ?? undefined}
          ddBackgroundColor={slice.primary.background_color ?? undefined}
        >
          {children}
        </SectionContactContentRight>
      );

    case "contentLeft":
      return (
        <SectionContactContentLeft
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle ?? undefined}
          ddBackgroundColor={slice.primary.background_color ?? undefined}
        >
          {children}
        </SectionContactContentLeft>
      );

    case "location":
      return (
        <SectionContactLocation
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle ?? undefined}
          ddEmail={slice.primary.email_address as string}
          ddPhone={slice.primary.phone_number as string}
          ddLocationLine1={slice.primary.address_1 as string}
          ddLocationLine2={slice.primary.address_2 ?? undefined}
          ddLocationUrl={slice.primary.location_url as string}
        />
      );

    case "withFormRight":
      return (
        <SectionContactContentRight
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle ?? undefined}
          ddBackgroundColor={slice.primary.background_color ?? undefined}
        >
          <WithContactUsForm />
        </SectionContactContentRight>
      );

    case "withFormLeft":
      return (
        <SectionContactContentLeft
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.subtitle ?? undefined}
          ddBackgroundColor={slice.primary.background_color ?? undefined}
        >
          <WithContactUsForm />
        </SectionContactContentLeft>
      );

    default:
      break;
  }
};

export default Contact;
