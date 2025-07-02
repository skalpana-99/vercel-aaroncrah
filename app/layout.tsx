import { type Metadata } from "next";
import { Oswald } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cva } from "class-variance-authority";

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
  keywords: ["Aaron crash", "Books", "Writing"],
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

      <body className={`${bodyStyles()} ${oswald.variable} flex flex-col justify-between`}>
        <SearchBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
