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

export const meta: MetaFunction = () => {
  return [];
};

export default function ServicePage() {
  const res = useLoaderData<typeof loader>();

  return (
    <Article ddTitle={res.data.title as string}>
      <SliceZone slices={res.data.slices} components={components} />
    </Article>
  );
}
