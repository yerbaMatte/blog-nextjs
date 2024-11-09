import { Code } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroComponent.module.scss";
import NewsletterBanner from "@/components/blog/newsletter-banner/NewsletterBanner";

const HeroComponent = () => {
  return (
    <div className={styles.hero_layout}>
      <div className={styles.hero_description}>
        <div className="md:w-3/4 lg:w-2/3">
          <Code
            className="mt-6 -ml-2"
            radius="none"
            size="md"
          >{`$ HELLO, MY NAME IS MIŁOSZ`}</Code>
          <h1 className={styles.hero_heading}>
            Welcome to{" "}
            <span className="font-bold bg-primary-500 text-background px-1">
              CODE BREW!
            </span>
          </h1>
          <p className="py-2 leading-7">
            <span className="font-bold">CODE BREW</span> by{" "}
            <Link className="text-primary font-semibold" href="/about">
              @yerbaMatte
            </Link>{" "}
            is a spot for devs looking to level up their productivity and get
            their workflows tight.
          </p>
          <p className="py-2 leading-7">
            We dive into web dev and software engineering, sharing tips to help
            you code smarter, not harder.
          </p>
        </div>

        <div className="md:w-3/4 lg:w-2/3 gap-x-4">
          <NewsletterBanner />
        </div>
      </div>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/hero_background_e71bd77857.webp`}
        width={300}
        height={300}
        alt="black/white hero"
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "50%",
          left: "75%",
          transform: "translate(-30%, -50%) scaleX(-1)",
          width: "300px",
          height: "300px",
        }}
        className={`hidden lg:block ${styles.hero}`}
        priority
      />
    </div>
  );
};

export default HeroComponent;
