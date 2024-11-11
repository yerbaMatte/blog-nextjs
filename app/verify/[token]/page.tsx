"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Spinner } from "@nextui-org/spinner";
import TitleSection from "@/components/ui/title-section/TitleSection";
import styles from "./verification.module.scss";

export default function Page() {
  const { token } = useParams();

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/verify?token=${token}`);
        const data = await response.json();

        if (response.ok) {
          setMessage(`${data.message} ✅`);
        } else {
          setMessage(`${data.message} ❌`);
        }
      } catch (err) {
        console.error("Error verifying email:", err);
        setMessage("There was an error with the verification process.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex justify-center w-full px-2 ">
      <div className={styles.verification_wrapper}>
        <Image
          src="/svg/leaf.svg"
          alt="yerba mate drink"
          width={100}
          height={100}
          className={styles.leaf_image}
          priority
        />
        <TitleSection
          title="Verify your email"
          className="flex flex-col gap-y-4"
        >
          {!message && (
            <Spinner
              size="lg"
              label="Getting response from the server ..."
              classNames={{
                base: ["flex-row", "gap-x-2 md:gap-x-6"],
                label: ["text-sm md:text-xl"],
                circle2: ["text-primary-500"],
              }}
            />
          )}
          <p className="text-sm md:text-xl">{message}</p>
        </TitleSection>
      </div>
    </div>
  );
}
