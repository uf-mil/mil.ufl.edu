import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import smiling from "../assets/smiling_team.jpg";

const ApplyPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-8 bg-gatorblue-200">
        <div
          style={{ fontFamily: "Inter, sans-serif" }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="bg-gatorblue-200 p-8">
            {/* Header Section */}
            <header className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
              <h1 className="text-4xl mb-4">Join us!</h1>
              <p className="text-lg font-light max-w-2xl mx-auto">
                Explore cutting-edge robotics, collaborate with a passionate
                team, and contribute to groundbreaking research.
              </p>
            </header>

            {/* Image Section */}
            <div className="flex justify-center py-8">
              <img
                src={smiling}
                alt="Our robotics team collaborating"
                className="rounded-lg shadow-lg max-w-[600px] max-h-[400px] w-full object-contain"
              />
            </div>

            {/* Requirements Section */}
            <section className="py-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">
                  Requirements to Join
                </h2>
                <ul className="text-left text-gray-700 space-y-4 list-disc px-6 sm:px-0">
                  <li>Currently enrolled as an undergraduate student</li>
                  <li>
                    Background in robotics, engineering, or a related field
                  </li>
                  <li>
                    Familiarity with programming languages such as Python or C++
                  </li>
                  <li>
                    Commitment to at least 10 hours per week for lab projects
                  </li>
                  <li>
                    Willingness to learn, collaborate, and contribute to the
                    team
                  </li>
                </ul>
              </div>
            </section>

            {/* Application Call-to-Action */}
            <section className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600 py-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
                <p className="text-lg font-light mb-8">
                  Fill out our application form to take the first step in your
                  robotics journey!
                </p>
                <a
                  href="https://example.com/application-form" // Replace with the actual link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApplyPage;
