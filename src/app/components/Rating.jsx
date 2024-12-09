"use client";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export default function Rating() {
  const codeforcesCardUrl =
    "https://coding-profile.vercel.app/api/codeforces?username=raj_adi&theme=dark";
  const leetcodeCardUrl =
    "https://coding-profile.vercel.app/api?username=raj-adi&theme=dark";

  return (
    <div className="bg-[#121212] text-white py-5">
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Codeforces Card */}
        <div className="flex flex-col items-center">
          <SiCodeforces size={30} className="text-[#d93d3d]" />
          <img
            src={codeforcesCardUrl}
            alt="Codeforces Profile Card"
            className="w-[400px] rounded-lg shadow-lg"
          />
        </div>

        {/* LeetCode Card */}
        <div className="flex flex-col items-center">
          <SiLeetcode size={30} className="text-[#FFA116]" />
          <img
            src={leetcodeCardUrl}
            alt="LeetCode Profile Card"
            className="w-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
