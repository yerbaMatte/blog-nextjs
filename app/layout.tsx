import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

import Providers from "./providers";
import "./globals.css";

// footer lazy loading
const Footer = dynamic(() => import("./components/layout/Footer"));
import Header from "./components/layout/Header/Header";

export const metadata: Metadata = {
  title: "Code Brew by yerbaMatte",
  description: "Essential Insights for Software Engineers.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body>
        <Providers>
          <main className="layout-container">
            <Header />
            <section className="content">{children}</section>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
