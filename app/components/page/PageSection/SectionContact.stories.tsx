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
      ddEmail="drewdecarme@gmail.com"
      ddPhone="(610) 742-0188"
      ddLocationLine1="30 Degas Circle"
      ddLocationLine2="Wilmington DE, 19808"
      {...sharedProps}
    />
  );
};
