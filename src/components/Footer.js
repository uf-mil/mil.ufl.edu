import React from "react";
import logo from "../assets/mil.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src={logo} alt="Lab Logo" className="h-16 mb-2" />
          <p className="text-sm text-gray-400">
            Machine Intelligence Laboratory
          </p>
        </div>

        {/* College Logos */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <img src={logo} alt="College Logo 1" className="h-12" />
          <img src={logo} alt="College Logo 2" className="h-12" />
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <p className="text-lg font-semibold">Contact Us</p>
          <p className="text-sm text-gray-400 mt-1">
            Machine Intelligence Laboratory
          </p>
          <p className="text-sm text-gray-400">
            1889 Museum Road Room 3001, Gainesville, FL 32611
          </p>
          <p className="text-sm text-gray-400">(352) 392-2541</p>
          <p className="text-sm text-gray-400">ems@ufl.edu</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://www.youtube.com/@navigatoruf3224"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/ufmil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://twitter.com/NaviGatorUF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://discord.com/invite/Pw3NmhCF6U"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © 1995-{new Date().getFullYear()} Machine Intelligence Laboratory. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
