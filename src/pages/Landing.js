import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PlacementBanner, UnifiedBanner } from "../components/AwardBanner";

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
  // {
  //   name: "Rover",
  //   description:
  //     "A terrestrial rover built to navigate challenging terrains for exploration.",
  //   image: naviGatorImage,
  // },
  {
    name: "InvestiGator UAV",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % vehicleData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentVehicle = vehicleData[currentIndex];

  return (
    <header
      className="relative h-[667px] bg-cover bg-center transition-opacity duration-700 ease-in-out"
      style={{
        backgroundImage: `url('${currentVehicle.image}')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Text Area Integrated into Image */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent h-2/5 px-6 py-8 sm:px-10 sm:py-10">
        <div className="absolute max-w-4xl bottom-10 left-6 sm:left-10 mx-auto text-white pb-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {currentVehicle.name}
          </h2>
          <p className="mt-2 text-lg sm:text-xl">
            {currentVehicle.description}
          </p>
        </div>
      </div>

      {/* Chevron Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-5 sm:px-10">
        <button
          onClick={handlePrevious}
          className="text-white bg-gray-900/60 p-4 rounded-full hover:bg-gray-900/80 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-gray-900/60 p-4 rounded-full hover:bg-gray-900/80 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>

      {/* Indicator Circles */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {vehicleData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? "bg-white scale-125 opacity-100"
                : "bg-white opacity-50 hover:opacity-75"
            }`}
          />
        ))}
      </div>
    </header>
  );
}

function Mission() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Mission</h2>
        <p className="text-lg text-gray-200 leading-relaxed px-10">
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

function Projects() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              image: naviGatorImage2024,
              logo: naviGatorLogo,
              description:
                "Our autonomous surface vehicle designed for maritime environments. NaviGator AMS has proven capabilities through extensive testing and competition.",
            },
            {
              image: subjuGatorImage,
              logo: subjuGatorLogo,
              description:
                "Our autonomous underwater vehicle (AUV) capable of diving deep into underwater environments and performing complex tasks autonomously.",
            },
            {
              image: softwareSolving,
              title: "Mission Red Rover",
              description:
                "Our terrestrial rover project focuses on designing robotic rovers capable of navigating challenging terrains for exploration.",
            },
            {
              image: investigatorImage,
              title: "InvestiGator UAV",
              description:
                "Our aerial drone project combines stability, agility, and advanced navigation to perform aerial maneuvers autonomously.",
            },
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title || "Project"}
                className="rounded-lg mb-4"
              />
              {project.logo && (
                <img
                  src={project.logo}
                  alt="Project Logo"
                  className="rounded-lg mb-4 px-6 mx-auto"
                />
              )}
              {project.title && (
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {project.title}
                </h3>
              )}
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
          {/* Final Card Linking to Vehicles Page */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Explore All Vehicles
            </h3>
            <p className="text-gray-700 text-center mb-4">
              Discover our full range of vehicles, including past and present
              projects.
            </p>
            <a
              href="/vehicles"
              className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              See All Vehicles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function makeBannerMap(scrollingBanners) {
  return (
    <>
      {scrollingBanners.map((banner, index) =>
        banner.type === "placement" ? (
          <PlacementBanner
            key={index}
            place={banner.place}
            year={banner.year}
            event={banner.event}
            competition={banner.competition}
          />
        ) : (
          <UnifiedBanner
            key={index}
            place={banner.place}
            year={banner.year}
            event={banner.event}
            competition={banner.competition}
          />
        ),
      )}
    </>
  );
}

function ScrollingBannerSection() {
  const banners = [
    {
      type: "placement",
      place: "1st Place",
      year: "2016",
      event: "Overall Competition",
    },
    {
      type: "placement",
      place: "1st Place",
      year: "2013",
      event: "Overall Competition",
      competition: "RoboBoat",
    },
    {
      type: "placement",
      place: "1st Place",
      year: "2007",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "1st Place",
      year: "2006",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "1st Place",
      year: "2005",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "2nd Place",
      year: "2022",
      event: "Virtual Overall",
    },
    {
      type: "placement",
      place: "2nd Place",
      year: "2014",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "2nd Place",
      year: "2013",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "2nd Place",
      year: "2012",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "2nd Place",
      year: "1999",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "2nd Place",
      year: "2014",
      event: "Overall Competition",
      competition: "RoboBoat",
    },
    {
      type: "placement",
      place: "3rd Place",
      year: "2011",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "3rd Place",
      year: "2002",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "3rd Place",
      year: "2001",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "placement",
      place: "3rd Place",
      year: "1998",
      event: "Overall Competition",
      competition: "RoboSub",
    },
    {
      type: "unified",
      place: "4th Place",
      year: "2018",
      event: "Overall Competition",
    },
  ];

  const scrollingBanners = [...banners, ...banners];

  return (
    <div className="relative overflow-x-hidden bg-gray-100 py-40 group">
      {/* first row */}
      <div className="absolute top-0 flex group-hover:pause animate-marquee whitespace-nowrap space-x-8">
        {makeBannerMap(scrollingBanners)}
        {/* Duplicate for seamless scrolling */}
        {makeBannerMap(scrollingBanners)}
      </div>

      {/* second row */}
      <div className="absolute top-0 flex group-hover:pause animate-marquee2 whitespace-nowrap space-x-8">
        {makeBannerMap(scrollingBanners)}
        {/* Duplicate for seamless scrolling */}
        {makeBannerMap(scrollingBanners)}
      </div>
    </div>
  );
}

function Competitions() {
  return (
    <>
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-900">
            Competitions & Achievements
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed px-10">
            Our teams compete in large international autonomous robotics
            competitions, notably including RobotX and RoboSub. We have achieved
            five first-place placements, and have come in the top 3 over
            fourteen individual times.
          </p>
        </div>
      </section>
      <ScrollingBannerSection />
    </>
  );
}

// function Community() {
//   return (
//     <section className="py-12 bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 text-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-8">
//           Our Place in the UF Community
//         </h2>
//         <p className="text-lg leading-relaxed px-10">
//           As part of the University of Florida, the Robotics Lab is a prominent
//           space where interdisciplinary collaboration, hands-on learning, and
//           cutting-edge research come together. Our work enhances UF’s reputation
//           in robotics and AI.
//         </p>
//       </div>
//     </section>
//   );
// }

function TeamSection() {
  return (
    <section className="py-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">Meet the Team</h2>
        <p className="text-lg text-gray-800 leading-relaxed px-10 mb-8">
          Our team is composed of students and faculty from various fields
          across the University of Florida, unified by a passion for robotics
          and innovation. We are primarily undergraduates with a few graduate
          students and faculty advisors. We span a wide range of disciplines,
          from physics to computer science.
        </p>
        <div className="flex justify-center">
          <img
            src={teamPhoto}
            alt="Team Photo"
            className="max-w-5xl w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-8">
          <a
            href="/team"
            className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Meet our Members!
          </a>
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
      {/* <Community /> */}
      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
