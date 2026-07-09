import JournalCard from "./JournalCard";

function JournalList({
  journals,
  onEdit,
  onDelete,
}) {
  if (journals.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-md p-12 text-center">

        <h2 className="text-2xl font-bold text-gray-700">
          📖 No Journal Entries Yet
        </h2>

        <p className="text-gray-500 mt-3">
          Start writing your first journal and track your learning journey.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6">

      {journals.map((journal) => (
        <JournalCard
          key={journal._id}
          journal={journal}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default JournalList;