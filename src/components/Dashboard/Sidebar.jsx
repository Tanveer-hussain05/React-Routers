import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, setLoggedIn } = useContext(UserContext);

  const menuItems = [
    { path: "/dashboard", icon: "📊", label: "Dashboard", description: "Overview & Analytics" },
    { path: "/dashboard/users", icon: "👥", label: "Users", description: "Manage Users" },
    { path: "/dashboard/profile", icon: "👤", label: "Profile", description: "Your Account" },
    { path: "/dashboard/settings", icon: "⚙️", label: "Settings", description: "App Preferences" }
  ];

  const isActive = (path) => location.pathname === path;

 
  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <aside className="w-80 h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 flex flex-col p-4">

      
      <div className="mb-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-2 shadow-lg">
          {user?.firstName?.[0] || "G"}
        </div>
        <div className="font-bold text-white">{user ? `${user.firstName} ${user.lastName}` : "Guest"}</div>
        <div className="text-sm text-cyan-400">{user?.email || "No email"}</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`group flex items-center space-x-4 px-5 py-3 rounded-xl transition-all ${
              isActive(item.path)
                ? "bg-cyan-600/20 text-cyan-300"
                : "text-gray-300 hover:bg-slate-800/50 hover:text-white"
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 text-gray-400 group-hover:bg-slate-600 group-hover:text-cyan-400">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{item.label}</div>
              <div className="text-xs text-gray-400">{item.description}</div>
            </div>
          </Link>
        ))}
      </nav>

      
      <button
        onClick={handleLogout}
        className="mt-auto w-full flex items-center justify-center bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
