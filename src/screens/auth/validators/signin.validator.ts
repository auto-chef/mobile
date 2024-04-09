import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Insira um e-mail inválido"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .refine((password) => {
      return /[A-Z]/.test(password);
    }, "A senha deve conter ao menos uma letra maiúscula")
    .refine((password) => {
      return /[a-z]/.test(password);
    }, "A senha deve conter ao menos uma letra minúscula")
    .refine((password) => {
      return /[0-9]/.test(password);
    }, "A senha deve conter ao menos um número"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
