# Sitio web de la Fundación GESO

Código del sitio [www.fundaciongeso.com](https://www.fundaciongeso.com), de la Fundación Género y Sociedad (GESO), Costa Rica.

Es un sitio estático hecho con Next.js. Todo el contenido (textos, proyectos, publicaciones, enlaces) está escrito en el código, así que cualquier cambio de contenido requiere editar un archivo y publicar. Está previsto conectarlo a Sanity para que GESO edite el contenido desde un panel.

## Tecnología

| Pieza | Versión o servicio |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Estilos | Tailwind CSS 4, componentes de shadcn/ui (`button`, `sheet`) |
| Animaciones | framer-motion, Swiper (carrusel), Lottie (Apóyanos) |
| Hosting | Vercel, con despliegue automático desde `main` |
| Dominio y DNS | Cloudflare |
| Gestor de paquetes | pnpm |

## Requisitos

- Node.js 22.12 o superior
- pnpm

## Comandos

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo en http://localhost:3000
pnpm build        # compilación de producción
pnpm start        # servir la compilación de producción
pnpm lint         # revisar el código con ESLint
```

Antes de abrir un pull request, `pnpm lint` y `pnpm build` deben terminar sin errores.

## Cómo se publica

- Cada push a `main` se publica automáticamente en www.fundaciongeso.com.
- Cada pull request genera una vista previa en Vercel, con su enlace en el propio PR. Revisarla en móvil y escritorio antes de fusionar.
- No se trabaja directo sobre `main`: cada cambio va en su rama y entra por pull request.

## Estructura

```
src/
  app/                    Páginas (una carpeta por ruta), layout, estilos globales,
                          metadata, robots.ts, sitemap.ts y not-found.tsx
  components/
    menu/                 Menú de escritorio, menú móvil y lista de enlaces (menuItems.ts)
    landing/              Carrusel, noticias y bloque "Colabora" del inicio
    proyectos/            Tarjetas de áreas (cards.tsx) y de proyectos (ProjectCard, ProjectList)
    publicaciones/        Tarjeta de publicación
    nosotrosComponents/   Secciones de Misión, Visión, Historia, Principios, Competencias, Alianzas
    apoyanos/             Tarjetas de Apóyanos y sus animaciones Lottie
    ui/                   Componentes base de shadcn/ui
  lib/utils.ts            Función cn() para combinar clases de Tailwind
  lottie/                 Datos de las animaciones
public/images/            Imágenes del sitio, agrupadas por sección
```

## Cómo cambiar el contenido hoy

| Quiero cambiar… | Archivo |
| --- | --- |
| Textos y enlaces del menú | `src/components/menu/menuItems.ts` |
| Carrusel del inicio | `src/components/landing/slider.tsx` |
| Noticias del inicio | `src/app/page.tsx` |
| Proyectos de un área | El arreglo `cards` de `src/app/proyectos/<área>/page.tsx` |
| Publicaciones | El arreglo `cards` de `src/app/publicaciones-y-recursos/page.tsx` |
| Botones de Apóyanos | `src/components/apoyanos/cardsVerticales.tsx` |
| Contacto y redes del footer | `src/components/footer.tsx` |
| Título y descripción de una página (SEO) | El `export const metadata` de su `page.tsx` |
| Páginas del sitemap | `src/app/sitemap.ts` |

Las tarjetas de proyecto alternan solas la imagen a izquierda y derecha. Una tarjeta solo muestra su botón si tiene texto (`button`) y enlace (`href`).

## Convenciones

- **Colores de marca:** usar los tokens definidos en `src/app/globals.css` (`geso-purple`, `geso-yellow`, `geso-ink`, `geso-line`), por ejemplo `bg-geso-purple` o `text-geso-ink`. No escribir colores hexadecimales en los componentes.
- **Imágenes:** nombres en minúsculas, con guiones y sin tildes, espacios ni paréntesis (`gestion-municipal-y-equidad-de-genero.webp`). Formato `.webp`.
- **Texto alternativo:** describir las imágenes con información propia; usar `alt=""` en íconos decorativos y en fotos que solo repiten el título de su tarjeta.
- **Componentes de cliente:** agregar `"use client"` solo cuando el componente usa estado, efectos o eventos.
- **Un solo `h1` y un solo `<main>` por página:** el `<main>` ya está en el layout.

## Cuentas

| Servicio | Uso | Administra |
| --- | --- | --- |
| GitHub | Repositorio | Por confirmar |
| Vercel | Hosting y vistas previas | Por confirmar |
| Cloudflare | Dominio `fundaciongeso.com` (vence cada 28 de diciembre) y DNS | Por confirmar |
| Google Search Console | Indexación y sitemap | Por configurar |

Lo recomendable es que todas las cuentas estén a nombre de GESO, con un correo institucional.
