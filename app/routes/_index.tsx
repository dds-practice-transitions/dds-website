import type { MetaFunction } from "@remix-run/cloudflare";
import { UnderConstruction } from "~/components";

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
  return (
    <div>
      <UnderConstruction>
        <p>
          <strong>Exciting Changes Underway!</strong>
        </p>
        <p>
          Stay Tuned for Our Revamped Website &ndash; Your Ultimate Resource for
          Dental Practice Transitions
        </p>
      </UnderConstruction>
    </div>
  );
}
