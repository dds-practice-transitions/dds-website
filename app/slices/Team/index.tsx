import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ButtonLink, SectionVariantTeam } from "../../components";
import { SectionVariantTeamMember } from "../../components/page/section/SectionVariantTeamMember";
import { withAdapterLink } from "../../adapters";
import { exhaustiveMatchGuard } from "../../utils";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps) => {
  switch (slice.variation) {
    case "default":
      return (
        <SectionVariantTeam
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.description ?? undefined}
        >
          {slice.items.map((member, i) => (
            <SectionVariantTeamMember
              key={`member-${i}`}
              ddTitle={member.job_title as string}
              ddDescription={
                member.job_description
                  ?.toString()
                  .substring(0, 200)
                  .concat("...") ?? ""
              }
              ddFullName={member.full_name as string}
              ddImgAlt={member.image.alt as string}
              ddImgSrc={member.image.url as string}
            >
              <ButtonLink
                ddVariant={member.view_member_variant ?? undefined}
                ddSize="md"
                LinkComponent={withAdapterLink({
                  field: member.view_member_link,
                })}
              >
                {member.view_member_label}
              </ButtonLink>
            </SectionVariantTeamMember>
          ))}
        </SectionVariantTeam>
      );

    default:
      return exhaustiveMatchGuard(slice.variation);
  }
};

export default Team;
