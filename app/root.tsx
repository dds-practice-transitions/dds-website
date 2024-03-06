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
          <PageFooterColumn title="our mission">
            <p>
              DDS Practice Transitions is a <strong>premium</strong> boutique
              brokerage company that specializes in the sale, merger, and
              purchase of dental practices. We are not matchmakers. We pride
              ourselves on getting to know you and your dental practice. Our
              team will meet with you in person – not over Zoom or over the
              phone. Our aim is to act as stewards during one of the most
              emotional and critical junctures of your life. We have one central
              goal in mind when we work with you: to consummate a transaction
              that fits your particular needs.
            </p>
          </PageFooterColumn>
          <PageFooterColumn title="contact us">
            <p>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  whiteSpace: "nowrap",
                }}
              >
                <dt>
                  <strong>Phone:</strong>
                </dt>
                <dd>
                  <a href="tel:+14088238884">+1 (408) 823-8884</a>
                </dd>
                <dt>
                  <strong>Email Us:</strong>
                </dt>
                <dd>
                  <a href="mailto:info@ddsbrokerage.com">
                    info@ddsbrokerage.com
                  </a>
                </dd>
              </dl>
            </p>
          </PageFooterColumn>
          {/* <PageFooterColumn title="Test"></PageFooterColumn>
          <PageFooterColumn title="subscribe">
            <Newsletter />
          </PageFooterColumn> */}
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
