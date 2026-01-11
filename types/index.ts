// 프로젝트 관련 타입
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: 'web' | 'app' | 'design' | 'other'
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

// 경력/학력 타입
export interface Experience {
  id: string
  title: string
  organization: string
  period: string
  description: string[]
  type: 'work' | 'education' | 'other'
}

// 기술 스택 타입
export interface Skill {
  name: string
  category: 'primary' | 'secondary'
  icon?: string
}

// 연락처 폼 타입
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// 소셜 링크 타입
export interface SocialLink {
  name: string
  url: string
  icon: string
}

// 네비게이션 섹션 타입
export type NavSection = 'home' | 'about' | 'projects' | 'experience' | 'contact'
