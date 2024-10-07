import { AuthModel } from "pocketbase";
import { createContext, useContext } from "react";

type UserContextProps = {
  user: AuthModel | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => Promise<void>;
};

const AuthContext = createContext<UserContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthContext;
