import {
  Pencil,
  Trash2,
  CheckCircle,
} from "lucide-react";

function TaskCard({
  task,
  onEdit,
  onDelete,
  onComplete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-6 hover:shadow-lg transition-all duration-300">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

        <div className="flex-1">

          <h2 className="text-xl font-bold text-slate-800 break-words">
            {task.title}
          </h2>

          <p className="text-slate-500 mt-2 break-words">
            {task.description}
          </p>

        </div>

        <span
          className={`self-start px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap
          ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {task.priority}
        </span>

      </div>

      {/* Status */}

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-6">

        <span
          className={`self-start px-3 py-1 rounded-full text-sm font-medium
          ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : task.status === "In Progress"
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {task.status}
        </span>

        <span className="text-sm text-slate-500">
          📅{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Date"}
        </span>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 mt-6">

        <button
          onClick={() => onEdit(task)}
          className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl transition"
        >
          <Trash2 size={18} />
          Delete
        </button>

        {task.status !== "Completed" && (

          <button
            onClick={() => onComplete(task)}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition sm:col-span-2 lg:col-span-1"
          >
            <CheckCircle size={18} />
            Complete
          </button>

        )}

      </div>

    </div>
  );
}

export default TaskCard;