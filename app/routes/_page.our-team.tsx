import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("general", "our-team");
    return json({ data: res.data, url: res.url });
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export default function AboutUs() {
  const res = useLoaderData<typeof loader>();

  return <SliceZone slices={res.data.slices} components={components} />;
}
