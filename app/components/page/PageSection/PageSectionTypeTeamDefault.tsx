import { forwardRef } from "react";
import { clsx } from "clsx";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PageSection } from "./PageSection";

import { PageSectionTypeTeamPropsVariantDefault } from "./PageSectionTypeTeam";
import { AvatarCard } from "../../display/Avatar";

export type PageSectionTypeTeamDefaultProps = Omit<
  JSX.IntrinsicElements["section"],
  "children"
> &
  PageSectionTypeTeamPropsVariantDefault;

export const PageSectionTypeTeamDefault = forwardRef<
  HTMLElement,
  PageSectionTypeTeamDefaultProps
>(function PageSectionTypeTeamDefault(
  { className, ddTitle, ddSubtitle, ddMembers = [], ddVariant, ...restProps },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="team"
      className={clsx(ddVariant, className)}
      ref={ref}
    >
      <div>
        <SectionTitle>{ddTitle}</SectionTitle>
        {ddSubtitle && (
          <SectionSubtitle ddColor="secondary">{ddSubtitle}</SectionSubtitle>
        )}
        <ul className="members">
          {ddMembers.map((member, i) => (
            <li key={`member-${i}`}>
              <AvatarCard {...member} />
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
});
