import { ActionFunction, json } from "@remix-run/cloudflare";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData.entries()));
  return json({ success: true });
};
