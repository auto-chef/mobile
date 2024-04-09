import { z } from "zod";

export const recoverPasswordSchema = z.object({
  email: z.string().email("Insira um e-mail inválido"),
});

export type RecoverPasswordSchema = z.infer<typeof recoverPasswordSchema>;
