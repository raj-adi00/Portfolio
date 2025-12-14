"use client";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

const ExperienceCard = ({ title, duration, role, organization }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700 w-full max-w-[80vw]"
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <h3 className="text-xl font-bold mb-2">{organization}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-2">{duration}</p>
      <ul className="text-gray-300 list-disc list-inside">
        {role &&
          Array.isArray(role) &&
          role.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </motion.div>
  );
};

const ExperienceList = () => {
  const experiences = [
    {
      title: "MERN Developer Intern",
      organization: "Innovacio Technologies",
      duration: "Feb 2025 - June 2025",
      role: [
        "Built a full-stack ERP solution using Strapi (backend) and React (frontend)",
        "Implemented role-based access control (RBAC) for secure operations",
        "Integrated Redux for global state management, reducing redundant API calls by 40%",
        "Implemented user authentication and authorization using JWT tokens, enhancing security by 30%",
        "Built an Asana-inspired collaboration module with Kanban boards, task assignment, role-based access, improving task tracking efficiency by 50%",
        "Making API and integration",
        "Database Design",
      ],
    },
    {
      title: "Member - Competitive Programming",
      organization: "PCON, NIT Jamshedpur",
      duration: "April 2025 - Present",
    },
  ];

  return (
    <div className="bg-[#121212] max-h-[90vh] overflow-auto">
      <Navbar />
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
