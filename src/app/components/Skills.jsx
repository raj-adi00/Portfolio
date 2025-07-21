import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
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
  SiStrapi
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "C++",
          icon: <CgCPlusPlus size={40} className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          icon: <DiJavascript1 size={40} className="text-yellow-500" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={40} className="text-blue-400" />,
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        {
          name: "React",
          icon: <DiReact size={40} className="text-blue-400" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={40} className="text-white" />,
        },
        {
          name: "Node.js",
          icon: <DiNodejs size={40} className="text-green-500" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress size={40} className="text-gray-300" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={40} className="text-teal-400" />,
        },
        {
          name: "Redux",
          icon: <DiReact size={40} className="text-purple-500" />,
        },
        {
          name: "Strapi",
          icon: <SiStrapi size={40} className="text-gray-200" />,
        }
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "MongoDB",
          icon: <DiMongodb size={40} className="text-green-700" />,
        },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <DiGit size={40} className="text-orange-500" /> },
        {
          name: "GitHub",
          icon: <SiGithub size={40} className="text-gray-200" />,
        },
        {
          name: "Appwrite",
          icon: <SiAppwrite size={40} className="text-pink-500" />,
        },
        {
          name: "Cloudinary",
          icon: <SiCloudinary size={40} className="text-blue-300" />,
        },
        {
          name: "Socket.IO",
          icon: <SiSocketdotio size={40} className="text-white" />,
        },
        {
          name: "Docker",
          icon: <SiDocker size={40} className="text-blue-300" />,
        },
        {
          name: "Prisma",
          icon: <SiPrisma size={40} className="text-gray-600" />,
        },
      ],
    },
    {
      category: "Platform",
      items: [
        {
          name: "Vercel",
          icon: <SiVercel size={40} className="text-white" />,
        },
        {
          name: "Netlify",
          icon: <SiNetlify size={40} className="text-gray-300" />,
        },
      ],
    },
  ];

  return (
    <div className="bg-[#121212] text-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-10">
          <h4 className="text-2xl font-semibold mb-6">
            {skillCategory.category}
          </h4>
          <div className="flex flex-wrap justify-center gap-8">
            {skillCategory.items.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
