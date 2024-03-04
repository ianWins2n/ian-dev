"use client";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    document.body.className = isOpen ? "overflow-hidden" : "";
    if (isOpen) {
      document.getElementsByTagName("main")[0].classList.add("blur-sm");
      document
        .getElementsByTagName("header")[0]
        .classList.remove("backdrop-blur-2xl");
    }

    if (!isOpen) {
      document.getElementsByTagName("main")[0].classList.remove("blur-sm");
      document
        .getElementsByTagName("header")[0]
        .classList.add("backdrop-blur-2xl");
    }
  }, [isOpen]);

  return (
    <>
      {/* :SMALL BURGER ICON */}
      <button
        className="z-50 w-6 h-6 border border-none outline-none sm:hidden focus:outline-none"
        aria-label="Hamburger Menu"
        onClick={toggleMenu}
      >
        <span className="relative block">
          {/* Top line */}
          <span
            className={` absolute top-0 left-1/2 block w-full h-[2px] bg-white transition-all duration-500 origin-top-left transform -translate-x-1/2 -translate-y-2 ${
              isOpen && "rotate-45"
            }`}
          />
          {/* Middle line */}
          <span
            className={`block w-full h-[2px] bg-white transition-all duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Bottom line */}
          <span
            className={`absolute bottom-0 left-1/2 block w-full h-[2px] bg-white transition-all duration-500 transform origin-bottom-left -translate-x-1/2 translate-y-2 ${
              isOpen && "-rotate-45"
            }`}
          />
        </span>
      </button>
      <div
        className={`fixed top-0 opacity-0 sm:hidden bottom-0 right-0 duration-500 w-0 ${
          isOpen ? `w-[min(75vw,400px)] opacity-100 ` : ""
        } h-screen z-40 bg-neutral-950`}
      >
        <ol className="flex flex-col justify-center h-full list-decimal list-inside text-start">
          <a href="#About" onClick={toggleMenu}>
            <li className="mx-[28%] whitespace-nowrap text-2xl font-mono mb-3 text-neutral-500">
              <span className="font-sans text-white hover:text-neutral-500">About</span>
            </li>
          </a>
          <a href="#Experience" onClick={toggleMenu}>
            <li className="mx-[28%] whitespace-nowrap text-2xl font-mono mb-3 text-neutral-500">
              <span className="font-sans text-white hover:text-neutral-500">Experience</span>
            </li>
          </a>
          <a href="#Contact" onClick={toggleMenu}>
            <li className="mx-[28%] whitespace-nowrap text-2xl font-mono mb-3 text-neutral-500">
              <span className="font-sans text-white hover:text-neutral-500">Contact</span>
            </li>
          </a>
        </ol>
      </div>
    </>
  );
};

export default Menu;
