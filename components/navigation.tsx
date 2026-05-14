"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Sobre", href: "/#sobre" },
  { name: "Stack", href: "/#stack" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Contato", href: "/#contato" },
]

const playgroundLink = { name: "Playground", href: "/playground", isPage: true }

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    
    // Se for uma âncora na mesma página
    if (href.startsWith("/#") && isHome) {
      const element = document.querySelector(href.replace("/", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault()
      scrollToSection(href)
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold gradient-text"
            >
              {"<SD />"}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={playgroundLink.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50 flex items-center gap-1.5"
              >
                <Code2 className="w-4 h-4" />
                {playgroundLink.name}
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href="/#contato">
                  Entre em Contato
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="glass-strong m-4 rounded-xl p-4 border border-border/50">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(item.href, e)
                      setIsMobileMenuOpen(false)
                    }}
                    className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={playgroundLink.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  {playgroundLink.name}
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </Link>
                <hr className="border-border/50 my-2" />
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="/#contato" onClick={() => setIsMobileMenuOpen(false)}>
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
