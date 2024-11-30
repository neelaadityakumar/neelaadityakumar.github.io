import React from "react";
import AnimationLottie from "./AnimationLottie";
import writing from "../public/lottie/writing.json";
const DraftBlogBanner = () => {
  return (
    <div className="text-center">
      <p className="text-xl mb-6">
        This blog post is a work in progress and is currently in draft.
      </p>
      <p className="text-lg italic">
        Please check back later for more updates. Your feedback is welcome!
      </p>

      <div className="w-full md:max-w-xs mx-auto">
        <AnimationLottie animationPath={writing} />
      </div>
    </div>
  );
};

export default DraftBlogBanner;
