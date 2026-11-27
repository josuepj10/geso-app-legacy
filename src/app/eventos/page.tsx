import type { Metadata } from "next"
import Image from "next/image"

// Página provisional: no se indexa hasta que tenga contenido.
export const metadata: Metadata = {
  title: "Eventos",
  robots: { index: false, follow: true },
}

export default function EventosPage() {
  return (
    <div>
      
      <div className="flex justify-center mt-20 mb-42">
        <Image src="/images/eventosimage.webp" alt="Construyendo" width={750} height={500} priority />
      </div>

    </div>
  );
}