import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../helper";
import useUserStore from "../store/user";
import { FiLogOut } from "react-icons/fi";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const onButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };

  return (
    <div className="border-b bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div>
            <NavLink to="/">
              <p className="cursor-pointer px-2 py-1 text-2xl font-bold tracking-wide text-gray-800 sm:px-4 sm:text-3xl">
                MentorHub
              </p>
            </NavLink>
          </div>

          <div className="w-full sm:w-auto">
            <button
              onClick={onButtonClick}
              className="flex w-full items-center justify-center rounded-lg border border-red-200 px-4 py-2 text-gray-600 transition-colors duration-300 hover:bg-red-200 hover:text-gray-700 sm:w-auto"
            >
              <span className="mr-2 font-medium">Log Out</span>
              <FiLogOut className="text-xl text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
