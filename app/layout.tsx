import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Rubik } from "next/font/google";
import { Divider } from "@nextui-org/react";

import Providers from "./providers";
import "./globals.css";

const Footer = dynamic(() => import("../components/layout/footer/Footer"));
import Header from "../components/layout/header/Header";

export const metadata: Metadata = {
  title: "Code Brew by yerbaMatte",
  description: "Essential Insights for Software Engineers.",
};

const roboto = Rubik({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={roboto.className}>
      <body>
        <Providers>
          <main className="flex flex-col min-h-screen">
            <Header footer={<Footer />} />
            <Divider />
            <section className="grow flex justify-center">{children}</section>
            <Divider />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
