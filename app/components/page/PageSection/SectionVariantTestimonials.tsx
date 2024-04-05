import { forwardRef } from "react";
import { clsx } from "clsx";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";

import { useCarousel } from "../../../hooks";
import { Button } from "../../inputs/Button";
import { Icon } from "../../display/Icon";
import { ArrowLeft, ArrowRight, Quote } from "@icon-park/react";
import { Avatar } from "../../display/Avatar";
import { Responsive } from "../../../utils/Responsive";
import { AvatarDetails } from "../../display/Avatar/AvatarDetails";
import { AvatarPropsCustom } from "../../display/Avatar/Avatar";
import { SectionPropsBase } from "./page-section.types";
import { Section } from "./Section";
import styles from "./section-testimonials.module.css";

export type Testimonial = {
  ddChannelImg: string;
  ddChannelAlt: string;
  ddUser: Omit<AvatarPropsCustom, "ddDescription" | "ddSize">;
  ddQuote: string;
};

export type SectionVariantTestimonialsPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionVariantTestimonialsPropsCustom = SectionPropsBase & {
  ddItems: Testimonial[];
};

export type SectionVariantTestimonialsProps =
  SectionVariantTestimonialsPropsNative & SectionVariantTestimonialsPropsCustom;

export const SectionVariantTestimonials = forwardRef<
  HTMLElement,
  SectionVariantTestimonialsProps
>(function SectionVariantTestimonials(
  { className, ddTitle, ddSubtitle, ddItems = [], ...restProps },
  ref,
) {
  const { next, prev, currentItem } = useCarousel(ddItems);

  return (
    <Section {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div className={clsx(styles.content, styles["testimonials"])}>
        <SectionTitle>{ddTitle}</SectionTitle>
        <SectionSubtitle>{ddSubtitle}</SectionSubtitle>
        <div className="content">
          <Responsive to="tablet">
            <nav className="dirs">
              <Button onClick={prev}>
                <Icon DDIcon={ArrowLeft} />
              </Button>
              <Button onClick={next}>
                <Icon DDIcon={ArrowRight} />
              </Button>
            </nav>
          </Responsive>
          {/* <nav>
          <ul className="quicks">
            <li>test</li>
          </ul>
        </nav> */}
          <Responsive from="tablet">
            <Button onClick={prev}>
              <Icon DDIcon={ArrowLeft} />
            </Button>
          </Responsive>
          <div className="testimonial">
            <Responsive from="tablet">
              <img
                className="desktop-avatar"
                src={currentItem.ddUser.ddImgSrc}
                alt={currentItem.ddUser.ddJobTitle ?? "testimonial"}
              />
            </Responsive>
            <div>
              <img
                src={currentItem.ddChannelImg}
                alt={currentItem.ddChannelAlt ?? "channel"}
                className="channel"
              />
              <Responsive to="tablet">
                <Avatar {...currentItem.ddUser} ddSize="md" />
              </Responsive>
              <blockquote>
                <Responsive to="tablet">
                  <Icon DDIcon={Quote} ddSize={48} className="i" />
                </Responsive>
                {currentItem.ddQuote}
              </blockquote>
              <Responsive from="tablet">
                <AvatarDetails
                  {...currentItem.ddUser}
                  className="avatar-details"
                />
              </Responsive>
            </div>
          </div>
          <Responsive from="tablet">
            <Button onClick={next}>
              <Icon DDIcon={ArrowRight} />
            </Button>
          </Responsive>
        </div>
      </div>
    </Section>
  );
});
