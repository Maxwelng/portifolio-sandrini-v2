import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandrinimaciel.design"),
  title: {
    default: "Sandrini Espindula Maciel — Designer Gráfica | Branding & Identidade Visual",
    template: "%s | Sandrini Espindula Maciel",
  },
  description:
    "Sandrini Espindula Maciel é designer gráfica especializada em branding, identidade visual e design editorial. Criando marcas com propósito, estética e estratégia.",
  keywords: [
    "designer gráfica",
    "branding",
    "identidade visual",
    "design editorial",
    "design de marca",
    "logo design",
    "design gráfico Brasil",
    "Sandrini Espindula Maciel",
  ],
  authors: [{ name: "Sandrini Espindula Maciel" }],
  creator: "Sandrini Espindula Maciel",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sandrinimaciel.design",
    siteName: "Sandrini Espindula Maciel",
    title: "Sandrini Espindula Maciel — Designer Gráfica",
    description:
      "Branding, identidade visual e design editorial. Criando marcas com propósito e estética.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandrini Espindula Maciel — Designer Gráfica",
    description: "Branding, identidade visual e design editorial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans font-light">
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}