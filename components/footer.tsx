'use client'

import { Heart } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-muted-foreground text-center flex items-center space-x-2">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </p>
          <p className="text-sm text-muted-foreground text-center flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
