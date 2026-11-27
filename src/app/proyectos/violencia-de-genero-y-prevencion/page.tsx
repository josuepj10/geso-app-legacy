import type { Metadata } from "next"
import ProjectList from "@/components/proyectos/ProjectList"

export const metadata: Metadata = {
  title: "Violencia de género y prevención",
  description:
    "Proyectos de GESO con la UNGL, el INAMU, el BID y el PNUD para prevenir la violencia contra las mujeres en Costa Rica y América Latina.",
  alternates: { canonical: "/proyectos/violencia-de-genero-y-prevencion" },
}

export default function ViolenciaPage() {
  const cards = [
    {
      title: "Fortalecimiento de políticas públicas en Gobiernos Locales (2018)",
      text: <p>En GESO implementamos este proyecto junto con la Unión Nacional de Gobiernos Locales (UNGL) y el Gobierno de Estados Unidos, con el objetivo de reforzar 
      las capacidades técnicas de las Oficinas de Género municipales en Costa Rica. Realizamos seis talleres regionales y un taller nacional con la participación de 
      57 municipalidades, donde se compartieron buenas prácticas y se construyó una agenda común para prevenir la violencia y promover la igualdad de género a 
      nivel local. </p>,
      image: "/images/proyectos/violencia/fortalecimiento-de-politicas-publicas-en-gobiernos-locales.webp",
      button: "Ver resultados",
      href: "https://www.facebook.com/FundacionGESO/videos/747372592288848/",
    },
    {
      title: "Estrategia comunitaria contra la violencia hacia las mujeres (2017-2018) ",
      text: <p>Diseñamos y ejecutamos, en alianza con el INAMU, una estrategia comunitaria para el empoderamiento de mujeres en cantones seleccionados de Costa Rica. 
      A través de talleres participativos, impulsamos procesos de liderazgo, organización y prevención de la violencia en todas sus formas. </p>,
      image: "/images/proyectos/violencia/estrategia-comunitaria-contra-la-violencia-hacia-las-mujeres.webp",
      button: "Conocer experiencia",
      href: "https://www.facebook.com/FundacionGESO/videos/305453366965423/",
    },
    {
      title: "Proyectos comunitarios en Tirrases de Curridabat (2016-2017)",
      text: <p>En alianza con la Municipalidad de Curridabat y otras instituciones, desarrollamos proyectos como el Programa de formación humana para un proyecto de 
      vida con equidad, Huertas Urbanas y el proceso Es tiempo de cambiar. Estas iniciativas beneficiaron a mujeres costarricenses y migrantes en condición de 
      pobreza, brindándoles herramientas para fortalecer sus competencias personales, sociales y productivas. </p>,
      image: "/images/proyectos/violencia/proyectos-comunitarios-en-tirrases-de-curridabat.webp",
      button: "Ver testimonios",
      href: "https://www.facebook.com/456345087906362/videos/543691289171741/",
    },
    {
      title: "Investigación regional sobre violencia doméstica (2002) ",
      text: <p>En GESO colaboramos con el Banco Interamericano de Desarrollo (BID) en la investigación Violencia doméstica: intervenciones para su prevención y 
      tratamiento. El estudio analizó políticas y planes nacionales en Brasil, Bolivia, Chile y Costa Rica, identificando lecciones aprendidas y propuestas para 
      mejorar la atención de la violencia en América Latina.</p>,
      image: "/images/proyectos/violencia/investigacion-regional-sobre-violencia-domestica.webp",
      button: "Descargar publicación BID",
      href: "https://publications.iadb.org/es/publicacion/14280/violencia-domestica-intervenciones-para-su-prevencion-y-tratamiento-3-planes",
    },
    {
      title: "Informes regionales sobre violencia de género en América Latina y el Caribe (1999-2000)",
      text: <p>Lideramos, junto con el PNUD, un estudio en 18 países de la región para evaluar la situación de la violencia de género contra las mujeres. Este 
      trabajo comparativo se convirtió en una referencia regional para la elaboración de políticas públicas y estrategias de prevención. </p>,
      image: "/images/proyectos/violencia/informes-regionales-sobre-violencia-de-genero-en-america-latina-y-el-caribe.webp",
      button: "Consultar informe PNUD",
      href: "",
    },
    
  ];

  
  return (
    <div className="flex flex-col items-center gap-8 mb-8 ">

      <h1 className=" flex justify-center text-center pb-2 text-[32px] md:text-[44px] text-geso-purple font-bold ">
        Violencia de género y prevención
      </h1>
      
      <ProjectList cards={cards} />
    </div>
  );
}