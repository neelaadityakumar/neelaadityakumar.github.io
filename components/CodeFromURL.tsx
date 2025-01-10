import React, { useState, useEffect, useRef, ReactNode } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Choose your theme
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "@mapbox/rehype-prism";
import Pre from "./Pre";

const CodeFromURL = ({
  url,
  language = "javascript",
}: {
  url: string;
  language?: string;
}) => {
  const [content, setContent] = useState<string | MDXRemoteSerializeResult>("");
  const [error, setError] = useState<string | null>(null);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch code from ${url}`);
        }
        const text = await response.text();

        if (language === "markdown") {
          // Serialize Markdown for MDX rendering
          const mdxSerialized = await serialize(text, {
            mdxOptions: {
              rehypePlugins: [rehypePrism],
            },
          });
          setContent(mdxSerialized);
        } else {
          setContent(text);
        }
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCode();
  }, [url, language]);

  useEffect(() => {
    if (codeRef.current && typeof content === "string") {
      hljs.highlightElement(codeRef.current); // Apply syntax highlighting for code
    }
  }, [content]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {language === "markdown" && typeof content !== "string" ? (
        <div className="markdown-body">
          <MDXRemote {...(content as MDXRemoteSerializeResult)} />
        </div>
      ) : (
        <Pre>
          <code ref={codeRef} className={`language-${language}`}>
            {content as ReactNode}
          </code>
        </Pre>
      )}
    </>
  );
};

export default CodeFromURL;
