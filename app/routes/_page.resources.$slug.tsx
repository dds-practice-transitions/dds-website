import { LoaderFunction, json, type MetaFunction } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { ResourceDocumentData } from "../../prismicio-types";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { Article } from "../components";

export const loader: LoaderFunction = async ({ context, params }) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("resource", params.slug as string);
    return json(res.data);
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
  const data = useLoaderData<ResourceDocumentData>();

  return (
    <Article ddTitle={data.title as string}>
      <SliceZone slices={data.slices} components={components} />
    </Article>
  );
}
