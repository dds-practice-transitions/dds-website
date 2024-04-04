import { ActionFunctionArgs, json } from "@remix-run/cloudflare";

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  return json({ message: "success!" });
};
