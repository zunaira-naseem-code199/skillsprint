import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F8F9FE]">

      {/* Sidebar */}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Side */}

      <div className="flex-1 lg:ml-64 flex flex-col">

        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default AppLayout;