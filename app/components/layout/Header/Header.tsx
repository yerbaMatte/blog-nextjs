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

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header({ children }: { children: JSX.Element }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const pathname = usePathname().substring(1);
  const menuItems = useMemo(() => ["Home", "Blog", "About", "Contact"], []);
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
      disableAnimation
      className={styles.header_layout}
      height="8rem"
      classNames={{
        wrapper: "px-2 md:px-6",
        item: [
          "relative",
          "data-[active=true]:before:w-full",
          "data-[active=true]:font-semibold",
          "data-[active=true]:text-primary-500",
          "before:content-['']",
          "before:absolute",
          "before:bottom-0",
          "before:left-0",
          "before:h-[1px]",
          "before:bg-primary-500",
          "before:w-0",
          "hover:before:w-full",
          "hover:text-primary-500",
          "before:transition-all",
          "before:duration-600",
          "before:ease-in-out",
        ],
        menuItem: ["text-center", "py-2"],
      }}
    >
      <NavbarContent justify="start">
        <li>
          <NavbarBrand>
            <Link href="/" className="min-w-12">
              <Image
                ref={(el) => {
                  imageRefs.current[0] = el;
                }}
                src="svg/mate.svg"
                alt="yerba mate drink"
                width={48}
                height={48}
                unoptimized
                style={{
                  filter: "invert(100%)",
                  marginRight: "0.25rem",
                }}
              />
            </Link>
            <div className="flex flex-col">
              <h2 className="uppercase text-xl p-0">Code Brew</h2>
              <p className="text-xs">
                <span>by </span>
                <NextUILink
                  href="/about"
                  className="text-base font-bold p-0"
                  as={Link}
                >
                  @yerbaMatte
                </NextUILink>
              </p>
            </div>
          </NavbarBrand>
        </li>
      </NavbarContent>
      <NavbarContent
        justify="center"
        className="hidden sm:flex w-full gap-x-0 justify-end md:justify-center sm:gap-x-4"
      >
        {menuItems.map((item) => (
          <NavbarItem
            isActive={
              item === "Home"
                ? pathname === ""
                : item.toLowerCase() === pathname
            }
            key={item}
          >
            <NextUILink
              color="foreground"
              as={Link}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </NextUILink>
          </NavbarItem>
        ))}
        <NavbarItem key={"resume"} className={styles.no_hover_effects}>
          <NextUILink color="foreground" isExternal showAnchorIcon href="#">
            Resume
          </NextUILink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-x-2 ml-1 md:gap-x-4">
        <li className="h-6">
          <NextUILink
            isExternal
            href="https://www.linkedin.com/in/milosz-lewandowskii/"
          >
            <Image
              ref={(el) => {
                imageRefs.current[1] = el;
              }}
              src="svg/linkedin.svg"
              alt="linkedin profile"
              width={24}
              height={24}
              unoptimized
              style={{
                filter: "invert(100%)",
                maxWidth: "24px",
              }}
              className={styles.svg_icon}
            />
          </NextUILink>
        </li>
        <li className="h-6">
          <NextUILink isExternal href="https://www.github.com/yerbaMatte">
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
              unoptimized
              className={styles.svg_icon}
            />
          </NextUILink>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden mr-2"
      />
      <NavbarMenu className="items-center justify-between">
        <ul className="w-full">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextUILink
                className="text-2xl"
                color="foreground"
                as={Link}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </NextUILink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem key={"resume"}>
            <NextUILink
              color="foreground"
              isExternal
              showAnchorIcon
              href="#"
              className="text-2xl"
            >
              Resume
            </NextUILink>
          </NavbarMenuItem>
        </ul>
        <li>{children}</li>
      </NavbarMenu>
    </Navbar>
  );
}
