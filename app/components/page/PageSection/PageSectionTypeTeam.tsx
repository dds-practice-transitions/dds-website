import { forwardRef } from "react";

import { PageSectionTypeTeamDefault } from "./PageSectionTypeTeamDefault";
import { exhaustiveMatchGuard } from "../../../utils";
import { AvatarCardPropsCustom } from "~/components/display/Avatar/AvatarCard";

export type PageSectionTypeTeamPropsShared = {
  ddTitle: string;
  ddSubtitle?: string;
  ddMembers: AvatarCardPropsCustom[];
};
export type PageSectionTypeTeamPropsVariantDefault =
  PageSectionTypeTeamPropsShared & {
    ddVariant: "default";
  };

export type PageSectionTypeTeamPropsVariant =
  PageSectionTypeTeamPropsVariantDefault;

export type PageSectionTypeTeamPropsNative = Omit<
  JSX.IntrinsicElements["section"],
  "children"
>;
export type PageSectionTypeTeamProps = PageSectionTypeTeamPropsNative &
  PageSectionTypeTeamPropsVariant;

export const PageSectionTypeTeam = forwardRef<
  HTMLElement,
  PageSectionTypeTeamProps
>(function PageSectionTypeTeam(props, ref) {
  switch (props.ddVariant) {
    case "default":
      return <PageSectionTypeTeamDefault {...props} ref={ref} />;

    default:
      return exhaustiveMatchGuard(props.ddVariant);
  }
});
