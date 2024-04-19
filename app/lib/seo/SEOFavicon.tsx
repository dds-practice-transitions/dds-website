/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { SEOFaviconParams, makeSEOFavicon } from "./makeSEOFavicon";
import { exhaustiveMatchGuard } from "../../utils";

export const SEOFavicon: FC<SEOFaviconParams> = (props) => {
  return makeSEOFavicon(props).map((node, i) => {
    switch (node.tagName) {
      case "link": {
        const { tagName, ...restNodeProps } = node;
        return <link key={`favicon-${i}`} {...restNodeProps} />;
      }

      default:
        return exhaustiveMatchGuard(node.tagName);
    }
  });
};
