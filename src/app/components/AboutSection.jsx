"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-10 items-center py-10 px-4 xl:px-16">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"></div>

            <Image
              src="/images/about-image.png"
              alt="about"
              fill
              className="rounded-full object-cover relative z-10"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="mt-6 md:mt-0 flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>

          {/* Text (split for readability) */}
          <p className="text-[15px] sm:text-base text-[#ADB7BE] leading-relaxed">
            I’m Aditya, a competitive programmer and full-stack developer who
            enjoys tackling challenging problems and building efficient systems.
            My journey started with{" "}
            <span className="text-white font-medium">
              data structures & algorithms
            </span>{" "}
            and quickly evolved into a deep interest in optimizing solutions and
            thinking at scale.
          </p>

          <p className="text-[15px] sm:text-base text-[#ADB7BE] leading-relaxed">
            I actively participate in contests on platforms like Codeforces and
            LeetCode, where I focus on writing clean, optimized C++ solutions
            and improving my problem-solving speed and accuracy. Competitive
            programming has shaped my ability to break down complex problems and
            approach them logically.
          </p>

          <p className="text-[15px] sm:text-base text-[#ADB7BE] leading-relaxed">
            Alongside CP, I build full-stack applications using the MERN stack
            and Next.js, combining strong backend logic with clean frontend
            experiences. I enjoy working on systems that are both{" "}
            <span className="text-white font-medium">
              scalable and practical
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
