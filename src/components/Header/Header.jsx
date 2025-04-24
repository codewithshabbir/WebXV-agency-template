import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-brand-primary border-2 border-brand-border px-6 md:px-10 lg:px-20 py-6 relative">
      {/* Logo */}
      <NavLink to={"/"}>
        <img src="/logo.png" alt="Logo" className="w-24 sm:w-28 md:w-32" />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-white text-sm">
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"/"}>Web XV</NavLink>
          </li>
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"all-projects"}>All Projects</NavLink>
          </li>
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"community"}>Community</NavLink>
          </li>
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"about-us"}>About Us</NavLink>
          </li>
        </ul>
      </nav>

      {/* Register Button */}
      <button className="hidden md:block bg-brand-blue hover:bg-blue-600 transition text-white px-4 py-2 rounded-md uppercase text-sm font-semibold">
        Register
      </button>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-white cursor-pointer"
      >
        <CiMenuFries size={28} />
      </button>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-brand-primary shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-brand-border">
          <NavLink to={'/'}>
            <img src="/logo.png" alt="Logo" className="w-24" />
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white cursor-pointer"
          >
            <RxCross1 size={28} />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-6 gap-4 text-white text-sm">
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"/"}>Web XV</NavLink>
          </li>
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"all-projects"}>All Projects</NavLink>
          </li>
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"community"}>Community</NavLink>
          </li>
          <li className="cursor-pointer hover:text-brand-blue transition">
            <NavLink to={"about-us"}>About Us</NavLink>
          </li>
          <li>
            <button className="mt-4 w-full bg-brand-blue hover:bg-blue-600 transition text-white px-4 py-2 rounded-md uppercase text-sm font-semibold">
              Register
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
