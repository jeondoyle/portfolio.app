'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import { experiences } from '@/data/portfolio'
import type { Experience } from '@/types'

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              Experience
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"
            />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 origin-top"
              />

              {/* Timeline Items */}
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <TimelineItem
                    key={experience.id}
                    experience={experience}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  experience: Experience
  index: number
  isInView: boolean
}

function TimelineItem({ experience, index, isInView }: TimelineItemProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300"
        >
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 ${
            isEven ? 'md:ml-auto' : 'md:mr-auto'
          }`}>
            {experience.type === 'work' ? (
              <Briefcase className="h-6 w-6 text-primary" />
            ) : (
              <GraduationCap className="h-6 w-6 text-primary" />
            )}
          </div>

          {/* Period */}
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
            {experience.period}
          </div>

          {/* Title & Organization */}
          <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
          <p className="text-lg text-muted-foreground font-medium mb-4">
            {experience.organization}
          </p>

          {/* Description */}
          <ul className={`space-y-2 text-muted-foreground ${isEven ? 'md:text-right' : 'md:text-left'}`}>
            {experience.description.map((desc, i) => (
              <li key={i} className="flex items-start">
                <span className={`inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${
                  isEven ? 'md:order-2 md:ml-2 mr-2' : 'mr-2'
                }`} />
                <span className="flex-1">{desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg z-10"
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
      </motion.div>

      {/* Spacer for desktop */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  )
}
