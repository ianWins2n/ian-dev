"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  return (
    <>
      <motion.div
        className="flex z-50 fixed bg-black mb-10 items-center justify-center h-screen w-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.2,
          delay: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
          }}
        >
          <Image
            className="bg-black mb-10"
            src="/my-logo.png"
            alt={`Ian's Logo`}
            width={120}
            height={120}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Loader;
