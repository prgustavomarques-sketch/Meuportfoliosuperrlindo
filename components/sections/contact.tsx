"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle, ExternalLink, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const contacts = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/seuusuario",
    username: "Gustavo Marques ",
    color: "hover:text-white hover:bg-[#333]",
    description: "Veja meus projetos e contribuições",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com/users/1263948262034116730",
    username: "imnotagaessiiii",
    color: "hover:text-white hover:bg-[#5865F2]",
    description: "Me adicione para conversarmos",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:Super.DeveloperNew@Hotmail.com",
    username: "Super.DeveloperNew@Hotmail.com",
    color: "hover:text-white hover:bg-red-500",
    description: "Entre em contato profissional",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/seuusuario",
    username: "Desativo",
    color: "hover:text-white hover:bg-[#0A66C2]",
    description: "Conecte-se profissionalmente",
  },
]

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("seuemail@email.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group glass rounded-xl p-6 border border-border/50 transition-all duration-300 ${contact.color}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <contact.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-1">{contact.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-inherit/70 mb-2">
                  {contact.username}
                </p>
                <span className="text-xs text-muted-foreground group-hover:text-inherit/60 flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {contact.description}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar um projeto?</h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato e vamos transformar suas ideias em realidade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                asChild
              >
                <a href="mailto:Super.DeveloperNew@Hotmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="glass border-border/50 hover:bg-secondary/50 w-full sm:w-auto"
                onClick={copyEmail}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-400" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar Email
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
