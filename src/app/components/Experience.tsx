"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Experience = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <div
      id="Experience"
      className={`flex mx-auto my-0 py-24 flex-col min-h-screen w-full`}
    >
      <div
        ref={ref}
        className={`opacity-0 duration-1000 delay-200 ${
          isInview ? "opacity-100" : ""
        } flex whitespace-nowrap items-center pb-12`}
      >
        <h2 className="before:content-['02.'] before:font-mono before:text-gray-500 before:text-xl text-2xl font-medium">
          {" "}
          Experience
        </h2>
        <div className="w-full h-[1px] ml-2 bg-gray-600" />
      </div>
      <div className="grid grid-cols-[repeat(10,1fr)] w-full rounded-md bg-transparent">
        <div className="col-[1/-1] sm:col-[1/8] row-[1/2] transition-all ease-in duration-500 z-20 p-10">
          <div className="text-neutral-500">Featured Project</div>
          <h3 className="text-3xl">Project Name</h3>
          <div className="sm:bg-neutral-800 rounded-xl sm:p-3 my-8">

          <p className="text-neutral-400">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          </div>
          <ul className="flex gap-4">
            <li>React</li>
            <li>Typescript</li>
            <li>Styled</li>
            <li>Jsx</li>
          </ul>
        </div>
        <div className="col-[1/-1] sm:col-[3/-1] row-[1/2] flex items-end transition-all justify-start bg-zinc-950 z-10">
          <Image
            src="/streamer.png"
            alt="streamer"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover opacity-20  sm:opacity-100"
          ></Image>
        </div>

        <div />
      </div>
    </div>
  );
};

export default Experience;
