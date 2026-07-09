import { Pencil, Trash2 } from "lucide-react";

function JournalCard({
  journal,
  onEdit,
  onDelete,
}) {
  const moodColors = {
    Happy: "bg-green-100 text-green-700",
    Motivated: "bg-orange-100 text-orange-700",
    Relaxed: "bg-blue-100 text-blue-700",
    Neutral: "bg-gray-100 text-gray-700",
    Sad: "bg-red-100 text-red-700",
    Tired: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-6 hover:shadow-lg transition-all">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

        <span
          className={`w-fit px-4 py-2 rounded-full text-sm font-semibold ${
            moodColors[journal.mood]
          }`}
        >
          {journal.mood}
        </span>

        <span className="text-sm text-slate-500">
          {new Date(
            journal.createdAt
          ).toLocaleDateString()}
        </span>

      </div>

      {/* Title */}

      <h2 className="text-xl md:text-2xl font-bold mt-5 text-slate-800 break-words">
        {journal.title}
      </h2>

      {/* Content */}

      <p className="text-slate-600 mt-4 leading-7 break-words">
        {journal.content.length > 150
          ? journal.content.substring(0, 150) + "..."
          : journal.content}
      </p>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row gap-3 mt-6">

        <button
          onClick={() => onEdit(journal)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-xl transition"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={() => onDelete(journal._id)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl transition"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}

export default JournalCard;