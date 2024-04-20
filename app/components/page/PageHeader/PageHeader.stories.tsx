import type { Meta } from "@storybook/react";
import { PageHeader } from "./PageHeader";

import { Basic as NavbarStory } from "../../navigation/TopNav.stories";
import { PageHeaderColumn } from "./PageHeaderSection";
import { PageHeaderLogo } from "./PageHeaderLogo";
import { Button } from "../../inputs/Button";

const meta: Meta = {
  title: "Page / Header",
  component: PageHeader,
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderColumn>
          <PageHeaderLogo src="/logo.jpg" alt="dds-logo" />
        </PageHeaderColumn>
        <PageHeaderColumn>
          <NavbarStory />
        </PageHeaderColumn>
        <PageHeaderColumn>
          <Button ddSize="sm" ddVariant="primary">
            Get in touch
          </Button>
        </PageHeaderColumn>
      </PageHeader>
      <div style={{ height: 1_000 }} />
    </>
  );
};
