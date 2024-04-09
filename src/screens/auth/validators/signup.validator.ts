import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(100, "O nome deve ter no máximo 100 caracteres"),
  cpf: z.string().refine((cpf) => {
    const cpfNumbers = cpf.replace(/\D/g, "");
    return cpfNumbers.length === 11;
  }, "O CPF deve ter 11 caracteres"),
  birthDate: z
    .date({ required_error: "É necessário informar a data de nascimento" })
    .refine((date) => {
      const now = new Date();
      return date < now;
    }, "A data de nascimento deve ser menor que a data atual"),
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

export type SignUpSchema = z.infer<typeof signUpSchema>;
