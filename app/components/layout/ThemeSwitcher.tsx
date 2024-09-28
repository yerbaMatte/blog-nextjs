"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    imageRef.current!.style.filter =
      theme === "light" ? "none" : "invert(100%)";
  }, [theme]);

  const onModeIconChange = () => {
    const changeThemeValue = theme === "dark" ? "light" : "dark";
    setTheme(changeThemeValue);
    imageRef.current!.src = `svg/${theme}.svg`;

    if (theme === "dark") {
      imageRef.current!.style.filter = "none";
    } else {
      imageRef.current!.style.filter = "invert(100%)";
    }
  };

  return (
    <div className="flex gap-4 cursor-pointer">
      <Image
        ref={imageRef}
        src={`svg/light.svg`}
        alt={`light mode icon`}
        width={24}
        height={24}
        style={{
          filter: "invert(100%)",
          maxWidth: "24px",
        }}
        onClick={() => onModeIconChange()}
        loading="lazy"
        unoptimized
      />
    </div>
  );
}
