import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Open_Sans } from "next/font/google";
import { Divider } from "@nextui-org/react";

import Providers from "./Providers";
import "./globals.css";

const Footer = dynamic(() => import("../components/layout/footer/Footer"));
import Header from "../components/layout/header/Header";
import ScrollFix from "./ScrollFix";

export const metadata: Metadata = {
  title: {
    template: "%s | Code Brew",
    default: "Code Brew Blog: Master Software Development & Tech Skills",
  },
  description:
    "Discover essential insights for software engineers at Code Brew Blog. Explore expert tips, tutorials, and resources on software development, web design, programming, scripting, DevOps, and cutting-edge technologies. Elevate your skills and stay ahead in the fast-paced world of tech innovation",
  metadataBase: new URL("https://www.blog.yerbamatte.com"),
  authors: [
    { name: "Miłosz Lewandowski", url: "https://github.com/yerbaMatte" },
  ],
  openGraph: {
    title: "Code Brew",
    description:
      "A new newsletter packed with insights, resources, and coding tips for developers.",
    url: "https://www.blog.yerbamatte.com",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Full-page preview of Code Brew",
      },
    ],
    type: "website",
    siteName: "Code Brew",
    locale: "en_US",
  },
  icons: { icon: "/favicon.ico" },
  keywords: [
    "software engineering",
    "coding tips",
    "developer insights",
    "programming resources",
    "web development",
    "newsletter for developers",
    "Code Brew",
    "technology news",
    "developer tools",
  ],
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
