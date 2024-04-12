import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { components } from "../slices";
import { FormContactUs } from "../components";
import { makeSEOPage } from "../lib/seo";
import invariant from "tiny-invariant";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("contact", "contact-us");
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

export default function ContactUs() {
  const res = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  return res.data.slices.map((slice) => {
    const Component = components[slice.slice_type];
    if (slice.slice_type === "contact" && slice.variation === "contentLeft") {
      const Component = components.contact;
      return (
        // @ts-expect-error slice mismatch is okay
        <Component key={slice.id} slice={slice}>
          <fetcher.Form method="post" action="/api/contact">
            <FormContactUs />
          </fetcher.Form>
        </Component>
      );
    }
    // @ts-expect-error slice mismatch is okay
    return <Component key={slice.id} slice={slice} />;
  });
}
