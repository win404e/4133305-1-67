import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";
export type ValidationField =
  | "email"
  | "url"
  | "password"
  | "confirmpass"
  | "exp";

export type FormData = {
  email: string;
  url: string;
  exp: number;
  password: string;
  confirmpass: string;
};
export type FormFieldProps = {
  register: UseFormRegister<FormData>;
  name: ValidationField;
  error: FieldError | undefined;
  type: string;
  placeholder: string;
  valueAsNumber?: boolean;
  required?: boolean;
};
export const LoginSchema: ZodType<FormData> = z.object({
  url: z.string().url().includes("github.com", { message: "Invalid git site" }),
  email: z.string().email(),
  exp: z
    .number({
      required_error: "required !!",
      invalid_type_error: "1-10 years only",
    })
    .min(1)
    .max(10),
    password: z.string().min(6).max(20),
  confirmpass: z.string(),
});
