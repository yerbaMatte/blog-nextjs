"use client";

import { Button } from "@nextui-org/react";
import styles from "./NewsletterBanner.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriptionSchema } from "@/types/contact/subFormSchema";
import { SubFormData } from "@/types/contact/subFormTypes";
import FormField from "@/components/contact/contact_form/FormField";
import { useState } from "react";

const NewsletterBanner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubFormData>({
    resolver: zodResolver(SubscriptionSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [message, setMessage] = useState<string>("");

  const onSubmit = async (data: SubFormData) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        reset();
        setMessage(responseData.message);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage(responseData.message);
      }
    } catch (error) {
      setMessage("Error submitting form.");
    }
  };

  return (
    <div>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              type="email"
              label="Email"
              name="email"
              register={register}
              isClearable={false}
              error={errors.email}
              fieldType="input"
              className="w-full -z-1 text-sm h-10"
              classNames={{
                inputWrapper: ["rounded-tl-none", "opacity-95"],
              }}
            />
            <Button
              aria-label="Subscribe to newsletter"
              className="absolute top-0 end-0 h-full bg-primary-500 z-10 !min-w-12 md:!min-w-20 !p-0 !rounded-t-none rounded-l-none"
              isLoading={isSubmitting}
              onClick={handleSubmit(onSubmit)}
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
          </form>
        </div>
      </div>
      {
        <p className="py-6 text-sm text-center h-16 w-full min-h-[64px]">
          {message}
        </p>
      }
    </div>
  );
};

export default NewsletterBanner;
