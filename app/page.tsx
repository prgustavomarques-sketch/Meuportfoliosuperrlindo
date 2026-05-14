import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

// Lazy loading dos componentes menos críticos para melhorar performance
const About = dynamic(() => import("@/components/sections/about").then(mod => ({ default: mod.About })), {
  loading: () => <div className="py-24 md:py-32" />
})

const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="py-24 md:py-32" />
})

const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="py-24 md:py-32" />
})

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-24 md:py-32" />
})

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
