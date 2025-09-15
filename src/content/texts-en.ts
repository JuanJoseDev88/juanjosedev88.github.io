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
  projects: {
    title: "PROJECTS",
    projectCards: [
      {
        icon: "/logos/swag golf.PNG",
        title: "Swag App",
        description: "Complete e-commerce app with Stripe payment integration, P2P commerce, video streaming, and more.",
        tags: ["Flutter", "Firebase", "Stripe", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://swag.golf/pages/swag-golf-app?srsltid=AfmBOor4-tkVsGtWxc8BedFRMbcBWaxoU0COryBlT1mxfgjSnrD_O74a",
        backContent: "Additional details about the project, technical challenges solved, and key features implemented."
      },
      {
        icon: "/logos/LogoBancolombia.png",
        title: "Bancolombia App",
        description: "Mobile application for managing accounts and banking transactions with Bancolombia.",
        tags: ["Flutter", "AWS", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://www.bancolombia.com/centro-de-ayuda/canales/app-bancolombia",
        backContent: "Mobile application for managing accounts and banking transactions with Bancolombia."

      },
      {
        icon: "/logos/hyphenlogo.png",
        title: "Hyphen App",
        description: "Migration to Flutter of home inspection application with order management, process tracking, and data synchronization.",
        tags: ["Flutter", "MySQL", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://info.hyphensolutions.com/products/",
        backContent: "Migration to Flutter of home inspection application with order management, process tracking, and data synchronization."

      },
      {
        icon: "/logos/paysafeLogo.png",
        title: "Paysafe App",
        description: "Integration of Venmo payment processor for digital banking application.",
        tags: ["Android", "Kotlin", "Venmo SDK"],
        buttonText: "VIEW PROJECT",
        link: "https://play.google.com/store/apps/details?id=at.paysafecard.android&hl=en",
        backContent: "Integration of Venmo payment processor for digital banking application."

      },
      {
        icon: "/logos/coughdroplogo.png",
        title: "Coughdrop",
        description: "Update and stabilization of legacy fullstack application.",
        tags: ["Ember JS", "Ruby on Rails", "Postgress", "AWS", "Cordova", "Android", "iOS"],
        buttonText: "VIEW PROJECT",
        link: "https://www.coughdrop.com/",
        backContent: "Update and stabilization of legacy fullstack application."

      },
      {
        icon: "🛡️",
        title: "Others Projects",
        description: "",
        tags: [""],
        buttonText: "VIEW MORE",
        link: "",
        backContent: "Additional details about the project, technical challenges solved, and key features implemented."
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