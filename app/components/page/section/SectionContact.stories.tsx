import type { Meta } from "@storybook/react";
import { SectionContactContentRight } from "./SectionContactContentRight";
import { SectionContactContentLeft } from "./SectionContactContentLeft";
import { SectionContactLocation } from "./SectionContactLocation";

const meta: Meta = {
  title: "Page / Section / Contact",
} satisfies Meta<typeof meta>;

export default meta;

const sharedProps = {
  ddTitle: "Reach us directly",
  ddSubtitle:
    "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
};

export const ContactRight = () => {
  return <SectionContactContentRight {...sharedProps} />;
};

export const ContactLeft = () => {
  return <SectionContactContentLeft {...sharedProps} />;
};

export const ContactLocation = () => {
  return (
    <SectionContactLocation
      ddEmail="info@ddsbrokerage.com"
      ddPhone="(484) 899-0432"
      ddLocationLine1="500 Delaware Ave #1525"
      ddLocationLine2="Wilmington, DE 19801"
      ddLocationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.634625361993!2d-75.5521224!3d39.747857499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd1545ec1da1%3A0x9038c0143657de0a!2s500%20Delaware%20Ave%20%231525%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1712235854603!5m2!1sen!2sus"
      {...sharedProps}
    />
  );
};
