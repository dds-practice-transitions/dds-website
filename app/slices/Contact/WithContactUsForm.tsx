import { FC } from "react";
import { FormContactUs } from "../../components";
import { useFetcher } from "@remix-run/react";

export const WithContactUsForm: FC = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post" action="/api/contact">
      <FormContactUs />
    </fetcher.Form>
  );
};
