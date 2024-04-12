import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { Article } from "../components";
import invariant from "tiny-invariant";
import { makeSEOPage, makeSchemaFAQPage } from "../lib/seo";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("resource", params.slug as string);
    return json({ data: res.data, url: res.url });
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

// @ts-expect-error the schema is typed as string but it's harder typed
export const meta: MetaFunction<typeof loader> = ({ data: resData }) => {
  invariant(resData?.data, "Response is missing data.");

  const schemas = resData.data.slices1.reduce<
    ReturnType<typeof makeSchemaFAQPage>[]
  >((accum, slice) => {
    if (slice.slice_type !== "structured_content") return accum;
    switch (slice.variation) {
      case "faqPage":
        if (slice.items.length === 0) return accum;
        return [
          ...accum,
          makeSchemaFAQPage(
            slice.items.map((item) => ({
              question: item.question ?? "",
              answer: item.answer ?? "",
            })),
          ),
        ];

      default:
        return accum;
    }
  }, []);

  return [
    ...makeSEOPage({
      title: resData.data.meta_title,
      description: resData.data.meta_description,
      pageType: "website",
      pageURL: resData.url,
      imageAlt: resData.data.meta_image.alt,
      imageURL: resData.data.meta_image.url,
    }),
    ...schemas,
  ];
};

export default function ServicePage() {
  const res = useLoaderData<typeof loader>();

  return (
    <Article ddTitle={res.data.title as string}>
      <SliceZone slices={res.data.slices} components={components} />
    </Article>
  );
}
