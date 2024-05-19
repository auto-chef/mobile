import { UserModel } from "@/models";
import { signInRequest } from "@/screens/auth/requests";
import { SignInSchema } from "@/screens/auth/validators";
import { createContext, useState } from "react";

interface AuthContextProps {
  user: UserModel;
  signIn: (data: SignInSchema) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserModel>();

  async function signIn(data: SignInSchema) {
    const response = await signInRequest(data);

    setUser(response?.data.user);
  }

  async function signOut() {
    setUser(undefined);
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
