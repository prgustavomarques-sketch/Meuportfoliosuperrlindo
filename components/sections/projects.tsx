"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Bot, Cpu, LayoutDashboard, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Bot Avançado para Discord",
    description: "Bot completo com sistema de moderação, música, economia virtual, níveis e comandos personalizados. Utiliza inteligência artificial para respostas contextuais.",
    image: "/projects/discord-bot.jpg",
    icon: Bot,
    technologies: ["Python", "Discord.py", "PostgreSQL", "Redis", "OpenAI API"],
    github: "https://github.com",
    demo: "https://discord.com",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Sistema de Automação com IA",
    description: "Plataforma de automação inteligente que utiliza machine learning para otimizar processos empresariais, com dashboards de análise e integração com múltiplas APIs.",
    image: "/projects/automation.jpg",
    icon: Cpu,
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Dashboard Moderno",
    description: "Interface administrativa completa com gráficos interativos, gerenciamento de usuários, analytics em tempo real e tema dark/light customizável.",
    image: "/projects/dashboard.jpg",
    icon: LayoutDashboard,
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "API RESTful em Python",
    description: "API robusta e escalável com autenticação JWT, rate limiting, cache distribuído e documentação automática com Swagger/OpenAPI.",
    image: "/projects/api.jpg",
    icon: Server,
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://api.demo.com",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Aplicação Full Stack",
    description: "E-commerce completo com carrinho, pagamentos, painel admin, sistema de reviews e recomendações personalizadas baseadas em IA.",
    image: "/projects/fullstack.jpg",
    icon: Globe,
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
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
