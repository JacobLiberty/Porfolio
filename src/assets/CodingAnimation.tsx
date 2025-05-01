'use client'

import * as animationData from "./lottie/codingAnimation.json";
import { useLottie } from "lottie-react";

const CodingAnimation = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export default CodingAnimation;