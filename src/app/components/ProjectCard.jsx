import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags }) => {
  return (
    <div className="group p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
      
      {/* Card */}
      <div className="bg-[#181818] rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/10">
        
        {/* Image Section */}
        <div
          className="h-48 md:h-60 relative overflow-hidden"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Zoom Effect */}
          <div className="absolute inset-0 scale-100 group-hover:scale-105 transition duration-500" />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#181818]/0 group-hover:bg-[#181818]/80 opacity-0 group-hover:opacity-100 transition-all duration-500">
            
            <Link
              href={gitUrl}
              className="h-12 w-12 mr-3 border rounded-full border-[#ADB7BE] flex items-center justify-center hover:border-white transition"
            >
              <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white" />
            </Link>

            <Link
              href={previewUrl}
              className="h-12 w-12 border rounded-full border-[#ADB7BE] flex items-center justify-center hover:border-white transition"
            >
              <EyeIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h5 className="text-[17px] font-semibold text-white mb-1">
            {title}
          </h5>

          <p className="text-[15px] text-[#ADB7BE] mb-3 leading-snug">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] px-2.5 py-[2px] rounded-full bg-[#232323] text-[#ADB7BE] border border-[#333]
                transition-all duration-300
                hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                hover:text-white hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;