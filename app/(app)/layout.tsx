import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ScrollToTop />
        <Navigation />
        <main className="main-content">
          <div className="content-wrapper">{children}</div>
          <Footer />
        </main>
        <CookieBanner />
      </body>
    </html>
  );
}
