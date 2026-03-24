"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Coding Stats", path: "/stats" },
  { title: "Projects", path: "/projects" },
  { title: "Experience", path: "/experience" },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#121212]/80 border-b border-white/10">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-lg font-semibold tracking-wide hover:text-purple-400 transition"
        >
          Aditya Raj
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="relative text-sm text-gray-300 hover:text-white transition"
            >
              {link.title}

              {/* Underline Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white p-2 rounded-md border border-white/20"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-gray-300 text-sm hover:text-white transition"
                  onClick={() => setNavbarOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};