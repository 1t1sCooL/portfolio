import type { Metadata } from "next";
import Head from "next/head";
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
  const criticalCss = `
    body {
      background-color: rgba(10, 10, 10, 0.8);
      color: rgba(237, 237, 237, 1);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      font-family: var(--font-geist-sans), sans-serif;
    }
    h1, h2, h3, h4 {
      color: rgba(237, 237, 237, 1);
      letter-spacing: -0.02em;
    }
    ::selection {
      background-color: rgba(59, 130, 246, 1);
      color: white;
    }
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 24px 0;
      transition: all 0.3s ease;
      font-family: var(--font-press-start), sans-serif;
      background: rgba(10, 10, 10, 0);
      backdrop-filter: none;
      border-bottom: 1px solid transparent;
    }
    .header .container {
      max-width: auto;
      margin: 0 auto;
      padding: 0 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 0px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nav a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: rgba(226, 232, 241, 1);
      font-size: 1.2rem;
      font-weight: 500;
      transition: color 0.3s ease;
      word-spacing: -30px;
      text-rendering: optimizeSpeed;
    }
    .nav a:hover {
      color: rgba(59, 130, 246, 1);
    }
    .fullName {
      font-weight: 800;
      font-size: 2rem;
      letter-spacing: -1px;
      color: white;
    }
    .section {
      padding: 120px 0 20px;
      background: rgba(10, 10, 10, 0.8);
      font-family: var(--font-press-start), sans-serif;
      word-spacing: -5px;
    }
    .section .container {
      text-align: center;
      max-width: 100%;
      padding: 1rem 82px;
      display: grid;
      grid-template-columns: 1.7fr 1fr;
      gap: 80px;
      align-items: center;
    }
    .title {
      font-size: 1.7rem;
      line-height: 1.1;
      margin: 12px 0 24px 0;
      word-spacing: -15px;
      text-align: center;
      color: rgba(237, 237, 237, 1);
    }
    .text {
      color: rgba(226, 232, 241, 1);
      line-height: 1.7;
      font-size: 1.1rem;
      text-align: center;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
      justify-content: center;
    }
    .skillTag {
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 100px;
      font-size: 0.9rem;
      color: white;
    }
    @media (max-width: 768px) {
      .header .container {
        padding: 0 20px;
      }
      .nav {
        display: none;
      }
      .section {
        padding: 50px 0 20px;
      }
      .section .container {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 1rem 20px;
      }
    }
    @media (max-width: 570px) {
      .section {
        padding: 80px 0 20px;
      }
      .fullName {
        display: none;
      }
      .shortName {
        display: initial;
      }
    }
  `;

  return (
    <html lang="ru">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </Head>
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
