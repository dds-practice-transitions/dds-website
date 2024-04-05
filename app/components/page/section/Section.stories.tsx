import type { Meta } from "@storybook/react";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";

const meta: Meta = {
  title: "Page / Section / Components",
} satisfies Meta<typeof meta>;

export default meta;

export const Title = () => (
  <SectionTitle>Excited to work together on your next project?</SectionTitle>
);

export const Subtitle = () => (
  <SectionSubtitle>
    Excited to work together on your next project?
  </SectionSubtitle>
);

export const TitleAndSubtitle = () => {
  return (
    <>
      <Title />
      <Subtitle />
    </>
  );
};
