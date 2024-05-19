import { api, isApiError } from "../../services/api";

import { UserModel } from "@/models";
import {
  RecoverPasswordSchema,
  SignInSchema,
  SignUpSchema,
} from "@/screens/auth/validators";

export async function signInRequest(data: SignInSchema) {
  try {
    const response = await api.post<{ user: UserModel }>("/auth/signin", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      if (error.response?.status === 401) {
        throw new Error("Credenciais incorretas, tente novamente!");
      }
    }

    throw error;
  }
}

export async function signUpRequest(data: SignUpSchema) {
  try {
    const response = await api.post<UserModel>("/auth/signup", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      if (error.response?.status === 409) {
        throw new Error("E-mail ou CPF já cadastrado!");
      }
    }

    throw error;
  }
}

export async function recoverPasswordRequest(data: RecoverPasswordSchema) {
  try {
    const response = await api.post("/auth/recover-password", data);
    return response;
  } catch (error) {
    if (isApiError(error)) {
      if (error.response?.status === 404) {
        throw new Error("Cadastro não encontrado!");
      }
    }

    throw error;
  }
}
