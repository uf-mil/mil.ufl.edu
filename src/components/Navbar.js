import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/mil-logo-full.svg";

const NavItem = ({ to, label, dropdown }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Handle opening the dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  // Handle closing the dropdown with a delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // Adjust delay as needed
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={to}
        className={`flex items-center text-gatorblue-800 px-3 py-2 rounded-lg font-medium text-sm transition duration-300
          hover:bg-gatorblue-800 hover:text-white hover:outline-none hover:ring-2 hover:ring-gray-300
        `}
      >
        {label}
        {dropdown && (
          <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-2.5 h-2.5" />
        )}
      </NavLink>

      {/* Dropdown Menu */}
      {dropdown && isDropdownOpen && (
        <div className="absolute left-0 mt-1 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-10 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {dropdown.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition duration-300"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function Navbar() {
  return (
    <nav className="w-full p-3 flex justify-between items-center bg-white bg-opacity-80">
      <Link to="/">
        <div>
          <img src={logo} alt="MIL Logo" className="h-12" />
        </div>
      </Link>
      <ul className="flex space-x-6">
        <NavItem to="/" label="Home" />
        <NavItem
          to="/about"
          label="About Us"
          dropdown={[
            { to: "/history", label: "History" },
            { to: "/lab", label: "Lab Information" },
          ]}
        />
        <NavItem
          to="/team"
          label="Team"
          // dropdown={[
          //   { to: "/team", label: "2024 Team" },
          //   { to: "/team/2022", label: "2022 Team" },
          // ]}
        />
        <NavItem to="/vehicle" label="Vehicles" />
        <NavItem to="/research" label="Research" />
        <NavItem
          to="/sponsors"
          label="Sponsors"
          dropdown={[
            { to: "/donate", label: "Donate" },
            { to: "/todo", label: "Become a Supporter" },
            { to: "/sponsors", label: "2024 Sponsors" },
          ]}
        />
        <NavItem to="/blog" label="Blog" />
        <NavItem to="/apply" label="Apply" />
      </ul>
    </nav>
  );
}

export default Navbar;