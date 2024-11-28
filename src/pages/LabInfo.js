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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Reach out to us for inquiries, collaborations, or general
              questions.
            </p>
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
            <h4 className="text-xl font-semibold text-blue-900 mt-4">
              Contact Information
            </h4>
            <p className="text-gray-600 mt-2">
              Prof. Eric M. Schwartz, MIL Director
              <br />
              Email:{" "}
              <a
                href="mailto:ems@ufl.edu"
                className="text-blue-600 hover:underline"
              >
                ems@ufl.edu
              </a>
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.6144762212134!2d-82.34776149999999!3d29.643938499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a3773ea880c5%3A0x2d7889faeac87fe2!2sMachine%20Intelligence%20Laboratory%20(MIL)!5e0!3m2!1sen!2sus!4v1732679946255!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
