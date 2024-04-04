// app/utils/prismicio.ts
import * as prismic from "@prismicio/client";
import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { AppLoadContext } from "@remix-run/cloudflare";

//Add your unique repository name, such as "my-prismic-remix-site" below
export const repoName = "dds-practice-transitions";
export const endpoint = getRepositoryEndpoint(repoName);

const routes: prismic.ClientConfig["routes"] = [
  {
    type: "general",
    path: "/:root?/:sub?/:uid",
    resolvers: {
      root: "parent",
      sub: "parent.parent",
    },
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
  {
    type: "faq",
    path: "/:uid",
  },
  {
    type: "contact",
    path: "/:uid",
  },
  {
    type: "home",
    path: "/",
  },
];

export const getPrismicClient = (context: AppLoadContext) => {
  return createClient(context.cloudflare.env.PRISMIC_REPO_NAME, {
    accessToken: context.cloudflare.env.PRISMIC_ACCESS_TOKEN,
    brokenRoute: "/404",
    routes,
  });
};
