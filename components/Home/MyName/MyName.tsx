import React from "react";

import experience from "../../../public/lottie/code.json";
import AnimationLottie from "../../AnimationLottie";
export default function MyName(props: any) {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-28 text-center md:text-left ">
      <span className="text-AAsecondary font-mono">Greetings, I'm</span>

      <div className="w-full md:flex justify-center gap-4">
        <div>
          <h1 className="text-gray-300 font-bold text-3xl lg:text-6xl sm:text-5xl md:text-6xl mt-4">
            Aditya Kumar
          </h1>
          <h2 className="text-gray-400 font-bold text-3xl lg:text-6xl sm:text-5xl md:text-6xl mt-4">
            I ❤️ Chai & Code.
          </h2>
          <h3 className="text-gray-400 font-Header text-sm md:text-lg sm:text-md tracking-wider mt-28 max-w-3xl">
            A <span className="text-AAsecondary">software engineer</span>, with
            over <span className="text-AAsecondary">4+ years </span> of
            experience in Fullstack web & mobile app development. with
            <span className="text-AAsecondary">
              {" "}
              Javascript, React, Next.js, Node.js, Express.js, CSS, React
              Native, Capacitor.{" "}
            </span>
          </h3>
        </div>

        <div className="basis-1/2 flex justify-center items-start">
          <div className="w-full">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <a href={"/ADITYA-KUMAR-RESUME.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </div>
    </div>
  );
}
