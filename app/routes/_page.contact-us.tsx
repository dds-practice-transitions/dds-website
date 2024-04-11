import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { components } from "../slices";
import { FormContactUs } from "../components";

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
