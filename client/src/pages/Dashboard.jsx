import GreetingCard from "../components/GreetingCard";

import DailyGoalCard from "../components/DailyGoalCard";

import WeeklyProgress from "../components/WeeklyProgress";

import UpcomingTasks from "../components/UpcomingTasks";

import StatCard from "../components/StatCard";
import MotivationCard from "../components/MotivationCard";
import RecentActivity from "../components/RecentActivity";

import {
  FaBullseye,
  FaCheckCircle,
  FaClock,
  FaFire,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";


function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

useEffect(() => {
  loadDashboard();
}, []);

const loadDashboard = async () => {
  try {
    const data = await getDashboard();
    setDashboard(data);
  } catch (error) {
    console.log(error);
  }
};

if (!dashboard) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-violet-600 text-lg font-semibold">
        Loading Dashboard...
      </div>
    </div>
  );
}


  return (

    <div className="space-y-6 lg:space-y-8">

      {/* Top Row */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

        <div className="xl:col-span-2">

          <GreetingCard user={dashboard.user} />

        </div>

        <div>

          <DailyGoalCard stats={dashboard.stats} />

        </div>

      </div>

      {/* Stat Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<StatCard
title="Total Goals"
value={dashboard.stats.goals}
subtitle="Active Goals"
change="+2%"
icon={<FaBullseye />}
iconBg="bg-violet-600"
cardBg="bg-violet-50"
graphColor="bg-violet-500"
/>

<StatCard
title="Completed Tasks"
value={dashboard.stats.completedTasks}
subtitle="This week"
change="+20%"
icon={<FaCheckCircle />}
iconBg="bg-green-500"
cardBg="bg-green-50"
graphColor="bg-green-500"
/>

<StatCard
title="Pending Tasks"
value={
  dashboard.stats.tasks -
  dashboard.stats.completedTasks
}
subtitle="This week"
change="-10%"
icon={<FaClock />}
iconBg="bg-orange-500"
cardBg="bg-orange-50"
graphColor="bg-orange-500"
/>

<StatCard
title="Certificates"

value={dashboard.stats.certificates}

subtitle="Earned"

change="+100%"
icon={<FaFire />}
iconBg="bg-blue-500"
cardBg="bg-blue-50"
graphColor="bg-blue-500"
/>

</div>

      {/* Bottom */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

    <div className="xl:col-span-2">

        <WeeklyProgress />

    </div>

    <UpcomingTasks
    tasks={dashboard.recentTasks}
/>

</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

    <div className="xl:col-span-2">

        <RecentActivity
    dashboard={dashboard}
/>

    </div>

    <MotivationCard />

</div>

    </div>

  );

}

export default Dashboard;