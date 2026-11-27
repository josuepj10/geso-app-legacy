import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import BarHeader from "@/components/menu/barheader"
import MovilMenu from "@/components/menu/movilMenu"
import * as React from "react"

const SITE_URL = "https://www.fundaciongeso.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fundación Género y Sociedad (GESO)",
    template: "%s | Fundación GESO",
  },
  description:
    "Fundación costarricense que desde 1993 impulsa la equidad de género, la participación ciudadana y los derechos humanos en Costa Rica y Centroamérica.",
  openGraph: {
    siteName: "Fundación GESO",
    locale: "es_CR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
}

// Datos estructurados para que los buscadores identifiquen a GESO como ONG.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundación Género y Sociedad (GESO)",
  alternateName: "Fundación GESO",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  foundingDate: "1993",
  email: "info@generoysociedad.com",
  telephone: "+506 2271-2383",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abedules II, No. 14-H, Curridabat",
    addressRegion: "San José",
    addressCountry: "CR",
  },
  sameAs: [
    "https://www.facebook.com/FundacionGESO",
    "https://www.instagram.com/fundaciongeso/",
    "https://www.youtube.com/channel/UCGghK4Q0ZFTG6lOay5qO1BQ",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className="antialiased text-base bg-white text-gray-900 overflow-x-hidden"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Navbar fijo */}
        <BarHeader />

        {/* Menú móvil */}
        <div className="lg:hidden">
          <MovilMenu />
        </div>

        {/* Contenido principal */}
        <main className="pt-18 lg:pt-32">
          <div className="max-w-[1362px] mx-auto md:px-6 2xl:px-0 px-4">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}