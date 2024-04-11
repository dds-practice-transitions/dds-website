import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

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

export const meta: MetaFunction = () => {
  return [
    { title: "About Us | DDS Practice Transitions" },
    {
      name: "description",
      content: "Your practice, our expertise, transparent results",
    },
  ];
};

export default function Index() {
  const res = useLoaderData<typeof loader>();

  return <SliceZone slices={res.data.slices} components={components} />;
}
