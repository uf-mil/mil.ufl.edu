// src/pages/Alumni.js
import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MemberCard from "../components/MemberCard";

import alumniImages from "../assets/people/alumni";

// I modeled this section after the team page
const LeadershipSection = ({ title, members }) => {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            degree={member.degree}
            graduationYear={member.graduationYear}
            linkedIn={member.linkedIn}
            website={member.website}
          />
        ))}
      </div>
    </section>
  );
};

LeadershipSection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      degree: PropTypes.string,
      graduationYear: PropTypes.string,
      linkedIn: PropTypes.string,
      website: PropTypes.string,
    }),
  ).isRequired,
};

// Alumni page component
function AlumniPage() {
  // Single alumni card, just for the proof of concept (modeled after member cards on team page):
  const alumniMembers = [
    {
      image: alumniImages["albert_gator.jpg"],
      name: "Albert Gator",
      role: "Autonomous Systems Engineer",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "albert-gator",
      website: "https://ufl.edu",
    },
  ];

  return (
    <div
      className="bg-gradient-to-br from-blue-800 to-blue-500 text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar />
      {/* A single section labeled "Alumni" with one MemberCard */}
      <LeadershipSection title="Alumni" members={alumniMembers} />
      <Footer />
    </div>
  );
}

export default AlumniPage;
