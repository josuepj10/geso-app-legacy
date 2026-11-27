import Link from "next/link";

interface CardInicioProps {
  titulo: string;
  descripcion: string;
  enlace: string;
  textoB: string;
}

export default function CardInicio({ titulo, descripcion, enlace, textoB }: CardInicioProps) {
  return (

    // El leve aumento al pasar el mouse es CSS; se desactiva si el sistema pide reducir movimiento.
    <div
        className="
        rounded-[50px] bg-white border w-full max-w-[666px] mx-auto border-geso-line shadow-sm hover:shadow-2xl
        transition-[transform,box-shadow] duration-300 ease-in-out motion-safe:hover:scale-[1.02]"
    >
        <article className="p-5 lg:p-8 xl:p-9 flex flex-col h-full xl:min-h-[355px] justify-between items-center lg:items-start">
            <h3 className="lg:text-[28px] text-2xl font-semibold text-geso-purple text-center lg:text-start">
                {titulo}
            </h3>

            <p className="text-geso-ink text-base lg:my-7 my-4 text-start">
                {descripcion}
            </p>

            <Link
                href={enlace}
                className="mt-auto inline-block w-full sm:w-[180px] text-center py-4 bg-geso-purple text-white hover:text-geso-purple
                rounded-4xl text-lg hover:bg-geso-yellow transition-colors duration-200
                pointer-events-auto hover:shadow-2xl "
            >
                {textoB}
            </Link>
        </article>
    </div>

  );
}
