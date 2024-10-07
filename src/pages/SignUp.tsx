import { FormEvent, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState<{
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { username, email, password, passwordConfirm } = user;
    await register(username, email, password, passwordConfirm);
    navigate("/login");
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
            <label htmlFor="email" className="text-sm text-gray-600 capitalize">
              email
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="passwordConfirm"
              className="text-sm text-gray-600 capitalize"
            >
              password confirm
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="passwordConfirm"
              name="passwordConfirm"
              id="passwordConfirm"
              value={user.passwordConfirm}
              onChange={(e) =>
                setUser({ ...user, passwordConfirm: e.target.value })
              }
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-violet-400 me-auto w-full text-gray-100 rounded py-1.5 font-medium text-sm text-center"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <div className="text-xs flex items-center space-x-1.5 mt-2">
        <p>Dont have an account?</p>
        <Link
          to="/login"
          className="text-teal-600 font-medium underline decoration-dotted"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
