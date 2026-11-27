"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface ImageGESOProps {
  imageSrc: string;
  title: string;
  imageClassName?: string;
}

export default function ImageGESO({ imageSrc, title, imageClassName }: ImageGESOProps) {

  // Baja exactamente una altura de pantalla; sin animación si el sistema pide reducir movimiento.
  const handleScrollDown = () => {
    const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: window.innerHeight,
      behavior: reducirMovimiento ? "auto" : "smooth",
    });
  };

  return (
    <section
      className="relative -mt-22 left-1/2 right-1/2 -mx-[50vw]
      max-w-screen overflow-hidden pt-21 lg:pt-11"
    >
      {/* Imagen de fondo: decorativa, el título ya describe la sección */}
      <div className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-all duration-500 ease-in-out ${imageClassName || ""}`}
        />

        <div className="absolute inset-0 bg-[#5B1780]/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[40px] lg:text-[60px] font-semibold text-white mb-4">
            {title}
          </h1>
        </div>

        <div className="absolute bottom-20 inset-x-0 flex flex-col items-center text-center text-white gap-6">
          <p className="text-lg">Echa un vistazo a GESO</p>

          <button
            type="button"
            onClick={handleScrollDown}
            aria-label="Bajar al contenido"
            className="rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowDown aria-hidden="true" className="w-20 h-20 text-white animate-soft-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
