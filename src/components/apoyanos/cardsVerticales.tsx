"use client";

import dynamic from "next/dynamic";
import CardIcons from "./cardVertical";

// Las animaciones Lottie (librería + datos) se cargan después de mostrar la página,
// con un espacio cuadrado reservado para que el diseño no salte.
const Placeholder = () => <div aria-hidden="true" className="w-full max-w-80 aspect-square" />;
const VolunteerIcon = dynamic(() => import("./lottieVolunteer"), { ssr: false, loading: Placeholder });
const HighFiveIcon = dynamic(() => import("./lottieHighFive"), { ssr: false, loading: Placeholder });
const PartnershipIcon = dynamic(() => import("./lottiePartnership"), { ssr: false, loading: Placeholder });

// Enlaces provisionales por correo hasta que GESO defina el método de donación
// y los canales de voluntariado y alianzas.
const CONTACTO = "mailto:info@generoysociedad.com";

export default function Verticales() {
  return (
    <div className="flex flex-wrap lg:grid lg:grid-cols-3 justify-center gap-8 max-w-[1420px] mx-auto">
      <CardIcons
        title="Apoya nuestros proyectos"
        text={
          <div>
            <p>
              Tu aporte económico permite que sigamos desarrollando proyectos sociales y culturales con perspectiva de
              género en Costa Rica y la región. Con tu ayuda podemos:
            </p>
            <ul>
              <li>Fortalecer políticas públicas con enfoque de género.</li>
              <li>Producir recursos educativos y comunicativos que generan impacto real.</li>
            </ul>
          </div>
        }
        button="Donar ahora"
        href={`${CONTACTO}?subject=${encodeURIComponent("Donación")}`}
        animation={VolunteerIcon}
        animationDelay={0}
      />

      <CardIcons
        title="Únete como voluntario/a"
        text={
          <div>
            <p>
              ¿Quieres ser parte activa del cambio? En GESO abrimos espacios para que estudiantes, profesionales y
              activistas aporten sus conocimientos en:
            </p>
            <ul>
              <li>Comunicación y medios.</li>
              <li>Investigación social.</li>
              <li>Educación y formación.</li>
              <li>Gestión de proyectos comunitarios.</li>
            </ul>
          </div>
        }
        button="Postúlate como voluntaria/o"
        href={`${CONTACTO}?subject=${encodeURIComponent("Voluntariado")}`}
        animation={HighFiveIcon}
        animationDelay={700}
      />

      <CardIcons
        title="Alianzas y apoyo institucional"
        text={
          <div>
            <p>El trabajo colaborativo potencia nuestro impacto. Por eso construimos alianzas con:</p>
            <ul>
              <li>Organismos internacionales.</li>
              <li>Gobiernos locales y municipales.</li>
              <li>Universidades y centros de investigación.</li>
              <li>Organizaciones de la sociedad civil y empresas comprometidas con la equidad.</li>
            </ul>
          </div>
        }
        button="Conversemos sobre alianzas"
        href={`${CONTACTO}?subject=${encodeURIComponent("Alianza institucional")}`}
        animation={PartnershipIcon}
        animationDelay={1400}
      />
    </div>
  );
}
