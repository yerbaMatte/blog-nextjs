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
import { item, menu, menuItem, wrapper } from "./headerSlots";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header({ footer }: { footer: JSX.Element }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname().slice(1);
  const menuItems = useMemo(() => ["Home", "Blog", "About", "Contact"], []);

  const isTabActive = (item: string) =>
    item === "Home" ? pathname === "" : item.toLowerCase() === pathname;

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className={styles.header_layout}
      height="8rem"
      classNames={{
        wrapper,
        item,
        menuItem,
        menu,
      }}
    >
      <NavbarContent justify="start">
        <li>
          <NavbarBrand>
            <Link href="/" className="min-w-12">
              <Image
                data-hide-on-theme="light"
                src="svg/mate.svg"
                alt="yerba mate drink"
                width={48}
                height={48}
                style={{
                  filter: "invert(100%)",
                  marginRight: "0.25rem",
                }}
              />
              <Image
                data-hide-on-theme="dark"
                src="svg/mate.svg"
                alt="yerba mate drink"
                width={48}
                height={48}
                style={{
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
      <NavbarContent justify="center" className={styles.navbar_content_item}>
        {menuItems.map((item) => (
          <NavbarItem isActive={isTabActive(item)} key={item}>
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

      <NavbarContent justify="end" className={styles.navbar_content_icons}>
        <li className="h-6">
          <NextUILink
            data-hide-on-theme="dark"
            isExternal
            href="https://www.linkedin.com/in/milosz-lewandowskii/"
          >
            <Image
              src="svg/linkedin.svg"
              alt="linkedin profile"
              width={24}
              height={24}
              style={{
                maxWidth: "24px",
              }}
              className={styles.svg_icon}
            />
          </NextUILink>
          <NextUILink
            data-hide-on-theme="light"
            isExternal
            href="https://www.linkedin.com/in/milosz-lewandowskii/"
          >
            <Image
              src="svg/linkedin.svg"
              alt="linkedin profile"
              width={24}
              height={24}
              style={{
                filter: "invert(100%)",
                maxWidth: "24px",
              }}
              className={styles.svg_icon}
            />
          </NextUILink>
        </li>
        <li className="h-6">
          <NextUILink
            data-hide-on-theme="dark"
            isExternal
            href="https://www.github.com/yerbaMatte"
          >
            <Image
              src="svg/github.svg"
              alt="github profile"
              width={24}
              height={24}
              style={{
                maxWidth: "24px",
              }}
              className={styles.svg_icon}
            />
          </NextUILink>
          <NextUILink
            data-hide-on-theme="light"
            isExternal
            href="https://www.github.com/yerbaMatte"
          >
            <Image
              src="svg/github.svg"
              alt="github profile"
              width={24}
              height={24}
              style={{
                filter: "invert(100%)",
                maxWidth: "24px",
              }}
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
      <NavbarMenu>
        <ul className={styles.navbar_mobile_list}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={isTabActive(item)}
            >
              <NextUILink
                className="text-2xl"
                color="foreground"
                as={Link}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </NextUILink>
            </NavbarMenuItem>
          ))}
        </ul>
        <li>{footer}</li>
      </NavbarMenu>
    </Navbar>
  );
}
