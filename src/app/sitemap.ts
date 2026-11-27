import type { MetadataRoute } from "next"

const BASE_URL = "https://www.fundaciongeso.com"

// Solo páginas con contenido. Las provisionales (eventos, impacto,
// geso-en-medios, terminos) quedan fuera hasta que tengan contenido.
const rutas = [
  "",
  "/nosotros/sobre-geso",
  "/nosotros/competencias-y-capacidades",
  "/nosotros/principios",
  "/nosotros/alianzas",
  "/proyectos",
  "/proyectos/democracia-de-genero-y-participacion-ciudadana",
  "/proyectos/violencia-de-genero-y-prevencion",
  "/proyectos/migracion-y-derechos-humanos",
  "/proyectos/medios-de-comunicacion-y-cultura",
  "/proyectos/genero-y-comercio-internacional",
  "/publicaciones-y-recursos",
  "/apoyanos",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return rutas.map((ruta) => ({ url: `${BASE_URL}${ruta}`, lastModified }))
}
