import { Search, Plus } from "lucide-react";

function GoalFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  onAddGoal,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-8">

      <div className="flex flex-col xl:flex-row gap-5 xl:items-center xl:justify-between">

        {/* Search */}

        <div className="relative w-full xl:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search goals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-violet-300"
          />

        </div>

        {/* Filters */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 w-full xl:w-auto">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-violet-300"
          >
            <option value="">All Categories</option>
            <option>Programming</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>AI & Machine Learning</option>
            <option>UI/UX Design</option>
            <option>Data Science</option>
            <option>Cyber Security</option>
            <option>DevOps</option>
            <option>Career</option>
            <option>Personal</option>
            <option>Other</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-violet-300"
          >
            <option value="">All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button
            onClick={onAddGoal}
            className="w-full lg:w-auto flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition"
          >
            <Plus size={18} />

            New Goal

          </button>

        </div>

      </div>

    </div>
  );
}

export default GoalFilters;