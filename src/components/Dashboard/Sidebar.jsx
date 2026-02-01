import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard",
      icon: "📊",
      label: "Dashboard",
      description: "Overview & Analytics"
    },
    {
      path: "/dashboard/users",
      icon: "👥",
      label: "Users",
      description: "Manage Users"
    },
    {
      path: "/dashboard/profile",
      icon: "👤",
      label: "Profile",
      description: "Your Account"
    },
    {
      path: "/dashboard/settings",
      icon: "⚙️",
      label: "Settings",
      description: "App Preferences"
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-80 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 flex flex-col shadow-2xl backdrop-blur-sm">
      {/* Header */}
      <div className="p-8 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">Admin Panel</h2>
            <p className="text-sm text-cyan-400/70 font-medium">Management Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/10"
                  : "text-gray-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md"
              }`}
            >
              {/* Background glow effect for active item */}
              {isActive(item.path) && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl"></div>
              )}

              {/* Icon with background */}
              <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                isActive(item.path)
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "bg-slate-700/50 text-gray-400 group-hover:bg-slate-600 group-hover:text-cyan-400"
              }`}>
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* Text content */}
              <div className="relative z-10 flex-1 min-w-0">
                <div className={`font-semibold text-sm transition-colors ${
                  isActive(item.path) ? "text-cyan-300" : "text-gray-200 group-hover:text-white"
                }`}>
                  {item.label}
                </div>
                <div className={`text-xs transition-colors ${
                  isActive(item.path) ? "text-cyan-400/70" : "text-gray-500 group-hover:text-gray-400"
                }`}>
                  {item.description}
                </div>
              </div>

              {/* Active indicator */}
              {isActive(item.path) && (
                <div className="relative z-10 flex flex-col space-y-1">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              )}

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-700/50 bg-gradient-to-t from-slate-800/50 to-slate-900/50">
        <Link
          to="/"
          className="group relative flex items-center space-x-4 px-5 py-4 rounded-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300 overflow-hidden hover:bg-slate-800/50 hover:shadow-md"
        >
          {/* Hover background */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-slate-700/20 to-slate-800/20"></div>

          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-700/50 text-gray-400 group-hover:bg-slate-600 group-hover:text-cyan-400 transition-all duration-300">
            <span className="text-xl">🏠</span>
          </div>

          {/* Text */}
          <div className="relative z-10 flex-1">
            <div className="font-semibold text-sm text-gray-200 group-hover:text-white transition-colors">
              Back to Home
            </div>
            <div className="text-xs text-gray-500 group-hover:text-cyan-400/70 transition-colors">
              Return to main site
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
