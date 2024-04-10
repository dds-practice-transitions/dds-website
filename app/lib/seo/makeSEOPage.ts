import { SEOMeta, makeSEOMeta } from "./makeSEOMeta";
import { SEOSocial, makeSEOSocial } from "./makeSEOSocial";

export const makeSEOPage = (params: SEOMeta & SEOSocial) => [
  ...makeSEOMeta(params),
  ...makeSEOSocial(params),
];
