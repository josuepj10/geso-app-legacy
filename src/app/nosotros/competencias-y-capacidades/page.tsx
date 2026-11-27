import type { Metadata } from "next"
import ImageGESO from "@/components/imageGESO"
import Competencias from "@/components/nosotrosComponents/competencias";

export const metadata: Metadata = {
  title: "Competencias y capacidades",
  description:
    "Servicios de GESO: formulación y evaluación de proyectos, capacitación, asesoría especializada e investigación con perspectiva de género.",
  alternates: { canonical: "/nosotros/competencias-y-capacidades" },
}

export default function CompetenciasPage() {
  return (
    <>

      <ImageGESO 
        imageSrc="/images/competencias/observar.webp" 
        title="Competencias y capacidades"
        imageClassName="object-[60%_center]"
      />
      
      <p className="text-center text-lg text-geso-ink mt-20 xl:mt-30 max-w-[660px] mx-auto">
        GESO cuenta con un <span className="text-geso-purple font-bold">Know How</span> especializado con propósito, creatividad y 
        sentido de innovación presente en cada uno de los servicios que integra su portafolio: 
      </p>

      <Competencias />

    </>
  );
}