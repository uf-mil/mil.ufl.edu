import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import MemberCard from "../../components/MemberCard";

import memberImages from "../../assets/people/members";
import advisorImages from "../../assets/people/advisors";

const LeadershipSection = ({ title, members }) => {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
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
            email={member.email}
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
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      role: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      degree: PropTypes.string,
      graduationYear: PropTypes.string,
      linkedIn: PropTypes.string,
      website: PropTypes.string,
      email: PropTypes.string,
    }),
  ).isRequired,
};

const SoftwareLeadership = () => {
  const members = [
    {
      image: memberImages["daniel_parra.jpeg"],
      name: "Daniel Parra",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2026",
      linkedIn: "daniparr",
      email: "dparra1@ufl.edu",
    },
  ];

  return <LeadershipSection title="Software Leadership" members={members} />;
};

const ElectricalLeadership = () => {
  const members = [
    {
      image: memberImages["lester_bonilla.jpg"],
      name: "Lester Bonilla",
      role: "Drone Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      email: "lester.bonilla@ufl.edu",
    },
    // {
    //   image: memberImages["jack.png"],
    //   name: "Jack Rainville",
    //   role: "Electrical Member",
    //   degree: "BS, Electrical Engineering",
    //   graduationYear: "Spring 2027",
    //   linkedIn: "jack-rainville",
    // },
  ];

  return <LeadershipSection title="Electrical Leadership" members={members} />;
};

const MechanicalLeadership = () => {
  const members = [
    {
      image: memberImages["sophie_lanahan.png"],
      name: "Sophie Lanahan",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Fall 2026",
      linkedIn: "sophie-lanahan-9b2440325",
      email: "sophielanahan@ufl.edu",
    },
    {
      image: memberImages["adam_hamdan.png"],
      name: "Adam Hamdan",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2026",
      email: "adamhamdan@ufl.edu",
    },
    {
      image: memberImages["adam_mcaleer.png"],
      name: "Adam McAleer",
      role: "Mechanisms Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2026",
      linkedIn: "adam-mcaleer",
      email: "adammcaleer@ufl.edu",
    },
  ];

  return <LeadershipSection title="Mechanical Leadership" members={members} />;
};

const Directors = () => {
  const directors = [
    {
      image: advisorImages["eric_schwartz.jpg"],
      name: "Dr. Eric Schwartz",
      role: (
        <span>
          MIL Director
          <br />
          Professor, ECE
        </span>
      ),
      linkedIn: "eric-schwartz-4231924",
      website: "https://mil.ufl.edu/ems/",
      email: "ems@ufl.edu",
    },
  ];
  return <LeadershipSection title="Directors" members={directors} />;
};

const Advisors = () => {
  const advisors = [
    {
      image: advisorImages["eric_schwartz.jpg"],
      name: "Dr. Eric Schwartz",
      role: (
        <span>
          MIL Director
          <br />
          Professor, ECE
        </span>
      ),
      linkedIn: "eric-schwartz-4231924",
      website: "https://mil.ufl.edu/ems/",
      email: "ems@ufl.edu",
    },
    {
      image: advisorImages["carl_crane.jpg"],
      name: "Dr. Carl Crane",
      role: "Professor, MAE",
      linkedIn: "carl-crane-47839574",
      website: "https://mae.ufl.edu/people/profiles/carl-crane/",
    },
    {
      image: advisorImages["andres_pulido.png"],
      name: "Andres Pulido",
      role: "PhD Candidate, MAE",
      linkedIn: "andres-a-pulido",
      website: "https://andrespulido8.github.io",
    },
  ];

  return <LeadershipSection title="Advisors" members={advisors} />;
};

const PastDirectors = () => {
  const pastDirectors = [
    {
      image: advisorImages["antonio_a_arroyo.jpg"],
      name: "Dr. A. Antonio Arroyo",
      role: (
        <span>
          Past Director
          <br />
          Professor, ECE
        </span>
      ),
      website: "https://mil.ufl.edu/~arroyo/",
    },
    {
      image: advisorImages["keith_doty.jpg"],
      name: "Dr. Keith Doty",
      role: (
        <span>
          Founding Director
          <br />
          Professor, ECE
        </span>
      ),
      linkedIn: "keith-doty-a6213a47",
    },
  ];
  return <LeadershipSection title="Past Directors" members={pastDirectors} />;
};

// eslint-disable-next-line no-unused-vars
const TeamList = () => {
  const teams = [
    {
      name: "Mechanical Team",
      members: ["Example Mechanical Member"],
    },
    {
      name: "Software Team",
      members: ["Example Software Member"],
    },
    {
      name: "Electrical Team",
      members: ["Example Electrical Member"],
    },
  ];
  return (
    <section className="max-w-6xl mx-auto pb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Members</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-black text-xl font-bold mb-3">{team.name}</h3>
            <div className="space-y-1">
              {team.members.toSorted().map((member, idx) => (
                <p key={idx} className="text-gray-700">
                  {member}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamPage = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-800 to-blue-500 text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar />
      <SoftwareLeadership />
      <ElectricalLeadership />
      <MechanicalLeadership />
      <Directors />
      <Advisors />
      <PastDirectors />
      {/*
      Removing the individual members list since it wasn't maintained super well:
      <TeamList />
      */}
      <Footer />
    </div>
  );
};

export default TeamPage;
