// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Global bileşenler
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ka Service - Ihr 24/7 Autoschlüsseldienst",
  description:
    "24h Notdienst für Auto- und Türöffnung. Schnelle, transparente und professionelle Hilfe in München, Dachau und Augsburg.",
  keywords: [
    "Schlüsseldienst München",
    "Schlüsseldienst Dachau",
    "Schlüsseldienst Freising",
    "Schlüsseldienst Fürstenfeldbruck",
    "Autoschlüssel Notdienst",
    "Türöffnung 24h",
    "Festpreis Schlüsseldienst",
  ],
  authors: [{ name: "Ka Service Schlüsseldients" }],
  openGraph: {
    title: "Ka Service Schlüsseldients - Ihr 24/7 Autoschlüsseldienst",
    description:
      "Ihr lokaler Schlüsselnotdienst für München, Dachau und Augsburg. Schnelle Hilfe, transparente Festpreise.",
    url: "https://xn--autoschlsselmann-qzb.de/",
    siteName: "Schlüsseldienst Ka Service",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header (Navbar) */}
        <Header />

        {/* Ana İçerik */}
        <main className="min-h-screen">{children}</main>

        {/* Footer (Alt Bilgi) */}
        <Footer />
      </body>
    </html>
  );
}
