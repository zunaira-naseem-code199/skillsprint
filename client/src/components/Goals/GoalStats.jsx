import {
  Target,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

function GoalStats({ goals }) {
  const totalGoals = goals.length;

  const completedGoals = goals.filter(
    (goal) => goal.status === "Completed"
  ).length;

  const activeGoals = goals.filter(
    (goal) => goal.status !== "Completed"
  ).length;

  const averageProgress =
    totalGoals > 0
      ? Math.round(
          goals.reduce(
            (sum, goal) => sum + goal.progress,
            0
          ) / totalGoals
        )
      : 0;

  const stats = [
    {
      title: "Total Goals",
      value: totalGoals,
      icon: <Target size={22} />,
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Active Goals",
      value: activeGoals,
      icon: <Clock size={22} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Completed",
      value: completedGoals,
      icon: <CheckCircle size={22} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Progress",
      value: `${averageProgress}%`,
      icon: <TrendingUp size={22} />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">
                {stat.title}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-2 text-slate-800">
                {stat.value}
              </h2>

            </div>

            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${stat.color}`}
            >
              {stat.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default GoalStats;