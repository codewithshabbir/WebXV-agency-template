import React from "react";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from "react-router";

const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 md:px-16 lg:px-24 py-16 lg:py-20">
      <img className="w-[100%] h-auto" src="/public/register.png" alt="" />

      {/* Registration Form */}
      <div className="bg-brand-secondary p-6 md:p-8 rounded-xl shadow-lg text-white max-w-md w-full mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-3 rounded-md bg-brand-input placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-md bg-brand-input placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <input
            type="email"
            placeholder="Re-type Email"
            className="px-4 py-3 rounded-md bg-brand-input placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-md w-full bg-brand-input placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
              <FaRegEye />
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Re-type Password"
              className="px-4 py-3 rounded-md w-full bg-brand-input placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
              <FaRegEye />
            </span>
          </div>
          <input
            type="text"
            placeholder="Wallet Address"
            className="px-4 py-3 rounded-md bg-brand-input placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <button className="bg-brand-blue hover:bg-blue-600 transition text-white px-4 py-3 rounded-md uppercase text-sm font-semibold">
            Register
          </button>
          <p className="text-sm text-brand-text text-center">
            Already have an account?{" "}
            <NavLink className="text-blue-500 cursor-pointer" to={"/login"}>
              Login
            </NavLink>
          </p>
          <div className="flex bg-brand-input py-3 rounded-md justify-center gap-2 uppercase font-semibold text-sm cursor-pointer">
            <img src="/google-icon.png" alt="" />
            <h3>Continue With Google</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
