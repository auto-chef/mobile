import { UserModel } from "@/models";
import { SignInSchema } from "@/screens/auth/validators";
import { createContext, useState } from "react";

interface AuthContextProps {
  user: UserModel;
  signIn: (data: SignInSchema) => Promise<boolean>;
  signOut: () => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserModel>();

  async function signIn(data: SignInSchema) {
    setUser({
      name: "Erick Nathan",
      email: data.email,
      avatarUrl: "https://github.com/ericknathan.png",
      phone: "(11) 96119-7019"
    });
    return true;
  }

  async function signOut() {
    setUser(undefined);
    return true;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
