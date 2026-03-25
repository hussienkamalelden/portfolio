export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  links?: ProjectLink[];
  category?: 'websites' | 'mobileApps';
}

export const useProjectsStore = defineStore('projects', () => {
  const websites: Project[] = [
    {
      id: 1,
      title: 'Acceptix',
      description:
        'A premium property listing platform with virtual tours and advanced filtering for high-end real estate agents.',
      image: 'images/projects/web/acceptix.jpg',
      techStack: ['Nuxt 3', 'TailwindCSS', 'Laravel'],
      link: 'https://acceptix.com/',
    },
    {
      id: 2,
      title: 'Qeema',
      description:
        'A minimalist online store for a sustainable fashion brand with seamless checkout and inventory management.',
      image: 'images/projects/web/qeema.jpg',
      techStack: ['Angular Universal', 'SASS', 'Spring Boot'],
      link: 'https://www.qeema.net/',
    },
    {
      id: 3,
      title: 'Royal Techni',
      description:
        'An analytics dashboard for SaaS companies featuring real-time data visualization and team collaboration.',
      image: 'images/projects/web/royaltechni.jpg',
      techStack: ['JavaScript', 'JQuery', 'PHP'],
      link: 'https://royaltechni.com/',
    },
    {
      id: 4,
      title: 'Communications, Space & Technology Commission (CST)',
      description:
        'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'images/projects/web/citc.jpg',
      techStack: ['Angular', 'Share Point'],
      link: 'https://www.cst.gov.sa/en',
    },
    {
      id: 5,
      title: 'Royal Commission for Jubail and Yanbu',
      description:
        'An interactive learning management system with video courses, quizzes, and progress tracking.',
      image: 'images/projects/web/rcjy.jpg',
      techStack: ['React', 'Liferay', 'Java'],
      link: 'https://www.rcjy.gov.sa/',
    },
    {
      id: 6,
      title: 'Egypt Travel',
      description:
        'A content-rich travel platform with immersive storytelling, maps integration, and community features.',
      image: 'images/projects/web/egytravel.jpg',
      techStack: ['Vue', 'Umbraco'],
      link: '#',
    },
    {
      id: 7,
      title: 'Elkanany Group',
      description:
        'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'images/projects/web/kanany.jpg',
      techStack: ['JavaScript', 'JQuery'],
      link: 'https://elkanany-group-new.netlify.app/',
    },
    {
      id: 8,
      title: 'Zara Reisen',
      description:
        'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'images/projects/web/zara.jpg',
      techStack: ['Angular', 'PHP'],
      link: '#',
    },
    {
      id: 9,
      title: 'Tawasol',
      description:
        'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'images/projects/web/tawasol.jpg',
      techStack: ['JavaScript', 'JQuery'],
      link: 'https://tawasol.netlify.app/',
    },
    {
      id: 10,
      title: 'Take Number',
      description:
        'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'images/projects/web/takenum.jpg',
      techStack: ['JavaScript', 'JQuery'],
      link: 'https://take-number.netlify.app/',
    },
    {
      id: 11,
      title: 'FireFly',
      description:
        'A creative portfolio site for a digital design agency with smooth animations and case study layouts.',
      image: 'images/projects/web/firefly.jpg',
      techStack: ['JavaScript', 'JQuery'],
      link: '#',
    },
    {
      id: 12,
      title: 'Nupco',
      description:
        'A content-rich travel platform with immersive storytelling, maps integration, and community features.',
      image: 'images/projects/web/nupco.jpg',
      techStack: ['React', 'Micro Frontend', '.NET'],
      link: 'https://www.nupco.com/',
    },
  ];

  const mobileApps: Project[] = [
    {
      id: 7,
      title: 'FitSync',
      description:
        'A fitness tracking app with workout plans, nutrition logging, and social challenges for health enthusiasts.',
      image:
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=500&fit=crop',
      techStack: ['React Native', 'Expo', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      id: 8,
      title: 'PayFlow',
      description:
        'A modern fintech app for peer-to-peer payments, expense splitting, and budget management.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop',
      techStack: ['Flutter', 'Dart', 'Stripe SDK', 'Node.js'],
      link: '#',
    },
    {
      id: 9,
      title: 'MealPrep',
      description:
        'A recipe and meal planning app with grocery list generation, calorie tracking, and dietary preferences.',
      image:
        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop',
      techStack: ['Swift', 'SwiftUI', 'CoreData', 'CloudKit'],
      link: '#',
    },
    {
      id: 10,
      title: 'StudyBuddy',
      description:
        'An AI-powered study companion with flashcards, spaced repetition, and collaborative study rooms.',
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop',
      techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Ktor'],
      link: '#',
    },
    {
      id: 11,
      title: 'ParkEase',
      description:
        'A smart parking app that helps users find, reserve, and pay for parking spots in real-time.',
      image:
        'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop',
      techStack: ['React Native', 'TypeScript', 'Maps API', 'Stripe'],
      link: '#',
    },
    {
      id: 12,
      title: 'Serenity',
      description:
        'A meditation and mindfulness app with guided sessions, sleep stories, and mood tracking.',
      image:
        'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=500&fit=crop',
      techStack: ['Flutter', 'Riverpod', 'Hive', 'Lottie'],
      link: '#',
    },
    {
      id: 13,
      title: 'Acceptix',
      description:
        'Mobile app available on Android, iOS, and Huawei AppGallery.',
      image:
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=500&fit=crop',
      techStack: ['Android', 'iOS', 'Huawei'],
      link: 'https://play.google.com/store/apps/details?id=com.global.student_center',
      links: [
        {
          label: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.global.student_center',
        },
        {
          label: 'iOS',
          url: 'https://apps.apple.com/eg/app/acceptix/id6477440013',
        },
        {
          label: 'Huawei',
          url: 'https://appgallery.huawei.com/#/app/C110672891',
        },
      ],
      category: 'mobileApps',
    },
    {
      id: 14,
      title: 'Bling',
      description: 'Mobile app available on Huawei AppGallery.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=500&fit=crop',
      techStack: ['Huawei'],
      link: 'https://appgallery.huawei.com/#/app/C110144743',
      links: [
        {
          label: 'Huawei',
          url: 'https://appgallery.huawei.com/#/app/C110144743',
        },
      ],
      category: 'mobileApps',
    },
    {
      id: 15,
      title: 'Boutique Store',
      description: 'Mobile app available on Android and iOS.',
      image:
        'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&h=500&fit=crop',
      techStack: ['Android', 'iOS'],
      link: 'https://play.google.com/store/apps/details?id=com.boutique.user.yearex.boutique_user',
      links: [
        {
          label: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.boutique.user.yearex.boutique_user',
        },
        {
          label: 'iOS',
          url: 'https://apps.apple.com/eg/app/boutique-online-store/id6461419630',
        },
      ],
      category: 'mobileApps',
    },
    {
      id: 16,
      title: 'Boutique Seller',
      description: 'Mobile app available on Android and iOS.',
      image:
        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop',
      techStack: ['Android', 'iOS'],
      link: 'https://play.google.com/store/apps/details?id=com.boutique.seller.yearex.boutique_seller_center',
      links: [
        {
          label: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.boutique.seller.yearex.boutique_seller_center',
        },
        {
          label: 'iOS',
          url: 'https://apps.apple.com/eg/app/boutique-seller-center/id6449961732',
        },
      ],
      category: 'mobileApps',
    },
    {
      id: 17,
      title: 'Thikruk (Islamic App)',
      description: 'Islamic app available on Android.',
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop',
      techStack: ['Android'],
      link: 'https://play.google.com/store/apps/details?id=com.fhdh.zikruk',
      links: [
        {
          label: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.fhdh.zikruk',
        },
      ],
      category: 'mobileApps',
    },
    {
      id: 18,
      title: 'Clinic Management System',
      description: 'Clinic management app available on Android.',
      image:
        'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=500&fit=crop',
      techStack: ['Android'],
      link: 'https://play.google.com/store/apps/details?id=com.fhdh.clinic',
      links: [
        {
          label: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.fhdh.clinic',
        },
      ],
      category: 'mobileApps',
    },
    {
      id: 19,
      title: 'ScoutX Pro',
      description: 'ScoutX Pro app available on Android and iOS.',
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
      techStack: ['Android', 'iOS'],
      link: 'https://play.google.com/store/apps/details?id=com.scoutx.scoutxpro&hl=en',
      links: [
        {
          label: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.scoutx.scoutxpro&hl=en',
        },
        {
          label: 'iOS',
          url: 'https://apps.apple.com/eg/app/scoutx-pro/id6503641256',
        },
      ],
      category: 'mobileApps',
    },
  ];

  return { websites, mobileApps };
});
