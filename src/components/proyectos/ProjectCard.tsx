import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface ProjectCardData {
  title: string
  text: React.ReactNode
  image: string
  /** Texto del botón; el botón solo se muestra si también hay enlace. */
  button?: string
  href?: string
}

interface ProjectCardProps extends ProjectCardData {
  /** En escritorio, el texto va a la izquierda y la imagen a la derecha. */
  reverse?: boolean
}

export default function ProjectCard({ title, text, image, button, href, reverse = false }: ProjectCardProps) {
  // Imagen decorativa: el título de la tarjeta ya describe el proyecto.
  const imagen = (
    <div
      className={cn(
        "flex justify-center items-center p-5 sm:p-8 xl:flex-[1_1_auto] xl:max-w-[50%]",
        reverse ? "xl:justify-end order-1 xl:order-2" : "xl:justify-start xl:items-start"
      )}
    >
      <Image
        src={image}
        alt=""
        width={616}
        height={517}
        className="w-full h-full max-h-[547px] lg:min-h-[547px] rounded-[34px] object-cover"
      />
    </div>
  )

  const contenido = (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-6 sm:p-8 py-5 px-5 flex-[1_1_50%] min-w-[50%] xl:items-start",
        reverse && "xl:mx-2 xl:gap-11 order-2 xl:order-1"
      )}
    >
      <h2 className="text-center xl:text-left text-2xl font-bold text-geso-purple">{title}</h2>

      <div
        className="text-lg text-geso-ink mt-2 text-center xl:text-left
          [&_p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mt-3 [&_li]:mb-2 [&_strong]:font-semibold"
      >
        {text}
      </div>

      {/* El botón solo se muestra si hay texto y enlace */}
      {button && href ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-geso-purple rounded-4xl text-white hover:text-geso-purple hover:shadow-md text-lg w-full xl:w-76 py-4
            hover:bg-geso-yellow transition-colors duration-300 cursor-pointer inline-block text-center"
        >
          {button}
        </Link>
      ) : null}
    </div>
  )

  return (
    <article
      className="w-full h-auto max-w-[750px] xl:max-w-[1362px] xl:h-full bg-white rounded-[55px]
        flex overflow-hidden mb-4 outline xl:outline-0 xl:hover:outline
        hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      {/* En "reverse" el texto va primero también en el HTML, para que el orden de lectura coincida con el visual */}
      <div className="flex flex-col xl:flex-row xl:items-center">
        {reverse ? (
          <>
            {contenido}
            {imagen}
          </>
        ) : (
          <>
            {imagen}
            {contenido}
          </>
        )}
      </div>
    </article>
  )
}
