import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#f5ba13] p-2 mt-0 fixed w-full -ml-4">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <NavLink
            className="text-white no-underline hover:text-white hover:no-underline"
            href="#">
            <span className="text-2xl pl-2">
              <i className="em em-grinning"></i> BrandName
            </span>
          </NavLink>
        </div>
        <div className="flex w-full pt-2 content-center justify-around md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center gap-3">
            <li className="mr-6">
              <NavLink
                to="/"
                isActive={(match, location) => {
                  if (match) {
                    return true;
                  }
                  return false;
                }}
                className={({ isActive }) =>
                  `inline-block py-2 px-4 no-underline duration-200 ${
                    isActive
                      ? "hover:text-gray-200 text-white"
                      : "hover:text-gray-200 text-gray-600"
                  }`
                }>
                TodoList
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                to="/notes"
                isActive={(match, location) => {
                  if (match) {
                    return true;
                  }
                  return false;
                }}
                className={({ isActive }) =>
                  `inline-block py-2 px-4 no-underline duration-200 ${
                    isActive
                      ? "hover:text-gray-200 text-white"
                      : "hover:text-gray-200 text-gray-600"
                  }`
                }>
                Notes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
