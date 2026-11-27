import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Página no encontrada",
}

export default function NotFound() {
  return (
    <section className="flex flex-col items-center text-center gap-6 my-20 lg:my-32 mx-auto max-w-[660px]">
      <p className="text-[64px] md:text-[96px] font-bold leading-none text-[#FFD11A]">404</p>

      <h1 className="text-[32px] md:text-[44px] font-bold text-[#5B1780]">
        Página no encontrada
      </h1>

      <p className="text-lg text-[#374151] leading-relaxed">
        La página que busca no existe o cambió de dirección. Puede volver al inicio o conocer
        nuestros proyectos.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link
          href="/"
          className="w-full sm:w-[180px] py-4 text-lg text-center rounded-4xl bg-[#5B1780] text-white
                     hover:bg-[#FFD11A] hover:text-[#5B1780] transition-colors duration-300"
        >
          Ir al inicio
        </Link>
        <Link
          href="/proyectos"
          className="w-full sm:w-[180px] py-4 text-lg text-center rounded-4xl border border-[#5B1780] text-[#5B1780]
                     hover:bg-[#FFD11A] hover:border-[#FFD11A] transition-colors duration-300"
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  )
}
