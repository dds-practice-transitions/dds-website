import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { createAudiencefulClient } from "../lib/audienceful";

export type ContactUsApiResponse = {
  success: boolean;
  message: string;
};
export const action = async ({ request, context }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }
  const formData = await request.formData();
  console.log(Object.fromEntries(formData.entries()));

  const audiencefulClient = createAudiencefulClient({
    accessToken: context.cloudflare.env.AUDIENCEFUL_API_TOKEN,
  });

  try {
    const role = formData.getAll("role");
    const tags = formData.getAll("tags") as string[];
    const email_address = formData.get("email_address");

    if (!email_address || !tags || !role) return;
    const person = await audiencefulClient.createPerson({
      email: email_address.toString(),
      tags: tags.concat(role.toString()) ?? [],
    });

    return json<ContactUsApiResponse>({ success: true, message: "success!" });
  } catch (error) {
    return json<ContactUsApiResponse>({
      success: false,
      message: error as string,
    });
  }
};
