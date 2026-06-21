import { NavLink } from "react-router-dom";
function Sidebar() {

  const menuItems = [

  {
    name: "Dashboard",
    path: "/",
    icon: "🏠",
  },

  {
    name: "Goals",
    path: "/goals",
    icon: "🎯",
  },

  {
    name: "Tasks",
    path: "/tasks",
    icon: "✅",
  },

  {
    name: "Journal",
    path: "/journal",
    icon: "📖",
  },

  {
    name: "Certificates",
    path: "/certificates",
    icon: "🏆",
  },

  {
    name: "Profile",
    path: "/profile",
    icon: "👤",
  },

  {
    name: "Settings",
    path: "/settings",
    icon: "⚙️",
  },

];
  return (

    <aside className="w-64 bg-white border-r min-h-screen p-6">

      <h2 className="text-lg font-semibold mb-8">

        Navigation

      </h2>

      <div className="space-y-3">

        {menuItems.map((item) => (

<NavLink

key={item.name}

to={item.path}

className={({ isActive }) =>

`flex items-center gap-3 p-3 rounded-xl transition-all duration-300

${

isActive

? "bg-violet-100 text-violet-600"

: "hover:bg-violet-50"

}`

}

>

<span>

{item.icon}

</span>

<span>

{item.name}

</span>

</NavLink>

))}

      </div>

    </aside>

  );

}

export default Sidebar;