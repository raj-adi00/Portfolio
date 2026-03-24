// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             Aditya Raj
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Crafting code, solving puzzles, and building the future. I&apos;m a
//             passionate developer shaping ideas into reality.
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="https://drive.google.com/file/d/1Um_6V9eqotSWs9Dl1kRuRnqMRzEPtDxz/view?usp=sharing"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 View CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/avatar.svg"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-7 text-center sm:text-left"
        >
          {/* Heading */}
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hello, I&apos;m
            </span>
            <br />
            <span className="tracking-tight">Aditya Raj</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mb-6 max-w-xl leading-relaxed">
            I&apos;m a full-stack developer and competitive programmer who enjoys
            solving complex problems and building impactful systems. From
            real-time applications to scalable backend architectures, I focus on
            writing clean, efficient code and turning ideas into meaningful
            products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1Um_6V9eqotSWs9Dl1kRuRnqMRzEPtDxz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-gray-600 text-sm text-gray-300 hover:border-white hover:text-white transition"
            >
              View Resume
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-5 flex justify-center mt-10 sm:mt-0"
        >
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px]">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>

            {/* Image */}
            <Image
              src="/images/avatar.svg"
              alt="hero image"
              fill
              className="rounded-full object-contain relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;