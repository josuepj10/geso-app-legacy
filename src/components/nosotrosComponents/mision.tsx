import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Mision() {
  return (
    <section 
      aria-labelledby="mision-heading"
      className="overflow-x-hidden max-w-[1362px] mx-auto flex flex-col items-center gap-4 pl-10 pr-7 py-8
                        lg:flex-row lg:justify-between lg:py-40 lg:pr-14  ">
      
      {/* Texto de la sección */}
      <article className="lg:w-1/2 my-10 -ml-10 -mr-7 lg:-mr-4 lg:pr-6">
        <Reveal>
          <h2 
          id="mision-heading"
          className="my-5 text-4xl font-bold text-geso-purple">Misión</h2>
          <p className="text-geso-ink leading-relaxed text-lg">
            La Fundación Género y Sociedad (GESO) promueve y desarrolla proyectos sociales y culturales que, 
            desde una perspectiva de género, buscan contribuir a la equidad social y al fortalecimiento de la 
            democracia en Costa Rica y la región. 
          </p>
        </Reveal> 
      </article>
      
      

        <div className="relative w-full h-70 lg:w-150 lg:h-110 group  ">
          
          {/* Contenedor interno que mantiene el redondeado y overflow */}
          <div className="relative w-full h-full rounded-[50px] overflow-hidden">
            
            {/* Imagen principal */}
            <Image 
              src="/images/sobre-geso/mision-3.webp"
              alt="" 
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover transition duration-300"
            />

            <div className="absolute inset-0 bg-geso-purple/65 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Imagen hover */}
            <Image
              src="/images/sobre-geso/icono-bandera.svg"
              alt=""
              width={197}
              height={247}
              className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition duration-300"
            />
          </div>

          {/* Cuadro superior izquierdo */}
          <div className="absolute bg-white border shadow-md flex items-center justify-center
                          lg:-top-[35px] lg:-left-[84px] lg:w-[168px] lg:h-[168px] lg:rounded-[50px] 
                          w-[90px] h-[90px] -top-[17px] -left-[40px] rounded-3xl ">
            <GraduationCap aria-hidden="true" strokeWidth={1.5} className="lg:w-12 lg:h-12 w-8 h-8 text-geso-purple" />
          </div>
          
          {/* Cuadro inferior derecho */}
          <div className="absolute bg-white border shadow-md flex items-center justify-center
                          lg:-bottom-[71px] lg:-right-[50px] lg:w-[213px] lg:h-[213px] lg:rounded-[50px] 
                          -bottom-[30px] -right-[25px] w-[120px] h-[120px] rounded-4xl">
            <Briefcase aria-hidden="true" strokeWidth={1.5} className="lg:w-20 lg:h-20 w-10 h-10 text-geso-purple"/>
          </div>
        </div>
      
    </section>
  );
}