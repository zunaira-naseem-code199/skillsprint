import GoalCard from "./GoalCard";

function GoalList({
  goals,
  onEdit,
  onDelete,
  onComplete,
}) {
  if (goals.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-16 text-center">

        <h2 className="text-xl md:text-2xl font-bold text-slate-700">
          No Goals Yet 🎯
        </h2>

        <p className="text-slate-500 mt-3 text-sm md:text-base">
          Create your first learning goal to begin your journey.
        </p>

      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">

      {goals.map((goal) => (
        <GoalCard
          key={goal._id}
          goal={goal}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}

    </div>
  );
}

export default GoalList;