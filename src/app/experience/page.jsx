"use client";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

const ExperienceCard = ({ title, duration, role, organization }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="relative pl-8 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-2 top-2 w-[2px] h-full bg-gray-700"></div>

      {/* Dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-purple-500 group-hover:scale-110 transition"></div>

      {/* Card */}
      <div className="bg-[#181818] border border-gray-700 rounded-xl p-4 transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-md group-hover:shadow-purple-500/10">
        
        {/* Top Row */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <span className="text-xs text-purple-400">{organization}</span>
        </div>

        {/* Duration */}
        <p className="text-[15px] text-gray-400 mb-2">{duration}</p>

        {/* Roles */}
        {role && (
          <ul className="text-[13px] text-gray-300 space-y-1 list-disc list-inside">
            {role.map((item, index) => (
              <li key={index} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceList = () => {
  const experiences = [
    {
      title: "Member - Competitive Programming",
      organization: "PCON, NIT Jamshedpur",
      duration: "Apr 2025 - Present",
    },
    {
      title: "Full Stack Developer Intern",
      organization: "Quikkonnect",
      duration: "Jan 2026 - Present",
      role: [
        "Integrated OTP verification using 2Factor API",
        "Built & integrated APIs using Django REST Framework",
      ],
    },
    {
      title: "MERN Developer Intern",
      organization: "Innovacio Technologies",
      duration: "Feb 2025 - Jun 2025",
      role: [
        "Developed full-stack ERP (Strapi + React)",
        "Implemented RBAC for secure access",
        "Optimized state using Redux (↓ API calls 40%)",
        "JWT-based authentication system",
        "Built Kanban-based collaboration module",
        "Designed scalable database schema",
      ],
    },
  ];

  return (
    <div className="bg-[#121212] min-h-screen">
      <Navbar />

      {/* Heading */}
      <h2 className="text-center font-semibold text-2xl pt-24 text-white">
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;