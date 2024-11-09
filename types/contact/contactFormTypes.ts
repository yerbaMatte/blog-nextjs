import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FormFieldProps<T extends FieldValues> = {
  fieldType: "input" | "textarea";
  type: string;
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  variant?: ValidFieldVariants;
  classNames?: {
    [key: string]: string | string[];
  };
  className?: string;
};

export type ValidFieldNames = "name" | "email" | "subject" | "message";

export type ValidFieldVariants =
  | "bordered"
  | "flat"
  | "faded"
  | "underlined"
  | undefined;
