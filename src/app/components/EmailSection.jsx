"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { CgMail } from "react-icons/cg";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 bg-[#121212]"
    >
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        
        {/* LEFT - CONTACT */}
        <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition">
          <div className="bg-[#181818] p-6 rounded-xl h-full">
            
            <h5 className="text-lg font-semibold text-white mb-3">
              Let&apos;s Connect
            </h5>

            <p className="text-sm text-[#ADB7BE] mb-5 leading-relaxed">
              I&apos;m always open to opportunities, collaborations, or just a
              tech discussion. Feel free to reach out — I&apos;ll get back to you
              as soon as possible.
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              
              <Link
                href="https://github.com/raj-adi00"
                target="_blank"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition"
              >
                <Image src={GithubIcon} alt="Github" width={20} />
                raj-adi00
              </Link>

              <Link
                href="https://www.linkedin.com/in/aditya-raj-968a751ba"
                target="_blank"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition"
              >
                <Image src={LinkedinIcon} alt="Linkedin" width={20} />
                Aditya Raj
              </Link>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CgMail size={20} />
                adi.adityakohli2005@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - CODING PROFILES */}
        <div className="p-[1px] rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 transition">
          <div className="bg-[#181818] p-6 rounded-xl h-full">
            
            <h5 className="text-lg font-semibold text-white mb-4">
              Coding Profiles
            </h5>

            <div className="space-y-3">
              
              <Link
                href="https://codeforces.com/profile/raj_adi"
                target="_blank"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition"
              >
                <SiCodeforces size={18} />
                raj_adi
              </Link>

              <Link
                href="https://leetcode.com/u/raj-adi/"
                target="_blank"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition"
              >
                <SiLeetcode size={18} />
                raj-adi
              </Link>

              <Link
                href="https://www.codechef.com/users/raj_adi00"
                target="_blank"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition"
              >
                <SiCodechef size={18} />
                raj_adi00
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;