"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavbarButtonProps {
  href: string
  special?: boolean
  children: React.ReactNode
}

export default function NavbarButton({ href, special, children }: NavbarButtonProps) {
  const pathname = usePathname()

  // Marca activo si:
  // - La ruta actual es exactamente igual
  // - La ruta actual empieza con href (para hijos)
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"))

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`xl:px-5 px-3 py-1.5 rounded-[30px] font-medium transition-colors
        ${
          special
            ? "bg-geso-yellow text-geso-purple"
            : isActive
              ? "bg-geso-purple text-white"
              : "text-geso-ink hover:text-geso-purple"
        }`}
    >
      {children}
    </Link>
  )
}