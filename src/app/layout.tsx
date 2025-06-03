import type { Metadata } from "next";
import { Playfair_Display, Inter, Lora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Case Estates Home Interiors | Emma Case",
  description:
    "Luxury interior design services by Emma Case. Transform your space with sophisticated, personalized interior design solutions.",
  keywords:
    "interior design, luxury interiors, home design, Emma Case, Case Estates, interior designer",
  openGraph: {
    title: "Case Estates Home Interiors | Emma Case",
    description:
      "Luxury interior design services by Emma Case. Transform your space with sophisticated, personalized interior design solutions.",
    url: "https://caseestates.com",
    siteName: "Case Estates Home Interiors",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${lora.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-body bg-background-light text-text-light flex flex-col min-h-screen bg-elegant-pattern bg-pattern-size">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-deep-green focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

