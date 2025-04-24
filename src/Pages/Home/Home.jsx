import React from "react";
import { FaRegEye } from "react-icons/fa6";

const Home = () => {
  const cryptoData = [
    {
      name: "Bitcoin",
      symbol: "BTC/USD",
      price: 42122.0,
      change: -2.93,
      symbolIcon: "/crypto-logo/bitcoin.png",
      graphIcon: "/high-graph.png",
      trendIcon: "/trending-down.png",
    },
    {
      name: "Ethereum",
      symbol: "ETH/USD",
      price: 2214.77,
      change: -2.22,
      symbolIcon: "/crypto-logo/etherum.png",
      graphIcon: "/high-graph.png",
      trendIcon: "/trending-down.png",
    },
    {
      name: "Tether",
      symbol: "USDT/USD",
      price: 0.9999,
      change: 0.04,
      symbolIcon: "/crypto-logo/tether.png",
      graphIcon: "/high-graph.png",
      trendIcon: "/trending-up.png",
    },
    {
      name: "Solana",
      symbol: "SOL/USD",
      price: 107.41,
      change: -11.2,
      symbolIcon: "/crypto-logo/solana.png",
      graphIcon: "/high-graph.png",
      trendIcon: "/trending-down.png",
    },
    {
      name: "XRP",
      symbol: "XRP/USD",
      price: 0.6183,
      change: -3.09,
      symbolIcon: "/crypto-logo/xrp.png",
      graphIcon: "/high-graph.png",
      trendIcon: "/trending-down.png",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-16 lg:px-24 py-16 lg:py-20">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            Welcome to WebXV
          </h1>
          <p className="text-brand-text text-base md:text-lg max-w-lg">
            Meet cool WEB3 projects and connect with other crypto enthusiasts!
          </p>
          <button className="bg-brand-blue hover:bg-blue-600 transition text-white px-6 py-3 rounded-md uppercase text-sm font-semibold w-fit">
            Register Now
          </button>
        </div>

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
              Don't have an account?{" "}
              <span className="text-blue-500 cursor-pointer">Register</span>
            </p>
          </form>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-6 md:px-16 lg:px-24 text-center py-16 lg:py-10">
        <h2 className="text-brand-blue uppercase text-sm md:text-lg font-semibold">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8 pt-8">
          {Array.from({ length: 7 }).map((_, index) => (
            <img
              key={index}
              className="w-[80px] sm:w-[100px] md:w-[120px]"
              src={`/patners-logo/patner-logo-${index + 1}.png`}
              alt={`Partner logo ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-16 lg:px-24 py-16 lg:py-24">
        <div className="space-y-6">
          <div>
            <h3 className="text-brand-blue uppercase text-sm md:text-lg font-semibold">
              About Us
            </h3>
            <h2 className="text-3xl md:text-4xl text-white font-bold">
              Who We Are
            </h2>
          </div>
          <p className="text-brand-text text-sm md:text-base">
            XV is a community-focused project led by a highly experienced team
            of Web3 builders and traders.
          </p>
          <p className="text-brand-text text-sm md:text-base">
            XV is also supported by several team members that are actively
            involved in the day-to-day running of the community.
          </p>
        </div>
        <img
          src="/about.png"
          alt="About us illustration"
          className="w-full max-w-lg mx-auto"
        />
      </section>

      {/* Crypto Currencies Section */}
      <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-16 lg:py-10">
        <div className="text-center space-y-2">
          <h3 className="text-brand-blue uppercase text-sm md:text-lg font-semibold">
            Cryptocurrencies
          </h3>
          <h2 className="text-3xl md:text-4xl text-white font-bold">
            Top crypto chart
          </h2>
        </div>
        <div className="w-[80%] overflow-x-auto mt-10 rounded-2xl bg-brand-secondary shadow-lg">
          <table className="min-w-full text-left">
            <thead className="border-b border-gray-700">
              <tr>
                <th className="py-6 px-6 text-sm text-brand-text-light">
                  NAME
                </th>
                <th className="py-6 px-6 text-sm text-brand-text-light">
                  PRICE
                </th>
                <th className="py-6 px-6 text-sm text-brand-text-light">
                  GRAPH
                </th>
              </tr>
            </thead>
            <tbody>
              {cryptoData ? (
                cryptoData.map((data, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-[#1a1f2c]"
                  >
                    <td className="flex items-center gap-3 py-4 px-6">
                      <img
                        src={data.symbolIcon}
                        alt={data.name}
                        className="w-6 h-6"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {data.name}
                        </div>
                        <div className="text-brand-text-extra-light text-xs">
                          {data.symbol}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-white">{data.price}</span>
                        <span className="text-red-500 text-xs">
                          {data.change}
                        </span>
                        <img
                          src={data.trendIcon}
                          alt="trend"
                          className="w-4 h-4"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <img src={data.graphIcon} alt="Graph" className="h-6" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-brand-text py-4">
                    Loading data...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-24 py-16 lg:pt-10 pb-20 gap-6">
        <h1 className="text-3xl md:text-4xl text-white font-bold leading-snug">
          With XV Token the <br className="hidden md:block" /> possibilities are
          limitless
        </h1>
        <p className="text-brand-text text-base md:text-lg max-w-md">
          One token for everything. $XV is the utility token for an ecosystem
          that is now fully community-oriented.
        </p>
        <button className="bg-brand-blue hover:bg-blue-600 transition text-white px-6 py-3 rounded-md uppercase text-sm font-semibold w-fit">
          Register Now
        </button>
      </section>
    </main>
  );
};

export default Home;
