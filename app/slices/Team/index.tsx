import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PageSectionTypeTeamDefault } from "../../components";

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
        <PageSectionTypeTeamDefault
          ddTitle={slice.primary.title as string}
          ddSubtitle={slice.primary.description ?? undefined}
          ddVariant={"default"}
          ddMembers={[]}
        />
      );
      break;

    default:
      break;
  }
};

export default Team;
