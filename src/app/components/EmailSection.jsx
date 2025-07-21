"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-col gap-2">
          <Link
            href="https://github.com/raj-adi00"
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Image src={GithubIcon} alt="Github Icon" /> : raj-adi00
          </Link>
          <Link href="https://www.linkedin.com/in/aditya-raj-968a751ba" target="_blank" className="flex gap-2 items-center">
            <Image src={LinkedinIcon} alt="Linkedin Icon" /> : Aditya Raj
          </Link>
        </div>
        <div className="flex gap-2 items-center my-2">
          <CgMail size={50} />: adi.adityakohli2005@gmail.com
        </div>
      </div>
      <div>
        <Link
          href={`https://codeforces.com/profile/raj_adi`}
          className="flex gap-4 my-2"
          target="_blank"
        >
          <SiCodeforces size={20} />
          raj_adi
        </Link>
        <Link
          href={`https://leetcode.com/u/raj-adi/`}
          className="flex gap-4 my-2"
          target="_blank"
        >
          <SiLeetcode size={20} />
          raj-adi
        </Link>
        <Link
          href={`https://www.codechef.com/users/raj_adi00`}
          className="flex gap-4 my-2"
          target="_blank"
        >
          <SiCodechef size={20} />
          raj_adi00
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
