"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Itube",
    description:
      "This is a full stack web application developed using MERN stack. It allows you to upload video and perform CRUD, add comments, count views. You can post tweets. User Watch history is monitored. There is a chatting feature using socket.io",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raj-adi00/VideoStream-frontend",
    previewUrl: "https://itube-play.netlify.app/",
  },
  {
    id: 2,
    title: "GameMaster",
    description:
      "This projectis built using React and Appwrite where i have implemented flipping cards game using CSS and there is a leaderboard for all the registered users. They are sorted on the basis of score which is awarded on the basis of number of moves to complete the game",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raj-adi00/GameMaster",
    previewUrl: "https://game-master-two.vercel.app/",
  },
  {
    id: 3,
    title: "SignPic",
    description:
      "It is built using Javascript and canvas where you can sign and download it for official use. You can click pic of different size and download them.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/raj-adi00/sign-pic",
    previewUrl: "https://sign-pic.vercel.app/",
  },
  {
    id: 4,
    title: "PlaySphere",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: " Urja-25 website",
    description:
      "It is built using react for NIT jamshedpur annual fest. Major focus is on UI/UX. It has attractive interface and responsive designs",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shubham691438/Urja",
    previewUrl: "https://www.sacnitjsr.org/",
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
      <ul ref={ref} className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 md:gap-12 flex-wrap">
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
