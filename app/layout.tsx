import { type Metadata } from "next";
import { Oswald } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cva } from "class-variance-authority";
import Head from "next/head";

import "@/styles/globals.css";
import SearchBar from "@/components/ui/SearchBar";
import Footer from "@/components/ui/Footer";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

// Define body styles using cva
const bodyStyles = cva(["min-h-screen bg-background font-sans antialiased"], {
  variants: {
    fontClass: {
      default: "",
    },
  },
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Author", "Books", "Writing"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Enable static rendering for all pages by default
export const dynamic = "force-static";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body className={`${bodyStyles()} ${oswald.variable}`}>
        <SearchBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
