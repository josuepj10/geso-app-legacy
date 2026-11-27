"use client";

import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import type { RefObject } from "react";
import PartnershipAnimation from "@/lottie/Partnership.json";

interface PartnershipIconProps {
  lottieRef: RefObject<LottieRefCurrentProps | null>;
  onReady?: () => void;
}

export default function PartnershipIcon({ lottieRef, onReady }: PartnershipIconProps) {
  return (
    <Lottie
      lottieRef={lottieRef}
      onDOMLoaded={onReady}
      animationData={PartnershipAnimation}
      loop={false}
      autoplay={false}
      className="w-full max-w-80 h-full"
    />
  );
}
