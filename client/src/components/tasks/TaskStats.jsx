import {
  ClipboardList,
  CheckCircle,
  Clock3,
  LoaderCircle,
} from "lucide-react";

function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <ClipboardList size={28} />,
      bg: "bg-violet-100",
      text: "text-violet-600",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: <CheckCircle size={28} />,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: <Clock3 size={28} />,
      bg: "bg-red-100",
      text: "text-red-600",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      icon: <LoaderCircle size={28} />,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mb-8">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300"
        >

          <div>

            <p className="text-gray-500 text-sm">
              {stat.title}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              {stat.value}
            </h2>

          </div>

          <div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.text}`}
          >
            {stat.icon}
          </div>

        </div>

      ))}

    </div>
  );
}

export default TaskStats;