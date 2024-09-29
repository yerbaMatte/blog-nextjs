"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const changeThemeValue = theme === "dark" ? "light" : "dark";

  return (
    <div className="flex gap-4 cursor-pointer">
      <Image
        data-hide-on-theme="dark"
        src={`svg/dark.svg`}
        alt={`dark mode icon`}
        width={24}
        height={24}
        style={{
          maxWidth: "24px",
        }}
        onClick={() => setTheme(changeThemeValue)}
        loading="lazy"
        unoptimized
      />
      <Image
        data-hide-on-theme="light"
        src={`svg/light.svg`}
        alt={`light mode icon`}
        width={24}
        height={24}
        style={{
          filter: "invert(100%)",
          maxWidth: "24px",
        }}
        onClick={() => setTheme(changeThemeValue)}
        loading="lazy"
        unoptimized
      />
    </div>
  );
}
