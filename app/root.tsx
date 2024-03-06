import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import "./theme/theme.css";
import { PageFooter, PageFooterColumn, PageHeader } from "./components";
import { Newsletter } from "./routes/resource.newsletter";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageHeader />
        <main>
          {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
          {children}
        </main>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
        <PageFooter>
          <PageFooterColumn title="our mission">our</PageFooterColumn>
          <PageFooterColumn title="contact us"></PageFooterColumn>
          <PageFooterColumn title="Test"></PageFooterColumn>
          <PageFooterColumn title="subscribe">
            <Newsletter />
          </PageFooterColumn>
        </PageFooter>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  }

  return (
    <>
      <h1>Error!</h1>
      <p>
        {
          // @ts-expect-error framework provides this
          error?.message ?? "Unknown error"
        }
      </p>
    </>
  );
}
