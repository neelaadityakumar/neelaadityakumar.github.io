import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";
import Link from "next/link";

const Header = (props: any) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 0);
  }, []);

  console.log("rotate from header : ", rotate);
  // Verify document for serverSide rendering
  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <div className="fixed top-0 left-0 z-[1000]">
      {/* Mobile visible Navbar component, controlling ShowElement state to hide itself and rotate itself */}
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      {/* This parent element for Menu */}
      <div
        className={`w-full fixed flex justify-between px-6 sm:px-12 py-2 sm:py-4  z-20 ${
          ShowElement
            ? `bg-[#1f1f1f] bg-opacity-90 shadow-xl`
            : `bg-[#1f1f1f] bg-opacity-90`
        }`} // Ensure background is opaque here
      >
        {/* Logo A */}
        <div className="flex gap-8 items-center">
          <Logo finishedLoading={true} />
          {props.title && (
            <Link
              href={`/blog/`}
              className="text-AAsecondary text-2xl font-semibold hover:underline"
            >
              {props.title}
            </Link>
          )}
        </div>
        {!props.title && (
          <>
            {/* Hide icon Designed by me */}
            <IconMenu
              rotate={rotate}
              setRotate={setRotate}
              setShowElement={setShowElement}
              ShowElement={ShowElement}
              finishedLoading={true}
            />

            {/* Desktop Menu */}
            <DesktopMenu finishedLoading={true} />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
