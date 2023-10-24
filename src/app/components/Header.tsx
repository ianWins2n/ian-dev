"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <motion.div
        className="fixed z-10 top-0 w-full px-[20px] h-[90px] flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 0.5,
          delay: 1.3,
        }}
      >
        <div className="h-full flex items-center">
          <Image
            className="bg-black"
            src="/my-logo.png"
            alt={`Ian's Logo`}
            width={70}
            height={70}
          />
        </div>
        <div className="hidden sm:flex shrink-0 font-mono">
          <ol className="flex h-full list-decimal space-x-20">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ol>
        </div>
        <Menu />
      </motion.div>
    </>
  );
};

export default Header;
