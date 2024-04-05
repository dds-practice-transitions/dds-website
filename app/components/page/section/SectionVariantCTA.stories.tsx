import type { Meta } from "@storybook/react";
import { SectionVariantCTABasic } from "./SectionVariantCTABasic";
import { SectionVariantCTAWithImage } from "./SectionVariantCTAWithImage";

const meta: Meta = {
  title: "Page / Section / CTA",
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  return (
    <SectionVariantCTABasic
      ddTitle="Excited to work together on your next project?"
      ddSubtitle="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
    >
      child components
    </SectionVariantCTABasic>
  );
};

export const BasicWithoutSubtitle = () => {
  return (
    <SectionVariantCTABasic ddTitle="Excited to work together on your next project?">
      child components
    </SectionVariantCTABasic>
  );
};

export const BasicBgPrimary = () => {
  return (
    <SectionVariantCTABasic
      ddTitle="Excited to work together on your next project?"
      ddBackgroundColor="primary"
    >
      child components
    </SectionVariantCTABasic>
  );
};

export const BasicBgSecondary = () => {
  return (
    <SectionVariantCTABasic
      ddTitle="Excited to work together on your next project?"
      ddBackgroundColor="secondary"
    >
      child components
    </SectionVariantCTABasic>
  );
};

export const WithImage = () => {
  return (
    <SectionVariantCTAWithImage
      ddTitle="Excited to work together on your next project?"
      ddSubtitle="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
      ddImageSrc="/images/test-3.jpg"
      ddImageAlt="test-3"
    >
      child components
    </SectionVariantCTAWithImage>
  );
};

export const WithImageWithoutSubtitle = () => {
  return (
    <SectionVariantCTAWithImage
      ddTitle="Excited to work together on your next project?"
      ddImageSrc="/images/test-3.jpg"
      ddImageAlt="test-3"
    >
      child components
    </SectionVariantCTAWithImage>
  );
};

export const WithImageBgPrimary = () => {
  return (
    <SectionVariantCTAWithImage
      ddTitle="Excited to work together on your next project?"
      ddSubtitle="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
      ddImageSrc="/images/test-3.jpg"
      ddImageAlt="test-3"
      ddBackgroundColor="primary"
    >
      child components
    </SectionVariantCTAWithImage>
  );
};

export const WithImageBgSecondary = () => {
  return (
    <SectionVariantCTAWithImage
      ddTitle="Excited to work together on your next project?"
      ddSubtitle="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
      ddImageSrc="/images/test-3.jpg"
      ddImageAlt="test-3"
      ddBackgroundColor="secondary"
    >
      child components
    </SectionVariantCTAWithImage>
  );
};
