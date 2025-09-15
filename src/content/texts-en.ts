import type { PortafolioTextContent } from './texts-es';

export const portafolioTextContentEn: PortafolioTextContent = {
  navigation: {
    logo: "DEV.EXE",
    home: "HOME",
    skills: "SKILLS",
    projects: "PROJECTS",
    contact: "CONTACT"
  },
  hero: {
    name: "JUAN JOSÉ PÉREZ",
    title: "FULL STACK DEVELOPER",
    description: "Transforming ideas into code. Specialized in creating innovative digital experiences with cutting-edge technologies and a focus on technical excellence.",
    viewProjectsBtn: "VIEW PROJECTS",
    contactBtn: "CONTACT"
  },
  skills: {
    title: "SKILLS",
    skillCards: [
      {
        icon: "⚡",
        title: "Frontend Development",
        description: "HTML5, CSS, JavaScript, TypeScript, Astro, React. Creating modern and responsive interfaces with fluid animations."
      },
      {
        icon: "🔧",
        title: "Backend Development",
        description: "Python, Fast API, Flask, Javascript, Typescript, Express.js, Node.js, REST APIs, GraphQL. Scalable architectures and high-performance systems."
      },
      {
        icon: "📱",
        title: "Mobile Development",
        description: "Flutter, Android, Jetpack Compose, React Native. Native and cross-platform mobile applications."
      },
      {
        icon: "☁️",
        title: "Cloud & DevOps",
        description: "AWS, CI/CD, Github Actions, CodeMagic, AzureDevops, Docker, Kubernetes. Automatic deployment and cloud infrastructure management."
      },
    ]
  },
  allProjects: {
    title: "ALL PROJECTS",
    subtitle: "A complete look at my work and experience",
    backToHome: "Back to home",
    showMoreCard: {
      icon: "🛡️",
      title: "Others Projects",
      description: "Explore my complete portfolio of projects and developments.",
      tags: ["More"],
      buttonText: "VIEW MORE",
      link: "/projects-en",
      backContent: "Discover all my projects and the technologies I've used throughout my career."
    },
    projects: [
      {
        icon: "/logos/swag golf.PNG",
        title: "Swag App",
        description: "Complete e-commerce app with Stripe payment integration, P2P commerce, video streaming, and more.",
        fullDescription: "Complete e-commerce application developed in Flutter with Stripe payment integration, P2P commerce system, video streaming functionalities, and scalable architecture. The project includes shopping cart, inventory management, push notifications, and real-time synchronization.",
        tags: ["Flutter", "Firebase", "Stripe", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://swag.golf/pages/swag-golf-app?srsltid=AfmBOor4-tkVsGtWxc8BedFRMbcBWaxoU0COryBlT1mxfgjSnrD_O74a",
        technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "Video Streaming", "P2P Commerce"],
        year: "2024",
        status: "In production"
      },
      {
        icon: "/logos/LogoBancolombia.png",
        title: "Bancolombia App",
        description: "Mobile application for managing accounts and banking transactions with Bancolombia.",
        fullDescription: "Development and maintenance of Bancolombia's official mobile application. Implementation of digital banking functionalities, transfers, payments, balance inquiries, and advanced security systems with biometrics.",
        tags: ["Flutter", "AWS", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://www.bancolombia.com/centro-de-ayuda/canales/app-bancolombia",
        technologies: ["Flutter", "AWS", "Biometrics", "Banking security", "REST API"],
        year: "2022-2023",
        status: "In production"
      },
      {
        icon: "/logos/hyphenlogo.png",
        title: "Hyphen App",
        description: "Migration to Flutter of home inspection application with order management, process tracking, and data synchronization.",
        fullDescription: "Complete migration of legacy application to Flutter for home inspections. Includes order management system, real-time process tracking, offline/online synchronization, and report generation.",
        tags: ["Flutter", "MySQL", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://info.hyphensolutions.com/products/",
        technologies: ["Flutter", "MySQL", "Offline sync", "PDF reports", "Geolocation"],
        year: "2025",
        status: "Completed"
      },
      {
        icon: "/logos/paysafeLogo.png",
        title: "Paysafe App",
        description: "Integration of Venmo payment processor for digital banking application.",
        fullDescription: "Integration of Venmo SDK into existing digital banking application. Implementation of secure payment flows, transaction handling, and PCI DSS standards compliance.",
        tags: ["Android", "Kotlin", "Venmo SDK"],
        buttonText: "VIEW PROJECT",
        link: "https://play.google.com/store/apps/details?id=at.paysafecard.android&hl=en",
        technologies: ["Android", "Kotlin", "Venmo SDK", "PCI DSS", "Payment security"],
        year: "2024",
        status: "In production"
      },
      {
        icon: "/logos/coughdroplogo.png",
        title: "Coughdrop",
        description: "Update and stabilization of legacy fullstack application.",
        fullDescription: "Modernization of legacy fullstack application developed with Ember.js and Ruby on Rails. Dependency updates, performance improvements, critical bug fixes, and database optimization.",
        tags: ["Ember JS", "Ruby on Rails", "PostgreSQL", "AWS", "Cordova", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://www.coughdrop.com/",
        technologies: ["Ember.js", "Ruby on Rails", "PostgreSQL", "AWS", "Cordova", "Legacy modernization"],
        year: "2025",
        status: "Completed"
      },
      {
        icon: "🌐",
        title: "Personal Portfolio",
        description: "Personal website developed with Astro and cyberpunk design",
        fullDescription: "Personal portfolio designed with cyberpunk theme, developed with Astro for optimal performance. Includes fluid animations, particle effects, responsive design, and multilingual support.",
        tags: ["Astro", "TypeScript", "CSS", "Responsive"],
        buttonText: "VIEW CODE",
        link: "https://github.com/juanp88/portfolio",
        githubLink: "https://github.com/juanp88/portfolio",
        technologies: ["Astro", "TypeScript", "CSS3", "Animations", "Particles", "i18n"],
        year: "2025",
        status: "In development"
      }
    ]
  },
  contact: {
    title: "CONTACT",
    description: "Do you have a project in mind? Let's work together to create something amazing!",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "SEND MESSAGE"
    },
    messages: {
      success: "Thanks for your message! I'll get back to you soon.",
      error: "Oops! There was a problem sending your message. Please try again."
    }
  },
  footer: {
    copyright: "© 2025 Juan José Pérez. All rights reserved."
  },
  seo: {
    siteUrl: "https://juanjoseperez.dev",
    keywords: "full stack developer, flutter, dart, android, kotlin, react, node.js, javascript, typescript, python, aws, madrid, spain, juan josé pérez, programmer, mobile and web development",
    ogImage: "/og-image.jpg"
  }
};