"use client";

import dynamic from "next/dynamic";

// Dynamically import Lottie to disable SSR for this component
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
