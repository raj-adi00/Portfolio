"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Code-Fode",
    description:
      "AI Based collaborative Code Editor. It is built using NextJs, Express and Node js. AI based code genearation.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raj-adi00/ai-code-editor",
    previewUrl: "https://ai-code-editor-seven.vercel.app/",
  },
  {
    id: 2,
    title: "PlaySphere",
    description:
      "It is built using NextJs and TypeScript. Prisma and MongoDb is used. Payment Option Using Paypal Api and Integrate Google Oauth using NextAuth. Chatting feature using ReplicaAI api.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raj-adi00/PlaySphere",
    previewUrl: "https://play-sphere-pi.vercel.app/",
  },
  {
    id: 3,
    title: "Itube",
    description:
      "This is a full stack web application developed using MERN stack. It allows you to upload video and perform CRUD, add comments, count views. You can post tweets. User Watch history is monitored. There is a chatting feature using socket.io",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raj-adi00/VideoStream-frontend",
    previewUrl: "https://itube-play.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-12 flex-wrap"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
