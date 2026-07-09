import {
  FaCheckCircle,
  FaBook,
  FaTrophy,
  FaBullseye,
} from "react-icons/fa";

function RecentActivity({ dashboard }) {

  const activities = [];

  // Latest Goal
  if (dashboard?.recentGoals?.length > 0) {
    activities.push({
      icon: <FaBullseye />,
      title: "New Goal Created",
      description: dashboard.recentGoals[0].title,
      time: new Date(
        dashboard.recentGoals[0].createdAt
      ).toLocaleDateString(),
      color: "bg-violet-100 text-violet-600",
    });
  }

  // Latest Task
  if (dashboard?.recentTasks?.length > 0) {
    activities.push({
      icon: <FaCheckCircle />,
      title: dashboard.recentTasks[0].status,
      description: dashboard.recentTasks[0].title,
      time: new Date(
        dashboard.recentTasks[0].createdAt
      ).toLocaleDateString(),
      color: "bg-green-100 text-green-600",
    });
  }

  // Latest Journal
  if (dashboard?.latestJournal) {
    activities.push({
      icon: <FaBook />,
      title: "Journal Added",
      description: dashboard.latestJournal.title,
      time: new Date(
        dashboard.latestJournal.createdAt
      ).toLocaleDateString(),
      color: "bg-orange-100 text-orange-600",
    });
  }

  // Latest Certificate
  if (dashboard?.latestCertificate) {
    activities.push({
      icon: <FaTrophy />,
      title: "Certificate Earned",
      description: dashboard.latestCertificate.title,
      time: new Date(
        dashboard.latestCertificate.createdAt
      ).toLocaleDateString(),
      color: "bg-blue-100 text-blue-600",
    });
  }

  return (

    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold text-slate-800">
          Recent Activity
        </h2>

        <button className="text-violet-600 text-sm font-semibold hover:underline">
          View All
        </button>

      </div>

      {/* Activity List */}

      <div className="space-y-5">

        {activities.length === 0 ? (

          <p className="text-center text-gray-500">
            No Recent Activity
          </p>

        ) : (

          activities.map((activity, index) => (

            <div
              key={index}
              className="flex items-start gap-4"
            >

              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${activity.color}`}
              >
                {activity.icon}
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-slate-800">
                  {activity.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {activity.description}
                </p>

              </div>

              <span className="text-xs text-slate-400 whitespace-nowrap">
                {activity.time}
              </span>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default RecentActivity;