import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
