"use client";

import { motion } from "framer-motion";
import GetInTouchButton from "./GetInTouchButton";

const Hero = () => {
  return (
    <div className="flex mx-auto my-0 flex-col justify-center min-h-screen w-full">
      <motion.div
        className=" font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1, marginTop: 0 }}
        transition={{
          ease: "anticipate",
          duration: 1,
          delay: 2,
        }}
      >
        <h1>Welcome I'm,</h1>
      </motion.div>
      <motion.div
        className="mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 1,
          delay: 2.2,
        }}
      >
        <h1 className="font-semibold text-[clamp(40px,8vw,80px)] text-gray-500">
          Ian Monsanto
        </h1>
      </motion.div>
      <motion.div
        className="mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 1,
          delay: 2.4,
        }}
      >
        <h1 className="font-semibold leading-[1.1] text-[clamp(40px,8vw,80px)]">
          I build web and mobile apps.
        </h1>
      </motion.div>
      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 1,
          delay: 2.6,
        }}
      >
        <p className="text-gray-500 max-w-[545px]">
          I'm a software developer based in the Philippines, specializing in
          building websites and mobile applications, and everything in between.
        </p>
      </motion.div>
      <motion.div
        className="mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "anticipate",
          duration: 1,
          delay: 2.8,
        }}
      >
        <GetInTouchButton />
      </motion.div>
    </div>
  );
};

export default Hero;
