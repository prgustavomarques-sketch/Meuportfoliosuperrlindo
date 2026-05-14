"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle, Heart, Code2 } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/prgustavomarques-sketch", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://discord.com/users/1263948262034116730", label: "Discord" },
  { icon: Mail, href: "mailto:Super.DeveloperNew@Hotmail.com", label: "Email" },
]

const footerLinks = [
  { name: "Sobre", href: "/#sobre" },
  { name: "Stack", href: "/#stack" },
  { name: "Playground", href: "/playground" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Contato", href: "/#contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Top section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="text-2xl font-bold gradient-text">{"<SD />"}</Link>
              <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
                Desenvolvedor Full Stack especializado em automação com IA e criação de bots.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 border border-border/50"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} Super Dev • Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> 
            </p>
            <p className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Next.js • TypeScript • Tailwind CSS</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
