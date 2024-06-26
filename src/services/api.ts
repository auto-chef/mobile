import { API_BASE_URL } from "@env";
import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isApiError(error)) {
      if (error.response?.status.toString().startsWith("5")) {
        throw new Error(
          "Ocorreu um erro no servidor, tente novamente mais tarde!"
        );
      }

      if (error.message.includes("Network Error")) {
        throw new Error("Não foi possível se conectar ao servidor 😢");
      }
    }

    throw error;
  }
);

export const isApiError = axios.isAxiosError;
