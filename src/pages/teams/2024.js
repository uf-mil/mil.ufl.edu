import React from "react";
import Navbar from "../../components/Navbar";

import MemberCard from "../../components/MemberCard";

import memberImages from "../../assets/people/members";
import advisorImages from "../../assets/people/advisors";

const SoftwareLeadership = () => {
  const members = [
    {
      image: memberImages["cameron.jpeg"],
      name: "Cameron Brown",
      role: "Team Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "cameron-brown37",
      website: "https://cbrxyz.com",
    },
    {
      image: memberImages["daniel.jpeg"],
      name: "Daniel Parra",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2026",
      linkedIn: "daniparr",
    },
    {
      image: memberImages["keith.jpeg"],
      name: "Keith Khadar",
      role: "Software Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "keith-khadar",
    },
    {
      image: memberImages["andrew.png"],
      name: "Andrew Knee",
      role: "Software Lead",
      degree: "MS, Computer Science",
      graduationYear: "Fall 2024",
      linkedIn: "andrew-knee-j",
    },
    {
      image: memberImages["alex.png"],
      name: "Alex Johnson",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "alexojohnson",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-8 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Software Leadership</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

const ElectricalLeadership = () => {
  const members = [
    {
      image: memberImages["adrian.png"],
      name: "Adrian Fernandez",
      role: "Team Lead",
      degree: "BS, Electrical Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "adrianfernandez23",
    },
    {
      image: memberImages["lester.jpg"],
      name: "Lester Bonilla",
      role: "Drone Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
    },
    {
      image: memberImages["dominik.png"],
      name: "Dominik Kapuscinski",
      role: "Drone Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "dominik-kapuscinski",
    },
    {
      image: memberImages["kayleigh.jpg"],
      name: "Kayleigh Beron",
      role: "Operations Lead",
      degree: "BS, Computer Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "kayleigh-beron",
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

  return (
    <section className="max-w-6xl mx-auto py-8 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Electrical Leadership</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

const MechanicalLeadership = () => {
  const members = [
    {
      image: memberImages["lorant.png"],
      name: "Lorant Domokos",
      role: "Team Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "lorant-domokos-849094244",
    },
    {
      image: memberImages["adam_m.jpeg"],
      name: "Adam McAleer",
      role: "Mechanisms Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "adam-mcaleer",
    },
    {
      image: memberImages["sophie.png"],
      name: "Sophie Lanahan",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Fall 2026",
      linkedIn: "sophie-lanahan-9b2440325",
    },
    {
      image: memberImages["adam_h.png"],
      name: "Adam Hamdan",
      role: "Operations Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2026",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Mechanical Leadership</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

const Advisors = () => {
  const advisors = [
    {
      image: advisorImages["schwartz.jpg"],
      name: "Dr. Eric Schwartz",
      role: "MIL Director",
      linkedIn: "eric-schwartz-4231924",
      website: "https://mil.ufl.edu/ems/",
    },
    {
      image: advisorImages["crane.jpg"],
      name: "Dr. Carl Crane",
      role: "Professor, MAE",
      linkedIn: "carl-crane-47839574",
      website: "https://mae.ufl.edu/people/profiles/carl-crane/",
    },
    {
      image: advisorImages["andres.png"],
      name: "Andres Pulido",
      role: "PhD Candidate, MAE",
      linkedIn: "andres-a-pulido",
      website: "https://andrespulido8.github.io",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto pb-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-10">Advisors</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {advisors.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            linkedIn={member.linkedIn}
            website={member.website}
          />
        ))}
      </div>
    </section>
  );
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
        "Joshua Labasbas",
        "William Zhu",
        "Thomas Canro",
        "Charles Pratt",
        "Tanushree Hadavale",
        "Alexander Wang",
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
      <Advisors />
      <TeamList />
    </div>
  );
};

export default TeamPage;