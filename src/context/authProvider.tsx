import { ReactNode, useState } from "react";
import AuthContext from "./authContext";
import { AuthModel, ClientResponseError } from "pocketbase";
import pb from "../lib/pocketbase";

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthModel | null>(() => {
    return pb.authStore.model;
  });

  /**
   * This function will create a new user from their email and password.
   * @param username user valid username
   * @param email user valid email
   * @param password user valid password
   */
  const register = async (
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    try {
      await pb.collection("users").create({
        username,
        email,
        password,
        passwordConfirm,
      });
    } catch (error) {
      const pocketError = error as ClientResponseError;
      console.log(pocketError.message);
    }
  };

  /**
   * This function will create a session from the username and password we pass to it, if they get a match in the database. If not, throws an Exception.
   * @param username user valid username
   * @param password user valid password
   */
  const login = async (username: string, password: string) => {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(username, password);
      setUser(authData.record);
    } catch (error) {
      const pocketError = error as ClientResponseError;
      console.log(pocketError.message);
    }
  };

  /**
   * This function will logout the user deleting the current session, throwing an Exception if there's an error.
   */
  const logout = async () => {
    // "logout" the last authenticated account
    pb.authStore.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
