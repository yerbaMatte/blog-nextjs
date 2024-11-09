import { FormFieldProps } from "@/types/contact/contactFormTypes";
import { Input, Textarea } from "@nextui-org/react";
import { FieldValues } from "react-hook-form";

const FormField = <T extends FieldValues>({
  fieldType,
  type,
  label,
  name,
  register,
  error,
  variant,
  classNames,
  className,
}: FormFieldProps<T>) => {
  switch (fieldType) {
    case "textarea":
      return (
        <Textarea
          {...register(name)}
          variant={variant}
          label={label}
          type={type}
          classNames={classNames}
          isInvalid={!!error}
          errorMessage={error?.message}
        />
      );

    case "input":
    default:
      return (
        <Input
          type={type}
          label={label}
          {...register(name)}
          isClearable
          variant={variant}
          classNames={classNames}
          className={className}
          isInvalid={!!error}
          errorMessage={error?.message}
        />
      );
  }
};

export default FormField;
