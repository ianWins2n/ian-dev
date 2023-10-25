"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <motion.header
        className="fixed bg-black bg-opacity-30 backdrop-blur-2xl z-10 top-0 w-full px-8 h-20 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 0.5,
          delay: 1.3,
        }}
      >
        <div className="h-full flex items-center">
          <a href="/">
            <Image
              src="/my-logo.png"
              alt={`Ian's Logo`}
              width={70}
              height={70}
            />
          </a>
        </div>
        <div className="hidden sm:flex shrink-0 font-mono">
          <ol className="flex h-full list-decimal space-x-20">
            <a href="#About">
              <li>About</li>
            </a>
            <li>Work</li>
            <li>Contact</li>
          </ol>
        </div>
        <Menu />
      </motion.header>
    </>
  );
};

export default Header;
