import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Open_Sans } from "next/font/google";
import { Divider } from "@nextui-org/react";

import Providers from "./Providers";
import "./globals.css";

const Footer = dynamic(() => import("../components/layout/footer/Footer"));
import Header from "../components/layout/header/Header";
import ScrollFix from "./ScrollFix";

export const metadata = {
  title: "Your Page Title",
  description: "A description of your page",
  metadataBase: new URL("https://blog.yerbamatte.com"),
  openGraph: {
    images: [
      {
        url: "/images/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: ["/images/preview.jpg"],
  },
};

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      content="user-scalable=no"
      suppressHydrationWarning
      lang="en"
      className={openSans.className}
    >
      <ScrollFix />
      <body>
        <Providers>
          <main className="flex flex-col min-h-screen">
            <div className="scroll-top-anchor" />
            <Header footer={<Footer />} />
            <Divider />
            <section className="grow flex flex-col justify-center items-center">
              {children}
            </section>
            <Divider />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
