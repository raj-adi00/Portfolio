"use client";
import { SiCodeforces, SiLeetcode, SiGithub } from "react-icons/si";
import LeetCodeStats from "./LeetcodeStats";
import CodeforcesCard from "./CodeforcesCard";
import GithubCard from "./GithubCard";

export default function Rating() {
  return (
    <section className="bg-[#121212] text-white py-12 px-4">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-10">
        Coding Dashboard
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* 🧠 CP Section */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4 text-center">
            Competitive Programming
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            
            {/* Codeforces */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <SiCodeforces className="text-[#d93d3d]" />
                Codeforces
              </div>
              <CodeforcesCard username={"raj_adi"} />
            </div>

            {/* LeetCode */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <SiLeetcode className="text-[#FFA116]" />
                LeetCode
              </div>
              <LeetCodeStats />
            </div>
          </div>
        </div>

        {/* 💻 GitHub Section */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4 text-center">
            Development Activity
          </h3>

          <div className="flex flex-col items-center gap-4">
            
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <SiGithub />
              GitHub
            </div>

            <GithubCard username={"raj-adi00"} />

            {/* Contribution Graph */}
            <div className="w-full max-w-4xl p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition">
              <div className="bg-[#181818] rounded-xl p-4">
                <img
                  src="https://ghchart.rshah.org/raj-adi00"
                  alt="GitHub Contributions Graph"
                  className="w-full opacity-90 hover:opacity-100 transition"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}