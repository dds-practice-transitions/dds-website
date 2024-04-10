/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { SEOFaviconParams, makeSEOFavicon } from "./makeSEOFavicon";
import { exhaustiveMatchGuard } from "../../utils";

export const SEOFavicon: FC<SEOFaviconParams> = (props) => {
  return makeSEOFavicon(props).map((node) => {
    switch (node.tagName) {
      case "link": {
        const { tagName, ...restNodeProps } = node;
        return <link {...restNodeProps} />;
      }

      default:
        return exhaustiveMatchGuard(node.tagName);
    }
  });
};
