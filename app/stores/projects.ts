import { defineStore } from 'pinia'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  link?: string
  category: 'websites' | 'mobileApps'
}

export const useProjectsStore = defineStore('projects', () => {
  const websites: Project[] = [
    {
      id: 1,
      title: 'Luxe Real Estate',
      description: 'A premium property listing platform with virtual tours and advanced filtering for high-end real estate agents.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop',
      techStack: ['Nuxt 3', 'TailwindCSS', 'Supabase', 'Mapbox'],
      link: '#',
    },
    {
      id: 2,
      title: 'Bloom E-Commerce',
      description: 'A minimalist online store for a sustainable fashion brand with seamless checkout and inventory management.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
      techStack: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 3,
      title: 'Pulse Dashboard',
      description: 'An analytics dashboard for SaaS companies featuring real-time data visualization and team collaboration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      techStack: ['Vue 3', 'D3.js', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 4,
      title: 'Artisan Portfolio',
      description: 'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
      techStack: ['Nuxt 3', 'GSAP', 'Sanity CMS', 'Vercel'],
      link: '#',
    },
    {
      id: 5,
      title: 'EduLearn Platform',
      description: 'An interactive learning management system with video courses, quizzes, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
      techStack: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
      link: '#',
    },
    {
      id: 6,
      title: 'Nomad Travel Blog',
      description: 'A content-rich travel platform with immersive storytelling, maps integration, and community features.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
      techStack: ['Astro', 'MDX', 'Cloudflare', 'Tailwind'],
      link: '#',
    },
  ]

  const mobileApps: Project[] = [
    {
      id: 7,
      title: 'FitSync',
      description: 'A fitness tracking app with workout plans, nutrition logging, and social challenges for health enthusiasts.',
      image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=500&fit=crop',
      techStack: ['React Native', 'Expo', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      id: 8,
      title: 'PayFlow',
      description: 'A modern fintech app for peer-to-peer payments, expense splitting, and budget management.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop',
      techStack: ['Flutter', 'Dart', 'Stripe SDK', 'Node.js'],
      link: '#',
    },
    {
      id: 9,
      title: 'MealPrep',
      description: 'A recipe and meal planning app with grocery list generation, calorie tracking, and dietary preferences.',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop',
      techStack: ['Swift', 'SwiftUI', 'CoreData', 'CloudKit'],
      link: '#',
    },
    {
      id: 10,
      title: 'StudyBuddy',
      description: 'An AI-powered study companion with flashcards, spaced repetition, and collaborative study rooms.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop',
      techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Ktor'],
      link: '#',
    },
    {
      id: 11,
      title: 'ParkEase',
      description: 'A smart parking app that helps users find, reserve, and pay for parking spots in real-time.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop',
      techStack: ['React Native', 'TypeScript', 'Maps API', 'Stripe'],
      link: '#',
    },
    {
      id: 12,
      title: 'Serenity',
      description: 'A meditation and mindfulness app with guided sessions, sleep stories, and mood tracking.',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=500&fit=crop',
      techStack: ['Flutter', 'Riverpod', 'Hive', 'Lottie'],
      link: '#',
    },
  ]

  return { websites, mobileApps }
})
