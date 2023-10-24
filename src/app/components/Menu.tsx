"use client";
import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* :SMALL BURGER ICON */}
      <button
        className="z-30 sm:hidden w-6 h-6 border border-none outline-none focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
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
        className={`fixed top-0 opacity-0 sm:hidden bottom-0 right-0 transition-all w-0 ${
          isOpen ? `w-[min(75vw,400px)] opacity-100 ` : ""
        } h-screen bg-zinc-950 z-10`}
      >
        <ol className="h-full flex justify-center items-center flex-col list-decimal">
          <li className="m-0">About</li>
          <li className="m-0">Work</li>
          <li className="m-0">Contact</li>
        </ol>
      </div>
    </>
  );
};

export default Menu;
