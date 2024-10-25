import React from "react";

import experience from "../../../public/lottie/code.json";
import AnimationLottie from "../../AnimationLottie";
export default function MyName(props: { finishedLoading: boolean }) {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-28 text-center md:text-left "
    >
      <span className="text-AAsecondary font-mono">Greetings, I'm</span>

      <div className="md:flex gap-4">
        <div>
          <h1 className="text-gray-300 font-bold text-3xl lg:text-6xl sm:text-5xl md:text-6xl mt-4">
            Aditya Kumar
          </h1>
          <h2 className="text-gray-400 font-bold text-3xl lg:text-6xl sm:text-5xl md:text-6xl mt-4">
            I ❤️ chai & Code.
          </h2>
        </div>

        <div className="basis-1/2 flex justify-center items-start">
          <div className="w-full">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>
      </div>

      <h3 className="text-gray-400 font-Header text-sm md:text-lg sm:text-md tracking-wider">
        A <span className="text-AAsecondary">software engineer</span>, with over{" "}
        <span className="text-AAsecondary">4+ years </span> of experience in the
        industry.
        <br className="2xl:block hidden" />
        With a passion & experience for taking{" "}
        <span className="text-AAsecondary">end-to-end </span> ownership of the
        projects <br className="2xl:block hidden" />
        <br className="2xl:block hidden" /> Skilled in{" "}
        <span className="text-AAsecondary">
          frontend, backend & cross platform{" "}
        </span>{" "}
        app(android, ios) development.
        <br className="2xl:block hidden" /> Proficient in Computer fundamentals,
        with expertise in{" "}
        <span className="text-AAsecondary">
          {" "}
          Javascript, React, Next.js, Node.js, Express.js, CSS, React Native
          Capacitor.{" "}
        </span>
      </h3>
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
