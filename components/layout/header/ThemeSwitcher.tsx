"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src={`/svg/light.svg`}
        alt={`light mode icon`}
        width={24}
        height={24}
        style={{
          filter: "invert(100%)",
          maxWidth: "24px",
          cursor: "pointer",
        }}
        onClick={() => setTheme("light")}
        priority
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <Image
        src={`/svg/light.svg`}
        alt={`light mode icon`}
        width={24}
        height={24}
        style={{
          filter: "invert(100%)",
          maxWidth: "24px",
          cursor: "pointer",
        }}
        onClick={() => setTheme("light")}
        priority
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Image
        src={`/svg/dark.svg`}
        alt={`dark mode icon`}
        width={24}
        height={24}
        style={{
          maxWidth: "24px",
          cursor: "pointer",
        }}
        onClick={() => setTheme("dark")}
        priority
      />
    );
  }
}
