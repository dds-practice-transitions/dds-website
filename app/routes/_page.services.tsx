import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { Outlet, useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("general", "services");
    return json({ data: res.data, url: res.url });
  } catch (error) {
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export default function ServicesPage() {
  const res = useLoaderData<typeof loader>();

  return (
    <>
      <SliceZone slices={res.data.slices} components={components} />
      <Outlet />
    </>
  );
}
