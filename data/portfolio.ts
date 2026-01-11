import { Project, Experience, Skill, SocialLink } from '@/types'

// 개인 정보
export const personalInfo = {
  name: '전동훈',
  title: 'Full Stack Developer',
  bio: '사용자 경험을 최우선으로 생각하는 개발자입니다. 모던 웹 기술을 활용하여 의미 있는 제품을 만들고 있습니다.',
  email: 'contact@example.com',
  location: 'Seoul, Korea',
}

// 소셜 링크
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    name: 'Blog',
    url: 'https://blog.example.com',
    icon: 'book-open',
  },
]

// 기술 스택
export const skills: Skill[] = [
  // Primary Skills
  { name: 'TypeScript', category: 'primary' },
  { name: 'React', category: 'primary' },
  { name: 'Next.js', category: 'primary' },
  { name: 'Node.js', category: 'primary' },
  { name: 'Tailwind CSS', category: 'primary' },
  
  // Secondary Skills
  { name: 'Python', category: 'secondary' },
  { name: 'PostgreSQL', category: 'secondary' },
  { name: 'MongoDB', category: 'secondary' },
  { name: 'Docker', category: 'secondary' },
  { name: 'AWS', category: 'secondary' },
  { name: 'Git', category: 'secondary' },
  { name: 'Figma', category: 'secondary' },
]

// 프로젝트
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: '모던 풀스택 전자상거래 플랫폼',
    longDescription: 'Next.js와 TypeScript를 활용한 확장 가능한 전자상거래 솔루션입니다. 실시간 재고 관리, 결제 시스템 통합, 반응형 디자인을 구현했습니다.',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: '협업을 위한 태스크 관리 애플리케이션',
    longDescription: '팀 협업을 위한 직관적인 태스크 관리 도구입니다. 드래그 앤 드롭, 실시간 동기화, 알림 시스템을 포함합니다.',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: '실시간 날씨 정보 대시보드',
    longDescription: '외부 API를 활용한 실시간 날씨 정보 제공 서비스입니다. 위치 기반 검색과 일주일 예보를 제공합니다.',
    category: 'web',
    tags: ['React', 'TypeScript', 'OpenWeather API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
  },
  {
    id: '4',
    title: 'Design System',
    description: '재사용 가능한 UI 컴포넌트 라이브러리',
    longDescription: '일관성 있는 사용자 경험을 위한 디자인 시스템입니다. Storybook을 활용한 문서화와 접근성을 고려했습니다.',
    category: 'design',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
    githubUrl: 'https://github.com',
  },
]

// 경력 및 학력
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    organization: 'Tech Company',
    period: '2022.03 - Present',
    description: [
      'Next.js 기반 웹 애플리케이션 개발 및 유지보수',
      '프론트엔드 아키텍처 설계 및 성능 최적화',
      '주니어 개발자 멘토링 및 코드 리뷰',
    ],
    type: 'work',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    organization: 'Startup Inc.',
    period: '2020.01 - 2022.02',
    description: [
      'React 기반 SPA 개발',
      'RESTful API 연동 및 상태 관리',
      'UI/UX 개선 및 반응형 웹 구현',
    ],
    type: 'work',
  },
  {
    id: '3',
    title: 'Computer Science',
    organization: 'University of Technology',
    period: '2016.03 - 2020.02',
    description: [
      '컴퓨터공학 학사 취득',
      '웹 개발 동아리 활동',
      '해커톤 다수 참가 및 수상',
    ],
    type: 'education',
  },
]
