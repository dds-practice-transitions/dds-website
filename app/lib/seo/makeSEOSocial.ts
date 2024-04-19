import { SEOMeta } from "./makeSEOMeta";
import invariant from "tiny-invariant";

export type SEOSocial = SEOMeta & {
  pageType: "website";
  pageURL: string | null | undefined;
  imageURL: string | null | undefined;
  imageAlt: string | null | undefined;
};
export const makeSEOSocial = ({
  title,
  description,
  pageType,
  pageURL,
  imageURL,
  imageAlt,
}: SEOSocial) => {
  invariant(imageAlt ?? "SEOSocial Invariant: Missing `imageAlt`");
  invariant(imageURL ?? "SEOSocial Invariant: Missing `imageURL`");
  invariant(title ?? "SEOSocial Invariant: Missing `title`");
  invariant(description ?? "SEOSocial Invariant: Missing `description`");
  invariant(pageType ?? "SEOSocial Invariant: Missing `pageType`");
  invariant(pageURL ?? "SEOSocial Invariant: Missing `pageURL`");

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
    { name: "twitter:image:alt", content: imageAlt },
  ];
};
