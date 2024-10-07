import { Link, useParams } from "react-router-dom";

function ProgressBar() {
  const { step } = useParams();
  const currentStep = Number(step);

  return (
    <section className="py-8 space-y-5">
      <article className="flex items-center divide-x-2 space-x-4 p-2">
        <h2 className="text-gray-600 text-lg">My Resume</h2>
        <div className="ps-4">
          <Link to="/" className="text-violet-600">
            Home
          </Link>{" "}
          {">"}{" "}
          <Link to="/resume" className="text-teal-500">
            My Resume
          </Link>
          : Step {currentStep}
        </div>
      </article>

      <ul className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-1">
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 1 ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
          >
            1
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 1 ? "text-emerald-800" : ""
              }`}
            >
              Personal Information
            </h4>
            <span className="text-xs text-gray-400 font-normal">Step One</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 2.1 || currentStep === 2.2
                ? "bg-teal-600 text-white"
                : "bg-gray-200"
            }`}
          >
            2
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 2.1 || currentStep === 2.2
                  ? "text-emerald-800"
                  : ""
              }`}
            >
              Education Background
            </h4>
            <span className="text-xs text-gray-400 font-normal">Step Two</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 3 ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
          >
            3
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 3 ? "text-emerald-800" : ""
              }`}
            >
              Work Experience
            </h4>
            <span className="text-xs text-gray-400 font-normal">
              Step Three
            </span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 4 ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
          >
            4
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 4 ? "text-emerald-800" : ""
              }`}
            >
              Skills
            </h4>
            <span className="text-xs text-gray-400 font-normal">Step Four</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 5 ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
          >
            5
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 5 ? "text-emerald-800" : ""
              }`}
            >
              Referees
            </h4>
            <span className="text-xs text-gray-400 font-normal">Step Five</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 6 ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
          >
            6
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 6 ? "text-emerald-800" : ""
              }`}
            >
              Summary
            </h4>
            <span className="text-xs text-gray-400 font-normal">Step Six</span>
          </div>
        </li>
        <li className="flex items-center gap-2 text-sm font-medium p-2">
          <div
            className={`w-8 h-8 rounded-md border flex items-center justify-center text-black ${
              currentStep === 7 ? "bg-teal-600 text-white" : "bg-gray-200"
            }`}
          >
            7
          </div>
          <div className="flex flex-col text-start">
            <h4
              className={`text-nowrap ${
                currentStep === 7 ? "text-emerald-800" : ""
              }`}
            >
              Review
            </h4>
            <span className="text-xs text-gray-400 font-normal">
              Step Seven
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ProgressBar;
