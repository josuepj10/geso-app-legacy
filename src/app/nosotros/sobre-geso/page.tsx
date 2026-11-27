import type { Metadata } from "next"
import ImageGESO from "@/components/imageGESO";
import Mision from "@/components/nosotrosComponents/mision";
import Vision from "@/components/nosotrosComponents/vision";
import Historia from "@/components/nosotrosComponents/historia";


export const metadata: Metadata = {
  title: "Misión, visión e historia",
  description:
    "Conoce la misión, la visión y la historia de la Fundación Género y Sociedad (GESO), organización sin fines de lucro creada en Costa Rica en 1993.",
  alternates: { canonical: "/nosotros/sobre-geso" },
}

export default function misionPage() {
  return (
    <>
      <ImageGESO 
        imageSrc="/images/sobre-geso/exponer.webp" 
        title="Misión, visión e historia"
        imageClassName="object-[15%_center]"
      />
      
      <Mision />
      
      <main>
        <Vision
          imageSrc="/images/sobre-geso/vision_2.webp"
          title="Visión"
          description="Ser una entidad reconocida a nivel nacional e internacional por la calidad de los proyectos sociales y culturales 
          que desarrolla, así como por el rigor con que incorpora la perspectiva de equidad de género, tanto en el plano conceptual como 
          en el metodológico."
        />
      </main>

      <div className="flex justify-center md:my-20 my-10 ">
          <h2 className="md:text-4xl text-2xl font-bold text-[#5B1780]">Historia</h2>
      </div>

      <Historia />

    </>
  );
}      