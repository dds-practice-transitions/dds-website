import { RefCallback, forwardRef, useCallback, useState } from "react";
import { clsx } from "clsx";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";
import styles from "./page-section.contact.module.css";
import { PageSectionPropsShared } from "./page-section.types";
import { Icon } from "../../display/Icon";
import { AcceptEmail, LocalPin, PhoneCall } from "@icon-park/react";

export type SectionContactLocationPropsNative = Omit<
  JSX.IntrinsicElements["section"],
  "children"
>;
export type SectionContactLocationPropsCustom = PageSectionPropsShared & {
  ddEmail: string;
  ddPhone: string;
  ddLocationLine1: string;
  ddLocationLine2?: string;
};
export type SectionContactLocationProps = SectionContactLocationPropsNative &
  SectionContactLocationPropsCustom;

export const SectionContactLocation = forwardRef<
  HTMLElement,
  SectionContactLocationProps
>(function SectionContactLocation(
  {
    className,
    ddTitle,
    ddSubtitle,
    ddEmail,
    ddPhone,
    ddLocationLine1,
    ddLocationLine2,
    ...restProps
  },
  ref,
) {
  const [mapDim, setMapDim] = useState<
    { height: number; width: number } | undefined
  >(undefined);

  const paneRef = useCallback<RefCallback<HTMLDivElement>>((node) => {
    if (!node) return;
    setMapDim({
      height: node.clientHeight,
      width: node.clientWidth,
    });
  }, []);

  return (
    <PageSection
      {...restProps}
      ddType="contact"
      className={clsx(className, styles.section)}
      ref={ref}
    >
      <div
        className={clsx(
          styles.contact,
          styles["content-right"],
          styles["location"],
        )}
      >
        <div>
          <PageSectionTitle>{ddTitle}</PageSectionTitle>
          {ddSubtitle && (
            <PageSectionSubtitle ddColor="secondary">
              {ddSubtitle}
            </PageSectionSubtitle>
          )}
          <div>
            <ul className={styles["contact-cards"]}>
              <li>
                <dl>
                  <dt>
                    <Icon DDIcon={AcceptEmail} ddSize={24} />
                  </dt>
                  <dd>
                    <div>Email:</div>
                    <div>
                      <strong>
                        <a href={`mailto:${ddEmail}`}>{ddEmail}</a>
                      </strong>
                    </div>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <Icon DDIcon={PhoneCall} ddSize={24} />
                  </dt>
                  <dd>
                    <div>Phone:</div>
                    <div>
                      <strong>
                        <a href={`tel:${ddPhone}`}>{ddPhone}</a>
                      </strong>
                    </div>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <Icon DDIcon={LocalPin} ddSize={24} />
                  </dt>
                  <dd>
                    <div>Address:</div>
                    <div>
                      <strong>
                        <div>{ddLocationLine1}</div>
                        <div>{ddLocationLine2}</div>
                      </strong>
                    </div>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div ref={paneRef}>
          {mapDim && (
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7062926071435!2d-75.708281!3d39.7462479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c70001f9b975ab%3A0x9a962fa323a3b845!2s30%20Degas%20Cir%2C%20Wilmington%2C%20DE%2019808!5e0!3m2!1sen!2sus!4v1712233310586!5m2!1sen!2sus"
              width={mapDim.width}
              height={mapDim.height}
              loading="lazy"
              style={{
                border: "none",
              }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>
    </PageSection>
  );
});
