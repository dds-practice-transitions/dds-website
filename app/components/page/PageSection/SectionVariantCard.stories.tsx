import type { Meta } from "@storybook/react";
import { randJobDescriptor, randWord } from "@ngneat/falso";
import {
  SectionVariantCardColumn,
  SectionVariantCardColumnPropsCustom,
} from "./SectionVariantCardColumn";
import { Button } from "../../inputs";
import { SectionVariantCardRight } from "./SectionVariantCardRight";
import { SectionVariantCardLeft } from "./SectionVariantCardLeft";
import {
  SectionVariantCardColumns,
  SectionVariantCardColumnsProps,
} from "./SectionVariantCardColumns";

const meta: Meta = {
  title: "Page / Section / Card",
} satisfies Meta<typeof meta>;

export default meta;

const cardRightProps = {
  ddTitle: "Excited to work together on your next project?",
  ddSubtitle:
    "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
  ddImageSrc: "/images/test-2.jpg",
  ddImageAlt: "image",
  ddBackgroundSrc: "/images/backgrounds/layered-waves-1.svg",
  ddBackgroundAlt: "layered-aves",
};
export const CardRight = () => <SectionVariantCardRight {...cardRightProps} />;

const cardLeftProps = {
  ddTitle: "Excited to work together on your next project?",
  ddSubtitle:
    "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
  ddImageSrc: "/images/test-1.jpg",
  ddImageAlt: "image",
};
export const CardLeft = () => <SectionVariantCardLeft {...cardLeftProps} />;

const ddColumns: SectionVariantCardColumnPropsCustom[] = [...new Array(3)].map(
  (_, i) => ({
    ddImageSrc: `/images/test-${i + 1}.jpg`,
    ddImageAlt: randWord(),
    ddSubtitle:
      "Lorem ipsum dolor sit amet dolor sit dolor siet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    ddTitle: randJobDescriptor(),
  }),
);

const columnProps: SectionVariantCardColumnsProps = {
  ddTitle: "Highly effective solutions",
  ddSubtitle:
    "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
};

export const Columns2 = () => (
  <SectionVariantCardColumns {...columnProps}>
    {ddColumns
      .map((record, i) => (
        <SectionVariantCardColumn key={i} {...record}>
          <Button ddVariant="primary">test cta</Button>
        </SectionVariantCardColumn>
      ))
      .filter((_, i) => i < 2)}
  </SectionVariantCardColumns>
);
export const Columns3 = () => (
  <SectionVariantCardColumns {...columnProps}>
    {ddColumns.map((record, i) => (
      <SectionVariantCardColumn key={i} {...record}>
        <Button ddVariant="primary">test cta</Button>
      </SectionVariantCardColumn>
    ))}
  </SectionVariantCardColumns>
);
