"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://discord.com", label: "Discord" },
  { icon: Mail, href: "mailto:email@email.com", label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold gradient-text">{"<SD />"}</span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Super Dev
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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
        </motion.div>
      </div>
    </footer>
  )
}
