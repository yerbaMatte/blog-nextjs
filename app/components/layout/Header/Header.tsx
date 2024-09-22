"use client";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextUILink,
} from "@nextui-org/react";

import styles from "./Header.module.scss";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const menuItems = ["Home", "Blog", "About", "Contact", "Resume"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      if (img) {
        img.style.filter = theme === "light" ? "none" : "invert(100%)";
      }
    });
  }, [theme]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={styles.header_layout}
      classNames={{ wrapper: "px-1 md:px-6" }}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image
            ref={(el) => {
              imageRefs.current[0] = el;
            }}
            src="svg/mate.svg"
            alt="yerba mate drink"
            width={48}
            height={48}
            style={{
              filter: "invert(100%)",
              marginRight: "0.25rem",
            }}
            priority
          />

          <div className="flex flex-col">
            <h2 className="uppercase text-xl p-0">Code Brew</h2>
            <p className="text-xs">
              <span>by </span>
              <NextUILink
                isBlock
                isExternal
                href="https://www.linkedin.com/in/milosz-lewandowskii/"
                className="text-base font-bold p-0"
              >
                @yerbaMatte
              </NextUILink>
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex w-full">
        <div className="w-full flex gap-x-0 justify-end md:justify-center sm:gap-x-4">
          {menuItems.map((item) => (
            <NavbarItem key={item}>
              <Link href={item === "Resume" ? "#" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-x-2 ml-2 md:gap-x-4">
        <Link href="https://www.linkedin.com/in/milosz-lewandowskii/">
          <Image
            ref={(el) => {
              imageRefs.current[1] = el;
            }}
            src="svg/linkedin.svg"
            alt="linkedin profile"
            width={24}
            height={24}
            style={{
              filter: "invert(100%)",
              maxWidth: "24px",
            }}
          />
        </Link>
        <Link href="https://www.github.com/yerbaMatte">
          <Image
            ref={(el) => {
              imageRefs.current[2] = el;
            }}
            src="svg/github.svg"
            alt="github profile"
            width={24}
            height={24}
            style={{
              filter: "invert(100%)",
              maxWidth: "24px",
            }}
          />
        </Link>
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUILink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
