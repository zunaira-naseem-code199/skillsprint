function GreetingCard({ user }) {

  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  return (

    <div className="mb-8">

      <h1 className="text-4xl font-bold text-slate-800">

        {greeting}, {user?.fullName} 👋

      </h1>

      <p className="mt-2 text-gray-500 text-lg">

        Stay consistent today. Small progress every day creates big results.

      </p>

    </div>

  );
}

export default GreetingCard;