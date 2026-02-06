import React from "react";


const Card = () => {
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700 p-6 hover:border-cyan-400/50 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}
            >
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === "positive"
                  ? "bg-green-900/50 text-green-400 border border-green-700"
                  : stat.changeType === "negative"
                    ? "bg-red-900/50 text-red-400 border border-red-700"
                    : "bg-slate-700 text-gray-300 border border-slate-600"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
