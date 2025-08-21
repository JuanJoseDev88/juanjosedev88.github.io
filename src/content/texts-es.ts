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
  projects: {
    title: string;
    projectCards: {
      icon: string;
      title: string;
      description: string;
      tags: string[];
      buttonText: string;
      link: string;
      backContent: string;

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
  projects: {
    title: "PROYECTOS",
    projectCards: [
      {
        icon: "/logos/swag golf.PNG",
        title: "Swag App",
        description: "App e-commerce con integración de pagos stripe, comercio p2p, video streaming y más.",
        tags: ["Flutter", "Firebase", "Stripe", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://swag.golf/pages/swag-golf-app?srsltid=AfmBOor4-tkVsGtWxc8BedFRMbcBWaxoU0COryBlT1mxfgjSnrD_O74a",
        backContent: "Proyecto de e-commerce con integración de pagos stripe, comercio p2p, video streaming y más."

      },
      {
        icon: "/logos/LogoBancolombia.png",
        title: "Bancolombia App",
        description: "Aplicación móvil para la gestión de cuentas y transacciones bancarias Bancolombia",
        tags: ["Flutter", "AWS", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://www.bancolombia.com/centro-de-ayuda/canales/app-bancolombia",
        backContent: ""
      },
      {
        icon: "/logos/hyphenlogo.png",
        title: "Hyphen App",
        description: "Migración a Flutter de aplicación de home inspection con administración de ordenes, seguimiento de procesos y sincronización de datos",
        tags: ["Flutter", "MySQL", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://info.hyphensolutions.com/products/",
        backContent: ""
      },
      {
        icon: "/logos/paysafeLogo.png",
        title: "Paysafe App",
        description: "Integración de procesador de pagos Venmo para apliación de digital banking",
        tags: ["Android", "Kotlin", "Venmo SDK"],
        buttonText: "VER PROYECTO",
        link: "https://play.google.com/store/apps/details?id=at.paysafecard.android&hl=es_CO",
        backContent: ""
      },
      {
        icon: "/logos/coughdroplogo.png",
        title: "Coughdrop",
        description: "Actualización y estabilización de aplicación fullstack legacy",
        tags: ["Ember JS", "Ruby on Rails", "Postgress", "AWS", "Cordova", "Android", "iOS"],
        buttonText: "VER PROYECTO",
        link: "https://www.coughdrop.com/",
        backContent: ""
      },
       {
         icon: "",
         title: "Otros proyectos",
         description: "",
         tags: [""],
         buttonText: "Ver más",
         link: "",
         backContent: ""
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