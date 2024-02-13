"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <div
      id="Experience"
      className={`flex mx-auto my-0 py-24 flex-col min-h-screen max-w-7xl w-full`}
    >
      <div
        ref={ref}
        className={`opacity-0 duration-1000 delay-200 ${
          isInview ? "opacity-100" : ""
        } flex whitespace-nowrap items-center pb-12`}
      >
        <h2 className="before:content-['02.'] before:font-mono before:text-neutral-500 before:text-xl text-2xl font-medium">
          {" "}
          Experience
        </h2>
        <div className="w-full sm:max-w-xs h-[1px] ml-2 bg-neutral-600" />
      </div>
      <div
        className={`opacity-0 duration-1000 delay-200 ${
          isInview ? "opacity-100" : ""
        } grid grid-cols-[repeat(10,1fr)] w-full rounded-md bg-transparent`}
      >
        <div className="col-[1/-1] sm:col-[1/7] row-[1/2] transition-all ease-in duration-500 z-20 p-10">
          <div className="text-neutral-500 mb-3">Featured Project</div>
          <Link
            href="https://streamer.com.au/"
            target={"_blank"}
            className="text-5xl font-semibold"
          >
            Streamer
          </Link>
          <div className="my-8 sm:bg-neutral-800 rounded-md sm:p-3 sm:opacity-90 hover:opacity-100 transition-all">
            <p className="text-neutral-400">
              <Link
                href="https://streamer.com.au/"
                target={"_blank"}
                className="underline"
              >
                Streamer
              </Link>{" "}
              is Australia&apos;s premier community sport streaming platform — the
              place to stream, share, and support local games and the iconic
              moments of the clubs that you love to follow. Streamer puts the
              power in the hands of the community, giving clubs the tools to
              create and share their own unique content.
            </p>
          </div>
          <ul className="flex gap-4 font-mono">
            <li>NextJs</li>
            <li>Typescript</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="col-[1/-1] sm:col-[5/-1] row-[1/2] hover:scale-105 hover:shadow-2xl hover:shadow-red-700 cursor-pointer items-center flex transition-all z-10">
          <Link href="https://streamer.com.au/" target={"_blank"}>
            <Image
              src="/streamer.png"
              alt="streamer"
              width={1000}
              height={1000}
              className="h-auto w-full opacity-20 sm:opacity-100 rounded-lg"
            ></Image>
          </Link>
        </div>

        <div />
      </div>
    </div>
  );
};

export default Experience;
