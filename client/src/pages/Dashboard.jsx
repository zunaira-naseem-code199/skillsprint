import StatCard from "../components/StatCard";

function Dashboard() {

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8">

        Dashboard

      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <StatCard

          title="Total Goals"

          value="5"

        />

        <StatCard

          title="Completed"

          value="3"

        />

        <StatCard

          title="Pending"

          value="2"

        />

        <StatCard

          title="Streak"

          value="12"

        />

      </div>

    </div>

  );

}

export default Dashboard;