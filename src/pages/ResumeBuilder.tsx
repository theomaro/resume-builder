import { Outlet } from "react-router-dom";
import SideBarNav from "../components/ui/SideBarNav";

function ResumeBuilder() {
  return (
    <main className="px-12 py-6 max-w-7xl mx-auto bg-gray-50">
      <div className="bg-gray-50 flex space-x-6">
        <div className="basis-1/5">
          <SideBarNav />
        </div>

        <div className="flex-1 h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default ResumeBuilder;
