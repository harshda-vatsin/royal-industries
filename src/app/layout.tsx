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
  title: "India Royale Industries | Importer & Supplier of Plastic Raw Materials",
  description: "Established in 2004, India Royale Industries is a leading importer and supplier of premium plastic raw materials: PVC granules, PE granules, EVA granules, and more in Delhi, Delhi. Sourcing bulk polymers for high-quality products and service.",
  keywords: "India Royale Industries, Royale Industries, Plastic raw materials, PVC granules, PE granules, EVA granules, Importer, Supplier, Delhi, bulk polymer supplier",
  authors: [{ name: "India Royale Industries" }],
  openGraph: {
    title: "India Royale Industries | Importer & Supplier of Plastic Raw Materials",
    description: "Established in 2004, India Royale Industries is a leading importer and supplier of premium plastic raw materials: PVC granules, PE granules, and EVA granules in Delhi.",
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
