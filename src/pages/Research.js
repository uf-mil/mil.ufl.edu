import Navbar from "../components/Navbar";
import React from "react";

import softwareSolving from "../assets/software_solving.jpg";

// Team Component
function Introduction() {
  return (
    <section className="py-8 bg-gatorblue-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6">Research</h2>
        <div className="flex justify-center">
          <img
            src={softwareSolving}
            alt="Team Photo"
            className="max-w-5xl w-full rounded-lg"
          />
        </div>
        <p className="text-gray-600 px-10 my-6">
          Our students and faculty are committed to producing high-quality
          research. Check out some of our latest publications and projects.
        </p>
      </div>
    </section>
  );
}

const ResearchPage = () => {
  return (
    <div
      className="bg-gatorblue-200"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="relative">
        <Navbar />
      </div>
      <Introduction />
    </div>
  );
};

export default ResearchPage;
