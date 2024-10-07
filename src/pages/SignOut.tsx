import { FormEvent } from "react";
import { useAuth } from "../context/authContext";

function SignOut() {
  const { logout } = useAuth();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    await logout();
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <button type="submit">Logout</button>
    </form>
  );
}

export default SignOut;
