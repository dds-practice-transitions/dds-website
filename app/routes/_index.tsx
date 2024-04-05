import { LoaderFunction, json, type MetaFunction } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { HomeDocumentData } from "../../prismicio-types";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import Hero from "../slices/Hero";
import Content from "../slices/Content";

export const loader: LoaderFunction = async ({ context }) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("home", "home");
    return json(res.data);
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export const meta: MetaFunction = () => {
  return [
    { title: "Home | DDS Practice Transitions" },
    {
      name: "description",
      content: "Your practice, our expertise, transparent results",
    },
  ];
};

export default function Index() {
  const data = useLoaderData<HomeDocumentData>();

  return (
    <SliceZone
      slices={data.slices}
      components={{
        hero: Hero,
        content: Content,
      }}
    />
  );
}
