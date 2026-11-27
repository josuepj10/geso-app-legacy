"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperInstance } from "swiper"
import { A11y, Autoplay, Pagination } from "swiper/modules"
import { useReducedMotion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

// Importar estilos de Swiper
import "swiper/css"
import "swiper/css/a11y"
import "swiper/css/pagination"
import "./slider.css"

const slides = [
  {
    image: "/images/inicio/fundadora.webp",
    alt: "Integrante de GESO habla con un micrófono durante una actividad",
    title: (
      <>
        Fundación Género
        <div className="xl:pt-4">y Sociedad</div>
      </>
    ),
    text: null,
    button: null,
  },
  {
    image: "/images/inicio/abajo_inicio.webp",
    alt: "Cuatro personas sonrientes abrazadas en círculo, vistas desde abajo",
    title: (
      <>
        <div className="xl:text-[48px]">
          Democracia de género y
          <div className="xl:pt-3">participación ciudadana</div>
        </div>
      </>
    ),
    text: (
      <>
        Iniciativas que promueven la igualdad en <br></br>la toma de decisiones y en las políticas <br></br> públicas locales y nacionales.
      </>
    ),
    button: {
      label: "Conocer más",
      href: "/proyectos/democracia-de-genero-y-participacion-ciudadana",
    },
  },
]

export default function Slider() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [paused, setPaused] = useState(false)
  const reducirMovimiento = useReducedMotion()

  // Si el sistema pide reducir movimiento, el carrusel no avanza solo.
  useEffect(() => {
    if (reducirMovimiento && swiper) {
      swiper.autoplay.stop()
      setPaused(true)
    }
  }, [reducirMovimiento, swiper])

  const togglePausa = () => {
    if (!swiper) return
    if (paused) {
      swiper.autoplay.start()
    } else {
      swiper.autoplay.stop()
    }
    setPaused(!paused)
  }

  return (
    <section
      aria-label="Destacados"
      className="relative -mt-22 left-1/2 right-1/2 -mx-[50vw] max-w-screen overflow-hidden
                    pt-21 lg:pt-11 "
    >
      <Swiper
        onSwiper={setSwiper}
        modules={[A11y, Pagination, Autoplay]}
        a11y={{
          containerRoleDescriptionMessage: "carrusel",
          itemRoleDescriptionMessage: "diapositiva",
          slideLabelMessage: "{{index}} de {{slidesLength}}",
          paginationBulletMessage: "Ir a la diapositiva {{index}}",
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700} // Duración de la animación
        effect="slide"
        loop
      >
        {slides.map((slide, index) => {
          // El título de la primera diapositiva es el h1 del inicio.
          const Heading = index === 0 ? "h1" : "h2"
          return (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                className={`object-cover ${index === 0 ? "object-[70%_center]" : ""}`}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-[#5B1780]/60" />

              {/* Card sobre la imagen */}
              <div
                className="absolute flex flex-col
                sm:text-left
                px-4 sm:px-10 md:px-12 w-full
                sm:max-w-[790px]
                left-1/2 transform -translate-x-1/2
                top-7/20 sm:top-1/2 sm:left-[12.5%] sm:bottom-auto sm:-translate-y-1/2 sm:translate-x-0 "
              > {/* Otra opcion es usar botton-20 y el top-4/11 borrarlo */}

                {/* Título */}
                <Heading className="xl:text-6xl text-[40px] font-bold text-white">
                  {slide.title}
                </Heading>

                {/* Texto opcional */}
                {slide.text && (
                  <p className="md:text-[26px] text-lg text-white mt-3 sm:mt-4">{slide.text}</p>
                )}

                {/* Botón opcional */}
                {slide.button && (
                  <Link
                    href={slide.button.href}
                    className="self-start mt-4 sm:mt-5 px-2 w-full sm:w-[180px] py-4 text-lg bg-[#FFD11A] text-[#5B1780]
                              rounded-4xl inline-block text-center font-semibold "
                  >
                    {slide.button.label}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Pausar o reanudar el avance automático (WCAG 2.2.2) */}
      <button
        type="button"
        onClick={togglePausa}
        aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}
        className="absolute bottom-4 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full
                   bg-white text-[#5B1780] shadow-md cursor-pointer
                   hover:bg-[#FFD11A] transition-colors duration-300
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {paused ? <Play aria-hidden="true" className="h-5 w-5" /> : <Pause aria-hidden="true" className="h-5 w-5" />}
      </button>
    </section>
  )
}
