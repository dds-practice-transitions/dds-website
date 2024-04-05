import type { Meta } from "@storybook/react";
import { SectionVariantTeam } from "./SectionVariantTeam";
import {
  randJobTitle,
  randNumber,
  randProductDescription,
  randWord,
} from "@ngneat/falso";
import {
  SectionVariantTeamMember,
  SectionVariantTeamMemberProps,
} from "./SectionVariantTeamMember";
import { Button } from "../../inputs";

const meta: Meta = {
  title: "Page / Section / Team",
  // @ts-expect-error forwardRef mismatch
  component: SectionVariantTeam,
} satisfies Meta<typeof meta>;

export default meta;

const ddMembers: SectionVariantTeamMemberProps[] = [...new Array(30)].map(
  () => ({
    ddFullName: "Cameron Fee",
    ddTitle: randJobTitle(),
    ddDescription: randProductDescription(),
    ddImgSrc: `/images/test-${randNumber({ min: 3, max: 4 })}.jpg`,
    ddImgAlt: randWord(),
  }),
);

const props = {
  ddTitle: "Meet our talented team",
  ddSubtitle:
    "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.",
};

export const Default = () => {
  return (
    <SectionVariantTeam {...props}>
      {ddMembers.map((member, i) => (
        <SectionVariantTeamMember {...member} key={`member-${i}`}>
          <Button ddVariant="secondary">Learn more</Button>
          <Button ddVariant="paper">Contact</Button>
        </SectionVariantTeamMember>
      ))}
    </SectionVariantTeam>
  );
};
