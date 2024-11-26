import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

function NotFoundMessage() {
  return (
    <section className="py-12">
      {" "}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been
          removed, renamed, or is temporarily unavailable.
        </p>
      </div>
    </section>
  );
}

// Return button
function BackToHome() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold text-blue-800 mb-6">
          Let’s Get You Back on Track
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Use the button below to return to our homepage and find what you're
          looking for.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

const NotFoundPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white">
        <NotFoundMessage />
      </div>
      <BackToHome />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
