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
      name: "Diego Fernandes",
      email: data.email,
      avatarUrl: "https://github.com/diego3g.png",
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
