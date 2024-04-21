import { FC, useCallback, useEffect, useRef } from "react";
import { FormContactUs } from "../../components";
import { useFetcher } from "@remix-run/react";
import type { ContactUsApiResponse } from "../../routes/api.contact";

export const WithContactUsForm: FC = () => {
  const fetcher = useFetcher<ContactUsApiResponse>();
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.style.height = formRef.current.clientHeight
      .toString()
      .concat("px");
  }, []);

  return (
    <fetcher.Form method="post" action="/api/contact" ref={formRef}>
      <FormContactUs
        isLoading={fetcher.state === "submitting"}
        isSuccess={!!fetcher.data?.success}
      />
    </fetcher.Form>
  );
};
