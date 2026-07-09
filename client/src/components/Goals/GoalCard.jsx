import {
  Calendar,
  Pencil,
  Trash2,
  CheckCircle,
} from "lucide-react";

function GoalCard({
  goal,
  onEdit,
  onDelete,
  onComplete,
}) {
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 md:p-6 hover:shadow-lg transition-all">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

        <div className="flex-1">

          <h2 className="text-lg md:text-xl font-bold text-slate-800 break-words">
            {goal.title}
          </h2>

          <p className="text-slate-500 mt-2 text-sm md:text-base break-words">
            {goal.description}
          </p>

        </div>

        <span
          className={`self-start px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusColors[goal.status]}`}
        >
          {goal.status}
        </span>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span className="font-medium text-slate-600">
            Progress
          </span>

          <span className="font-semibold">
            {goal.progress}%
          </span>

        </div>

        <div className="w-full h-3 bg-slate-200 rounded-full">

          <div
            className="h-3 bg-violet-600 rounded-full transition-all duration-500"
            style={{
              width: `${goal.progress}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mt-6">

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 text-sm text-slate-500">

          <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full w-fit">

            {goal.category}

          </span>

          <div className="flex items-center gap-2">

            <Calendar size={16} />

            {new Date(goal.targetDate).toLocaleDateString()}

          </div>

        </div>

        <div className="flex justify-end gap-2">

          <button
            onClick={() => onComplete(goal)}
            className="p-2 rounded-lg bg-green-100 hover:bg-green-200 transition"
          >
            <CheckCircle
              size={18}
              className="text-green-600"
            />
          </button>

          <button
            onClick={() => onEdit(goal)}
            className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
          >
            <Pencil
              size={18}
              className="text-blue-600"
            />
          </button>

          <button
            onClick={() => onDelete(goal._id)}
            className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition"
          >
            <Trash2
              size={18}
              className="text-red-600"
            />
          </button>

        </div>

      </div>

    </div>
  );
}

export default GoalCard;