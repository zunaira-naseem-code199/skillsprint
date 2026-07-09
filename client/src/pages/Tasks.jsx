import { useEffect, useState } from "react";

import TaskStats from "../components/tasks/TaskStats";
import TaskFilters from "../components/tasks/TaskFilters";
import TaskList from "../components/tasks/TaskList";
import TaskModal from "../components/tasks/TaskModal";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const [isOpen, setIsOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // ===============================
  // Load Tasks
  // ===============================

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // ===============================
  // Create / Update
  // ===============================

  const handleSubmit = async (formData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, formData);
      } else {
        await createTask(formData);
      }

      setEditingTask(null);
      setIsOpen(false);

      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // ===============================
  // Delete
  // ===============================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    await deleteTask(id);

    loadTasks();
  };

  // ===============================
  // Edit
  // ===============================

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsOpen(true);
  };

  // ===============================
  // Complete
  // ===============================

  const handleComplete = async (task) => {
    await updateTask(task._id, {
      ...task,
      status: "Completed",
    });

    loadTasks();
  };

  // ===============================
  // Filtering
  // ===============================

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || task.status === status;

    const matchesPriority =
      priority === "All" ||
      task.priority === priority;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl sm:text-4xl font-bold">
            📋 Tasks
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Manage all your daily tasks
          </p>

        </div>

        <button
          onClick={() => {
            setEditingTask(null);
            setIsOpen(true);
          }}
          className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition"
        >
          + New Task
        </button>

      </div>

      <TaskStats tasks={filteredTasks} />

      <TaskFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
      />

      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />

      <TaskModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditingTask(null);
        }}
        onSubmit={handleSubmit}
        editingTask={editingTask}
      />

    </div>
  );
}

export default Tasks;