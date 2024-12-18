import React from "react";
import { NavLink } from "react-router-dom";
import link from "../assets/like.png";

const Navbar = () => {
  return (
    <div
      className="h-14 md:h-20 bg-black text-white 
w-screen flex flex-row  justify-around items-center"
    >
      <NavLink to="/" className="flex flex-row items-center gap-3">
        <img src={link} alt="icon" className="w-6 md:w-8" />
        <p className="hidden md:flex text-lg font-semibold">React Router</p>
      </NavLink>
      <div className="flex gap-4 md:gap-6 text-[12px] md:text-base transition-colors ease-in-out duration-300">
        <NavLink
          to="/"
          title="home"
          className={({ isActive }) =>
            isActive
              ? "text-white transition-colors ease-in-out duration-300"
              : "text-gray-400 hover:text-white transition-colors ease-in-out duration-300"
          }
        >
          Introduction
        </NavLink>
        <NavLink
          to="/pros-section"
          title="pros-section"
          className={({ isActive }) =>
            isActive
              ? "text-white transition-colors ease-in-out duration-300"
              : "text-gray-400 hover:text-white transition-colors ease-in-out duration-300"
          }
        >
          Pros
        </NavLink>
        <NavLink
          to="/cons-section"
          title="/cons-section"
          className={({ isActive }) =>
            isActive
              ? "text-white transition-colors ease-in-out duration-300"
              : "text-gray-400 hover:text-white transition-colors ease-in-out duration-300"
          }
        >
          Cons
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
