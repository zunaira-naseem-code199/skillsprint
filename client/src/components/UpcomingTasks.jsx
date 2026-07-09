import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

function UpcomingTasks({ tasks = [] }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-500";

      case "Medium":
        return "text-orange-500";

      case "Low":
        return "text-green-500";

      default:
        return "text-slate-500";
    }
  };

  const getDotColor = (status) => {
    return status === "Completed"
      ? "text-green-500"
      : "text-violet-500";
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300 h-full">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold text-slate-800">
          Upcoming Tasks
        </h2>

        <button className="text-violet-600 text-sm font-semibold hover:underline">
          View All
        </button>

      </div>

      {/* Tasks */}

      <div className="space-y-5">

        {tasks.length === 0 ? (

          <p className="text-gray-500 text-center py-6">
            No Tasks Found
          </p>

        ) : (

          tasks.map((task) => (

            <div
              key={task._id}
              className="flex justify-between items-start pb-4 border-b border-slate-100"
            >

              <div className="flex gap-3">

                <FaCircle
                  className={`${getDotColor(task.status)} text-xs mt-2`}
                />

                <div>

                  <h3 className="font-medium text-slate-800">
                    {task.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {task.status}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-xs text-slate-400">

                  {new Date(task.dueDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })}

                </p>

                <p
                  className={`text-xs font-semibold mt-1 ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </p>

              </div>

            </div>

          ))

        )}

      </div>

      {/* Bottom Button */}

      <button className="mt-6 w-full flex justify-center items-center gap-2 py-3 rounded-xl bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300">

        <FiPlus />

        Add New Task

      </button>

    </div>
  );
}

export default UpcomingTasks;