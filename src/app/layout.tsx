import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { ClientBackground } from "@/shared/ui/Background/ClientBackground";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["cyrillic", "latin"],
  variable: "--font-press-start",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmalabugin.ru"),
  title: "Алабугин Михаил",
  description: "Software Developer",
  openGraph: {
    title: "Алабугин Михаил | Software Developer",
    description: "Посмотрите мое портфолио и реализованные проекты",
    url: "https://mmalabugin.ru",
    siteName: "Portfolio Alabugin",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Превью портфолио Михаила Алабугина",
      },
    ],

    locale: "ru_RU",
    type: "website",
  },
  other: {
    "mailru-domain": "RiJeoRizDBJkgcXR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable}`}
      >
        <ClientBackground
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
          pixelSize={1}
          patternScale={1.75}
          patternDensity={1.2}
          liquid
          speed={0.1}
          edgeFade={0.1}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
