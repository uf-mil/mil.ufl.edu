import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import naviGatorImage from "../assets/navigator.jpg";
import naviGatorImage2024 from "../assets/navigator_2024.jpg";
import naviGatorLogo from "../assets/navigator_logo.png";
import subjuGatorLogo from "../assets/subjugator_logo.png";
import subjuGatorImage from "../assets/subjugator.jpg";
import investigatorImage from "../assets/investigator.jpg";
import teamPhoto from "../assets/team_2024.jpg";
import softwareSolving from "../assets/software_solving.jpg";

const vehicleData = [
  {
    name: "NaviGator AMS",
    description:
      "An autonomous surface vehicle designed for maritime navigation and competition.",
    image: naviGatorImage,
  },
  {
    name: "SubjuGator AUV",
    description:
      "An autonomous underwater vehicle capable of deep diving and complex underwater tasks.",
    image: subjuGatorImage,
  },
  {
    name: "Rover",
    description:
      "A terrestrial rover built to navigate challenging terrains for exploration.",
    image: naviGatorImage,
  },
  {
    name: "Drone",
    description:
      "Aerial drone project with autonomous navigation and stability for aerial tasks.",
    image: investigatorImage,
  },
];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % vehicleData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + vehicleData.length) % vehicleData.length,
    );
  };

  const currentVehicle = vehicleData[currentIndex];

  return (
    <header
      className="relative h-[667px] bg-cover bg-center transition-opacity duration-700 ease-in-out"
      style={{
        backgroundImage: `url('${currentVehicle.image}')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        opacity: 1, // Add opacity to enable smooth fade
      }}
    >
      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Text Area */}
      <div className="absolute bottom-16 left-10 bg-white bg-opacity-60 p-3 rounded-md shadow-md backdrop-blur-sm text-gray-900 max-w-xs">
        <h2 className="text-xl font-semibold">{currentVehicle.name}</h2>
        <p className="text-sm mt-1">{currentVehicle.description}</p>
      </div>

      {/* Chevron Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-10">
        <button
          onClick={handlePrevious}
          className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>

      {/* Indicator Circles */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {vehicleData.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </header>
  );
}

// Mission Component
function Mission() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 font-light">Our Mission</h2>
        <p className="text-white px-10 mb-6">
          The Machine Intelligence Laboratory (MIL) provides a synergistic
          environment dedicated to the study and development of intelligent,
          autonomous robots. The faculty and students associated with the
          laboratory conduct research in the theory and realization of machine
          intelligence covering topics such as machine learning, real-time
          computer vision, statistical modeling, robot kinematics, autonomous
          vehicles, teleoperation and human interfaces, robot and nonlinear
          control, computational intelligence, neural networks, and general
          robotics. Applications of MIL research include autonomous underwater
          vehicles (AUVs), autonomous water surface vehicles (ASVs), autonomous
          land vehicles, autonomous air vehicles (AAVs including quadcopters and
          micro air vehicles, MAVs) , swarm robots, humanoid robots, and
          autonomous household robots.
        </p>
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto text-center text-blue-600">
        <h2 className="text-3xl font-bold font-light mb-6 text-white">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={naviGatorImage2024}
              alt="NaviGator AMS"
              className="rounded-lg mb-4"
            />
            <img
              src={naviGatorLogo}
              alt="NaviGator AMS"
              className="rounded-lg mb-4 px-6 mx-auto"
            />
            <p className="mt-2">
              Our autonomous surface vehicle designed for maritime environments.
              NaviGator AMS has proven capabilities through extensive testing
              and competition, demonstrating advanced autonomous navigation and
              control.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={subjuGatorImage}
              alt="SubjuGator AUV"
              className="rounded-lg mb-4"
            />
            <img
              src={subjuGatorLogo}
              alt="SubjuGator AUV"
              className="rounded-lg mb-4 px-6 mx-auto"
            />
            <p className="mt-2">
              Our autonomous underwater vehicle (AUV) that can dive deep into
              underwater environments, performing complex tasks autonomously.
              SubjuGator has consistently performed well in national and
              international competitions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={softwareSolving}
              alt="SubjuGator AUV"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium">Mission Red Rover</h3>
            <p className="mt-2">
              Our terrestrial rover project focuses on designing robotic rovers
              capable of navigating challenging terrains, enabling autonomous
              exploration and data collection in remote or dangerous
              environments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={investigatorImage}
              alt="SubjuGator AUV"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium">InvestiGator UAV</h3>
            <p className="mt-2">
              Our aerial drone project combines stability, agility, and advanced
              navigation to perform aerial maneuvers autonomously. The drones
              are designed to participate in competitions and perform real-world
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Competitions Component
function Competitions() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6">
          Competitions & Achievements
        </h2>
        <p className="text-white px-10 mb-6">
          Our teams compete in prestigious competitions like RobotX, RoboSub,
          and RoboMaster, securing awards and achieving top ranks globally.
          Through these competitions, we push the limits of innovation in
          robotics.
        </p>
      </div>
    </section>
  );
}

// UF Community Standing Component
function Community() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6">
          Our Place in the UF Community
        </h2>
        <p className="text-white px-10">
          As part of the University of Florida, the Robotics Lab is a prominent
          space where interdisciplinary collaboration, hands-on learning, and
          cutting-edge research come together. Our work enhances UF’s reputation
          in robotics and AI.
        </p>
      </div>
    </section>
  );
}

// Team Component
function TeamSection() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6">Meet the Team</h2>
        <p className="text-white px-10 mb-6">
          Our team is composed of students and faculty from various fields
          across the University of Florida, unified by a passion for robotics
          and innovation. We work closely to advance our robotics projects and
          achieve remarkable results.
        </p>
        <div className="flex justify-center">
          <img
            src={teamPhoto}
            alt="Team Photo"
            className="max-w-5xl w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

const LandingPage = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-800 to-blue-500 text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="relative">
        <Header />
      </div>
      <Mission />
      <Projects />
      <Competitions />
      <Community />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
