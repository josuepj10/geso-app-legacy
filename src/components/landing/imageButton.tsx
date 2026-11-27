import Image from "next/image";
import Link from "next/link";

interface ImageButtonProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function ImageButton({
  imageSrc,
  title,
  description,
  buttonText,
  buttonHref,
}: ImageButtonProps) {
  return (
    <section className="mt-20 relative flex flex-col items-center left-1/2 right-1/2 -mx-[50vw] max-w-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="relative w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
        {/* Decorativa: el título de la tarjeta ya describe la sección */}
        <Image
        src={imageSrc}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        />
      </div>

      {/* Caja de texto y botón */}

      <div className="absolute bottom-10 md:bottom-20 left-0 right-0 px-4 sm:px-10 xl:px-0 ">
        <article
            className="
            mx-auto w-full max-w-[1014px]
            bg-white rounded-[50px] border border-geso-line
            shadow-lg p-11 lg:p-13 flex flex-col
            "
        >
          <h2 className="text-2xl lg:text-[40px] font-semibold text-geso-purple mb-4">
          {title}
          </h2>

          <p className="text-geso-ink text-lg mb-4">
          {description}
          </p>

          <Link
          href={buttonHref}
          className="
              self-start mt-2 w-full sm:w-[180px] py-3 text-lg bg-geso-purple 
              text-white hover:text-geso-purple rounded-full hover:bg-geso-yellow 
              inline-block text-center transition-colors duration-300 ease-in-out
          "
          >
          {buttonText}
          </Link>
        </article>
      </div>
    </section>
  );
}