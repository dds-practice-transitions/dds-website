import type { Meta, StoryObj } from "@storybook/react";
import {
  ContentColumn,
  PageSectionTypeContent,
} from "./PageSectionTypeContent";
import { randJobDescriptor, randWord } from "@ngneat/falso";

const meta: Meta = {
  title: "Page / Section / Content",
  // @ts-expect-error forwardRef mismatch
  component: PageSectionTypeContent,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardRight: Story = {
  args: {
    ddVariant: "card-right",
    ddTitle: "Excited to work together on your next project?",
    ddSubtitle:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
    ddImageSrc: "/images/test-2.jpg",
    ddImageAlt: "image",
  },
};

export const CardLeft: Story = {
  args: {
    ddVariant: "card-left",
    ddTitle: "Excited to work together on your next project?",
    ddSubtitle:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
    ddImageSrc: "/images/test-1.jpg",
    ddImageAlt: "image",
  },
};

const ddColumns: ContentColumn[] = [...new Array(3)].map((_, i) => ({
  ddImageSrc: `/images/test-${i + 1}.jpg`,
  ddImageAlt: randWord(),
  ddSubtitle:
    "Lorem ipsum dolor sit amet dolor sit dolor siet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
  ddTitle: randJobDescriptor(),
}));

export const ColumnsTwo: Story = {
  args: {
    ddVariant: "columns",
    ddTitle: "Highly effective solutions",
    ddSubtitle:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
    ddColumns: ddColumns.filter((_, i) => i < 2),
  },
};

export const ColumnsThree: Story = {
  args: {
    ddVariant: "columns",
    ddTitle: "Highly effective solutions",
    ddSubtitle:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.",
    ddColumns,
  },
};
