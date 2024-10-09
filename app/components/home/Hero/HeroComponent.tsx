import { Link as NextUILink, Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroComponent.module.scss";

const HeroComponent = () => {
  return (
    <div
      className={`container flex items-center justify-center gap-x-8 ${styles.hero}`}
    >
      <div className="flex flex-col h-full justify-center">
        <div>
          <h1 className="max-w-[310px] md:max-w-[600px] text-h2 md:text-h1 font-normal leading-tight mb-4 md:w-1/2">
            Welcome to <span className="font-bold">CODE BREW!</span>
          </h1>
          <p className="py-1 leading-7 md:w-3/4">
            <span className="font-bold">CODE BREW</span> by{" "}
            <NextUILink
              href="/about"
              className="text-base font-bold p-0"
              as={Link}
            >
              @yerbaMatte
            </NextUILink>{" "}
            is a blog for Software Engineers focused on enhancing productivity
            and optimizing workflows.
          </p>
          <p className="py-1 leading-7 md:w-3/4">
            It offers insights on a wide range of topics, from mobile and web
            development to general software engineering.
          </p>
        </div>
        <div className="flex w-full gap-x-4">
          <Button
            variant="bordered"
            className={`full uppercase border-[1px] border-foreground bg-foreground font-medium text-background text-medium my-8 md:w-1/2 ${styles.cta_button}`}
            as={Link}
            href="/blog"
          >
            Go to Blog
          </Button>
        </div>
      </div>
      <div className="hidden md:block w-1/2 relative h-full">
        <Image
          data-hide-on-theme="dark"
          src="/images/hero_background.webp"
          fill
          alt="computer hero background"
          style={{ objectFit: "contain" }}
          priority
        />
        <Image
          data-hide-on-theme="light"
          src="/images/hero_background.webp"
          fill
          alt="computer hero background"
          style={{ objectFit: "contain", filter: "invert(100%)" }}
          priority
        />
      </div>
    </div>
  );
};

export default HeroComponent;
