import { FieldError, UseFormRegister } from "react-hook-form";

export type SubFormData = {
  email: string;
};

export type SubFieldProps = {
  type: string;
  label: string;
  name: "email";
  register: UseFormRegister<SubFormData>;
  error: FieldError | undefined;
  classNames?: {
    [key: string]: string | string[];
  };
  className?: string;
};
