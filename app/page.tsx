import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}