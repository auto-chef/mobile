import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status.toString().startsWith("5")) {
        throw new Error(
          "Ocorreu um erro no servidor, tente novamente mais tarde!"
        );
      }
    } else {
      throw new Error(
        "Ocorreu um erro inesperado, tente novamente mais tarde!"
      );
    }
  }
);
