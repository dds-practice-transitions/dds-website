// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppLoadContext } from "@remix-run/cloudflare";

declare module "@remix-run/server-runtime" {
  interface AppLoadContext {
    cloudflare: {
      env: {
        PRISMIC_REPO_NAME: string;
        PRISMIC_ACCESS_TOKEN: string;
        AUDIENCEFUL_API_TOKEN: string;
      };
    };
  }
}
