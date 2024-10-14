"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types/contact/contactFormTypes";
import FormField from "./FormField";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import { ApplicationSchema } from "@/types/contact/contactFormSchema";

const inputWrapperSlot = {
  inputWrapper: ["border-[1px], border-divider"],
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ApplicationSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("SUCCESS", data);
    reset();
  };

  return (
    <Card className="my-8 w-full max-w-[800px] shadow-none bg-background grow">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Divider />
        <CardHeader className="flex">
          <Image
            data-hide-on-theme="light"
            src="svg/mate.svg"
            alt="yerba mate drink"
            width={32}
            height={32}
            style={{
              filter: "invert(100%)",
            }}
          />
          <Image
            data-hide-on-theme="dark"
            src="svg/mate.svg"
            alt="yerba mate drink"
            width={32}
            height={32}
          />
          <p className="text-lg ml-2 py-4">Fill out the form below!</p>
        </CardHeader>
        <CardBody className="flex flex-col gap-y-3 pt-0">
          <FormField
            type="name"
            label="Name"
            name="name"
            register={register}
            error={errors.name}
            classNames={inputWrapperSlot}
          />
          <FormField
            type="email"
            label="Email"
            name="email"
            register={register}
            error={errors.email}
            classNames={inputWrapperSlot}
          />
          <FormField
            type="subject"
            label="Subject"
            name="subject"
            register={register}
            error={errors.subject}
            classNames={inputWrapperSlot}
          />
          <FormField
            type="message"
            label="Message"
            name="message"
            register={register}
            error={errors.message}
            classNames={inputWrapperSlot}
            isTextArea
          />
        </CardBody>
        <CardFooter>
          <Button
            variant="bordered"
            className="w-full border-[1px] hover:border-foreground py-6"
            type="submit"
          >
            SEND MESSAGE
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
