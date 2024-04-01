// app/utils/prismicio.ts
import * as prismic from "@prismicio/client";
import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { AppLoadContext } from "@remix-run/cloudflare";

//Add your unique repository name, such as "my-prismic-remix-site" below
export const repoName = "dds-practice-transitions";
// If your Prismic repo is private, add your token here:
export const accessToken =
  "MC5aZ1JxZ2hBQUFDSUFBS0Zq.Djrvv73vv71zAu-_vWg2CGvvv70uHGtZ77-9XO-_ve-_vVkX77-9WT_vv73vv71177-977-977-977-9";
export const endpoint = getRepositoryEndpoint(repoName);

const routes: prismic.ClientConfig["routes"] = [
  {
    type: "general",
    path: "/:uid",
  },
  {
    type: "services_category",
    path: "/:root/:uid",
    resolvers: {
      root: "parent",
    },
  },
  {
    type: "services_category_details",
    path: "/:root/:category/:uid",
    resolvers: {
      category: "category",
      root: "category.parent",
    },
  },
];

export const getPrismicClient = (context: AppLoadContext) => {
  // @ts-expect-error cloudflare actually exists
  return createClient(context.cloudflare.env.PRISMIC_REPO_NAME, {
    accessToken,
    brokenRoute: "/404",
    routes,
  });
};
