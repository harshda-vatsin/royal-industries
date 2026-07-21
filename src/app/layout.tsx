import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royale Industries | Importer & Supplier of Polymer Raw Materials",
  description: "Established in May 2004, Royale Industries is a leading B2B importer, trader, and supplier of a wide variety of polymer and plastic raw materials in New Delhi / Delhi, serving industries PAN India.",
  keywords: "Royale Industries, polymer raw materials, plastic granules, bulk polymer importer, polymer trader, New Delhi supplier, custom polymer grades, PAN India polymer supply",
  authors: [{ name: "Royale Industries" }],
  openGraph: {
    title: "Royale Industries | Importer & Supplier of Polymer Raw Materials",
    description: "Established in May 2004, Royale Industries is a trusted B2B importer and supplier of a wide range of polymer raw materials based in New Delhi.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-charcoal bg-white">
        {children}
      </body>
    </html>
  );
}
