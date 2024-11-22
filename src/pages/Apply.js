import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

// Introduction Component
function Introduction() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Apply to Join
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Become a part of our innovative and collaborative team. As a member of
          our lab, you'll have the opportunity to work on cutting-edge robotics
          projects and make a meaningful impact in the field of autonomous
          systems and robotic intelligence.
        </p>
      </div>
    </section>
  );
}

// Requirements Section
function Requirements() {
  const requirements = [
    "Current enrollment at the University of Florida",
    "A passion for robotics and autonomous systems",
    "Strong problem-solving and teamwork skills",
    "Commitment to contributing to ongoing projects and competitions",
    "Able to commit 5 hours/week to lab activities (3 hours/week for new members)",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-extrabold text-blue-800 text-center mb-6">
          Requirements to Join
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          {requirements.map((requirement, index) => (
            <li key={index} className="text-lg leading-relaxed">
              {requirement}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <a
            href="https://ufl.qualtrics.com/jfe/form/SV_3qNksg41Gdghz8y"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}

// Apply Page Component
const ApplyPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white">
        <Introduction />
      </div>
      <Requirements />
      <Footer />
    </div>
  );
};

export default ApplyPage;
