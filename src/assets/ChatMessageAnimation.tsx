'use client'

import * as animationData from "./lottie/chatMessageAnimation.json";
import { useLottie } from "lottie-react";

const ChatMessageAnimation = () => {
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

export default ChatMessageAnimation;