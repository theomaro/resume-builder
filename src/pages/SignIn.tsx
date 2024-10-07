import { FormEvent, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [user, setUser] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { username, password } = user;
    await login(username, password).finally(() => navigate("/"));
  };

  return (
    <div className="max-w-lg mx-auto p-20">
      <form method="post" onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="username"
              className="text-sm text-gray-600 capitalize"
            >
              username
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="password"
              className="text-sm text-gray-600 capitalize"
            >
              password
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-violet-400 me-auto w-full text-gray-100 rounded py-1.5 font-medium text-sm text-center"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="text-xs flex items-center space-x-1.5 mt-2">
        <p>Already have an account?</p>
        <Link
          to="/register"
          className="text-teal-600 font-medium underline decoration-dotted"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
