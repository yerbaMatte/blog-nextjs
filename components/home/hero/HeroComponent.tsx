import { Link as NextUILink, Button, Code } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroComponent.module.scss";

const HeroComponent = () => {
  return (
    <div className={styles.hero_layout}>
      <div className={styles.hero_description}>
        <div className="md:w-3/4 lg:w-2/3">
          <Code
            className="mt-6 -ml-2"
            radius="none"
            size="md"
          >{`$ HELLO, MY NAME IS MIŁOSZ `}</Code>
          <h1 className={styles.hero_heading}>
            Welcome to{" "}
            <span className="font-bold bg-primary-500 text-background px-1">
              CODE BREW!
            </span>
          </h1>
          <p className="py-2 leading-7">
            <span className="font-bold">CODE BREW</span> by{" "}
            <NextUILink
              href="/about"
              className="text-base font-bold p-0"
              as={Link}
            >
              @yerbaMatte
            </NextUILink>{" "}
            is a spot for devs looking to level up their productivity and get
            their workflows tight.
          </p>
          <p className="py-2 leading-7">
            We dive into web dev and software engineering, sharing tips to help
            you code smarter, not harder.
          </p>
        </div>
        {/* TODO: subscribe/newsletter */}
        {/* <div className="flex md:w-3/4 lg:w-2/3 gap-x-4">
          <Input placeholder="Type your email ..." />
          <Button className="px-8">SUBSCRIBE</Button>
        </div> */}
        <div className="flex md:w-3/4 lg:w-2/3 gap-x-4">
          <Button
            variant="bordered"
            className={`${styles.cta_button} ${styles.blog_button}`}
            as={Link}
            href="/blog"
          >
            Go to Blog
          </Button>
          <Button
            variant="bordered"
            className={`${styles.cta_button} ${styles.about_button}`}
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
        alt="black/white hero"
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "50%",
          left: "75%",
          transform: "translate(-30%, -50%) scaleX(-1)",
          width: "400px",
          height: "400px",
        }}
        className="hidden lg:block"
        priority
      />
      <Image
        data-hide-on-theme="light"
        src="/images/hero_background.webp"
        width={400}
        height={400}
        alt="black/white hero"
        style={{
          objectFit: "contain",
          filter: "invert(100%)",
          position: "absolute",
          top: "50%",
          left: "75%",
          transform: "translate(-30%, -50%) scaleX(-1)",
          width: "400px",
          height: "400px",
        }}
        className="hidden lg:block"
        priority
      />
    </div>
  );
};

export default HeroComponent;
