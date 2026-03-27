import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Dropdown, Menu } from "antd";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import logo from "../assets/logo-no-background.png";
import useUserStore from "../store/user";
import { removeToken } from "../helper";

export const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const signInBtnClick = () => {
    navigate("/signin");
    setIsMenuOpen(false);
  };

  const signUpStudentBtnClick = () => {
    navigate("/signup/student");
    setIsMenuOpen(false);
  };

  const signUpMentorBtnClick = () => {
    navigate("/signup/mentor");
    setIsMenuOpen(false);
  };

  const onButtonClick = () => {
    removeToken();
    setUser(null);
    setIsMenuOpen(false);
    navigate("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<AiOutlineDashboard />}>
        <NavLink className="text-base" to="/dashboard/profile">
          Dashboard
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<FiLogOut />}>
        <button onClick={onButtonClick} className="w-full text-base text-left">
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="inline-flex items-center">
            <img
              className="w-32 sm:w-40 md:w-44 lg:w-48"
              src={logo}
              alt="logo"
            />
          </NavLink>

          {/* Desktop Menu */}
          {!user ? (
            <ul className="items-center hidden space-x-6 lg:flex">
              <li>
                <button
                  onClick={signUpMentorBtnClick}
                  className="h-11 px-5 text-sm font-medium tracking-wide text-gray-100 transition-colors duration-200 border rounded hover:bg-white hover:text-black"
                >
                  Become a Mentor
                </button>
              </li>
              <li>
                <button
                  onClick={signInBtnClick}
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={signUpStudentBtnClick}
                  className="inline-flex items-center justify-center h-11 px-5 font-medium tracking-wide text-white transition duration-200 bg-purple-400 rounded shadow-md hover:bg-purple-700 focus:outline-none"
                >
                  Sign up
                </button>
              </li>
            </ul>
          ) : (
            <div className="hidden lg:block">
              <Dropdown overlay={menu} trigger={["hover"]}>
                <button className="flex items-center justify-center w-9 h-9 font-medium tracking-wide text-gray-600 transition-colors duration-200 border border-white rounded-full hover:text-black">
                  <FaUser className="text-white" />
                </button>
              </Dropdown>
            </div>
          )}

          {/* Mobile Right Side */}
          <div className="flex items-center gap-3 lg:hidden">
            {user && (
              <Dropdown overlay={menu} trigger={["click"]}>
                <button className="flex items-center justify-center w-9 h-9 border border-white rounded-full">
                  <FaUser className="text-white" />
                </button>
              </Dropdown>
            )}

            {!user && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {!user && isMenuOpen && (
          <div className="mt-4 rounded-lg bg-gray-800 p-4 lg:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  onClick={signUpMentorBtnClick}
                  className="w-full h-11 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 border rounded hover:bg-white hover:text-black"
                >
                  Become a Mentor
                </button>
              </li>
              <li>
                <button
                  onClick={signInBtnClick}
                  className="w-full text-left font-medium text-gray-100 transition-colors duration-200 hover:text-teal-400"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={signUpStudentBtnClick}
                  className="w-full h-11 px-4 font-medium text-white transition duration-200 bg-purple-400 rounded shadow-md hover:bg-purple-700"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
