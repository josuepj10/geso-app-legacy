"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { FaBars } from "react-icons/fa"
import { usePathname } from "next/navigation"
import { menuItems } from "@/components/menu/menuItems"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Panel modal (Radix Dialog vía Sheet): atrapa el foco, cierra con Escape,
// bloquea el scroll de fondo y devuelve el foco al botón al cerrar.
export default function MovilMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Función para determinar si una ruta está activa o es hija
  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  const cerrar = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  // Estilos unificados
  const baseBtn = "w-full px-4 py-3 rounded-[30px] transition-colors text-lg"
  const activeBtn = "bg-geso-purple text-white transition-colors duration-300"
  const inactiveBtn = "hover:bg-gray-100 text-geso-ink transition-colors duration-300"

  const childBase = "px-3 py-2 rounded-[30px] text-lg border transition-colors duration-300"
  const childActive = "bg-geso-purple text-white border-none transition-colors duration-300 "
  const childInactive = "border-none hover:bg-white text-geso-ink transition-colors duration-300"

  return (
    <Sheet open={isOpen} onOpenChange={(abierto) => (abierto ? setIsOpen(true) : cerrar())}>
      {/* Menu hamburguesa */}
      <SheetTrigger asChild>
        <motion.button
          className="fixed top-2 right-8 z-[60] p-2 flex items-center justify-center md:hidden"
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          style={{ perspective: 900 }}
        >
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ rotateX: -75, skewY: 6, opacity: 0.2 }}
            animate={{ rotateX: 0, skewY: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.4, 1.2, 0.5, 1.2],
            }}
            className="origin-top"
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-10 w-10 text-geso-purple" strokeWidth={3} />
            ) : (
              <FaBars aria-hidden="true" className="h-9 w-9 text-geso-purple" />
            )}
          </motion.div>
        </motion.button>
      </SheetTrigger>

      {/* Panel */}
      <SheetContent
        side="bottom"
        showCloseButton={false}
        overlayClassName="bg-geso-purple/20 backdrop-blur-sm"
        aria-describedby={undefined}
        className="h-[80%] max-h-[80vh] gap-0 border-none bg-white p-0 shadow-none"
      >
        <SheetTitle className="sr-only">Menú principal</SheetTitle>

        <div className="w-full h-full overflow-y-auto relative flex flex-col items-center justify-start">
          <nav aria-label="Menú principal" className="flex flex-col gap-6 max-w-sm pt-12 w-full text-center px-2">

            {menuItems.map((item) => {
              // Determinamos si algún hijo está activo (boolean)
              const hasActiveChild = item.children?.some((child) =>
                isRouteActive(child.href)
              )

              // El padre está activo si su ruta o cualquier hijo está activa
              const active = isRouteActive(item.href) || Boolean(hasActiveChild)
              const dropdownOpen = openDropdown === item.href
              const submenuId = `submenu-movil${item.href.replace(/\//g, "-")}`

              return (
                <div key={item.href} className="flex flex-col w-full">
                  {item.children ? (
                    <>
                      {/* Botón dropdown */}
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(dropdownOpen ? null : item.href)
                        }
                        aria-expanded={dropdownOpen}
                        aria-controls={submenuId}
                        className={`${baseBtn} flex items-center justify-between pl-11
                          ${active || dropdownOpen ? activeBtn : inactiveBtn}`}
                      >
                        <span className="flex-1 text-center">{item.label}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-6 w-6 transition-transform duration-300
                            ${dropdownOpen ? "rotate-180" : ""}
                            ${dropdownOpen || active ? "text-white" : "text-geso-ink"}
                          `}
                        />
                      </button>

                      {/* Submenú */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            id={submenuId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="p-4 bg-geso-yellow rounded-4xl flex flex-col gap-2 mt-2"
                          >
                            {item.children.map((child) => {
                              const isChildActive = isRouteActive(child.href)
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={cerrar}
                                  aria-current={isChildActive ? "page" : undefined}
                                  className={`${childBase} ${
                                    isChildActive ? childActive : childInactive
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    // Sin dropdown
                    <Link
                      href={item.href}
                      onClick={cerrar}
                      aria-current={active ? "page" : undefined}
                      className={`${baseBtn} ${active ? activeBtn : inactiveBtn}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}

          </nav>

          {/* Cierre para teclado y lectores de pantalla; solo se ve al recibir foco */}
          <SheetClose
            className="sr-only focus:not-sr-only focus:mt-6 focus:mb-8 focus:px-6 focus:py-3 focus:rounded-full
                       focus:border focus:border-geso-purple focus:text-geso-purple focus:text-lg"
          >
            Cerrar menú
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
