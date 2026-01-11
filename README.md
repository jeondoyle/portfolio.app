# Portfolio Website

모던하고 프로페셔널한 개인 포트폴리오 웹사이트

## 📋 프로젝트 개요

Next.js App Router와 Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트입니다. 
사용자 경험(UX)을 중심으로 한 간결한 인터페이스와 부드러운 애니메이션을 제공합니다.

## ✨ 주요 기능

### 🎨 UI/UX
- **다크/라이트 모드**: 시스템 설정과 동기화되는 테마 지원
- **반응형 디자인**: 모바일 퍼스트 접근 방식의 완벽한 반응형 레이아웃
- **부드러운 애니메이션**: Framer Motion을 활용한 세련된 페이지 전환 및 요소 애니메이션
- **스크롤 스파이**: 현재 보고 있는 섹션에 따라 네비게이션 자동 활성화

### 📱 주요 섹션
- **Hero**: 타이핑 효과와 그라디언트 배경이 있는 메인 소개
- **About & Skills**: 개인 소개 및 기술 스택 (주요 기술 / 활용 가능 기술 구분)
- **Projects**: 카테고리별 필터링이 가능한 프로젝트 갤러리
- **Experience**: 타임라인 형태의 경력 및 학력 정보
- **Contact**: 실시간 유효성 검사가 있는 연락처 폼

### 🚀 성능 최적화
- Server Components 우선 사용
- 이미지 최적화 및 Lazy Loading
- Web Vitals 최적화 (LCP, CLS)

## 🛠️ 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 🚦 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 📁 프로젝트 구조

```
portfolio.app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/            # 리액트 컴포넌트
│   ├── sections/         # 섹션 컴포넌트
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── experience-section.tsx
│   │   └── contact-section.tsx
│   ├── navigation.tsx    # 네비게이션 바
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── scroll-progress.tsx
│   └── footer.tsx
├── data/                 # 데이터 파일
│   └── portfolio.ts      # 포트폴리오 데이터
├── types/                # TypeScript 타입 정의
│   └── index.ts
└── public/               # 정적 파일
```

## 🎨 커스터마이징

### 개인 정보 수정

`data/portfolio.ts` 파일을 수정하여 개인 정보를 업데이트하세요:

```typescript
export const personalInfo = {
  name: '홍길동',
  title: 'Full Stack Developer',
  bio: '...',
  email: 'contact@example.com',
  location: 'Seoul, Korea',
}
```

### 프로젝트 추가

`data/portfolio.ts` 파일의 `projects` 배열에 새 프로젝트를 추가하세요:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    category: 'web',
    tags: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
  },
  // ... 더 많은 프로젝트
]
```

### 테마 색상 수정

`app/globals.css` 파일에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
:root {
  --primary: 262 83% 58%;
  --background: 0 0% 100%;
  /* ... */
}
```

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 자유롭게 사용할 수 있습니다.

## 🤝 기여

이슈나 개선 사항이 있으시면 언제든지 Issue를 등록하거나 Pull Request를 보내주세요.

## 📧 연락처

- Email: contact@example.com
- GitHub: [@yourhandle](https://github.com)
- LinkedIn: [Your Name](https://linkedin.com)

---

Made with ❤️ using Next.js & Tailwind CSS
