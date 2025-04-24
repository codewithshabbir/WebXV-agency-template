import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { NavLink } from 'react-router'

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 md:px-16 lg:px-24 py-16 lg:py-20">
      <img className="w-[100%] h-[100%]" src="/login.png" alt="" />

      {/* Login Form */}
      <div className="bg-brand-secondary p-6 md:p-8 rounded-xl shadow-lg text-white max-w-md w-full mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username or email"
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
          <button className="bg-brand-blue hover:bg-blue-600 transition text-white px-4 py-3 rounded-md uppercase text-sm font-semibold">
            Login
          </button>
          <p className="text-sm text-brand-text text-center">
            Forgot your password?
          </p>
          <p className="text-sm text-brand-text text-center">
            Don't have an account? <NavLink className="text-blue-500 cursor-pointer" to={'/register'}>Register</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login