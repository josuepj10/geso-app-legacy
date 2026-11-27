import type { Metadata } from "next"
import Card from "@/components/proyectos/cards";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de GESO en democracia de género, violencia de género, migración y derechos humanos, medios de comunicación y comercio internacional.",
  alternates: { canonical: "/proyectos" },
}

export default function Proyectos() {
  return (
    <div>
      <h1 className="flex justify-center text-geso-ink md:text-3xl text-2xl font-bold my-6">
        <span>Proyectos</span>
        <span className="text-geso-purple">&nbsp;GESO</span>
      </h1>
      
      {/* cards */}
      
      <div className="flex flex-wrap justify-center gap-8 my-10 max-w-[1200px] mx-auto px-8">
        <Card
          title="Democracia de género y participación ciudadana"
          image="/images/proyectos/democracia-de-genero.webp"
          href="/proyectos/democracia-de-genero-y-participacion-ciudadana"
        />
        
        <Card
          title="Violencia de género y prevención"
          image="/images/proyectos/violencia-de-genero-y-prevencion.webp"
          href="/proyectos/violencia-de-genero-y-prevencion"
        />
        
        <Card
          title="Migración y derechos humanos"
          image="/images/proyectos/migracion-y-derechos-humanos.webp"
          href="/proyectos/migracion-y-derechos-humanos"
        />
        
        <Card
          title="Medios de comunicación y cultura"
          image="/images/proyectos/medios-de-comunicacion.webp"
          href="/proyectos/medios-de-comunicacion-y-cultura"
        />

        <Card
          title="Género y comercio internacional"
          image="/images/proyectos/genero-y-comercio-internacional.webp"
          href="/proyectos/genero-y-comercio-internacional"
        />
      </div>
    

    </div>
  );
}
