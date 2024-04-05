import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section-team.module.css";
import { AvatarCard, AvatarCardPropsCustom } from "../../display/Avatar";

export type SectionVariantTeamMemberPropsNative = JSX.IntrinsicElements["li"];
export type SectionVariantTeamMemberPropsCustom = AvatarCardPropsCustom;
export type SectionVariantTeamMemberProps =
  SectionVariantTeamMemberPropsNative & SectionVariantTeamMemberPropsCustom;

export const SectionVariantTeamMember = forwardRef<
  HTMLLIElement,
  SectionVariantTeamMemberProps
>(function SectionVariantTeamMember(
  {
    className,
    ddDescription,
    ddFullName,
    ddImgAlt,
    ddImgSrc,
    ddTitle,
    children,
    ...restProps
  },
  ref,
) {
  return (
    <li {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <AvatarCard
        ddTitle={ddTitle}
        ddDescription={ddDescription}
        ddFullName={ddFullName}
        ddImgAlt={ddImgAlt}
        ddImgSrc={ddImgSrc}
      >
        <div className={styles.action}>{children}</div>
      </AvatarCard>
    </li>
  );
});
