import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="text-white bg-black px-4 md:px-12 lg:px-50">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 py-12">
        {/* Logo & Description */}
        <div className="lg:col-span-6 space-y-4 pr-20">
          <NavLink to={'/'}>
          <img className="mb-4" src="/logo.png" alt="WebXV Logo" />
          </NavLink>
          <p className="text-brand-text-light text-sm md:text-base">
            A SocialFi platform for Web3.0 projects to connect with users.
          </p>
          <p className="text-brand-text-light text-sm md:text-base">
            WebXV is a decentralized social platform for Web3.0 users to meet
            and connect with one another.
          </p>
        </div>

        {/* Company Section */}
        <div className="lg:col-span-3">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="text-brand-text-light space-y-2 text-sm md:text-base">
            <li className="cursor-pointer hover:text-brand-blue transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-brand-blue" : "text-brand-text-light"
                }
                to={"about-us"}
              >
                About Us
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-brand-blue transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-brand-blue" : "text-brand-text-light"
                }
                to={"all-projects"}
              >
                Projects
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-brand-blue transition">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-brand-blue" : "text-brand-text-light"
                }
                to={"community"}
              >
                Community
              </NavLink>
            </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="lg:col-span-3">
          <h4 className="text-lg font-semibold mb-4">Social</h4>
          <ul className="text-brand-text-light space-y-2 text-sm md:text-base">
            <li>
              <a href="#">Tiktok</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-right text-sm md:text-base">
        <p>© Copyright 2023 XV | All Rights Reserved | WhitePaper</p>
      </div>
    </footer>
  );
};

export default Footer;
