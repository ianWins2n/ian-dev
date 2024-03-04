"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const skills = [
    "Typescript",
    "Javascript (ES6+)",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
  ];

  return (
    <>
      <div
        id="About"
        className={`flex mx-auto my-0 py-24 flex-col min-h-screen max-w-5xl w-full`}
      >
        <div
          ref={ref}
          className={`opacity-0 transition-all duration-1000 delay-200 ${
            isInview ? " opacity-100 " : ""
          } flex whitespace-nowrap items-center`}
        >
          <h2 className="before:content-['01.'] before:font-mono before:text-neutral-500 before:text-xl text-2xl font-medium">
            {" "}
            About Me
          </h2>
          <div className="w-full sm:max-w-xs h-[1px] ml-2 bg-neutral-600" />
        </div>
        <div
          className={`flex h-auto text-neutral-400 translate-y-10 opacity-0 duration-1000 delay-300  ease-in-out ${
            isInview ? "opacity-100 translate-y-0" : ""
          } `}
        >
          <div className="w-full">
            <p>
              Hello! I&apos;m Ian, a Software Developer based in The
              Philippines.
            </p>
            <p>
              I enjoy creating beautiful and reliable applications for internet
              and phones.
              <br />
              My goal is to always build scalable products and performant
              experiences.
            </p>
            <br />
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>
          <div className="hidden sm:flex justify-center w-4/5">
            <Image
              src="/my-pic.jpeg"
              alt="Dev-picture"
              width={700}
              height={700}
              className="mx-10 aspect-[1.27] rounded-lg h-auto max-w-full hover:scale-105 transition-all"
            />
          </div>
        </div>

        <ul
          className={` opacity-0 translate-y-10 duration-1000 delay-300 ease-in-out ${
            isInview ? "opacity-100  translate-y-0" : ""
          } mt-5 grid grid-cols-2 md:grid-cols-3`}
        >
          {skills &&
            skills.map((skill) => (
              <li
                key={skill}
                className="before:content-['▹'] before:text-neutral-400 before:mr-2 before:text-sm"
              >
                {skill}
              </li>
            ))}
        </ul>
        <div className="flex sm:hidden justify-center translate-y-20 ">
            <Image
              src="/my-pic.jpeg"
              alt="Dev-picture"
              width={400}
              height={200}
              className="mx-10 aspect-[1.27] rounded-lg h-auto max-w-full hover:scale-105 transition-all"
            />
          </div>
      </div>
    </>
  );
};

export default About;
