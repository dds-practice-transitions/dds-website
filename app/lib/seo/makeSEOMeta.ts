export type SEOMeta = {
  /**
   * The title of the page
   */
  title: string;
  /**
   * The description of the page
   */
  description: string;
};

export const makeSEOMeta = (params: SEOMeta) => {
  return [
    {
      title: params.title,
    },
    {
      name: "title",
      content: params.title,
    },
    {
      name: "description",
      content: params.description,
    },
  ];
};
