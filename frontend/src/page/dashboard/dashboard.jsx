// import React from "react";
// import Sidebar from "../../components/Sidebar";
// import DashboardNavbar from "../../components/DashboardNavbar";

// const Dashboard = ({ children }) => {
//   return (
//     <div>
//       <DashboardNavbar />
//       <div className="flex">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content Area */}
//         <main className="flex-1">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// *******************************************************

// import React from "react";
// import Sidebar from "../../components/Sidebar";
// import DashboardNavbar from "../../components/DashboardNavbar";

// const Dashboard = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Navbar */}
//       <DashboardNavbar />

//       {/* Layout */}
//       <div className="flex flex-col md:flex-row">
//         {/* Sidebar */}
//         <div className="w-full md:w-64 md:shrink-0">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <main className="flex-1 px-4 py-4 sm:px-6 md:px-8">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// **********************************************************
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../../store/user";
import { removeToken } from "../../helper";
import {
  FiLogOut,
  FiUser,
  FiCalendar,
  FiCreditCard,
  FiBookOpen,
} from "react-icons/fi";
import { FaBars, FaTimes, FaConciergeBell } from "react-icons/fa";

const Dashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const logout = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
    }`;

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-md p-2 text-xl text-gray-700 hover:bg-gray-100 md:hidden"
            >
              <FaBars />
            </button>

            <NavLink
              to="/"
              className="text-xl font-bold text-gray-800 sm:text-2xl"
            >
              MentorHub
            </NavLink>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-red-100"
          >
            <span className="hidden sm:inline">Logout</span>
            <FiLogOut className="text-red-500" />
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-50 h-full w-72 transform bg-white shadow-lg transition-transform duration-300 md:static md:translate-x-0 md:shadow-none ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col border-r">
            {/* Mobile close */}
            <div className="flex items-center justify-between border-b px-4 py-4 md:hidden">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={closeSidebar}
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
              >
                <FaTimes />
              </button>
            </div>

            {/* User Info */}
            <div className="flex flex-col items-center border-b px-4 py-6">
              <img
                className="h-20 w-20 rounded-full object-cover ring-2 ring-purple-200"
                src={
                  user?.photoUrl ||
                  `https://ui-avatars.com/api?name=${user?.name || "User"}`
                }
                alt={`${user?.name || "User"} avatar`}
              />
              <h4 className="mt-3 text-center text-base font-semibold text-gray-800">
                {user?.name || "User Name"}
              </h4>
              <p className="mt-1 break-all text-center text-sm text-gray-500">
                {user?.email || "user@email.com"}
              </p>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 space-y-2 px-3 py-4">
              <NavLink
                to="/dashboard/profile"
                className={navLinkClass}
                onClick={closeSidebar}
              >
                <FiUser className="text-lg" />
                <span>Profile</span>
              </NavLink>

              <NavLink
                to="/dashboard/services"
                className={navLinkClass}
                onClick={closeSidebar}
              >
                <FaConciergeBell className="text-lg" />
                <span>Services</span>
              </NavLink>

              <NavLink
                to="/dashboard/schedule"
                className={navLinkClass}
                onClick={closeSidebar}
              >
                <FiCalendar className="text-lg" />
                <span>Schedule</span>
              </NavLink>

              <NavLink
                to="/dashboard/payment"
                className={navLinkClass}
                onClick={closeSidebar}
              >
                <FiCreditCard className="text-lg" />
                <span>Payment</span>
              </NavLink>

              <NavLink
                to="/dashboard/bookings"
                className={navLinkClass}
                onClick={closeSidebar}
              >
                <FiBookOpen className="text-lg" />
                <span>Bookings</span>
              </NavLink>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 px-4 py-4 sm:px-6 md:px-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
