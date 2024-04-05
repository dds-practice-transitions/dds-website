import { forwardRef } from "react";
import { clsx } from "clsx";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { Section } from "./Section";

import { SectionPropsBase } from "./page-section.types";
import styles from "./section-team.module.css";

export type SectionVariantTeamPropsNative = JSX.IntrinsicElements["section"];
export type SectionVariantTeamPropsCustom = SectionPropsBase;

export type SectionVariantTeamProps = SectionVariantTeamPropsNative &
  SectionVariantTeamPropsCustom;

export const SectionVariantTeam = forwardRef<
  HTMLElement,
  SectionVariantTeamProps
>(function SectionVariantTeam(
  { className, children, ddTitle, ddSubtitle, ...restProps },
  ref,
) {
  return (
    <Section {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div className={clsx(styles.content, styles["team"])}>
        <SectionTitle>{ddTitle}</SectionTitle>
        <SectionSubtitle ddColor="secondary">{ddSubtitle}</SectionSubtitle>
        <ul className={styles.members}>{children}</ul>
      </div>
    </Section>
  );
});
