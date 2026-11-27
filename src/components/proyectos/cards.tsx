import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  image: string
  href: string
}

export default function Card({ title, image, href }: CardProps) {
  return (
    <article>
      <Link
        href={href}
        className="block rounded-[17%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-geso-purple"
      >
        {/* El leve aumento al pasar el mouse es CSS; se desactiva si el sistema pide reducir movimiento. */}
        <div
          className="w-full max-h-90 aspect-[4.7/5] sm:w-72 sm:h-[281px] bg-white rounded-[17%] hover:shadow-2xl border border-gray-300
                     flex flex-col justify-between cursor-pointer overflow-hidden
                     transition-[transform,box-shadow] duration-300 motion-safe:hover:scale-[1.02]"
        >
          {/* Imagen superior: decorativa, el título da nombre al enlace */}
          <div className="relative w-full h-2/3">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 640px) 288px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Título (parte inferior = 1/3 del contenedor) */}
          <div className="flex text-center items-center justify-center text-geso-ink h-3/7 p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        </div>
      </Link>
    </article>
  )
}
