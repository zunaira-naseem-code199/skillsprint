import { FaArrowRight } from "react-icons/fa";

function MotivationCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white p-6 shadow-lg hover:scale-[1.02] transition-all duration-300 h-full">

      {/* Decorative Circles */}

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full"></div>

      {/* Emoji Illustration */}

      <div className="text-7xl text-center mt-2">
        👨‍💻
      </div>

      {/* Text */}

      <div className="mt-6 text-center">

        <h2 className="text-3xl font-bold leading-snug">

          Small progress

          <br />

          every day adds up

          <br />

          to big results.

        </h2>

        <p className="mt-5 text-violet-100">

          Keep going! 💪

        </p>

      </div>

      {/* Button */}

      <button className="mt-8 w-full bg-white text-violet-700 py-3 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-slate-100 transition">

        View Progress

        <FaArrowRight />

      </button>

    </div>
  );
}

export default MotivationCard;