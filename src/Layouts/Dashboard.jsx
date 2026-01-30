import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
     
        <Sidebar />
      
      <div className="flex-[75%]">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
