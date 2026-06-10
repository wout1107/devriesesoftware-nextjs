import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import {
  jsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo/jsonLd";
import type { NavCounts } from "@/lib/site/nav";

// Counts max 1x per uur opnieuw ophalen (geen query per pageview)
export const revalidate = 3600;

async function getNavCounts(): Promise<NavCounts> {
  try {
    const payload = await getPayload({ config: configPromise });
    const [portfolio, blog] = await Promise.all([
      payload
        .count({ collection: "projects" })
        .then((r) => r.totalDocs)
        .catch(() => null),
      payload
        .count({ collection: "posts", where: { status: { equals: "published" } } })
        .then((r) => r.totalDocs)
        .catch(() => null),
    ]);
    return { portfolio, blog };
  } catch {
    return { portfolio: null, blog: null };
  }
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devriesesoftware.be"),
  title: "Devriese Software - Premium Web Development voor Moderne Bedrijven",
  description:
    "Professionele websites, webapplicaties en mobile apps. Razendsnel, SEO-geoptimaliseerd en gebouwd met de nieuwste technologieën. Perfecte Lighthouse scores gegarandeerd.",
  keywords: [
    "web development",
    "website laten maken",
    "webshop",
    "mobile app",
    "React",
    "Next.js",
    "Strapi CMS",
    "België",
  ],
  authors: [{ name: "Wout Devriese" }],
  creator: "Devriese Software",
  publisher: "Devriese Software",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://devriesesoftware.be",
    siteName: "Devriese Software",
    title: "Devriese Software - Premium Web Development",
    description:
      "Professionele websites en webapplicaties met perfecte performance.",
    images: [
      {
        url: "/assets/devriesesoftware.webp",
        width: 1200,
        height: 630,
        alt: "Devriese Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devriese Software - Premium Web Development",
    description:
      "Professionele websites en webapplicaties met perfecte performance.",
    images: ["/assets/devriesesoftware.webp"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const counts = await getNavCounts();
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />
        <ScrollToTop />
        <SiteHeader counts={counts} />
        <SmoothScrollProvider>
          <div className="content-wrapper">{children}</div>
          <Footer />
        </SmoothScrollProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
