import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";

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

  const applicationOpens = new Date("2025-08-03T00:00:00-05:00");
  const applicationDeadline = new Date("2025-08-17T23:59:59-04:00");
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(applicationDeadline),
  );
  const applicationOpen =
    new Date() >= applicationOpens && new Date() <= applicationDeadline;

  function calculateTimeLeft(deadline) {
    const now = new Date();
    const difference = deadline - now;

    if (difference <= 0) {
      return "Applications are now closed!";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(applicationDeadline));
    }, 1000);
    return () => clearInterval(timer);
  }, [applicationDeadline]);

  const formattedOpen = applicationOpens.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
    timeZone: "America/New_York",
  });
  const formattedDeadline = applicationDeadline.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
    timeZone: "America/New_York",
  });

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

        {applicationOpen ? (
          <div className="flex justify-center mt-10">
            <a
              href="https://ufl.qualtrics.com/jfe/form/SV_5hCMlOqPzRF35dQ"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg text-2xl font-medium hover:bg-blue-700 transition duration-300 flex flex-col items-center"
            >
              Apply Now
              <span className="text-sm text-gray-200 mt-2 text-center leading-tight font-normal">
                Due in {timeLeft}!<br />
                (by {formattedDeadline})
              </span>
            </a>
          </div>
        ) : (
          <div className="flex justify-center mt-10">
            <div className="bg-white text-red-800 px-6 py-3 rounded-lg text-2xl font-medium flex flex-col items-center border-2 border-red-800 hover:cursor-not-allowed">
              Applications are closed!
              <span className="text-sm mt-2 text-center leading-tight font-normal">
                (opens {formattedOpen})
              </span>
            </div>
          </div>
        )}
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
