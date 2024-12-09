"use client";
import Image from "next/image";
import Rating from "./Rating";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I&apos;m Aditya—a tech enthusiast who thrives on solving complex
            problems through competitive programming and DSA. With a solid
            foundation in algorithms and data structures, I&apos;ve honed my
            skills in C++. Beyond problem-solving, I bring my expertise into
            full-stack web development, working with JavaScript, React, Node.js,
            Express, MongoDB, NextJs and Typescript to build responsive and
            dynamic applications. Whether its optimizing algorithms or crafting
            user-friendly web solutions, I am driven by a passion for continuous
            learning and delivering impactful results.
          </p>
          <div className="flex justify-center mt-4">
            <Rating />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
