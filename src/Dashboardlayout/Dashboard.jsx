import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      
      {/* Header */}
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Dashboard Title */}
        <Link to="/dashboard">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            🚀 Dashboard Overview
          </h1>
        </Link>

        {/* Manage Users Button */}
        <Link to="/dashboard/users">
          <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-md inline-block cursor-pointer">
            Manage Users
          </h1>
        </Link>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
              +12%
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-3">1,245</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Active Sessions</h3>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
              Live
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-3">342</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
              Monthly
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800 mt-3">$8,420</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
