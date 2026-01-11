import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: '사용자 경험을 최우선으로 생각하는 풀스택 개발자의 포트폴리오입니다.',
  keywords: ['portfolio', 'developer', 'web development', 'full stack'],
  authors: [{ name: '전동훈' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://example.com',
    title: 'Portfolio | Full Stack Developer',
    description: '사용자 경험을 최우선으로 생각하는 풀스택 개발자의 포트폴리오입니다.',
    siteName: 'Portfolio',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}