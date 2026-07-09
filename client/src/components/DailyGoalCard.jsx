function DailyGoalCard({ stats }) {

  const completed = stats?.completedTasks || 0;

  const total = stats?.tasks || 0;

  const percentage =
    total > 0
      ? Math.round((completed / total) * 100)
      : 0;

  return (

    <div className="bg-white rounded-3xl p-6 shadow-sm h-full">

      <p className="text-gray-500 text-sm">
        🔥 Daily Goal
      </p>

      <h3 className="font-semibold mt-2">
        Complete {total} task{total !== 1 ? "s" : ""} today
      </h3>

      <div className="mt-4">

        <div className="flex justify-between text-sm mb-2">

          <span>
            {completed} / {total}
          </span>

          <span>
            {percentage}%
          </span>

        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">

          <div
            className="h-2 bg-violet-600 rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          ></div>

        </div>

      </div>

    </div>

  );

}

export default DailyGoalCard;