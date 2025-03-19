import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
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

export const metadata: Metadata = {
  title: "Case Estates Home Interiors | Emma Case",
  description: "Luxury interior design services by Emma Case. Transform your space with sophisticated, personalized interior design solutions.",
  keywords: "interior design, luxury interiors, home design, Emma Case, Case Estates, interior designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-background-light text-text-light">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-taupe/5 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="font-serif text-xl">Case Estates Home Interiors</h3>
              <p className="mt-2 text-text-light/80">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
