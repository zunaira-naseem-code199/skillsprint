import { NavLink } from "react-router-dom";
import { Rocket, X } from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "🏠" },
    { name: "Goals", path: "/goals", icon: "🎯" },
    { name: "Tasks", path: "/tasks", icon: "✅" },
    { name: "Journal", path: "/journal", icon: "📖" },
    { name: "Certificates", path: "/certificates", icon: "🏆" },
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-white border-r border-slate-200 flex flex-col justify-between z-50 transition-transform duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0`}
      >
        {/* Top */}

        <div>
          {/* Logo */}

          <div className="flex items-center justify-between px-6 py-8">

            <div className="flex items-center gap-3">

              <div className="bg-violet-600 p-3 rounded-xl">

                <Rocket
                  size={20}
                  className="text-white"
                />

              </div>

              <h1 className="text-3xl font-bold text-violet-600">

                SkillSprint

              </h1>

            </div>

            {/* Mobile Close */}

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X size={24} />
            </button>

          </div>

          {/* Navigation */}

          <div className="px-3 space-y-2">

            {menuItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium

                  ${
                    isActive
                      ? "bg-violet-100 text-violet-600"
                      : "hover:bg-violet-50 text-slate-700"
                  }`
                }
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                <span>{item.name}</span>

              </NavLink>

            ))}

          </div>

        </div>

        {/* Bottom Card */}

        <div className="m-4 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-5 text-white">

          <h3 className="font-bold text-lg">
            👑 Keep Going!
          </h3>

          <p className="text-sm mt-3 opacity-90">
            You're doing great.
          </p>

          <p className="text-sm">
            Stay consistent every day.
          </p>

          <button className="mt-5 bg-white text-violet-600 px-4 py-2 rounded-xl text-sm font-semibold w-full">

            View Progress →

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;