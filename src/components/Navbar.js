import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line no-unused-vars
import Banner from "../components/Banner";
import logo from "../assets/mil-logo-full.svg";

const NavItem = ({ to, label, dropdown, closeMobileMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const mobileSize = 768;

  // Desktop hover behavior
  const handleMouseEnter = () => {
    if (window.innerWidth >= mobileSize) {
      clearTimeout(timeoutRef.current);
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= mobileSize) {
      timeoutRef.current = setTimeout(() => {
        setDropdownOpen(false);
      }, 200);
    }
  };

  // Mobile toggle behavior
  const toggleDropdown = () => {
    if (window.innerWidth < mobileSize) {
      setDropdownOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {dropdown ? (
        <button
          onClick={toggleDropdown}
          className={`flex items-center text-gatorblue-800 px-3 py-2 rounded-lg font-medium text-sm transition duration-300
            hover:bg-gatorblue-800 hover:text-white hover:outline-none hover:ring-2 hover:ring-gray-300
          `}
        >
          {label}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-2 w-2.5 h-2.5 transform transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      ) : (
        <NavLink
          to={to}
          onClick={closeMobileMenu}
          className={`flex items-center text-gatorblue-800 px-3 py-2 rounded-lg font-medium text-sm transition duration-300
            hover:bg-gatorblue-800 hover:text-white hover:outline-none hover:ring-2 hover:ring-gray-300
          `}
        >
          {label}
        </NavLink>
      )}

      {/* Dropdown */}
      {dropdown && isDropdownOpen && (
        <div className="absolute left-0 mt-1 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-10 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {dropdown.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  onClick={closeMobileMenu} // Close the menu on mobile
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

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dropdown: PropTypes.array,
  closeMobileMenu: PropTypes.func.isRequired,
};

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // eslint-disable-next-line no-unused-vars
  const bannerMessage = (
    <p>
      Interested in applying for Spring 2024? Applications are open until
      December 20! <b>Apply Now ➜</b>
    </p>
  );

  return (
    <>
      <nav className="w-full p-3 bg-white bg-opacity-90 shadow-md z-50 relative">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu}>
            <div>
              <img src={logo} alt="MIL Logo" className="h-12" />
            </div>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden text-gatorblue-800 z-50"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>

          {/* Menu Items */}
          <ul
            className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 z-40 md:relative md:flex-row md:items-center md:justify-between md:space-x-6 md:space-y-0 md:transform-none md:h-auto md:w-auto md:bg-transparent ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <NavItem to="/" label="Home" closeMobileMenu={closeMobileMenu} />
            <NavItem
              to="/about"
              label="About Us"
              dropdown={[{ to: "/lab", label: "Lab Information" }]}
              closeMobileMenu={closeMobileMenu}
            />
            <NavItem
              to="/team"
              label="Team"
              closeMobileMenu={closeMobileMenu}
            />
            <NavItem
              to="/vehicles"
              label="Vehicles"
              closeMobileMenu={closeMobileMenu}
            />
            {/* <NavItem
            to="/research"
            label="Research"
            closeMobileMenu={closeMobileMenu}
          /> */}
            <NavItem
              to="/sponsors"
              label="Sponsors"
              dropdown={[
                { to: "/donate", label: "Donate" },
                { to: "/sponsor_packet", label: "Become a Supporter" },
                { to: "/sponsors", label: "2024 Sponsors" },
              ]}
              closeMobileMenu={closeMobileMenu}
            />
            <NavItem
              to="/blog"
              label="Blog"
              closeMobileMenu={closeMobileMenu}
            />
            <NavItem
              to="/apply"
              label="Apply"
              closeMobileMenu={closeMobileMenu}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
