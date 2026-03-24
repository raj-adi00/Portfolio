import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPython
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiGithub,
  SiAppwrite,
  SiSocketdotio,
  SiCloudinary,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiPrisma,
  SiStrapi,
  SiDjango
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Programming",
      items: [
        { name: "C++", icon: <CgCPlusPlus size={28} className="text-blue-500" /> },
        { name: "JavaScript", icon: <DiJavascript1 size={28} className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript size={28} className="text-blue-400" /> },
        { name: "Python", icon: <DiPython size={28} className="text-blue-400" /> },
      ],
    },
    {
      category: "Frontend & Backend",
      items: [
        { name: "React", icon: <DiReact size={28} className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" /> },
        { name: "Node.js", icon: <DiNodejs size={28} className="text-green-500" /> },
        { name: "Express", icon: <SiExpress size={28} className="text-gray-300" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={28} className="text-teal-400" /> },
        { name: "Django", icon: <SiDjango size={28} className="text-green-300" /> },
        { name: "Strapi", icon: <SiStrapi size={28} className="text-gray-200" /> },
      ],
    },
    {
      category: "Database & Tools",
      items: [
        { name: "MongoDB", icon: <DiMongodb size={28} className="text-green-700" /> },
        { name: "Git", icon: <DiGit size={28} className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub size={28} className="text-gray-200" /> },
        { name: "Socket.IO", icon: <SiSocketdotio size={28} className="text-white" /> },
        { name: "Docker", icon: <SiDocker size={28} className="text-blue-300" /> },
        { name: "Prisma", icon: <SiPrisma size={28} className="text-gray-500" /> },
        { name: "Cloudinary", icon: <SiCloudinary size={28} className="text-blue-300" /> },
        { name: "Appwrite", icon: <SiAppwrite size={28} className="text-pink-500" /> },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Vercel", icon: <SiVercel size={28} className="text-white" /> },
        { name: "Netlify", icon: <SiNetlify size={28} className="text-gray-300" /> },
      ],
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-12 px-4">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-10">
        Skills & Technologies
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            
            {/* Category Title */}
            <h4 className="text-sm text-gray-400 mb-4 tracking-wide">
              {skillCategory.category}
            </h4>

            {/* Cards */}
            <div className="flex flex-wrap gap-3">
              {skillCategory.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1a1a] border border-gray-700 
                  hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 
                  transition-all duration-300"
                >
                  {skill.icon}
                  <span className="text-xs text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}