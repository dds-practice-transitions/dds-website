export type QuestionAnswer = {
  question: string;
  answer: string;
};

/**
 * A Schema.org structured content function to create th
 * FAQPage content to better appear in search results.
 */
export const makeSchemaFAQPage = (params: QuestionAnswer[]) => {
  return [
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: params.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    },
  ];
};
