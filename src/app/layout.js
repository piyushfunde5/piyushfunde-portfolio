import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Piyush Funde - Product Manager",
  description: "Product Manager who prototypes solutions, not just plans them. View my work, case studies, and live product prototypes.",
  keywords: ["Product Manager", "PM Portfolio", "Piyush Funde", "Product Management", "FinTech PM"],
  authors: [{ name: "Piyush Funde" }],
  openGraph: {
    title: "Piyush Funde - Product Manager",
    description: "I turn chaos into systems that scale. Product Manager who prototypes solutions, not just plans them.",
    url: "https://piyushfunde.com",
    siteName: "Piyush Funde",
    images: [
      {
        url: "https://piyushfunde.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piyush Funde - Product Manager Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Funde - Product Manager",
    description: "I turn chaos into systems that scale.",
    images: ["https://piyushfunde.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
