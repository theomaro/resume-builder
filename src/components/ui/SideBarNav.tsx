import { Link } from "react-router-dom";

function SideBarNav() {
  return (
    <aside className="py-10 flex flex-col items-start space-y-3">
      <Link to="/resume/step/1" className="flex items-center space-x-2 p-0.5">
        <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
        <div className="p-0.5 text-sm">Personal Information</div>
      </Link>
      <div
        className="group show cursor-pointer"
        onClick={(event) => event.currentTarget.classList.toggle("show")}
      >
        <div className="flex items-center space-x-2 p-0.5 mb-1">
          <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
          <div className="p-0.5 text-sm">Education Background</div>
        </div>

        <div className="hidden group-[.show]:flex flex-col items-start space-y-2 ms-3">
          <Link
            onClick={(e) => e.stopPropagation()}
            to="/resume/step/2.1"
            className="flex items-center space-x-2 p-0.5"
          >
            <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
            <div className="p-0.5 text-sm">Academic Qualifications</div>
          </Link>
          <Link
            onClick={(e) => e.stopPropagation()}
            to="/resume/step/2.2"
            className="flex items-center space-x-2 p-0.5"
          >
            <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
            <div className="p-0.5 text-sm">Professional Qualifications</div>
          </Link>
        </div>
      </div>
      <Link to="/resume/step/3" className="flex items-center space-x-2 p-0.5">
        <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
        <div className="p-0.5 text-sm">Work Experience</div>
      </Link>
      <Link to="/resume/step/4" className="flex items-center space-x-2 p-0.5">
        <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
        <div className="p-0.5 text-sm">Skills</div>
      </Link>
      <Link to="/resume/step/5" className="flex items-center space-x-2 p-0.5">
        <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
        <div className="p-0.5 text-sm">Referees</div>
      </Link>
      <Link to="/resume/step/6" className="flex items-center space-x-2 p-0.5">
        <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
        <div className="p-0.5 text-sm">Summary</div>
      </Link>
      <Link to="/resume/step/7" className="flex items-center space-x-2 p-0.5">
        <div className="w-2.5 h-2.5 rounded-full border border-gray-400"></div>
        <div className="p-0.5 text-sm">Review</div>
      </Link>
    </aside>
  );
}

export default SideBarNav;
