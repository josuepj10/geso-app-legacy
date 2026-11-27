"use client";

import Link from "next/link";
import React, { useRef, useEffect, useState, useCallback, type RefObject } from "react";
import { useInView } from "react-intersection-observer";
import type { LottieRefCurrentProps } from "lottie-react";

export interface AnimationProps {
  lottieRef: RefObject<LottieRefCurrentProps | null>;
  onReady: () => void;
}

export interface CardProps {
  title: string;
  text: React.ReactNode;
  /** Componente de animación Lottie; recibe el ref para reproducirla y avisa cuando cargó. */
  animation?: React.ComponentType<AnimationProps>;
  button: string;
  href: string;
  animationDelay?: number;
}

export default function CardIcons({
  title,
  text,
  animation: Animation,
  button,
  href,
  animationDelay = 0,
}: CardProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  // La animación se carga de forma diferida; solo se reproduce cuando ya está lista.
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!isInView || !ready) return;

    const timeout = setTimeout(() => {
      lottieRef.current?.goToAndPlay(0, true);
    }, animationDelay);

    return () => clearTimeout(timeout);
  }, [isInView, ready, animationDelay]);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
      className="w-full max-w-[432px] h-full bg-white rounded-[55px] overflow-hidden outline hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col p-3"
    >
      {Animation && (
        // Ilustración decorativa
        <div aria-hidden="true" className="flex justify-center items-center px-2">
          <Animation lottieRef={lottieRef} onReady={onReady} />
        </div>
      )}

      <div className="flex flex-col flex-1 gap-2 px-5">
        <h2 className="text-geso-purple font-bold text-center text-2xl pt-4">
          {title}
        </h2>

        <div className="text-lg text-geso-ink mt-2 mb-2 text-left [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-[16px] [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold">
          {text}
        </div>

        {button && href && (
          <Link
            href={href}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="bg-geso-purple rounded-4xl text-white hover:text-geso-purple hover:shadow-md text-lg w-full py-4 px-4 hover:bg-geso-yellow transition-colors duration-300 mb-5 mt-auto text-center"
          >
            {button}
          </Link>
        )}
      </div>
    </article>
  );
}
