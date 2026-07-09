import { Search } from "lucide-react";

function JournalFilters({
  search,
  setSearch,
  mood,
  setMood,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

      <div className="grid md:grid-cols-2 gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search journals..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-violet-300"
          />

        </div>

        {/* Mood Filter */}

        <select
          value={mood}
          onChange={(e) =>
            setMood(e.target.value)
          }
          className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-300"
        >
          <option value="All">
            All Moods
          </option>

          <option value="Happy">
            😊 Happy
          </option>

          <option value="Motivated">
            🔥 Motivated
          </option>

          <option value="Relaxed">
            😌 Relaxed
          </option>

          <option value="Neutral">
            😐 Neutral
          </option>

          <option value="Sad">
            😔 Sad
          </option>

          <option value="Tired">
            😴 Tired
          </option>

        </select>

      </div>

    </div>
  );
}

export default JournalFilters;