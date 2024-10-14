import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FormFieldProps = {
  type: string;
  label: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  isTextArea?: boolean;
  classNames?: {
    [key: string]: string | string[];
  };
};

export type ValidFieldNames = "name" | "email" | "subject" | "message";
