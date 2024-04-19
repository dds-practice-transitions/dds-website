import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { Outlet, useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import {
  KnowledgeBase,
  KnowledgeBaseNav,
  KnowledgeBaseContent,
  KnowledgeBaseNavItem,
} from "../components";
import { withAdapterNavLink } from "../adapters";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("resources", "resources");
    const articles = await client.getAllByType("resource", {
      fetchLinks: ["parent"],
    });
    return json({ page: res.data, url: res.url, articles });
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export default function ServicesPage() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <>
      <SliceZone
        slices={loaderData.page.slices.filter(
          (slice) => slice.slice_type === "hero",
        )}
        components={components}
      />
      <KnowledgeBase>
        <KnowledgeBaseNav>
          {loaderData.articles.map((article) => {
            return (
              <li key={article.id}>
                <KnowledgeBaseNavItem
                  LinkComponent={withAdapterNavLink({
                    to: article.url as string,
                  })}
                >
                  {article.data.title}
                </KnowledgeBaseNavItem>
              </li>
            );
          })}
        </KnowledgeBaseNav>
        <KnowledgeBaseContent>
          <Outlet />
        </KnowledgeBaseContent>
      </KnowledgeBase>
      <SliceZone
        slices={loaderData.page.slices.filter(
          (slice) => slice.slice_type === "call_to_action",
        )}
        components={components}
      />
    </>
  );
}
