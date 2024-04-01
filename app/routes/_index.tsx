import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | DDS Practice Transitions" },
    {
      name: "description",
      content: "Your practice, our expertise, transparent results",
    },
  ];
};

export default function Index() {
  return <div />;
}
