import { LoaderFunction, json, type MetaFunction } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { GeneralDocumentData } from "../../prismicio-types";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export const loader: LoaderFunction = async ({ context, params }) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("general", params.slug as string);
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
  const data = useLoaderData<GeneralDocumentData>();

  return <SliceZone slices={data.slices} components={components} />;
}
