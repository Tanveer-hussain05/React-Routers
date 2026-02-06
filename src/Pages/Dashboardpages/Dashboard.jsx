import { Link } from "react-router-dom";
import { DashboardData } from "../../data/Dashboard";

const DashboardPage = () => {
  const { stats, recentActivities } = DashboardData();

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Welcome back! Here's what's happening with your app today.
        </p>
      </div>

      {/* Stats Grid */}
 
      
      {/* Main Content Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Analytics Overview
          </h3>
          <div className="h-64 bg-linear-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center border border-slate-600">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <p className="text-gray-400">
                Interactive charts will be displayed here
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {activity.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {activity.user}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {activity.action}
                  </p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <Link
              to="/dashboard/users"
              className="text-sm text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View all activity →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/dashboard/users"
            className="flex flex-col items-center p-4 rounded-lg border border-slate-600 hover:border-cyan-400 hover:bg-slate-700 transition-colors"
          >
            <span className="text-2xl mb-2">👥</span>
            <span className="text-sm font-medium text-white">Manage Users</span>
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex flex-col items-center p-4 rounded-lg border border-slate-600 hover:border-cyan-400 hover:bg-slate-700 transition-colors"
          >
            <span className="text-2xl mb-2">👤</span>
            <span className="text-sm font-medium text-white">Edit Profile</span>
          </Link>
          <Link
            to="/dashboard/settings"
            className="flex flex-col items-center p-4 rounded-lg border border-slate-600 hover:border-cyan-400 hover:bg-slate-700 transition-colors"
          >
            <span className="text-2xl mb-2">⚙️</span>
            <span className="text-sm font-medium text-white">Settings</span>
          </Link>
          <button className="flex flex-col items-center p-4 rounded-lg border border-slate-600 hover:border-green-400 hover:bg-slate-700 transition-colors">
            <span className="text-2xl mb-2">📊</span>
            <span className="text-sm font-medium text-white">Export Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
