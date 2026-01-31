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
            company={member.company}
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
    {
      image: memberImages["carlos_chavez.jpeg"],
      name: "Carlos Chavez",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2026",
      linkedIn: "carlos-chavez-60a840252",
    },
    {
      image: memberImages["mohana_pamidimukkala.jpg"],
      name: "Mohana Pamidimukkala",
      role: "Software Lead",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2028",
      linkedIn: "mohana-pamidi",
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
      graduationYear: "Spring 2026",
      email: "lester.bonilla@ufl.edu",
    },
    {
      image: memberImages["jack_rainville.png"],
      name: "Jack Rainville",
      role: "Electrical Lead",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2027",
      linkedIn: "jack-rainville",
    },
    {
      image: memberImages["russell_macgregor.jpg"],
      name: "Russell MacGregor",
      role: "Electrical Lead",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2027",
      linkedIn: "russellmacgregor",
    },
  ];

  return <LeadershipSection title="Electrical Leadership" members={members} />;
};

const MechanicalLeadership = () => {
  const members = [
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
      image: memberImages["ryan_hoburg.jpg"],
      name: "Ryan Hoburg",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2027",
      email: "ryanhoburg@gmail.com",
    },
    {
      image: memberImages["tyler_gunther.jpg"],
      name: "Tyler Gunther",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2028",
      linkedIn: "tylerg-eng",
    },
    {
      image: memberImages["ali_skarshinski_fred.jpg"],
      name: "Ali Skarshinski-Fred",
      role: "Mechanical Lead",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2028",
      linkedIn: "alessandraskarshinski-fred",
    },
  ];

  return <LeadershipSection title="Mechanical Leadership" members={members} />;
};

const Faculty = () => {
  const faculty = [
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
  ];

  return <LeadershipSection title="Faculty" members={faculty} />;
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

const Alumni = () => {
  const alumni = [
    {
      image: memberImages["cameron_brown.jpeg"],
      name: "Cameron Brown",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "cameron-brown37",
      website: "https://cbrxyz.com",
      company: "Glydways",
    },
    {
      image: memberImages["alex_johnson.png"],
      name: "Alex Johnson",
      degree: "BS, Computer Science",
      graduationYear: "Spring 2025",
      linkedIn: "alexojohnson",
      company: "Glydways",
    },
    {
      image: memberImages["keith_khadar.jpg"],
      name: "Keith Khadar",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "keith-khadar",
      company: "Google",
    },
    {
      image: memberImages["adrian_fernandez.png"],
      name: "Adrian Fernandez",
      degree: "MS, Electrical/Computer Engineering",
      graduationYear: "Fall 2025",
      linkedIn: "adrianfernandez23",
      company: "Ford Motor Company",
    },
    {
      image: memberImages["lorant_domokos.png"],
      name: "Lorant Domokos",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2025",
      linkedIn: "lorant-domokos-849094244",
      company: "SpaceX",
    },
    {
      image: advisorImages["andres_pulido.png"],
      name: "Andres Pulido",
      linkedIn: "andres-a-pulido",
      website: "https://andrespulido8.github.io",
      graduationYear: "Fall 2025",
      degree: "PhD, Mechanical Engineering",
      company: "University of Florida",
    },
    {
      image: memberImages["andrew_knee.png"],
      name: "Andrew Knee",
      company: "JHU APL",
      degree: "MS, Computer Science",
      graduationYear: "Fall 2024",
      linkedIn: "andrew-knee-j",
    },
    {
      image: memberImages["kayleigh_beron.jpg"],
      name: "Kayleigh Beron",
      company: "Amazon",
      degree: "BS, Computer Engineering",
      graduationYear: "Fall 2024",
      linkedIn: "kayleigh-beron",
    },
    {
      image: memberImages["alex_perez.jpg"],
      name: "Alex Perez",
      company: "L3Harris",
      degree: "BS, Computer Engineering",
      graduationYear: "Spring 2023",
    },
    {
      image: memberImages["aditya_ramesh.png"],
      name: "Aditya Ramesh",
      company: "Carnegie Mellon University",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2024",
      linkedIn: "aditya-ramesh-cmu",
    },
    {
      image: memberImages["alex_kuzmicki.jpg"],
      name: "Alex Kuzmicki",
      company: "L3Harris",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2023",
      linkedIn: "alexander-kuzmicki-550903182",
    },
    {
      image: memberImages["andres_castrillon.jpg"],
      name: "Andres Castrillon",
      company: "Carnegie Mellon University",
      degree: "BS, Mechanical Engineering",
      graduationYear: "Spring 2024",
      linkedIn: "andres-castrillon4",
    },
    {
      image: memberImages["jarrod_sanders.jpg"],
      name: "Jarrod Sanders",
      company: "L3Harris",
      degree: "BS, Computer Science",
      graduationYear: "Fall 2023",
      linkedIn: "jarrod-sanders",
    },
    {
      image: memberImages["mehron_talebi.jpg"],
      name: "Mehron Talebi",
      company: "UF ECE (MS)",
      degree: "BS, Electrical Engineering",
      graduationYear: "Spring 2023",
    },
  ];
  // Sort alumni by graduation year + season
  alumni.sort((a, b) => {
    const seasonOrder = { Spring: 1, Summer: 2, Fall: 3 };
    const [aSeason, aYear] = a.graduationYear.split(" ");
    const [bSeason, bYear] = b.graduationYear.split(" ");
    return (
      parseInt(bYear) - parseInt(aYear) ||
      seasonOrder[bSeason] - seasonOrder[aSeason] ||
      a.name.localeCompare(b.name)
    );
  });
  return <LeadershipSection title="Alumni" members={alumni} />;
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
      <Faculty />
      <PastDirectors />
      {/*
      Removing the individual members list since it wasn't maintained super well:
      <TeamList />
      */}
      <Alumni />
      <Footer />
    </div>
  );
};

export default TeamPage;
