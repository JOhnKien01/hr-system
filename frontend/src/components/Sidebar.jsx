import "../styles/components/Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  History,
  Settings,
  LogOut,
} from "lucide-react";



export default function Sidebar() {
  return (
    <aside className="sidebar">


      {/* Navigation */}
      <nav className="sidebar-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <Users size={20} />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <History size={20} />
          <span>History</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="sidebar-footer">

        <button className="sidebar-item logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}