import type { MetaFunction } from "@remix-run/cloudflare";
import { UnderConstruction } from "~/components";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";

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
      <header>
        <Navbar />
      </header>
      <main
        style={{
          height: "90vh",
        }}
      >
        <UnderConstruction>
          <p>
            <strong>Exciting Changes Underway!</strong>
          </p>
          <p>
            Stay Tuned for Our Revamped Website – Your Ultimate Resource for
            Dental Practice Transitions
          </p>
        </UnderConstruction>
      </main>
      <Footer />
    </div>
  );
}
