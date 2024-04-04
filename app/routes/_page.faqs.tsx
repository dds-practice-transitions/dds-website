import { LoaderFunction, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useLoaderData } from "@remix-run/react";
import { FaqDocumentData } from "../../prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export const loader: LoaderFunction = async ({ context }) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("faq", "faqs");
    return json(res.data);
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export default function FAQs() {
  const data = useLoaderData<FaqDocumentData>();

  return <SliceZone slices={data.slices} components={components} />;
}
