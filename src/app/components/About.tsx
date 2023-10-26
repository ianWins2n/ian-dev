"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
        className={`flex mx-auto my-0 py-24 flex-col min-h-screen w-full`}
      >
        <div
        ref={ref}
          className={`opacity-0 transition-all duration-1000 delay-200 ${
            isInview ? " opacity-100 " : ""
          } flex whitespace-nowrap items-center`}
        >
          <h2 className="before:content-['01.'] before:font-mono before:text-gray-500 before:text-xl text-2xl font-medium">
            {" "}
            About Me
          </h2>
          <div className="w-full h-[1px] ml-2 bg-gray-600" />
        </div>
        <div
          
          className={`text-gray-400 translate-y-10 opacity-0 duration-1000 delay-300  ease-in-out ${
            isInview ? "opacity-100 translate-y-0" : ""
          } `}
        >
          <p>
            Hello! I&apos;m Ian, a Software Developer based in The Philippines.
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

        <ul
          className={` opacity-0 translate-y-10 duration-1000 delay-300 ease-in-out ${
            isInview ? "opacity-100  translate-y-0" : ""
          } mt-5 grid grid-cols-2 md:grid-cols-3`}
        >
          {skills &&
            skills.map((skill) => (
              <li
                key={skill}
                className="before:content-['▹'] before:text-gray-400 before:mr-2 before:text-sm"
              >
                {skill}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default About;
