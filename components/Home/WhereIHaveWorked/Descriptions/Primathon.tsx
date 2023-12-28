import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Primathon() {
  const tasks = [
    {
      text: `Collaborated with the client to revamp their existing cross-
      platform app, utilizing the Ember.js framework and Tailwind
      CSS to improve the app’s frontend architecture and overall
      design.`,
      keywords: ["Ember.js", "Tailwind", "Collaborated", "CSS"],
    },
    {
      text: `Implemented responsive web design techniques, ensuring the
      app seamlessly adapts to various screen sizes and devices,
      providing an optimal user experience for both desktop and
      mobile users.`,
      keywords: ["Next.js/React", "responsive", "user experience "],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June 2021 - March 2022
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://primathon.in/", "_blank")}
          >
            https://primathon.in/{" "}
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
