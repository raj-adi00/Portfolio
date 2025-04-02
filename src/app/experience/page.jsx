"use client";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

const ExperienceCard = ({ title, duration, role }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700 w-full max-w-md"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-2">{duration}</p>
      <ul className="text-gray-300 list-disc list-inside">
        {role.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceList = () => {
  const experiences = [
    {
      title: "Remote MERN Developer Intern",
      duration: "Feb 2025 - Present",
      role: [
        "Worked on ERP website using Strapi, React",
        "Making API and integration",
        "Database Design",
      ],
    },
    {
      title: "Web developer",
      duration: "December 2024 - February 2025",
      role: [
        "Built website for URJA-2025",
        "Built Webstie for Culfest-2025"
      ],
    },
    {
      title: "Open Source Contributor",
      duration: "2024 October",
      role: [
        "Contributed to The Boring Educatioin",
        "Contributed to TastyTrails",
        "Contributed Under Hacktoberfest and GSSOC",
      ],
    },
  ];

  return (
    <div className="bg-[#121212] max-h-[90vh] overflow-auto">
        <Navbar/>
      <h2 className="text-center font-bold text-3xl pt-24">My Experience</h2>
      <div className="flex flex-col items-center gap-6 p-6  min-h-screen">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
