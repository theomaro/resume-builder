import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Footer({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <footer>
      <div className="p-12 max-w-7xl mx-auto">{children}</div>

      <div className="p-12 flex justify-between">
        <div className="flex flex-col space-y-4 basis-1/3">
          <div className="-space-y-1">
            <h1 className="text-3xl font-semibold">
              <Link to="/">Builder</Link>
            </h1>
            <p className="text-gray-600">Lorem ipsum dolor sit.</p>
          </div>

          <ul className="flex gap-3">
            <li>
              <Link
                to="https://twitter.com/builder"
                target="_blank"
                className="text-sm border hover:border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                X
              </Link>
            </li>
            <li>
              <Link
                to="https://facebook.com/builder"
                target="_blank"
                className="text-sm border hover:border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                FB
              </Link>
            </li>
            <li>
              <Link
                to="https://youtube.com/builder"
                target="_blank"
                className="text-sm border hover:border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                YT
              </Link>
            </li>
            <li>
              <Link
                to="https://instagram.com/builder"
                target="_blank"
                className="text-sm border hover:border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                IN
              </Link>
            </li>
          </ul>
        </div>

        <div className="basis-1/3 space-y-2 px-3">
          <h3 className="text-lg font-medium border-b border-teal-700 pb-1">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-0.5 basis-1/3 ">
            <li>
              <Link to="" className="text-sm hover:text-teal-700">
                Templates
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm hover:text-teal-700">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm hover:text-teal-700">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="basis-1/3 space-y-2 px-3">
          <h3 className="text-lg font-medium border-b border-teal-700 pb-1">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-0.5">
            <li>
              <Link to="" className="text-sm hover:text-teal-700">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="" className="text-sm hover:text-teal-700">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-2 px-12 text-xs border-t">
        <p>© 2024 Builder App</p>
      </div>
    </footer>
  );
}

export default Footer;
