import { FormFieldProps } from "@/types/contact/contactFormTypes";
import { Input, Textarea } from "@nextui-org/react";

const FormField: React.FC<FormFieldProps> = ({
  type,
  label,
  name,
  register,
  error,
  classNames,
  isTextArea = false,
}) => (
  <>
    {isTextArea ? (
      <Textarea
        {...register(name)}
        variant="bordered"
        label={label}
        type={type}
        classNames={classNames}
        isInvalid={!!error}
        errorMessage={error?.message}
      />
    ) : (
      <Input
        type={type}
        label={label}
        {...register(name)}
        isClearable
        variant="bordered"
        classNames={classNames}
        isInvalid={!!error}
        errorMessage={error?.message}
      />
    )}
  </>
);
export default FormField;
