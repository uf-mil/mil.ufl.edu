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

const SoftwareLeadership = () => {
  const members = [
    {
      image: memberImages["cameron_brown.jpeg"],
      name: "Cameron Brown",
      role: "Team Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "cameron-brown37",
      website: "https://cbrxyz.com",
    },
    {
      image: memberImages["daniel_parra.jpeg"],
      name: "Daniel Parra",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2026",
      linkedIn: "daniparr",
    },
    {
      image: memberImages["keith_khadar.jpg"],
      name: "Keith Khadar",
      role: "Software Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "keith-khadar",
    },
    {
      image: memberImages["alex_johnson.png"],
      name: "Alex Johnson",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "alexojohnson",
    },
  ];

  return <LeadershipSection title="Software Leadership" members={members} />;
};

const ElectricalLeadership = () => {
  const members = [
    {
      image: memberImages["adrian_fernandez.png"],
      name: "Adrian Fernandez",
      role: "Team Lead",
      degree: "MS, Electrical/Computer Engineering",
      graduationYear: "Fall 2025",
      linkedIn: "adrianfernandez23",
    },
    {
      image: memberImages["dominik_kapuscinski.png"],
      name: "Dominik Kapuscinski",
      role: "Electrical Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "dominik-kapuscinski",
    },
    {
      image: memberImages["lester_bonilla.jpg"],
      name: "Lester Bonilla",
      role: "Drone Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
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
    },
    {
      image: memberImages["adam_hamdan.png"],
      name: "Adam Hamdan",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2026",
    },
    {
      image: memberImages["adam_mcaleer.png"],
      name: "Adam McAleer",
      role: "Mechanisms Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "adam-mcaleer",
    },
    {
      image: memberImages["lorant_domokos.png"],
      name: "Lorant Domokos",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "lorant-domokos-849094244",
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
        <p>
          MIL Director
          <br />
          Professor, ECE
        </p>
      ),
      linkedIn: "eric-schwartz-4231924",
      website: "https://mil.ufl.edu/ems/",
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
        <p>
          MIL Director
          <br />
          Professor, ECE
        </p>
      ),
      linkedIn: "eric-schwartz-4231924",
      website: "https://mil.ufl.edu/ems/",
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
        <p>
          Past Director
          <br />
          Professor, ECE
        </p>
      ),
      website: "https://mil.ufl.edu/~arroyo/",
    },
    {
      image: advisorImages["keith_doty.jpg"],
      name: "Dr. Keith Doty",
      role: (
        <p>
          Founding Director
          <br />
          Professor, ECE
        </p>
      ),
      linkedIn: "keith-doty-a6213a47",
    },
  ];
  return <LeadershipSection title="Past Directors" members={pastDirectors} />;
};

const TeamList = () => {
  const teams = [
    {
      name: "Mechanical Team",
      members: [
        "Ryan Hoburg",
        "Will MacGuire",
        "Cade Sachs",
        "Joshua Valencia",
        "Diego Dominguez",
        "Blake Cobo",
        "Findlay Watson",
        "Harin Patel",
      ],
    },
    {
      name: "Software Team",
      members: [
        "Carlos Chavez",
        "Javier Irizarry-Delgado",
        "Mohana Pamidimukkala",
        "Edward Guthrie",
        "Max Vu",
        "Lynette Hemingway",
        "William Zhu",
        "Thomas Canro",
        "Charles Pratt",
        "Tanushree Hadavale",
        "Anthony Liao",
        "Marcin Plaza",
        "Danush Singla",
        "Joshua Thomas",
      ],
    },
    {
      name: "Electrical Team",
      members: [
        "Joseph Goodman",
        "Enoch Wang",
        "Joshua Arroyo",
        "Szander Brenner",
        "Sanat Konda",
        "Peter Van Kirk",
      ],
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
      <TeamList />
      <Footer />
    </div>
  );
};

export default TeamPage;
