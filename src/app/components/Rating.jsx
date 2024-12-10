"use client";
import { SiCodeforces, SiLeetcode, SiGithub } from "react-icons/si";
import LeetCodeStats from "./LeetcodeStats";
import CodeforcesCard from "./CodeforcesCard";
import GithubCard from "./GithubCard";

export default function Rating() {
  return (
    <div className="bg-[#030101] text-white py-5">
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Codeforces Card */}

        <div className="flex flex-col items-center">
          <SiCodeforces size={30} className="text-[#d93d3d]" />
          <CodeforcesCard username={"raj_adi"} />
        </div>

        {/* LeetCode Card */}
        <div className="flex flex-col items-center">
          <SiLeetcode size={30} className="text-[#FFA116]" />
          <LeetCodeStats />
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <SiGithub size={30} className="text-[#e5e3e0]" />
        <GithubCard username={"raj-adi00"} />
      </div>
    </div>
  );
}
