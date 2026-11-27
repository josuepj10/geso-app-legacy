import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

// Página provisional: no se indexa hasta que tenga contenido.
export const metadata: Metadata = {
  title: "GESO en medios",
  robots: { index: false, follow: true },
}

export default function actualidadPage() {
  return (
    
      
    <div className="leading-relaxed text-[#374151] text-lg md:my-20 lg:mb-55 my-10">

      <Reveal>
        <p className="text-[#374151] leading-relaxed text-lg">
          Artículos, entrevistas, podcasts, trabajo en medios.
        </p>
      </Reveal>
    </div>

      
      
      

    
  );
}