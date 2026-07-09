import { useEffect, useState } from "react";

import GoalStats from "../components/Goals/GoalStats";
import GoalFilters from "../components/Goals/GoalFilters";
import GoalList from "../components/Goals/GoalList";
import GoalModal from "../components/Goals/GoalModal";

import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from "../services/goalService";

function Goals() {
  const [goals, setGoals] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);

  // ==========================
  // Load Goals
  // ==========================

  const fetchGoals = async () => {
    try {
      const data = await getGoals();
      setGoals(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  // ==========================
  // Save Goal
  // ==========================

  const handleSaveGoal = async (goalData) => {
    try {
      if (editingGoal) {
        await updateGoal(editingGoal._id, goalData);
      } else {
        await createGoal(goalData);
      }

      fetchGoals();

      setEditingGoal(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================
  // Delete Goal
  // ==========================

  const handleDeleteGoal = async (id) => {
    if (!window.confirm("Delete this goal?")) return;

    try {
      await deleteGoal(id);

      fetchGoals();
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================
  // Edit Goal
  // ==========================

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setIsModalOpen(true);
  };

  // ==========================
  // Complete Goal
  // ==========================

  const handleCompleteGoal = async (goal) => {
    try {
      await updateGoal(goal._id, {
        ...goal,
        status: "Completed",
        progress: 100,
      });

      fetchGoals();
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================
  // Search + Filter
  // ==========================

  const filteredGoals = goals.filter((goal) => {
    const matchesSearch = goal.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || goal.category === category;

    const matchesStatus =
      status === "" || goal.status === status;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>

          <h1 className="text-2xl md:text-3xl font-bold">
            🎯 Goals
          </h1>

          <p className="text-sm md:text-base text-slate-500">
            Manage your learning goals.
          </p>

        </div>

      </div>

      <GoalStats goals={goals} />

      <GoalFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        onAddGoal={() => {
          setEditingGoal(null);
          setIsModalOpen(true);
        }}
      />

      <GoalList
        goals={filteredGoals}
        onEdit={handleEditGoal}
        onDelete={handleDeleteGoal}
        onComplete={handleCompleteGoal}
      />

      <GoalModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingGoal(null);
          setIsModalOpen(false);
        }}
        onSave={handleSaveGoal}
        editingGoal={editingGoal}
      />

    </div>
  );
}

export default Goals;