import { Link as NextUILink, Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroComponent.module.scss";

const HeroComponent = () => {
  return (
    <div className={styles.hero_layout}>
      <div className={styles.hero_description}>
        <div className="md:w-3/4 lg:w-1/2">
          <h1 className={styles.hero_heading}>
            Welcome to <span className="font-bold">CODE BREW!</span>
          </h1>
          <p className="py-1 leading-7">
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
          <p className="py-1 leading-7">
            It offers insights on a wide range of topics, from mobile and web
            development to general software engineering.
          </p>
        </div>
        <div className="flex w-full gap-x-4">
          <Button
            variant="bordered"
            className={`${styles.cta_button} bg-foreground text-background hover:bg-background hover:text-foreground`}
            as={Link}
            href="/blog"
          >
            Go to Blog
          </Button>
          <Button
            variant="bordered"
            className={`${styles.cta_button} bg-background text-foreground hover:bg-foreground hover:text-background`}
            as={Link}
            href="/about"
          >
            About me
          </Button>
        </div>
      </div>
      <Image
        data-hide-on-theme="dark"
        src="/images/hero_background.webp"
        width={400}
        height={400}
        alt="computer hero background"
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "50%",
          left: "75%",
          transform: "translate(-30%, -50%)",
          objectPosition: "right bottom",
        }}
        className="hidden lg:block"
        priority
      />
      <Image
        data-hide-on-theme="light"
        src="/images/hero_background.webp"
        width={400}
        height={400}
        alt="computer hero background"
        style={{
          objectFit: "contain",
          filter: "invert(100%)",
          position: "absolute",
          top: "50%",
          left: "75%",
          transform: "translate(-30%, -50%)",
          objectPosition: "right bottom",
        }}
        className="hidden lg:block"
        priority
      />
    </div>
  );
};

export default HeroComponent;
