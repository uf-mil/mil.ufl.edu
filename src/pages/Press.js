import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PressSection = ({ id, title, pressItems, bgColor, isYearOnly }) => {
return (
    <motion.div
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
    className={`py-12 px-8 rounded-3xl shadow-xl ${bgColor} mb-12 border-l-8 border-blue-500`}
    >
    <h2 className="text-3xl font-extrabold mb-8 text-blue-700">{title}</h2>

    <ul className={`flex flex-wrap gap-4 ${!isYearOnly ? "flex-col" : ""}`}>
        {pressItems.map((item, index) => (
        <motion.li
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`${
            !isYearOnly
                ? "bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
                : ""
            }`}
        >
            <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
                isYearOnly
                ? "px-4 py-2 bg-gradient-to-r from-blue to-blue-500 text-blue-800 font-semibold rounded-full shadow hover:shadow-lg transition-all duration-300"
                : "text-blue-700 hover:text-blue-900 font-medium hover:underline"
            }`}
            >
            {isYearOnly ? item.title : item.title}
            </a>
        </motion.li>
        ))}
    </ul>
    </motion.div>
);
};

PressSection.propTypes = {
id: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
pressItems: PropTypes.arrayOf(
    PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    })
).isRequired,
bgColor: PropTypes.string,
isYearOnly: PropTypes.bool,
};

PressSection.defaultProps = {
bgColor: "bg-gradient-to-r from-white to-blue-50",
isYearOnly: false,
};

const Press = () => {
const competitionPapers = [
    { title: "2024", url: "https://subjugator.org/?s=2024" },
    { title: "2023", url: "https://subjugator.org/?s=2023" },
    { title: "2022", url: "https://subjugator.org/?s=2022" },
    { title: "2021", url: "https://subjugator.org/?s=2021" },
    { title: "2020", url: "https://subjugator.org/?s=2020" },
    { title: "2019", url: "https://subjugator.org/?s=2024" },
    { title: "2018", url: "https://subjugator.org/?s=2023" },
    { title: "2017", url: "https://subjugator.org/?s=2022" },
    { title: "2016", url: "https://subjugator.org/?s=2021" },
    { title: "2015", url: "https://subjugator.org/?s=2020" },
];

const posters = [
    { title: "AUVSI Poster 2014", url: "#" },
    { title: "AUVSI Poster 2013", url: "#" },
];

const publications = [
    { title: "FCRAR Publication 2011", url: "#" },
    { title: "FCRAR Publication 2010", url: "#" },
];

const pressItems = [
    { title: "SubjuGator Submarine Testing, January 5, 2017", url: "#" },
    { title: "UF’s ‘SubjuGator’ begins competing, July 14, 2010", url: "#" },
];

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

return (
    <>
    <Navbar />

    <div className="max-w-6xl mx-auto py-16 px-6 relative">
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-6 text-center text-blue-700"
        >
        Press & Publications
        </motion.h1>


        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex justify-center gap-4 flex-wrap mb-12"
        >
        {[
            { label: "Competition Papers", id: "papers" },
            { label: "Posters", id: "posters" },
            { label: "Publications", id: "publications" },
            { label: "Press Announcements", id: "announcements" },
        ].map((btn) => (
            <motion.button
            key={btn.id}
            onClick={() => scrollToSection(btn.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-white to-blue-500 text-blue-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
            {btn.label}
            </motion.button>
        ))}
        </motion.div>


        <PressSection
        id="papers"
        title="Competition Papers"
        pressItems={competitionPapers}
        bgColor="bg-gradient-to-r from-white to-blue-50"
        isYearOnly={true} 
        />

        <PressSection
        id="posters"
        title="Competition Posters"
        pressItems={posters}
        bgColor="bg-gradient-to-r from-white to-blue-100"
        />

        <PressSection
        id="publications"
        title="Conference & Journal Publications"
        pressItems={publications}
        bgColor="bg-gradient-to-r from-white to-blue-200"
        />

        <PressSection
        id="announcements"
        title="Press Announcements"
        pressItems={pressItems}
        bgColor="bg-gradient-to-r from-white to-blue-300"
        />
    </div>

    <Footer />
    </>
);
};

export default Press;