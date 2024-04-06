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
    type: "resources",
    path: "/resources",
  },
  {
    type: "resource",
    path: "/resources/:uid",
  },
  {
    type: "faq",
    path: "/:uid",
  },
  {
    type: "contact",
    path: "/contact-us",
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
