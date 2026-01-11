'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, BookOpen } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/portfolio'

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  'book-open': BookOpen,
}

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 sm:py-0"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />
      
      {/* Animated Gradient Orbs - 모바일에서는 크기 축소 */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                {personalInfo.location}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            >
              <span className="block mb-2 sm:mb-3 text-foreground">안녕하세요,</span>
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                {personalInfo.name}
              </span>
              <span className="block mt-2 sm:mt-3 text-foreground">입니다</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 sm:mb-10 px-2"
            >
              <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-3 sm:mb-4 leading-snug">
                {personalInfo.title}
              </p>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center space-x-3 sm:space-x-4 mb-8 sm:mb-12"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border-2 border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg"
              >
                <span>프로젝트 보기</span>
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - 모바일에서는 숨김 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
