import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Medikabazaar() {
  const tasks = [
    {
      text: "Developed and leading frontend of Medikabazaar’s healthcare e-commerce platform end to end.",
      keywords: ["frontend", "end to end", "leading", "e-commerce"],
    },
    {
      text: "Conduct code reviews and provide constructive feedback in pull requests, maintaining high code quality",
      keywords: ["code reviews", "pull requests", "code quality"],
    },

    {
      text: `Contributed to the launch & operation of multi-platform e-
      commerce solution that spanned multiple countries, catering
      to a diverse user base across: Web, Android, Ios, Web UAE`,
      keywords: ["Web, Android, Ios, Web UAE", "multi-platform"],
    },
    {
      text: "Developed android & ios applications using capacitor.js & next.js",
      keywords: ["next.js", "android", "ios", "capacitor.js"],
    },
    {
      text: `Led and engineered a migration process shifting the legacy
      website built on jQuery and Shopify to an in-house tech stack
      driven by Next.js, also Android and iOS apps from Flutter to
      Capacitor.js. The transitions preserved uninterrupted user
      experience and markedly ampliﬁed customer engagement`,
      keywords: [
        "Next.js",
        "migration",
        "iOS",
        "capacitor.js",
        "Android",
        "Flutter",
        "Shopify",
        "ampliﬁed customer engagement",
        "in-house tech stack",
        "jQuery",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Mar 2022 - current
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.medikabazaar.com/", "_blank")
            }
          >
            www.medikabazaar.com{" "}
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
