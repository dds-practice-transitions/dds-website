import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/cloudflare";
import { getPrismicClient } from "../lib/prismic";
import { useLoaderData } from "@remix-run/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { QuestionAnswer, makeSEOPage, makeSchemaFAQPage } from "../lib/seo";
import invariant from "tiny-invariant";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = getPrismicClient(context);

  try {
    const res = await client.getByUID("faq", "faqs");
    return json({ data: res.data, url: res.url });
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export const meta: MetaFunction<typeof loader> = ({ data: resData }) => {
  invariant(resData?.data, "Response is missing data.");

  const { data, url } = resData;

  const faqs = data.slices.reduce<QuestionAnswer[]>((accum, slice) => {
    if (slice.slice_type !== "accordion") return accum;
    const questionAnswers = slice.items.map<QuestionAnswer>((item) => {
      invariant(item.question, `Missing a question.`);
      invariant(
        item.answer,
        `Missing an answer for question "${item.question}"`,
      );
      return { question: item.question, answer: item.answer };
    });
    return [...accum, ...questionAnswers];
  }, []);

  return [
    ...makeSEOPage({
      title: data.meta_title,
      description: data.meta_description,
      pageType: "website",
      pageURL: url,
      imageAlt: data.slices1[0]?.primary.card_image.alt,
      imageURL: data.slices1[0]?.primary.card_image.url,
    }),
    ...makeSchemaFAQPage(faqs),
  ];
};

export default function FAQs() {
  const data = useLoaderData<typeof loader>();

  return <SliceZone slices={data.data.slices} components={components} />;
}
