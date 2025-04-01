import Link from "next/link";
import React from "react";

export default function CVShow() {
  return (
    <section>
      <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-2">
        {/* Download CV Button */}
        <Link
          href="https://drive.google.com/uc?export=download&id=1L6o0Ez2wbW5D-VckFVwi-p1fY9G-HE-n"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
          </span>
        </Link>

        {/* Display CV as an Image */}
        <div className="w-full h-[100vh] overflow-hidden mt-4">
          <img
            src="/images/cvImage.png"
            alt="CV"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
