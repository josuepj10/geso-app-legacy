import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

// Página provisional: no se indexa hasta que tenga contenido.
export const metadata: Metadata = {
  title: "Impacto",
  robots: { index: false, follow: true },
}


export default function ImpactoPage() {
  return (
    
    
    <div className="leading-relaxed text-geso-ink text-lg md:my-20 lg:mb-55 my-10 ">
      <Reveal>
        <p className="text-geso-ink leading-relaxed text-lg">
          Historias reales, datos de alcance, testimonios de participantes, indicadores de impacto. 
        </p>
      </Reveal>
    </div>

  );
}