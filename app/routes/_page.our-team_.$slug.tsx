import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import invariant from "tiny-invariant";
import { makeSEOPage } from "../lib/seo";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("general", params.slug as string);
    return json({ data: res.data, url: res.url });
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export const meta: MetaFunction<typeof loader> = ({ data: resData }) => {
  invariant(resData?.data, "Response is missing data.");

  return makeSEOPage({
    title: resData.data.meta_title,
    description: resData.data.meta_description,
    pageType: "website",
    pageURL: resData.url,
    imageAlt: resData.data.slices1[0]?.primary.card_image.alt,
    imageURL: resData.data.slices1[0]?.primary.card_image.url,
  });
};
export default function Index() {
  const res = useLoaderData<typeof loader>();

  return <SliceZone slices={res.data.slices} components={components} />;
}
