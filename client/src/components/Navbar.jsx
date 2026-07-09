import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  IoNotificationsOutline,
} from "react-icons/io5";

import {
  FiSearch,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";

function Navbar({ setSidebarOpen }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="bg-white h-20 px-4 md:px-6 lg:px-10 flex items-center justify-between border-b">

      {/* Left Side */}

      <div className="flex items-center gap-4 flex-1">

        {/* Mobile Menu */}

        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden"
        >
          <FiMenu size={26} />
        </button>

        {/* Search */}

        <div className="relative w-full max-w-md">

          <FiSearch
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 md:pr-20 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-violet-300"
          />

          <div className="absolute right-4 top-3 text-sm text-gray-400 hidden md:block">
            Ctrl K
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4 md:gap-6">

        {/* Notification */}

        <div className="relative cursor-pointer">

          <IoNotificationsOutline size={28} />

          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
            3
          </div>

        </div>

        {/* User */}

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">

            {user?.fullName?.charAt(0).toUpperCase()}

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold">

              {user?.fullName || "Guest"}

            </h3>

            <p className="text-sm text-gray-500">

              Keep Learning! 🚀

            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition"
        >

          <FiLogOut />

          <span className="hidden md:inline">
            Logout
          </span>

        </button>

      </div>

    </header>
  );
}

export default Navbar;