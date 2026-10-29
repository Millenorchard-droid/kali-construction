import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Kali Construction | Property repairs, maintenance and construction",
  description: "Property repairs, maintenance and construction for homes and businesses across London and surrounding areas.",
  robots: { index: false, follow: false }, // preview only: remove at launch
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main className="page-enter">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
