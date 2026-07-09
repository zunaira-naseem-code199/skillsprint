import React from "react";

function StatCard({
  title,
  value,
 subtitle,
  change,
  icon,
  iconBg,
  cardBg,
  graphColor,
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 ${cardBg} p-5 shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex justify-between items-start">

        {/* Left */}

        <div>

          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg ${iconBg}`}
          >
            {icon}
          </div>

          <p className="text-xs text-slate-500 mt-4">{title}</p>

          <h2 className="text-3xl font-bold mt-1">{value}</h2>

          <p className="text-xs text-slate-400 mt-1">{subtitle}</p>

          <p className="text-xs font-medium mt-2 text-green-500">{change}</p>

        </div>

        {/* Mini Graph */}

        <div className="flex items-end gap-1 h-20">

          <div
            className={`w-2 h-6 rounded-full ${graphColor}`}
          ></div>

          <div
            className={`w-2 h-10 rounded-full ${graphColor}`}
          ></div>

          <div
            className={`w-2 h-8 rounded-full ${graphColor}`}
          ></div>

          <div
            className={`w-2 h-14 rounded-full ${graphColor}`}
          ></div>

          <div
            className={`w-2 h-12 rounded-full ${graphColor}`}
          ></div>

          <div
            className={`w-2 h-16 rounded-full ${graphColor}`}
          ></div>

        </div>

      </div>
    </div>
  );
}

export default StatCard;