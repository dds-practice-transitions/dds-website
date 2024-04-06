import type { Meta } from "@storybook/react";

import { KnowledgeBase } from "./KnowledgeBase";
import { KnowledgeBaseNav } from "./KnowledgeBaseNav";
import { KnowledgeBaseContent } from "./KnowledgeBaseContent";

const meta: Meta = {
  title: "Page / Knowledge Base",
} satisfies Meta<typeof meta>;

export default meta;

export const Shell = () => {
  return (
    <KnowledgeBase>
      <KnowledgeBaseNav>nav</KnowledgeBaseNav>
      <KnowledgeBaseContent>content</KnowledgeBaseContent>
    </KnowledgeBase>
  );
};
