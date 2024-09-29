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

import { Skeleton } from "@nextui-org/react";

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

export default function Header({ children }: { children: JSX.Element }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname().substring(1);
  const menuItems = useMemo(() => ["Home", "Blog", "About", "Contact"], []);
  const router = useRouter();

  const onMenuItemClick = () => {
    // router.push("/about");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Skeleton isLoaded={true}>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        disableAnimation
        className={styles.header_layout}
        height="8rem"
        classNames={{
          wrapper: "px-2 md:px-6",
          item: [
            "relative",
            "py-1",
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
          menuItem: [
            "py-2",
            "relative",
            "data-[active=true]:before:w-full",
            "data-[active=true]:font-semibold",
            "data-[active=true]:text-primary-500",
            "before:content-['']",
            "before:absolute",
            "before:bottom-0",
            "before:left-0",
            "before:h-[2px]",
            "before:bg-primary-500",
          ],
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
                  unoptimized
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
                  unoptimized
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
              data-hide-on-theme="dark"
              isExternal
              href="https://www.linkedin.com/in/milosz-lewandowskii/"
            >
              <Image
                src="svg/linkedin.svg"
                alt="linkedin profile"
                width={24}
                height={24}
                unoptimized
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
                unoptimized
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
          <ul className="w-full flex flex-col items-center gap-y-2">
            {menuItems.map((item, index) => (
              <NavbarMenuItem
                key={`${item}-${index}`}
                isActive={
                  item === "Home"
                    ? pathname === ""
                    : item.toLowerCase() === pathname
                }
              >
                <NextUILink
                  className="text-3xl"
                  onClick={() => onMenuItemClick()}
                  color="foreground"
                  as={Link}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </NextUILink>
              </NavbarMenuItem>
            ))}
          </ul>
          <li>{children}</li>
        </NavbarMenu>
      </Navbar>
    </Skeleton>
  );
}
