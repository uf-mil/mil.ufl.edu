import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

import labImage from "../assets/lab_space.jpg";

function Introduction() {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-800 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-light mb-6">About Our Lab</h2>
        <div className="flex justify-center">
          <img
            src={labImage}
            alt="Lab"
            className="max-w-5xl w-full rounded-lg"
          />
        </div>
        <p className="text-white px-10 my-6">
          The Machine Intelligence Laboratory (MIL) at the University of Florida
          is a hub for cutting-edge research in autonomous robotics. Our
          state-of-the-art facilities support interdisciplinary collaboration
          and foster innovation.
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h3>
        <p className="text-gray-700 text-lg mb-6">
          Reach out to us for inquiries, collaborations, or general questions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-blue-900">Address</h4>
            <p className="text-gray-600 mt-2">
              Machine Intelligence Laboratory
              <br />
              University of Florida
              <br />
              1889 Museum Road
              <br />
              Room 3001
              <br />
              Gainesville, FL 32611
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-900">
              Contact Information
            </h4>
            <p className="text-gray-600 mt-2">
              Email:{" "}
              <a
                href="mailto:ems@ufl.edu"
                className="text-blue-600 hover:underline"
              >
                ems@ufl.edu
              </a>
              <br />
              Phone: (352) 392-2541
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetyDocument() {
  return (
    <section className="py-8 bg-gradient-to-br from-blue-500 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Lab Safety</h3>
        <p className="text-lg mb-6">
          At the Machine Intelligence Laboratory, safety is our top priority.
          Please review our lab safety document to ensure compliance with our
          guidelines.
        </p>
        <a
          href="https://mil.ufl.edu/MIL_Safety_and_Info.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-800 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition duration-300"
        >
          View Lab Safety Document
        </a>
      </div>
    </section>
  );
}

const LabInfoPage = () => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative">
        <Navbar />
      </div>
      <Introduction />
      <ContactInfo />
      <SafetyDocument />
      <Footer />
    </div>
  );
};

export default LabInfoPage;
