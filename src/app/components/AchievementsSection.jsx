"use client";
import React from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievements = [
    "Global Rank 186 • Meta Hacker Cup Round 3",
    "Global Rank 345 • LeetCode Weekly 407",
    "Global Rank 832 • LeetCode Weekly 422",
    "Global Rank 1584/25K • Codeforces Round 1019",
    "Global Rank 844/17K • Codeforces Round 1082",
    "Rank 3 • CodeKarma (PCON NIT JSR)",
    "Team Rank 1 • CodeMania OJASS’25",
    "Rank 3 • IIT BHU Codefest Haxplore",
    "Futureforce Tech Accelerator 2025",
    "Specialist • Codeforces",
    "Knight • LeetCode",
  ];

  return (
    <section className="py-12 px-4 bg-[#18191E] text-white my-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-center mb-10 flex items-center justify-center gap-2"
      >
        <FaTrophy className="text-yellow-500 text-xl" />
        Achievements
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            {/* Card */}
            <div className="bg-[#1f1f1f] rounded-xl p-4 h-full flex items-center gap-3 transition-all duration-300 group-hover:bg-[#222]">
              
              {/* Icon */}
              <FaTrophy className="text-yellow-500 text-sm shrink-0" />

              {/* Text */}
              <p className="text-sm text-[#ADB7BE] group-hover:text-white leading-snug">
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;