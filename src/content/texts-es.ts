export interface PortafolioTextContent {
  navigation: {
    logo: string;
    home: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    description: string;
    viewProjectsBtn: string;
    contactBtn: string;
  };
  skills: {
    title: string;
    skillCards: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  allProjects: {
    title: string;
    subtitle: string;
    backToHome: string;
    showMoreCard: {
      icon: string;
      title: string;
      description: string;
      tags: string[];
      buttonText: string;
      link: string;
      backContent: string;
    };
    projects: {
      icon: string;
      title: string;
      description: string;
      fullDescription: string;
      tags: string[];
      buttonText: string;
      link: string;
      githubLink?: string;
      demoLink?: string;
      technologies: string[];
      year: string;
      status: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    messages: {
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
  };
  seo: {
    siteUrl: string;
    keywords: string;
    ogImage: string;
  };
}

export const portafolioTextContent: PortafolioTextContent = {
  navigation: {
    logo: "DEV.EXE",
    home: "INICIO",
    skills: "SKILLS",
    projects: "PROYECTOS",
    contact: "CONTACTO"
  },
  hero: {
    name: "JUAN JOSÉ PÉREZ HERNÁNDEZ",
    title: "FULL STACK DEVELOPER",
    description: "Transformando ideas en código. Especializado en crear experiencias digitales innovadoras con tecnologías de vanguardia y un enfoque en la excelencia técnica.",
    viewProjectsBtn: "VER PROYECTOS",
    contactBtn: "CONTACTAR"
  },
  skills: {
    title: "HABILIDADES",
    skillCards: [
      {
        icon: "⚡",
        title: "Frontend Development",
        description: "HTML5, CSS, JavaScript, TypeScript, Astro, React. Creación de interfaces modernas y responsivas con animaciones fluidas."
      },
      {
        icon: "🔧",
        title: "Backend Development",
        description: "Python, Fast API, Flask, Javascript, Typescript, Express.js, Node.js APIs REST, GraphQL. Arquitecturas escalables y sistemas de alto rendimiento."
      },
      {
        icon: "📱",
        title: "Mobile Development",
        description: "Flutter, Android, Jetpack Compose, React Native. Aplicaciones móviles nativas y multiplataforma."
      },
      {
        icon: "☁️",
        title: "Cloud & DevOps",
        description: "AWS, CI/CD, Github Actions, CodeMagic, AzureDevops, Docker, Kubernetes. Despliegue automático y gestión de infraestructura cloud."
      },
    ]
  },
  allProjects: {
    title: "TODOS LOS PROYECTOS",
    subtitle: "Una mirada completa a mi trabajo y experiencia",
    backToHome: "Volver al inicio",
    showMoreCard: {
      icon: "🛡️",
      title: "Otros proyectos",
      description: "Explora mi portafolio completo de proyectos y desarrollos.",
      tags: ["Más"],
      buttonText: "Ver más",
      link: "/projects",
      backContent: "Descubre todos mis proyectos y las tecnologías que he utilizado a lo largo de mi carrera."
    },
    projects: [
      {
        icon: "/logos/swag golf.PNG",
        title: "Swag App",
        description: "App e-commerce con integración de pagos stripe, comercio p2p, video streaming y más.",
        fullDescription: "Aplicación de e-commerce completa desarrollada en Flutter con integración de pagos Stripe, sistema de comercio P2P, funcionalidades de video streaming, y arquitectura escalable. El proyecto incluye carrito de compras, gestión de inventario, notificaciones push, y sincronización en tiempo real.",
        tags: ["Flutter", "Firebase", "Stripe", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://swag.golf/pages/swag-golf-app?srsltid=AfmBOor4-tkVsGtWxc8BedFRMbcBWaxoU0COryBlT1mxfgjSnrD_O74a",
        technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "Video Streaming", "P2P Commerce"],
        year: "2024",
        status: "En producción"
      },
      {
        icon: "/logos/LogoBancolombia.png",
        title: "Bancolombia App",
        description: "Aplicación móvil para la gestión de cuentas y transacciones bancarias Bancolombia",
        fullDescription: "Desarrollo y mantenimiento de la aplicación móvil oficial de Bancolombia. Implementación de funcionalidades de banca digital, transferencias, pagos, consultas de saldo, y sistemas de seguridad avanzados con biometría.",
        tags: ["Flutter", "AWS", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://www.bancolombia.com/centro-de-ayuda/canales/app-bancolombia",
        technologies: ["Flutter", "AWS", "Biometría", "Seguridad bancaria", "API REST"],
        year: "2023-2024",
        status: "En producción"
      },
      {
        icon: "/logos/hyphenlogo.png",
        title: "Hyphen App",
        description: "Migración a Flutter de aplicación de home inspection con administración de órdenes, seguimiento de procesos y sincronización de datos",
        fullDescription: "Migración completa de aplicación legacy a Flutter para inspección de viviendas. Incluye sistema de administración de órdenes, seguimiento en tiempo real de procesos, sincronización offline/online, y generación de reportes.",
        tags: ["Flutter", "MySQL", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://info.hyphensolutions.com/products/",
        technologies: ["Flutter", "MySQL", "Sincronización offline", "Reportes PDF", "Geolocalización"],
        year: "2023",
        status: "Completado"
      },
      {
        icon: "/logos/paysafeLogo.png",
        title: "Paysafe App",
        description: "Integración de procesador de pagos Venmo para aplicación de digital banking",
        fullDescription: "Integración del SDK de Venmo en aplicación de banca digital existente. Implementación de flujos de pago seguros, manejo de transacciones, y cumplimiento de estándares PCI DSS.",
        tags: ["Android", "Kotlin", "Venmo SDK"],
        buttonText: "VER PROYECTO",
        link: "https://play.google.com/store/apps/details?id=at.paysafecard.android&hl=es_CO",
        technologies: ["Android", "Kotlin", "Venmo SDK", "PCI DSS", "Seguridad de pagos"],
        year: "2022-2023",
        status: "En producción"
      },
      {
        icon: "/logos/coughdroplogo.png",
        title: "Coughdrop",
        description: "Actualización y estabilización de aplicación fullstack legacy",
        fullDescription: "Modernización de aplicación fullstack legacy desarrollada con Ember.js y Ruby on Rails. Actualización de dependencias, mejoras de rendimiento, corrección de bugs críticos, y optimización de base de datos.",
        tags: ["Ember JS", "Ruby on Rails", "PostgreSQL", "AWS", "Cordova", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://www.coughdrop.com/",
        technologies: ["Ember.js", "Ruby on Rails", "PostgreSQL", "AWS", "Cordova", "Modernización legacy"],
        year: "2022",
        status: "Completado"
      },
      {
        icon: "🌐",
        title: "Portfolio Personal",
        description: "Sitio web personal desarrollado con Astro y diseño cyberpunk",
        fullDescription: "Portafolio personal diseñado con temática cyberpunk, desarrollado con Astro para óptimo rendimiento. Incluye animaciones fluidas, efectos de partículas, diseño responsivo, y soporte multidioma.",
        tags: ["Astro", "TypeScript", "CSS", "Responsive"],
        buttonText: "VER CÓDIGO",
        link: "https://github.com/juanp88/portfolio",
        githubLink: "https://github.com/juanp88/portfolio",
        technologies: ["Astro", "TypeScript", "CSS3", "Animaciones", "Partículas", "i18n"],
        year: "2024",
        status: "En desarrollo"
      }
    ]
  },
  contact: {
    title: "CONTACTO",
    description: "¿Tienes un proyecto en mente? ¡Trabajemos juntos para crear algo increíble!",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "ENVIAR MENSAJE"
    },
    messages: {
      success: "¡Gracias por tu mensaje! Te responderé pronto.",
      error: "Oops! Hubo un problema enviando tu mensaje. Inténtalo de nuevo."
    }
  },
  footer: {
    copyright: "© 2025 Juan José Pérez. Todos los derechos reservados."
  },
  seo: {
    siteUrl: "https://juanjoseperez.dev",
    keywords: "desarrollador full stack, flutter, dart, android, kotlin, react, node.js, javascript, typescript, python, aws, juan josé pérez, programador, desarrollo web y móvil",
    ogImage: "/og-image.jpg"
  }
};