import type { Metadata } from "next"
import ProjectList from "@/components/proyectos/ProjectList"


export const metadata: Metadata = {
  title: "Medios de comunicación y cultura",
  description:
    "Manuales para periodistas, la guía del COLPER y programas radiales como Gente sin Fronteras, con enfoque de derechos humanos.",
  alternates: { canonical: "/proyectos/medios-de-comunicacion-y-cultura" },
}

export default function MediosPage() {
  const cards = [
    {
      title: "Manual para periodistas sobre migración y refugio (2024)",
      text: <p>En GESO elaboramos, junto con <strong>ACNUR, el Banco Mundial y Aacrom </strong>, un manual práctico para periodistas que cubren temas de migración y refugio. 
      La publicación ofrece herramientas para una cobertura ética, responsable y con enfoque de derechos humanos, contribuyendo a contrarrestar estereotipos 
      y narrativas negativas.</p>,
      image: "/images/proyectos/medios/manual-para-periodistas-sobre-migracion-y-refugio.webp",
      button: "Descargar manual",
      href: "https://www.acnur.org/sites/default/files/2024-11/manual_para_periodistas_acnur_2024.pdf",
    },
    {
      title: "Capítulo en la Guía de Cobertura Periodística del COLPER (2024)",
      text: <p>En alianza con el <strong>Colegio de Periodistas de Costa Rica (COLPER)</strong>, <strong>ACNUR</strong> y <strong>Aacrom</strong>, desarrollamos el capítulo 
      sobre cobertura periodística con enfoque de derechos humanos en migración y refugio. Esta guía fortalece la práctica profesional de la comunicación en el país. </p>,
      image: "/images/proyectos/medios/capitulo-en-la-guia-de-cobertura-periodistica-del-colper.webp",
      button: "Ver guía completa",
      href: "https://colper.or.cr/wp-content/uploads/2024/09/Guia_cobertura_-periodistica_web.pdf",
    },
    {
      title: "Programa radial Gente sin Fronteras (2002-2010)",
      text: <p>Durante ocho años produjimos y transmitimos el programa radial Gente sin Fronteras, un espacio pionero que visibilizó las voces de la población 
      migrante y promovió la convivencia positiva entre personas costarricenses y migrantes. Este programa recibió el <strong>Premio Jorge Vargas Gené</strong> del Colegio 
      de Periodistas de Costa Rica por su aporte a la comunicación inclusiva.</p>,
      image: "/images/proyectos/medios/gente-sin-fronteras.webp",
      button: "Escuchar programa",
      href: "",
    },
    {
      title: "Programas radiales para promover la ciudadanía (2002)",
      text: <span>Producimos programas radiales en alianza con instituciones nacionales: 
              <ul>
                <li><strong>“Ciudadanía y Poder Local”</strong> con el IFAM, para fomentar la participación en la primera elección directa de alcaldes/as. </li> 
                <li><strong>“La Voz del Tribunal” </strong> con el TSE, orientado a informar y motivar la participación ciudadana durante el mismo proceso electoral. </li>
              </ul> 
            </span>,
      image: "/images/proyectos/medios/radiales.webp",
      button: "Más información",
      href: "",
    },
    
  ];

  return (
    <div className="flex flex-col items-center gap-8 mb-8">
      <h1 className=" flex justify-center text-center pb-2 text-[32px] md:text-[44px] text-geso-purple font-bold ">
        Medios de comunicación y cultura
      </h1>
      
      <ProjectList cards={cards} />
    </div> 
  );
}