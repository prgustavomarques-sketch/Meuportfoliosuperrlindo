"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Bot, Cpu, LayoutDashboard, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  
  {
    title: "Bot de RPG para Discord",
    description: "Bot completo completo de RPG/MMO online com tema principal de magia.",
    image: "/projects/discord-bot.jpg",
    icon: Bot,
    technologies: ["Python", "Discord.py", "PostgreSQL", "Redis"],
    github: "https://github.com/prgustavomarques-sketch/RPGbot",
    demo: "https://discord.gg/u82xpuG3JG",
    color: "from-green-500/20 to-esmerald-500/20",
  },
  {
    title: "Aplicação Full Stack",
    description: "Um pequeno portfólio para apresentar meus trabalhos e minhas ideias geniais!",
    image: "/projects/fullstack.jpg",
    icon: Globe,
    technologies: ["Next.js", "Node.js", "HTML5", "CSS3", "TypeScript"],
    github: "https://github.com/prgustavomarques-sketch/Meuportfoliosuperrlindo",
    demo: "https://portfoliosuper-meu.vercel.app/",
    color: "from-pink-500/20 to-rose-500/20",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projetos <span className="gradient-text">em Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e impactantes, demonstrando minha expertise em diferentes tecnologias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-xl overflow-hidden h-full flex flex-col border border-border/50 hover:border-primary/30 transition-all duration-500">
                {/* Image/Icon Area */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <project.icon className="w-20 h-20 text-foreground/80" />
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button size="sm" variant="outline" className="glass" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass border-border/50 hover:bg-secondary/50"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver Mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
