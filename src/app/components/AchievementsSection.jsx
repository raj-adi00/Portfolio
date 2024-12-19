"use client";
import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
const AchievementsSection = () => {
  const achievements = [
    { title: "Global rank 345 in leetcode weekly contest-407" },
    { title: "Global rank 832 in leetcode weekly contest-422" },
    {title:" Global rak 2634 out of 22620 participants in Educational codeforces round 172"},
    { title: "Rank 3 in CodeKarma organized by PCON, NIT Jamshedpur" },
    { title: "Specialist @ Codeforces" },
    { title: "Knight @ Leetcode" },
    {title:  "TCS CodeVita Round 2 Qualifier (Global Coding Competition)"}
  ];

  // State to manage animation trigger
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation when the component mounts
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <motion.div
      className="py-10 px-5 bg-[#18191E] text-white my-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-6">
        <FaTrophy className="inline mr-2 text-yellow-500" />
        Achievements
      </h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div>
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementsSection;
