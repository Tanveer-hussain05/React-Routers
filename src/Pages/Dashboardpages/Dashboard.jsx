import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { DashboardData } from "../../data/Dashboard";
import Card from "../../ui/Card";

const DashboardPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { stats, recentActivities } = DashboardData();

  
  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        navigate("/login");
      }
    }
  }, [user, navigate, setUser]);

  if (!user) return null;

  return (
    <div className="p-8 bg-slate-900 min-h-screen">
     
      <div className="mb-10 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">
          {user.role === "admin" && "Admin Control Panel"}
          {user.role === "user" && "User Dashboard"}
          {user.role === "guest" && "Guest Area"}
        </h1>

        <p className="text-gray-400">
          Welcome back{" "}
          <span className="text-white font-semibold">
            {user.firstName}
          </span>{" "}
          — Role:{" "}
          <span className="text-cyan-400 font-semibold uppercase">
            {user.role}
          </span>
        </p>
      </div>

      {/* ================= ADMIN UI ================= */}
      {user.role === "admin" && (
        <div className="space-y-10">
          <Card stats={stats} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-800/70 rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                System Overview
              </h3>
              <div className="h-64 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-700">
                <p className="text-gray-400">
                  Graphs & analytics will show here
                </p>
              </div>
            </div>

            <div className="bg-slate-800/70 rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Recent Activity
              </h3>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {activity.avatar}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        {activity.user}
                      </p>
                      <p className="text-xs text-gray-400">
                        {activity.action}
                      </p>
                    </div>

                    <span className="text-xs text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= USER UI ================= */}
      {user.role === "user" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-3">
              My Tasks
            </h3>
            <p className="text-gray-400">
              Track your tasks & progress here.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-3">
              My Projects
            </h3>
            <p className="text-gray-400">
              View your working projects.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-3">
              Profile Settings
            </h3>
            <p className="text-gray-400">
              Update personal information.
            </p>
          </div>
        </div>
      )}

      {/* ================= GUEST UI ================= */}
      {user.role === "guest" && (
        <div className="max-w-xl mx-auto bg-slate-800 p-10 rounded-xl border border-slate-700 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Limited Access
          </h3>

          <p className="text-gray-400 mb-6">
            You are currently using a guest account. Upgrade to unlock all
            features.
          </p>

          <Link
            to="/upgrade"
            className="inline-block bg-linear-to-r from-cyan-500 to-blue-600 hover:opacity-90 px-8 py-3 rounded-lg text-white font-semibold"
          >
            Upgrade Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
