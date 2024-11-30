import React, { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Choose your theme
import Pre from "./Pre";

const CodeFromURL = ({
  url,
  language = "javascript",
}: {
  url: string;
  language?: string;
}) => {
  const [code, setCode] = useState<string>("");
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
        setCode(text);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCode();
  }, [url]);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current); // Apply syntax highlighting
    }
  }, [code]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!code) {
    return <div>Loading...</div>;
  }

  return (
    <Pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </Pre>
  );
};

export default CodeFromURL;
