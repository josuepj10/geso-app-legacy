"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import type { RefObject } from "react";
import HighFiveAnimation from "@/lottie/HighFive.json";

interface HighFiveIconProps {
  lottieRef: RefObject<LottieRefCurrentProps | null>;
  onReady?: () => void;
}

export default function HighFiveIcon({ lottieRef, onReady }: HighFiveIconProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      onDOMLoaded={onReady}
      animationData={HighFiveAnimation}
      loop={false}
      autoplay={false}
      className="w-full max-w-80 h-full"
    />
  );
}
