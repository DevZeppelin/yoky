import "./globals.css";
import { site } from "@/lib/site";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import HeroFixed from "@/components/layout/HeroFixed";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BOBINADOS YOKY | Taller Electromecánico en Mendoza",
    template: "%s | BOBINADOS YOKY",
  },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    type: "website",
    url: site.url,
    title: "BOBINADOS YOKY | Taller Electromecánico en Mendoza",
    description: site.description,
    siteName: "BOBINADOS YOKY",
    locale: "es_AR",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "BOBINADOS YOKY" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}