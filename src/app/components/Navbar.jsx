"use client"; // This marks this file as a Client Component

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Define the main sections and sub-menu items
const navLinks = [
  { title: "Home", path: "/", subMenu: ["About", "Projects", "Contact"] },
  { title: "Coding Stats", path: "/stats", subMenu: [] },
  { title: "Projects", path: "/projects", subMenu: [] },
  { title: "CV", path: "/cv", subMenu: [] },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hovered, setHovered] = useState(false); // Track hover state for "Home"

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white border p-2 rounded-md focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Logo or Brand Name */}
        <Link href="/" className="text-white text-2xl font-semibold">
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => link.title === "Home" && setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                href={link.path}
                className="text-white hover:text-[#FF6347] transition duration-300"
              >
                {link.title}
              </Link>

              {/* Show submenu only when Home is hovered */}
              {link.title === "Home" && hovered && (
                <div className="absolute top-full left-0 bg-[#121212] text-white w-40 p-2 rounded-md shadow-lg">
                  <ul className="space-y-2">
                    {link.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={`#${subItem.toLowerCase()}`}
                          className="block hover:text-[#FF6347] transition duration-300"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-black absolute top-0 left-0 right-0 z-20">
          <button
            onClick={() => setNavbarOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <ul className="flex flex-col items-center p-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2">
                <Link
                  href={link.path}
                  className="text-white hover:text-[#FF6347] transition duration-300"
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
