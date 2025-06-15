import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Contact from "../../Contact";
import { personalData } from "../../../util/constant";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full pb-16 items-center "
    >
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <img
        src="favicon.ico"
        className="hover:ring-AAsecondary hover:ring-2 cursor-crosshair max-w-[200px] rounded-[50%] object-center"
      />
      <Contact />

      <div className="my-8 pt-4">
        <a
          href={`mailto:${personalData.email}`}
          target={"_blank"}
          rel="noreferrer"
        >
          <button className="font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-[1.5px] rounded ">
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
