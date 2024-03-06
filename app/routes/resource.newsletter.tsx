import { ActionFunction, json } from "@remix-run/cloudflare";
import { useFetcher } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData.entries()));
  return json({ success: true });
};

export const Newsletter = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/resource/newsletter">
      <input name="email" placeholder="email@domain.com" />
      <button type="submit">Subscribe</button>
    </fetcher.Form>
  );
};
