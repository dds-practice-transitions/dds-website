import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  json,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";

import "./theme/theme.css";
import { ReactNode } from "react";
import { PrismicProvider, SliceZone } from "@prismicio/react";
import { getPrismicClient } from "./lib/prismic";
import { LayoutDocumentData, NavbarDocumentData } from "../prismicio-types";
import { PageHeader, Button, Navbar } from "./components";
import { PageHeaderLogo } from "./components/page/PageHeader/PageHeaderLogo";
import { PageHeaderColumn } from "./components/page/PageHeader/PageHeaderSection";
import { components } from "./slices";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader: LoaderFunction = async ({ context }) => {
  const client = getPrismicClient(context);

  const getLayout = client.getByUID("layout", "layout");
  const getNavbar = client.getByUID("navbar", "navbar");

  try {
    const [{ data: layout }, { data: navbar }] = await Promise.all([
      getLayout,
      getNavbar,
    ]);
    return json({ layout, navbar });
  } catch (error) {
    console.log(error);
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export function Layout({ children }: { children: ReactNode }) {
  const response = useRouteLoaderData("root") as {
    layout: LayoutDocumentData;
    navbar: NavbarDocumentData;
  };
  const error = useRouteError();

  if (typeof response === "undefined") return;

  console.log(response.layout, response.navbar);

  if (error) {
    return null;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/filson-pro.css" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageHeader>
          <PageHeaderColumn>
            <Link to="/">
              <PageHeaderLogo
                src={response.layout.logo.url ?? undefined}
                alt={response.layout.logo.url ?? undefined}
              />
            </Link>
          </PageHeaderColumn>
          <PageHeaderColumn>
            <Navbar>
              <SliceZone
                slices={response.navbar.slices}
                components={components}
              />
            </Navbar>
          </PageHeaderColumn>
          <PageHeaderColumn>
            <Button ddSize="sm" ddVariant="primary">
              {response.layout.contact_cta_label}
            </Button>
          </PageHeaderColumn>
        </PageHeader>
        <main>
          {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
          {children}
        </main>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <PrismicProvider>
      <Outlet />
    </PrismicProvider>
  );
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
