"use client"

import { useLanguage } from "@/components/language-provider"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t.header.home },
    { href: "/about", label: t.header.about },
    { href: "/contact", label: t.header.contact },
  ]

  const Logo = () => (
    <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-1">
      <span className="text-red-600">You</span>
      <span className="text-black">Can</span>
      <span className="text-green-600">Win</span>
    </div>
  )

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
      )}
    >
      <Container className="max-w-full mx-auto px-4 md:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group tracking-wider hover:text-red-600",
                  pathname === link.href 
                    ? "text-red-600" 
                    : (scrolled ? "text-gray-800" : "text-white")
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={scrolled ? "text-black" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-black" : "text-white"} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-gray-50",
                    pathname === link.href ? "text-red-600" : "text-gray-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}