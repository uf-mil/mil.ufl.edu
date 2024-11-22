import Navbar from "../components/Navbar";
import React from "react";

import softwareSolving from "../assets/software_solving.jpg";
import naviGatorImage from "../assets/navigator.jpg"; // Add images of the vehicles
import subjuGatorImage from "../assets/subjugator.jpg";
import investiGatorImage from "../assets/investigator.jpg";
import instiGatorImage from "../assets/instigator.jpg";
import koolioImage from "../assets/koolio.jpg";
import propaGatorImage from "../assets/propagator.jpg";

const VehicleCard = ({ title, description, image, medals, inactive }) => {
  const bg = inactive ? "bg-gray-200" : "bg-white";
  return (
    <div
      className={
        "flex flex-col md:flex-row shadow-lg rounded-lg p-6 mb-6 mx-4 relative " +
        bg
      }
    >
      {/* Inactive Badge */}
      {inactive && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold uppercase py-1 px-3 rounded">
          Inactive Project
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <h4 className="font-medium text-gray-800">Medals:</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {medals.map((medal, index) => (
              <li key={index}>{medal}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full md:w-64 h-48 object-cover rounded-lg"
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
      medals: ["Best Robotics Award 2023", "Exploration Excellence Medal"],
    },
    {
      title: "SubjuGator AUV",
      description:
        "Our autonomous underwater vehicle (AUV) that can dive deep into underwater environments, performing complex tasks autonomously. SubjuGator has consistently performed well in national and international competitions.",
      image: subjuGatorImage,
      medals: ["Innovation Gold Medal", "AI Integration Award"],
    },
    {
      title: "InvestiGator UAV",
      description:
        "Our aerial drone project combines stability, agility, and advanced navigation to perform aerial maneuvers autonomously. The drones are designed to participate in competitions and perform real-world applications.",
      image: investiGatorImage,
      medals: ["Marine Engineering Prize", "Discovery Achievement Award"],
    },
    {
      title: "Mission Red Rover",
      description:
        "Our terrestrial rover project focuses on designing robotic rovers capable of navigating challenging terrains, enabling autonomous exploration and data collection in remote or dangerous environments.",
      image: softwareSolving,
      medals: ["Marine Engineering Prize", "Discovery Achievement Award"],
    },
    {
      title: "PropaGator AMS",
      description: "hi",
      image: propaGatorImage,
      medals: ["Marine Engineering Prize", "Discovery Achievement Award"],
      inactive: true,
    },
    {
      title: "InstiGator Autonomous Lawn Mower",
      description: "hi",
      image: instiGatorImage,
      medals: ["Marine Engineering Prize", "Discovery Achievement Award"],
      inactive: true,
    },
    {
      title: "Koolio",
      description: "hi",
      image: koolioImage,
      medals: ["Marine Engineering Prize", "Discovery Achievement Award"],
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
    </div>
  );
};

export default VehiclePage;
