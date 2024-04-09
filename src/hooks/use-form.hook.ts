import { useState } from "react";
import { z } from "zod";

type UseFormProps<Schema> = {
  initialValues: Schema;
  validationSchema: z.Schema<Schema>;
};

export function useForm<Schema>({
  initialValues,
  validationSchema,
}: UseFormProps<Schema>) {
  const [errors, setErrors] = useState<Partial<Record<keyof Schema, string>>>(
    {}
  );
  const [formData, setFormData] = useState<Schema>(initialValues);

  function handleSubmit(callback: (data: Schema) => void) {
    return () => {
      try {
        const data = validationSchema.parse(formData);
        return callback(data);
      } catch (error) {
        if (error.errors) {
          setErrors(
            error.errors.reduce((acc, curr) => {
              acc[curr.path] = curr.message;
              return acc;
            }, {})
          );
        }
      }
    };
  }

  function register(
    name: keyof Schema,
    {
      onChange,
    }: {
      onChange?: (value: string) => string;
    } = {}
  ) {
    return {
      value: formData[name].toString(),
      onChangeText: (text) => {
        clearError(name);
        setValue(name, onChange ? onChange(text) : text);
      },
      error: errors[name],
    };
  }

  function setValue(name: keyof Schema, value: Schema[keyof Schema]) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function clearError(name: keyof Schema) {
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return {
    formData,
    handleSubmit,
    register,
    errors,
    setValue,
    clearError,
  };
}
