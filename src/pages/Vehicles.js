import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Medal from "../components/Medal";
import React from "react";

import softwareSolving from "../assets/software_solving.jpg";
import naviGatorImage from "../assets/navigator.jpg"; // Add images of the vehicles
import subjuGatorImage from "../assets/subjugator.jpg";
import investiGatorImage from "../assets/investigator.jpg";
import instiGatorImage from "../assets/instigator.jpg";
import koolioImage from "../assets/koolio.jpg";
import propaGatorImage from "../assets/propagator.jpg";

const VehicleCard = ({ title, description, image, medals = [], inactive }) => {
  const bg = inactive ? "bg-gray-200" : "bg-white";

  return (
    <div
      className={`flex flex-col md:flex-row shadow-lg rounded-lg p-6 mb-6 mx-4 relative ${bg} transform transition duration-300 hover:scale-105 hover:shadow-xl`}
    >
      {/* Inactive Badge */}
      {inactive && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold uppercase py-1 px-3 rounded">
          Inactive Project
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {/* Medals */}
        {medals.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {medals.map((medal, index) => (
              <Medal
                key={index}
                text={medal.text}
                placement={medal.placement}
              />
            ))}
          </div>
        )}
      </div>

      {/* Image */}
      <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full md:w-64 h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

// Introduction Component
function Introduction() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6">Research</h2>
        <div className="flex justify-center">
          <img
            src={softwareSolving}
            alt="Team Photo"
            className="max-w-5xl w-full rounded-lg"
          />
        </div>
        <p className="text-white px-10 my-6">
          Our students and faculty are committed to producing high-quality
          research. Check out some of our latest publications and projects.
        </p>
      </div>
    </section>
  );
}

const VehiclePage = () => {
  const vehicles = [
    {
      title: "NaviGator AMS",
      description:
        "Our autonomous surface vehicle designed for maritime environments. NaviGator AMS has proven capabilities through extensive testing and competition, demonstrating advanced autonomous navigation and control.",
      image: naviGatorImage,
      medals: [
        { text: "VRX 2022", placement: "2nd" },
        { text: "RobotX 2018", placement: "4th" },
        { text: "RobotX 2016", placement: "1st" },
      ],
    },
    {
      title: "SubjuGator AUV",
      description:
        "Our autonomous underwater vehicle (AUV) that can dive deep into underwater environments, performing complex tasks autonomously. SubjuGator has consistently performed well in national and international competitions. Boasting eight thrusters, two high-resolution cameras, an IMU, a DVL, and a barometer, SubjuGator has the capability to navigate and perform tasks in challenging underwater environments. Custom actuators allow for interacting in the local environment, and a custom-built control system allows for precise control and autonomy.",
      image: subjuGatorImage,
      medals: [
        { text: "RoboSub 2014", placement: "2nd" },
        { text: "RoboSub 2013", placement: "2nd" },
        { text: "RoboSub 2012", placement: "2nd" },
        { text: "RoboSub 2011", placement: "3rd" },
        { text: "RoboSub 2007", placement: "1st" },
        { text: "RoboSub 2006", placement: "1st" },
        { text: "RoboSub 2005", placement: "1st" },
        { text: "RoboSub 2002", placement: "3rd" },
        { text: "RoboSub 2001", placement: "3rd" },
        { text: "RoboSub 1999", placement: "2nd" },
        { text: "RoboSub 1998", placement: "3rd" },
      ],
    },
    {
      title: "InvestiGator UAV",
      description:
        "Our aerial drone project combines stability, agility, and advanced navigation to perform aerial maneuvers autonomously. The drones are designed to participate in competitions and perform real-world applications.",
      image: investiGatorImage,
    },
    {
      title: "Mission Red Rover",
      description:
        "Our terrestrial rover project focuses on designing robotic rovers capable of navigating challenging terrains, enabling autonomous exploration and data collection in remote or dangerous environments.",
      image: softwareSolving,
    },
    {
      title: "PropaGator AMS",
      description:
        "PropaGator is an autonomous water surface vehicle designed and built by graduate and undergraduate students of the Machine Intelligence Lab (MIL).",
      image: propaGatorImage,
      inactive: true,
      medals: [
        { text: "RoboBoat 2014", placement: "2nd" },
        { text: "RoboBoat 2013", placement: "1st" },
      ],
    },
    {
      title: "InstiGator Autonomous Lawn Mower",
      description:
        "InstiGator is an autonomous lawn mower designed and built by undergraduate and graduate students of the Machine Intelligence Lab (MIL).",
      image: instiGatorImage,
      inactive: true,
      medals: [
        { text: "ION Lawn Mower 2011", placement: "1st" },
        { text: "ION Lawn Mower 2010", placement: "3rd" },
      ],
    },
    {
      title: "Koolio",
      description:
        "Koolio is a traveling autonomous refrigerator robot - featured on MSNBC's Countdown with Olbermann on April 21st, 2004. It is designed to autonomously deliver refreshments on demand (via the web).",
      image: koolioImage,
      inactive: true,
    },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Navbar />
      </div>
      <div className="bg-gradient-to-br from-blue-800 to-blue-500 text-white">
        <section className="py-8">
          <div className="max-w-6xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                title={vehicle.title}
                description={vehicle.description}
                image={vehicle.image}
                medals={vehicle.medals}
                inactive={vehicle.inactive}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default VehiclePage;
