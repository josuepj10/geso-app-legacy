import type { Metadata } from "next"
import IconMarquee from "@/components/IconMarquee"
import ImageGESO from "@/components/imageGESO"
import Alianzas from "@/components/nosotrosComponents/alianzas"

export const metadata: Metadata = {
  title: "Nuestras alianzas",
  description:
    "GESO forma parte de redes nacionales y regionales, como REDNAM, que potencian su impacto y su incidencia en las políticas públicas.",
  alternates: { canonical: "/nosotros/alianzas" },
}

export default function AlianzasPage() {
  return (
    <>
      <ImageGESO 
        imageSrc="/images/alianzas/estrechar-manos.webp" 
        title="Nuestras alianzas"
      />
      
      <div className="md:my-25 my-10 ">

        <div className="leading-relaxed text-center text-geso-ink text-lg mt-8 mb-20 mx-auto max-w-[1040px]">
          <p>
            En la <span className="text-geso-purple text-[24px] font-bold">Fundación Género y Sociedad (GESO)</span> creemos en el trabajo colectivo 
            como motor de transformación. Por eso, formamos parte activa de redes nacionales y regionales que potencian nuestro impacto, 
            fortalecen nuestra voz y multiplican las oportunidades de incidencia.
          </p>

        </div>

        <p className="text-center text-xl text-geso-ink mb-2 font-bold">
          Somos miembros de:
        </p>

        <IconMarquee />

        <Alianzas />
      </div>    
    </>
  );
}