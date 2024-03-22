import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";
import { AccordionList } from "./AccordionList";
import { AccordionListItem } from "./AccordionListItem";

const meta: Meta = {
  title: "Display / Accordion",
  // @ts-expect-error mismatch with forwardRef
  component: Accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ddTitle: "What factors affect the cost of web design?",
    children:
      "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
  },
};

export const List = () => {
  return (
    <div
      style={{
        width: 800,
      }}
    >
      <AccordionList>
        <AccordionListItem>
          <Accordion {...(Basic.args as AccordionProps)} />
        </AccordionListItem>
        <AccordionListItem>
          <Accordion {...(Basic.args as AccordionProps)} />
        </AccordionListItem>
        <AccordionListItem>
          <Accordion {...(Basic.args as AccordionProps)} />
        </AccordionListItem>
        <AccordionListItem>
          <Accordion {...(Basic.args as AccordionProps)} />
        </AccordionListItem>
        <AccordionListItem>
          <Accordion {...(Basic.args as AccordionProps)} />
        </AccordionListItem>
      </AccordionList>
    </div>
  );
};
