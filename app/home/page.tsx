import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { TechStack } from "@/components/sections/tech-stack"
import { CodePlayground } from "@/components/sections/code-playground"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <CodePlayground />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
