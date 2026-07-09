import { useState, useEffect } from "react";

const moods = [
  {
    emoji: "😊",
    name: "Happy",
    color: "bg-green-100 border-green-500",
  },
  {
    emoji: "🔥",
    name: "Motivated",
    color: "bg-orange-100 border-orange-500",
  },
  {
    emoji: "😌",
    name: "Relaxed",
    color: "bg-blue-100 border-blue-500",
  },
  {
    emoji: "😐",
    name: "Neutral",
    color: "bg-gray-100 border-gray-500",
  },
  {
    emoji: "😔",
    name: "Sad",
    color: "bg-red-100 border-red-500",
  },
  {
    emoji: "😴",
    name: "Tired",
    color: "bg-purple-100 border-purple-500",
  },
];

function JournalModal({
  isOpen,
  onClose,
  onSubmit,
  editingJournal,
}) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mood: "Happy",
  });

  useEffect(() => {
    if (editingJournal) {
      setFormData({
        title: editingJournal.title || "",
        content: editingJournal.content || "",
        mood: editingJournal.mood || "Happy",
      });
    } else {
      setFormData({
        title: "",
        content: "",
        mood: "Happy",
      });
    }
  }, [editingJournal]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8">

        <h2 className="text-3xl font-bold mb-8">

          {editingJournal
            ? "✏ Edit Journal"
            : "📖 New Journal"}

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Title */}

          <div>

            <label className="font-semibold">

              Title

            </label>

            <input
              type="text"
              name="title"
              placeholder="Today's title..."
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-300"
            />

          </div>

          {/* Mood */}

          <div>

            <label className="font-semibold">

              How are you feeling today?

            </label>

            <div className="grid grid-cols-3 gap-4 mt-4">

              {moods.map((mood) => (

                <button
                  key={mood.name}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      mood: mood.name,
                    })
                  }
                  className={`rounded-2xl border-2 p-4 transition-all hover:scale-105

                  ${
                    formData.mood === mood.name
                      ? mood.color
                      : "border-gray-200"
                  }`}
                >

                  <div className="text-4xl">

                    {mood.emoji}

                  </div>

                  <p className="mt-2 font-semibold">

                    {mood.name}

                  </p>

                </button>

              ))}

            </div>

          </div>

          {/* Content */}

          <div>

            <label className="font-semibold">

              Journal Entry

            </label>

            <textarea
              rows="8"
              name="content"
              placeholder="Write your thoughts..."
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full mt-2 border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-violet-300"
            />

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-gray-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700"
            >
              {editingJournal
                ? "Update Journal"
                : "Save Journal"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default JournalModal;