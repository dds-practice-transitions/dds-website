import { forwardRef } from "react";
import { clsx } from "clsx";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";

import { PageSectionTypeTestimonialPropsVariantDefault } from "./PageSectionTypeTestimonial";
import { useCarousel } from "../../../hooks";
import { Button } from "../../inputs/Button";
import { Icon } from "../../display/Icon";
import { ArrowLeft, ArrowRight, Quote } from "@icon-park/react";
import { Avatar } from "../../display/Avatar";

export type PageSectionTypeTestimonialDefaultProps = Omit<
  JSX.IntrinsicElements["section"],
  "children"
> &
  PageSectionTypeTestimonialPropsVariantDefault;

export const PageSectionTypeTestimonialDefault = forwardRef<
  HTMLElement,
  PageSectionTypeTestimonialDefaultProps
>(function PageSectionTypeTestimonialDefault(
  {
    className,
    ddTitle,
    ddSubtitle,
    ddTestimonials = [],
    ddVariant,
    ...restProps
  },
  ref,
) {
  const { next, prev, currentItem } = useCarousel(ddTestimonials);

  return (
    <PageSection
      {...restProps}
      ddType="testimonial"
      className={clsx(ddVariant, className)}
      ref={ref}
    >
      <div>
        <PageSectionTitle>{ddTitle}</PageSectionTitle>
        {ddSubtitle && (
          <PageSectionSubtitle ddColor="secondary">
            {ddSubtitle}
          </PageSectionSubtitle>
        )}
        <nav className="dirs">
          <Button onClick={prev}>
            <Icon DDIcon={ArrowLeft} />
          </Button>
          <Button onClick={next}>
            <Icon DDIcon={ArrowRight} />
          </Button>
        </nav>
        {/* <nav>
          <ul className="quicks">
            <li>test</li>
          </ul>
        </nav> */}
        <div className="testimonial">
          <img
            src={currentItem.ddChannelImg}
            alt={currentItem.ddChannelAlt ?? "channel"}
            className="channel"
          />
          <Avatar {...currentItem.ddUser} ddSize="md" />
          <blockquote>
            <Icon DDIcon={Quote} ddSize={48} className="i" />
            {currentItem.ddQuote}
          </blockquote>
        </div>
      </div>
    </PageSection>
  );
});
