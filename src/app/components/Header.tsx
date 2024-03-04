"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Particles from "./Particles";

const Header = () => {
  return (
    <>
      <motion.header
        className="fixed top-0 z-50 flex items-center justify-between w-full h-20 px-8 lg:p-12 bg-black bg-opacity-30 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 0.5,
          delay: 1.3,
        }}
      >
        <div className="flex items-center h-full">
          <a href="/">
            <Image
              src="/my-logo.png"
              alt={`Ian's Logo`}
              width={70}
              height={70}
            />
          </a>
        </div>
        <div className="hidden font-mono sm:flex shrink-0">
          <ol className="flex h-full space-x-10 list-none">
            <li className="before:content-['01.'] hover:text-neutral-400 before:text-neutral-400">
              <a href="#About">About</a>
            </li>
            <li className="before:content-['02.'] hover:text-neutral-400 before:text-neutral-400">
              <a href="#Experience">Experience</a>
            </li>
            <li className="before:content-['03.'] hover:text-neutral-400 before:text-neutral-400">
              <a href="#Contact">Contact</a>
            </li>
          </ol>
        </div>
        <Menu />
        <Particles
          className="absolute inset-0 -z-10 ease-in-out duration-75"
          quantity={30}
        />
      </motion.header>
    </>
  );
};

export default Header;
