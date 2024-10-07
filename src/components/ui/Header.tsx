import { Link, NavLink } from "react-router-dom";
import SignOut from "../../pages/SignOut";
import { useAuth } from "../../context/authContext";

function Header(): JSX.Element {
  const { user } = useAuth();

  return (
    <header className="px-12 py-2 flex justify-between items-center max-w-7xl mx-auto">
      <h1 className="text-lg font-semibold">
        <Link to="/">Builder</Link>
      </h1>

      <nav>
        <ul className="flex items-center space-x-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-800 border-b-2 border-teal-600 pb-0.5 text-center"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-800 border-b-2 border-teal-600 pb-0.5 text-center"
                  : ""
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-800 border-b-2 border-teal-600 pb-0.5 text-center"
                  : ""
              }
            >
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-800 border-b-2 border-teal-600 pb-0.5 text-center"
                  : ""
              }
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-800 border-b-2 border-teal-600 pb-0.5 text-center"
                  : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            {user !== null ? (
              <div className="flex space-x-2">
                <SignOut />
                <p>{user.username}</p>
              </div>
            ) : (
              <div className="space-x-5">
                <NavLink
                  to="/login"
                  className="border border-amber-400 rounded-lg font-medium py-1.5 px-4 text-nowrap text-center"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="border border-purple-400 rounded-lg font-medium py-1.5 px-4 text-nowrap text-center"
                >
                  Register
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
