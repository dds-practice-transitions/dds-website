import { LoaderFunction, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { Outlet, useLoaderData } from "@remix-run/react";
import { ServicesDocumentData } from "../../prismicio-types";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export const loader: LoaderFunction = async ({ context }) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("general", "services");
    return json(res.data);
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export default function ServicesPage() {
  const data = useLoaderData<ServicesDocumentData>();

  return (
    <>
      <SliceZone slices={data.slices} components={components} />
      <Outlet />
    </>
  );
}
