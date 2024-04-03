import type { Meta } from "@storybook/react";
import { Footer } from "./Footer";
import { FooterColumn } from "./FooterColumn";
import { FooterColumnLink } from "./FooterColumnLink";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

const meta: Meta = {
  title: "Page / Footer",
  component: Footer,
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  return (
    <Footer>
      <FooterTop
        ddImgSrc="/images/logos/logo-horizontal-white.png"
        ddImgAlt="logo"
        ddSummary="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma"
      >
        <FooterColumn ddTitle="About us">
          <FooterColumnLink>Mission</FooterColumnLink>
          <FooterColumnLink>consist</FooterColumnLink>
          <FooterColumnLink>twenty</FooterColumnLink>
          <FooterColumnLink>paragraph</FooterColumnLink>
          <FooterColumnLink>simple</FooterColumnLink>
        </FooterColumn>
        <FooterColumn ddTitle="Services">
          <FooterColumnLink>Gently</FooterColumnLink>
          <FooterColumnLink>Snow</FooterColumnLink>
          <FooterColumnLink>Won</FooterColumnLink>
          <FooterColumnLink>Fall</FooterColumnLink>
        </FooterColumn>
        <FooterColumn ddTitle="Contact">
          <FooterColumnLink>Lorm</FooterColumnLink>
        </FooterColumn>
        <FooterColumn ddTitle="Resources">
          <FooterColumnLink>FAQs</FooterColumnLink>
        </FooterColumn>
      </FooterTop>
      <FooterBottom ddCopyrightYear={2024}>
        <FooterColumnLink>Terms and Conditions</FooterColumnLink>
        <FooterColumnLink>Privacy Policy</FooterColumnLink>
      </FooterBottom>
    </Footer>
  );
};
