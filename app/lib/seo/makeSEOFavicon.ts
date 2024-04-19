export type SEOFaviconParams = {
  /**
   * This is the path of the public folder relative
   * to the deployed application.
   * @example If public assets of the application are in
   * /icons/favicon, then the path would be `/icons/favicon/`. If
   * all of the assets are in the `/` then the path would be `/`.
   * @default "/"
   */
  publicIconDir?: string;
  /**
   * The name of the file
   * @default favicon
   */
  filename?: string;
  /**
   * The dimensions of the icons that have been supplied.
   * @default [16, 32]
   */
  iconDimensions?: number[];
};

export type SEOFaviconLink = { tagName: "link"; [key: string]: string };
export type SEOFaviconReturn = SEOFaviconLink[];

export const makeSEOFavicon = ({
  publicIconDir = "/",
  iconDimensions = [16, 32],
}: SEOFaviconParams): { tagName: "link"; [key: string]: string }[] => {
  const iconPrefix = `${publicIconDir}favicon`;

  const altSizes = iconDimensions.map<SEOFaviconLink>((dimension) => {
    const dimString = `${dimension}x${dimension}`;
    return {
      tagName: "link",
      rel: "icon",
      type: "image/png",
      sizes: `${dimension}x${dimension}`,
      href: `${iconPrefix}-${dimString}.png`,
    };
  });

  return [
    {
      tagName: "link",
      rel: "icon",
      type: "image/x-icon",
      href: `${iconPrefix}.ico`,
    },
    ...altSizes,
    // apple
    {
      tagName: "link",
      rel: "icon",
      sizes: "180x180",
      href: `${publicIconDir}/apple-touch-icon.png`,
    },
  ];
};
