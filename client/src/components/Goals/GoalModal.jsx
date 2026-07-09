import { useEffect, useState } from "react";
import { X } from "lucide-react";

function GoalModal({
  isOpen,
  onClose,
  onSave,
  editingGoal,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Programming",
    targetDate: "",
    progress: 0,
    status: "Pending",
  });

  useEffect(() => {
    if (editingGoal) {
      setFormData({
        ...editingGoal,
        targetDate: editingGoal.targetDate?.substring(0, 10),
      });
    } else {
      setFormData({
        title: "",
        description: "",
        category: "Programming",
        targetDate: "",
        progress: 0,
        status: "Pending",
      });
    }
  }, [editingGoal]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-xl shadow-xl">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            {editingGoal ? "Edit Goal" : "Create Goal"}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Goal Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Programming</option>
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>AI & Machine Learning</option>
            <option>UI/UX Design</option>
            <option>Career</option>
            <option>Personal</option>
            <option>Other</option>
          </select>

          <input
            type="date"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="number"
            min="0"
            max="100"
            name="progress"
            value={formData.progress}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-violet-600 text-white hover:bg-violet-700"
            >
              Save Goal
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default GoalModal;