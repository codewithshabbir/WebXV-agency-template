import React from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";
import { FaAngleRight } from "react-icons/fa6";

const Projects = () => {
  const allProjects = [
    {
      logo: "/projects-logo/project-logo-1.png",
      name: "Decentraland",
      rating: 3.94,
      votes: 16,
      description:
        "Decentraland is a 3D virtual world browser-based platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain. Designers can create and sell clothes and accessories for the avatars to be used in the virtual world.",
      links: {
        link1: "Show more",
        link2: "Go to website",
      },
    },
    {
      logo: "/projects-logo/project-logo-2.png",
      name: "House of Degenerates",
      rating: 3.94,
      votes: 19,
      description:
        "Buckle up, fellow degens, because the House of Degenerates (SHOD) is here to redefine the Web3 experience! Embark on the Ultimate Gaming Odyssey...",
      links: {
        link1: "Learn more",
        link2: "Go to website",
      },
    },
    {
      logo: "/projects-logo/project-logo-3.png",
      name: "Axie Infinity",
      rating: 3.44,
      votes: 16,
      description:
        "Axie Infinity is a non-fungible token-based online video game developed by Vietnamese studio Sky Mavis, known for its in-game economy which uses...",
      links: {
        link1: "Learn more",
        link2: "Go to website",
      },
    },
    {
      logo: "/projects-logo/project-logo-4.png",
      name: "EVCoin",
      rating: 3.65,
      votes: 31,
      description:
        "Evercoaster’s Play to Earn Game, PeakXV is changing the way blockchain games are played, by bringing fun into the picture. Earn while you play, but...",
      links: {
        link1: "Learn more",
        link2: "Go to website",
      },
    },
  ];

  return (
    <div className="px-6 md:px-40 py-20 projects-section">
      <h1 className="text-6xl font-bold text-white text-center mb-6">
        All Projects
      </h1>
      <div className="flex flex-col gap-6">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-brand-secondary rounded-2xl p-6 gap-6 shadow-lg"
          >
            <img
              className="w-[156px] h-[156px] rounded-lg object-cover"
              src={project.logo}
              alt="Decentraland Logo"
            />
            <div className="text-white flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <div className="flex flex-col mt-1 text-sm">
                  <span className="font-semibold">{project.rating}</span>
                  <span className="text-brand-text-extra-light">
                    Based on {project.votes} votes
                  </span>
                </div>
                <div className="flex text-brand-blue mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex gap-6 text-sm font-medium text-blue-400">
                <NavLink className="flex items-center gap-1 hover:underline">
                  {project.links.link1} <FaAngleRight />
                </NavLink>
                <NavLink className="flex items-center gap-1 hover:underline">
                  {project.links.link2} <FaAngleRight />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
