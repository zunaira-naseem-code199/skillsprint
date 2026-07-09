import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", progress: 25 },
  { day: "Tue", progress: 42 },
  { day: "Wed", progress: 58 },
  { day: "Thu", progress: 75 },
  { day: "Fri", progress: 82 },
  { day: "Sat", progress: 90 },
  { day: "Sun", progress: 100 },
];

function WeeklyProgress() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          📊 Weekly Progress
        </h2>

        <select className="border rounded-lg px-3 py-2 text-sm outline-none">

          <option>This Week</option>

          <option>Last Week</option>

        </select>

      </div>

      {/* Chart */}

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="progress"
              stroke="#7C3AED"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-between items-center">

        <div className="bg-violet-100 text-violet-700 px-3 py-2 rounded-xl text-sm">

          ⚡ Great progress! You've been more productive than 70% of users this week.

        </div>

        <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-violet-600 hover:text-white transition">

          View Analytics

        </button>

      </div>

    </div>
  );
}

export default WeeklyProgress;