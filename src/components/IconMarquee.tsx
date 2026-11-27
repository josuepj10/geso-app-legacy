import Image from "next/image";

const icons = [
  { src: "/images/iconos-marquee/rednam.webp", alt: "REDNAM, Red Nacional de Organizaciones Civiles para las Migraciones" },
  { src: "/images/iconos-marquee/redcepaz.webp", alt: "Red CEPAZ" },
  { src: "/images/iconos-marquee/foro.webp", alt: "Foro Permanente sobre Población Migrante y Refugiada" },
  { src: "/images/iconos-marquee/canaess.webp", alt: "CANAESS, Cámara Nacional de la Economía Social Solidaria" },
];

// Cada copia repite los 4 logos 3 veces (12 × 160 px = 1920 px) para cubrir
// pantallas anchas. La animación desplaza -50%, es decir, exactamente una copia.
const REPETICIONES_POR_COPIA = 3;
const copia = Array.from({ length: REPETICIONES_POR_COPIA }, () => icons).flat();

function Copia({ oculta }: { oculta?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={oculta || undefined}>
      {copia.map((icon, i) => (
        <div key={i} className="relative w-24 h-24 flex-shrink-0 mr-16">
          <Image
            src={icon.src}
            // Solo la primera vuelta de la primera copia se anuncia a lectores de pantalla.
            alt={!oculta && i < icons.length ? icon.alt : ""}
            fill
            sizes="96px"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function IconMarquee() {
  return (
    <div className="relative overflow-hidden w-full py-6">
      {/* Cinta animada */}
      <div className="animate-marquee">
        <Copia />
        <Copia oculta />
      </div>
    </div>
  );
}
