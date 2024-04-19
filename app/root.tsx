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
import { ReactNode, useMemo } from "react";
import { PrismicProvider, SliceZone } from "@prismicio/react";
import { getPrismicClient } from "./lib/prismic";
import {
  FooterDocumentData,
  LayoutDocumentData,
  NavbarDocumentData,
} from "../prismicio-types";
import {
  PageHeader,
  Navbar,
  Footer,
  FooterBottom,
  FooterColumnLink,
  FooterTop,
  ButtonLink,
} from "./components";
import { PageHeaderLogo } from "./components/page/PageHeader/PageHeaderLogo";
import { PageHeaderColumn } from "./components/page/PageHeader/PageHeaderSection";
import { components } from "./slices";
import { withAdapterLink } from "./adapters";
import { SEOFavicon } from "./lib/seo";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader: LoaderFunction = async ({ context }) => {
  const client = getPrismicClient(context);

  const getLayout = client.getByUID("layout", "layout");
  const getNavbar = client.getByUID("navbar", "navbar");
  const getFooter = client.getByUID("footer", "footer");

  try {
    const [{ data: layout }, { data: navbar }, { data: footer }] =
      await Promise.all([getLayout, getNavbar, getFooter]);
    return json({ layout, navbar, footer });
  } catch (error) {
    throw new Response("Not found", {
      status: 404,
    });
  }
};

export function Layout({ children }: { children: ReactNode }) {
  const response = useRouteLoaderData("root") as {
    layout: LayoutDocumentData;
    navbar: NavbarDocumentData;
    footer: FooterDocumentData;
  };

  const HeaderComponent = useMemo(
    () => (
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
          <Navbar
            ddLogoSrc={response.navbar.mobile_menu_logo.url ?? ""}
            ddLogoAlt={response.navbar.mobile_menu_logo.alt ?? ""}
          >
            <SliceZone
              slices={response.navbar.slices}
              components={components}
            />
          </Navbar>
        </PageHeaderColumn>
        <PageHeaderColumn>
          <ButtonLink
            ddSize="sm"
            ddVariant="primary"
            LinkComponent={withAdapterLink({
              field: response.layout.contact_cta_link,
            })}
          >
            {response.layout.contact_cta_label}
          </ButtonLink>
        </PageHeaderColumn>
      </PageHeader>
    ),
    [
      response.layout.contact_cta_label,
      response.layout.contact_cta_link,
      response.layout.logo.url,
      response.navbar.mobile_menu_logo.alt,
      response.navbar.mobile_menu_logo.url,
      response.navbar.slices,
    ],
  );

  const FooterComponent = useMemo(
    () => (
      <Footer>
        <FooterTop
          ddImgSrc={response.footer.logo.url as string}
          ddImgAlt={response.footer.logo.alt as string}
          ddSummary={response.footer.summary as string}
        >
          <SliceZone slices={response.footer.slices} components={components} />
        </FooterTop>
        <FooterBottom ddCopyrightYear={2024}>
          <FooterColumnLink
            LinkComponent={withAdapterLink({
              field: response.footer.terms_and_conditions_link,
            })}
          >
            Terms and Conditions
          </FooterColumnLink>
          <FooterColumnLink
            LinkComponent={withAdapterLink({
              field: response.footer.privacy_policy_link,
            })}
          >
            Privacy Policy
          </FooterColumnLink>
        </FooterBottom>
      </Footer>
    ),
    [
      response.footer.logo.alt,
      response.footer.logo.url,
      response.footer.privacy_policy_link,
      response.footer.slices,
      response.footer.summary,
      response.footer.terms_and_conditions_link,
    ],
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/fonts/filson-pro.css" />
        <Meta />
        <Links />
        <SEOFavicon />
      </head>
      <body>
        {HeaderComponent}
        {/* <main> */}
        {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
        {children}
        {/* </main> */}
        {FooterComponent}
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
