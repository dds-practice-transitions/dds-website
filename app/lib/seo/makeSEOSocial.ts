import { SEOMeta } from "./makeSEOMeta";

export type SEOSocial = SEOMeta & {
  pageType: "website";
  pageURL: string;
  imageURL: string;
};
export const makeSEOSocial = ({
  title,
  description,
  pageType,
  pageURL,
  imageURL,
}: SEOSocial) => {
  return [
    // facebook
    { name: "og:type", content: pageType },
    { name: "og:url", content: pageURL },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: imageURL },
    // twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: pageURL },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageURL },
  ];
};
