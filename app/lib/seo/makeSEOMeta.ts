import invariant from "tiny-invariant";
import { seoConfig } from "./seo.config";

export type SEOMeta = {
  /**
   * The title of the page
   */
  title: string | null | undefined;
  /**
   * The description of the page
   */
  description: string | null | undefined;
};

export const makeSEOMeta = (params: SEOMeta) => {
  invariant(params.title, "SEOMeta Invariant: Missing `meta.title`");
  invariant(params.description, "SEOMeta Invariant: Missing `meta.title`");

  const title = `${params.title} | ${seoConfig.name}`;

  return [
    {
      title,
    },
    {
      name: "title",
      content: title,
    },
    {
      name: "description",
      content: params.description,
    },
  ];
};
