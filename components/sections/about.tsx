"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Zap, Bot } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Criação de aplicações web modernas e responsivas utilizando as tecnologias mais recentes do mercado.",
  },
  {
    icon: Bot,
    title: "Automação com Python",
    description: "Desenvolvimento de scripts e sistemas de automação para otimizar processos e aumentar a produtividade.",
  },
  {
    icon: Sparkles,
    title: "Sistemas Inteligentes",
    description: "Integração de IA e machine learning para criar soluções que aprendem e evoluem com o tempo.",
  },
  {
    icon: Zap,
    title: "APIs & Integrações",
    description: "Construção de APIs robustas e integrações entre sistemas para conectar diferentes plataformas.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Transformando código em{" "}
            <span className="gradient-text">soluções reais</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. 
            Especializado em desenvolvimento web full stack, automação com Python e criação 
            de bots inteligentes. Meu foco está em entregar código limpo, performático e 
            soluções que realmente fazem a diferença.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 h-full hover:bg-secondary/30 transition-all duration-300 border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
