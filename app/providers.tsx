"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" storageKey="theme">
      {children}
    </NextThemesProvider>
  );
}
