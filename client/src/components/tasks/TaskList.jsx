import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onEdit,
  onDelete,
  onComplete,
}) {

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-12 text-center">

        <h2 className="text-2xl font-bold text-gray-700">
          📋 No Tasks Yet
        </h2>

        <p className="text-gray-500 mt-3">
          Create your first task to start your productivity journey.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6">

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}

    </div>
  );
}

export default TaskList;