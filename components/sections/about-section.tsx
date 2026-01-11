'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/data/portfolio'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const primarySkills = skills.filter((skill) => skill.category === 'primary')
  const secondarySkills = skills.filter((skill) => skill.category === 'secondary')

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"
            />
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                저는 <span className="text-foreground font-semibold">사용자 중심의 경험</span>을 
                만드는 것에 열정을 가진 개발자입니다. 
                최신 웹 기술을 활용하여 성능과 접근성을 모두 만족시키는 
                애플리케이션을 개발하고 있습니다.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                끊임없이 배우고 성장하는 것을 즐기며, 
                팀과 협업하여 더 나은 제품을 만드는 데 기여하고자 합니다.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <div className="space-y-12">
            {/* Primary Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  주요 기술
                </span>
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
              >
                {primarySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card border border-border rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">
                      {getSkillEmoji(skill.name)}
                    </div>
                    <p className="font-semibold text-sm md:text-base">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Secondary Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-muted-foreground">
                활용 가능 기술
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                className="flex flex-wrap justify-center gap-3"
              >
                {secondarySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 bg-secondary/50 border border-border rounded-full text-sm font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-300"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to get skill emoji
function getSkillEmoji(skillName: string): string {
  const emojiMap: Record<string, string> = {
    TypeScript: '📘',
    React: '⚛️',
    'Next.js': '▲',
    'Node.js': '🟢',
    'Tailwind CSS': '🎨',
    Python: '🐍',
    PostgreSQL: '🐘',
    MongoDB: '🍃',
    Docker: '🐳',
    AWS: '☁️',
    Git: '📦',
    Figma: '🎨',
  }
  return emojiMap[skillName] || '💻'
}
