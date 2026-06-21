function Navbar() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm">

      <h1 className="text-2xl font-bold text-indigo-600">
        SkillSprint
      </h1>

      <div className="flex items-center gap-3">

        <span className="text-gray-600">
          Welcome, Zunaira 👋
        </span>

        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">

          Z

        </div>

      </div>

    </header>
  );
}

export default Navbar;