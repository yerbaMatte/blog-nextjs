import { Input, Button } from "@nextui-org/react";
import styles from "./NewsletterBanner.module.scss";
import Image from "next/image";

const NewsletterBanner = () => {
  return (
    <div className={styles.newsletter_banner}>
      <div className={styles.content}>
        <div className={styles.leaf_container}>
          <Image
            src="/svg/leaf.svg"
            alt="yerba mate drink"
            width={50}
            height={50}
            className={styles.leaf_image}
            priority
          />
        </div>
        <div className="flex flex-col items-start justify-center grow">
          <h2 className={styles.title}>Subscribe now!</h2>
          <p className={styles.description}>Fuel Your Brain Brew 🧠 🎉</p>
        </div>
      </div>
      <div className="relative w-full">
        <Input
          type="email"
          placeholder="Your email"
          aria-label="Email for newsletter"
          className="w-full -z-1 text-sm"
          classNames={{ inputWrapper: ["rounded-tl-none", "opacity-95"] }}
        />
        <Button
          aria-label="Subscribe to newsletter"
          className="absolute top-0 end-0 bg-primary-500 z-1 !min-w-6 md:!min-w-12 !p-0 !rounded-t-none rounded-l-none"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default NewsletterBanner;
