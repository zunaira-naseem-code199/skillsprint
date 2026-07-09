function JournalStats({ journals }) {
  const total = journals.length;

  const happy = journals.filter(
    (journal) => journal.mood === "Happy"
  ).length;

  const motivated = journals.filter(
    (journal) => journal.mood === "Motivated"
  ).length;

  const relaxed = journals.filter(
    (journal) => journal.mood === "Relaxed"
  ).length;

  const neutral = journals.filter(
    (journal) => journal.mood === "Neutral"
  ).length;

  const sad = journals.filter(
    (journal) => journal.mood === "Sad"
  ).length;

  const tired = journals.filter(
    (journal) => journal.mood === "Tired"
  ).length;

  const stats = [
    {
      title: "Total Entries",
      value: total,
      color: "bg-violet-500",
    },
    {
      title: "😊 Happy",
      value: happy,
      color: "bg-green-500",
    },
    {
      title: "🔥 Motivated",
      value: motivated,
      color: "bg-orange-500",
    },
    {
      title: "😌 Relaxed",
      value: relaxed,
      color: "bg-blue-500",
    },
    {
      title: "😐 Neutral",
      value: neutral,
      color: "bg-gray-500",
    },
    {
      title: "😔 Sad",
      value: sad,
      color: "bg-red-500",
    },
    {
      title: "😴 Tired",
      value: tired,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-5 mb-8">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5"
        >

          <div
            className={`w-3 h-3 rounded-full ${stat.color} mb-4`}
          />

          <h3 className="text-slate-500 text-sm font-medium">
            {stat.title}
          </h3>

          <p className="text-2xl md:text-3xl font-bold mt-2 text-slate-800">
            {stat.value}
          </p>

        </div>

      ))}

    </div>
  );
}

export default JournalStats;