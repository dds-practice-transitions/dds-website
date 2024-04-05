import { ActionFunctionArgs, json } from "@remix-run/cloudflare";
import { createAudiencefulClient } from "../lib/audienceful";

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
    const email = formData.get("email");
    const tags = formData.getAll("tags") as string[];

    if (!email || !tags) return;

    const person = await audiencefulClient.createPerson({
      email: email.toString(),
      tags: tags ?? [],
    });

    return json({ message: "success!", person });
  } catch (error) {
    return json({ message: error });
  }
};
