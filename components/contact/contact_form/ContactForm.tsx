"use client";

import styles from "./ContactForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ContactFormData } from "@/types/contact/contactFormTypes";
import FormField from "./FormField";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { ContactSchema } from "@/types/contact/contactFormSchema";

const inputWrapperSlot = {
  inputWrapper: ["border-[1px], border-divider"],
};

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [showPopover, setShowPopover] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setShowPopover(true);
        setTimeout(() => {
          setShowPopover(false);
        }, 3000);
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card
      className={`w-full max-w-[800px] shadow-none bg-background ${className}`}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="flex">
          <Image
            src="svg/mate.svg"
            alt="yerba mate drink"
            width={32}
            height={32}
            className={styles.mate}
          />
          <p className="text-lg ml-2 py-4">Fill out the form below!</p>
        </CardHeader>
        <CardBody className="flex flex-col gap-y-3 pt-0">
          <FormField
            type="name"
            label="Name"
            name="name"
            fieldType="input"
            register={register}
            error={errors.name}
            variant="bordered"
            classNames={inputWrapperSlot}
          />
          <FormField
            type="email"
            label="Email"
            name="email"
            fieldType="input"
            variant="bordered"
            register={register}
            error={errors.email}
            classNames={inputWrapperSlot}
          />
          <FormField
            type="subject"
            label="Subject"
            name="subject"
            fieldType="input"
            variant="bordered"
            register={register}
            error={errors.subject}
            classNames={inputWrapperSlot}
          />
          <FormField
            type="message"
            label="Message"
            name="message"
            variant="bordered"
            register={register}
            error={errors.message}
            classNames={inputWrapperSlot}
            fieldType="textarea"
          />
        </CardBody>
        <CardFooter>
          <Popover isOpen={showPopover} placement="top">
            <PopoverTrigger>
              <Button
                variant="bordered"
                className="w-full border-[1px] hover:border-foreground py-6"
                type="submit"
                isLoading={isSubmitting}
              >
                {isSubmitting ? "SENDING!" : "SEND MESSAGE"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-primary-500">
              <div className="px-12 py-2">
                <div className="text-small font-bold text-background text-center">
                  SUCCESS
                </div>
                <div className="text-tiny text-background">
                  Your message has been sent!
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
