import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-20 py-20 hero-banner">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold">
              Welcome to WebXV
            </h1>
            <p className="text-brand-text text-lg max-w-md">
              Meet cool WEB3 projects and connect with other crypto enthusiasts!
            </p>
            <button className="bg-brand-blue hover:bg-blue-600 transition text-white px-6 py-3 rounded-md uppercase text-sm font-semibold w-fit">
              Register Now
            </button>
          </div>

          {/* Login Form */}
          <div className="bg-brand-secondary p-8 rounded-xl shadow-lg text-white max-w-md w-full mx-auto">
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
                  👁️
                </span>
              </div>
              <button className="bg-brand-blue hover:bg-blue-600 transition text-white px-4 py-3 rounded-md uppercase text-sm font-semibold">
                Login
              </button>
              <p className="text-sm text-brand-text text-center">
                Forgotten your password?
              </p>
              <p className="text-sm text-brand-text text-center">
                Don't have an account?{" "}
                <span className="text-blue-500 cursor-pointer">Register</span>
              </p>
            </form>
          </div>
        </section>

        {/* Partners Section */}
        <section className="px-6 md:px-20 text-center py-20">
          <h2 className="text-brand-blue uppercase text-lg font-semibold">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {Array.from({ length: 7 }).map((_, index) => (
              <img
                key={index}
                className="w-[100px] sm:w-[120px]"
                src={`/patners-logo/patner-logo-${index + 1}.png`}
                alt={`Partner logo ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-20 py-20">
          {/* About Text */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-brand-blue uppercase text-lg font-semibold">About Us</h2>
              <h1 className="text-4xl text-white font-bold">Who We Are</h1>
            </div>

            <p className="text-brand-text text-md">
              XV is a community-focused project led by a highly experienced team
              of Web3 builders and traders. Our founder A On made his name in
              the industry moderating for several early crypto projects before
              the 2021 bull run.
            </p>
            <p className="text-brand-text text-md">
              XV is also supported by several team members that are actively
              involved in the day-to-day running of the community. Join us on
              Telegram and Twitter.
            </p>
          </div>

          {/* About Image */}
          <img src="/about.png" alt="About us illustration" className="w-full max-w-lg mx-auto" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
