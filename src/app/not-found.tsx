import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Página no encontrada",
}

export default function NotFound() {
  return (
    <section className="flex flex-col items-center text-center gap-6 my-20 lg:my-32 mx-auto max-w-[660px]">
      <p className="text-[64px] md:text-[96px] font-bold leading-none text-geso-yellow">404</p>

      <h1 className="text-[32px] md:text-[44px] font-bold text-geso-purple">
        Página no encontrada
      </h1>

      <p className="text-lg text-geso-ink leading-relaxed">
        La página que busca no existe o cambió de dirección. Puede volver al inicio o conocer
        nuestros proyectos.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href="/"
          className="w-full sm:w-[180px] py-4 text-lg text-center rounded-4xl bg-geso-purple text-white
                     hover:bg-geso-yellow hover:text-geso-purple transition-colors duration-300"
        >
          Ir al inicio
        </Link>
        <Link
          href="/proyectos"
          className="w-full sm:w-[180px] py-4 text-lg text-center rounded-4xl border border-geso-purple text-geso-purple
                     hover:bg-geso-yellow hover:border-geso-yellow transition-colors duration-300"
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  )
}
