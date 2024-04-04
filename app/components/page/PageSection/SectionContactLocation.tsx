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
  ddLocationUrl: string;
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
    ddLocationUrl,
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
              src={ddLocationUrl}
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
