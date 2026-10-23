import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { LocalBusinessSchema } from "@/components/SchemaOrg";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.business.domain),
  title: {
    default: siteContent.meta.home.title,
    template: `%s | ${siteContent.business.name}`,
  },
  description: siteContent.meta.home.description,
  openGraph: {
    title: siteContent.meta.home.title,
    description: siteContent.meta.home.description,
    url: siteContent.business.domain,
    siteName: siteContent.business.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-[#FFF8F6] text-[#291817]">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#DE1B54] focus:text-white focus:rounded-full focus:shadow-md focus:text-sm font-semibold"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content Area - pb-24 on mobile/tablet ensures sticky bottom bar never overlaps page content */}
        <main id="main-content" className="flex-1 pb-24 lg:pb-0">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Mobile Action Bar */}
        <MobileCallBar />
      </body>
    </html>
  );
}
