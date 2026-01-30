import { Link } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition text-gray-300 hover:bg-gray-700/50 hover:text-white";

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-5 flex flex-col">
      
      <h2 className="text-2xl font-bold tracking-wide mb-10">
        ⚡ Admin Panel
      </h2>

      <nav className="flex flex-col gap-2">

        <Link to="/dashboard" className={linkClass}>
          📊 Dashboard
        </Link>
    
        <Link to="/dashboard/users" className={linkClass}>
          👥 Users
        </Link>

        <Link to="/dashboard/profile" className={linkClass}>
          👤 Profile
        </Link>

        <Link to="/dashboard/settings" className={linkClass}>
          ⚙️ Settings
        </Link>
        <Link to="/" className={linkClass}>
          🏠 Home
        </Link>
       

      </nav>
    </aside>
  );
};

export default Sidebar;


