export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      items: ["Home", "About", "Skills", "CV", "Achievements", "Contact"],
      menu: "Menu",
    },
    hero: {
      roles: ["Senior Frontend Developer", "Systems Engineer"],
      subtitle: {
        before: "Building interfaces that balance ",
        bold1: "technical precision",
        middle: " with ",
        bold2: "visual clarity",
        after: ".",
      },
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    about: {
      label: "Background",
      title: "About me",
      bio1: "I'm a Senior Frontend Engineer with 8+ years of experience building scalable web applications across legal, insurance, e-commerce, and security sectors. Specialized in React, Next.js, and TypeScript, with hands-on expertise in accessibility, SEO optimization, and performance aligned with Core Web Vitals.",
      bio2: "I integrate AI-powered workflows for planning, implementation, and test automation, collaborating closely with product and design teams through Figma to transform complex interface systems into maintainable, scalable code solutions.",
      stats: [
        { value: "8+", label: "Years exp." },
        { value: "3", label: "Languages" },
      ],
    },
    skills: {
      label: "Arsenal",
      title: "Technical Skills",
      items: [
        {
          icon: "token",
          title: "React / Next.js",
          description: "Component Architecture & SSR",
        },
        {
          icon: "code",
          title: "TypeScript",
          description: "Type Safety & Developer Experience",
        },
        {
          icon: "style",
          title: "Tailwind CSS",
          description: "Utility-First Styling",
        },
        {
          icon: "bug_report",
          title: "Testing",
          description: "Jest, RTL & Cypress",
        },
        {
          icon: "accessibility_new",
          title: "Accessibility",
          description: "WCAG Compliance",
        },
        {
          icon: "search",
          title: "SEO",
          description: "Core Web Vitals & Metadata",
        },
        {
          icon: "design_services",
          title: "Design Systems",
          description: "Storybook & Component Libraries",
        },
        {
          icon: "smart_toy",
          title: "AI Workflows",
          description: "Automation & Code Quality",
        },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          period: "2025 — Present",
          title: "Senior Frontend Developer",
          organization: "Lottofy",
          description:
            "Contributing to a large-scale online lottery and gaming platform, developing a reusable React component library with Next.js 14, TypeScript, and Tailwind CSS. Implementing Clean Architecture, CQRS patterns, and AI-powered multi-agent systems for automated code review and QA.",
          isActive: true,
        },
        {
          period: "Sep 2024 — Jan 2025",
          title: "Senior Frontend Engineer",
          organization: "VML Enterprise Solutions",
          description:
            "Enhanced accessibility and SEO for a leading footwear company's e-commerce platform built with React.js, TypeScript, and Next.js. Resolved metadata issues, implemented schema markup, and ensured WCAG compliance across checkout flows.",
          isActive: false,
        },
        {
          period: "Nov 2023 — Jun 2024",
          title: "React Developer",
          organization: "Beyond",
          description:
            "Migrated a web application from CakePHP to Next.js/React for an online photography store platform. Maintained 90%+ code coverage, implemented feature flags, and integrated Recharts for analytics dashboards.",
          isActive: false,
        },
        {
          period: "Jan 2022 — Aug 2023",
          title: "React Developer",
          organization: "Webdox CLM",
          description:
            "Developed and maintained a Contract Lifecycle Management (CLM) application using React and TypeScript. Built design system components with Storybook, resolved security vulnerabilities, and refactored legacy code.",
          isActive: false,
        },
        {
          period: "Mar 2020 — Nov 2021",
          title: "Full Stack Developer",
          organization: "Initium Software",
          description:
            "Developed insurance quoting features and REST services using JavaScript, jQuery, and Symfony for an insurance company's web platform.",
          isActive: false,
        },
        {
          period: "Jan 2018 — Mar 2020",
          title: "Full Stack Developer",
          organization: "Technology 4 Solutions LLC",
          description:
            "Built a school bus monitoring and security application with GPS tracking, route history modules, and desktop app integration using AngularJS and CakePHP.",
          isActive: false,
        },
        {
          period: "Jan 2017 — Jan 2018",
          title: "Full Stack Developer",
          organization: "Soluciones Medianet, C.A.",
          description:
            "Developed responsive web pages and full-stack modules for vehicle insurance policy management using AngularJS and C#.",
          isActive: false,
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          period: "2017 — 2018",
          title: "Systems Engineering",
          organization: "Universidad Bicentenaria de Aragua",
          description:
            "Engineering degree focused on software architecture, algorithms, and system design.",
          isActive: true,
        },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          period: "Sep 2023",
          title: "React PRO: Next Level Fundamentals",
          organization: "Udemy",
          description: "Advanced React patterns and best practices.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-17b120c8-b81b-4919-a9f5-9c694f6c6e5a/",
        },
        {
          period: "Jun 2022",
          title: "Using Specialized Types and Language Features in TypeScript",
          organization: "Pluralsight",
          description: "Advanced TypeScript type system and language features.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/b889fd37-3fca-4393-b289-55470315ab39",
        },
        {
          period: "Jun 2022",
          title: "Creating and Using Generics in TypeScript 4",
          organization: "Pluralsight",
          description: "Generic types, constraints, and advanced patterns.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/f41f278f-f8df-4c3a-b781-90fde41f0f3e",
        },
        {
          period: "Jun 2022",
          title: "Designing React 17 Components",
          organization: "Pluralsight",
          description: "Component design patterns and architecture.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/ab07a3a7-9e8c-4134-80a8-d81dd1ef4293",
        },
        {
          period: "Jun 2022",
          title: "Styling React Components",
          organization: "Pluralsight",
          description: "CSS-in-JS, modules, and styling strategies.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/7a17386f-cbc7-45bd-832e-4ed30538233c",
        },
        {
          period: "Jun 2022",
          title: "Building React Apps with TypeScript",
          organization: "Pluralsight",
          description: "Type-safe React application development.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/55604499-51c7-4abd-bf52-9de8c408ffb9",
        },
        {
          period: "Jun 2022",
          title: "SOLID Principles and Clean Code",
          organization: "Udemy",
          description: "Software design principles and clean code practices.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-ad8eb4a3-79f2-42cd-bdfc-c13e5d7bde2c/",
        },
        {
          period: "Jun 2022",
          title: "Using TypeScript 4 Modules",
          organization: "Pluralsight",
          description: "Module systems, namespaces, and code organization.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/98b359db-606f-48f2-a0f6-1f932eeacf6a",
        },
        {
          period: "Jan 2022",
          title: "Mastering Git",
          organization: "Pluralsight",
          description: "Advanced Git workflows and version control.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/1f832a49-b7bc-4826-bf55-57b19399b6ad",
        },
        {
          period: "Mar 2020",
          title: "TypeScript: Complete Guide and Handbook",
          organization: "Udemy",
          description: "Comprehensive TypeScript reference.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-9cd800eb-eee6-4c4a-9e76-030da1e68b0c/",
        },
        {
          period: "Feb 2020",
          title: "JavaScript: ECMAScript 6 and All Its Details",
          organization: "Udemy",
          description: "ES6+ features and modern JavaScript.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-063ca8b3-25c6-411b-8b68-db5d3d26a2d0/",
        },
        {
          period: "Nov 2017",
          title: "MTA 98-375: Application Development Fundamentals",
          organization: "Microsoft",
          description: "Microsoft Technology Associate certification.",
          isActive: false,
          url: "https://www.credly.com/badges/b9cd898f-3081-4255-99cb-e0f11014f316/public_url",
        },
      ],
    },
    portfolio: {
      label: "Showcase",
      title: "Key Achievements",
      items: [
        {
          icon: "swap_horiz",
          title: "CakePHP → Next.js Migration",
          organization: "Beyond",
          description:
            "Led the full migration of a photography e-commerce platform from legacy PHP to Next.js/React, maintaining 90%+ code coverage and implementing feature flags for progressive rollout.",
          tags: ["Next.js", "React", "Feature Flags", "Testing"],
        },
        {
          icon: "widgets",
          title: "Design System & Component Library",
          organization: "Webdox CLM / Lottofy",
          description:
            "Built and maintained reusable component libraries with Storybook, Jest, and React Testing Library. Designed compound components with a bottom-up approach for maximum reusability.",
          tags: ["Storybook", "React", "TypeScript", "Testing"],
        },
        {
          icon: "accessible",
          title: "Accessibility & SEO Optimization",
          organization: "VML Enterprise Solutions",
          description:
            "Enhanced WCAG compliance and SEO for a leading footwear e-commerce platform. Implemented ARIA attributes, schema markup, canonical tags, and optimized Core Web Vitals.",
          tags: ["WCAG", "SEO", "Next.js", "Accessibility"],
        },
        {
          icon: "smart_toy",
          title: "AI-Powered Multi-Agent System",
          organization: "Lottofy",
          description:
            "Designed a multi-agent system with Claude Code to automate code reviews, QA audits, and security checks. Defined architecture, workflows, and structured feedback loops.",
          tags: ["Claude Code", "Automation", "QA", "AI"],
        },
      ],
    },
    freelance: {
      title: "Projects",
      items: [
        {
          period: "2022 — Present (Technical Support)",
          title: "Frontend Developer",
          organization: "Shanelle Productions LLC",
          description:
            "Developed a responsive, interactive, and multilanguage informational website. Configured hosting and handled full deployment. Currently providing ongoing technical support.",
          isActive: false,
          url: "https://shanelleproductions.com",
        },
      ],
    },
    cv: {
      download: "Download CV",
    },
    contact: {
      label: "Connection",
      title: "Let's talk about your next project",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "email@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
        invalidEmail: "Please enter a valid email address.",
      },
    },
    footer: {
      copyright: "\u00a9 2026 Pablo Sierra",
    },
  },
  es: {
    nav: {
      items: ["Inicio", "Acerca", "Habilidades", "CV", "Logros", "Contacto"],
      menu: "Menú",
    },
    hero: {
      roles: ["Desarrollador Frontend Senior", "Ingeniero de Sistemas"],
      subtitle: {
        before: "Construyendo interfaces que equilibran la ",
        bold1: "precisi\u00f3n t\u00e9cnica",
        middle: " con la ",
        bold2: "claridad visual",
        after: ".",
      },
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    about: {
      label: "Trayectoria",
      title: "Acerca de m\u00ed",
      bio1: "Soy un Ingeniero Frontend Senior con m\u00e1s de 8 a\u00f1os de experiencia en el desarrollo de aplicaciones web escalables en los sectores legal, asegurador, e-commerce y seguridad. Especializado en React, Next.js y TypeScript, con experiencia pr\u00e1ctica en mejoras de accesibilidad, optimizaci\u00f3n SEO y rendimiento alineado con Core Web Vitals.",
      bio2: "Integro flujos de trabajo potenciados por IA para la planificaci\u00f3n, implementaci\u00f3n y automatizaci\u00f3n de pruebas, colaborando estrechamente con equipos de producto y dise\u00f1o mediante Figma para transformar sistemas de interfaz complejos en soluciones de c\u00f3digo mantenible y escalable.",
      stats: [
        { value: "8+", label: "A\u00f1os exp." },
        { value: "3", label: "Idiomas" },
      ],
    },
    skills: {
      label: "Arsenal",
      title: "Habilidades T\u00e9cnicas",
      items: [
        {
          icon: "token",
          title: "React / Next.js",
          description: "Arquitectura de Componentes & SSR",
        },
        {
          icon: "code",
          title: "TypeScript",
          description: "Tipado Seguro & Experiencia de Desarrollo",
        },
        {
          icon: "style",
          title: "Tailwind CSS",
          description: "Estilos Utility-First",
        },
        {
          icon: "bug_report",
          title: "Testing",
          description: "Jest, RTL & Cypress",
        },
        {
          icon: "accessibility_new",
          title: "Accesibilidad",
          description: "Cumplimiento WCAG",
        },
        {
          icon: "search",
          title: "SEO",
          description: "Core Web Vitals & Metadatos",
        },
        {
          icon: "design_services",
          title: "Design Systems",
          description: "Storybook & Librer\u00edas de Componentes",
        },
        {
          icon: "smart_toy",
          title: "Flujos IA",
          description: "Automatizaci\u00f3n & Calidad de C\u00f3digo",
        },
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          period: "2025 — Presente",
          title: "Senior Frontend Developer",
          organization: "Lottofy",
          description:
            "Contribuyendo al desarrollo de una plataforma de loter\u00edas y juegos en l\u00ednea a gran escala, desarrollando una librer\u00eda de componentes React reutilizables con Next.js 14, TypeScript y Tailwind CSS. Implementando Clean Architecture, patrones CQRS y sistemas multi-agente con IA para automatizar code review y QA.",
          isActive: true,
        },
        {
          period: "Sep 2024 — Ene 2025",
          title: "Senior Frontend Engineer",
          organization: "VML Enterprise Solutions",
          description:
            "Mejor\u00e9 la accesibilidad y el SEO de la plataforma e-commerce de una empresa l\u00edder en calzado, construida con React.js, TypeScript y Next.js. Resolv\u00ed problemas de metadatos, implement\u00e9 schema markup y asegur\u00e9 el cumplimiento WCAG en los flujos de pago.",
          isActive: false,
        },
        {
          period: "Nov 2023 — Jun 2024",
          title: "React Developer",
          organization: "Beyond",
          description:
            "Migr\u00e9 una aplicaci\u00f3n web de CakePHP a Next.js/React para una plataforma de tiendas de fotograf\u00eda en l\u00ednea. Mantuve cobertura de c\u00f3digo de 90%+, implement\u00e9 feature flags e integr\u00e9 Recharts para dashboards de anal\u00edticas.",
          isActive: false,
        },
        {
          period: "Ene 2022 — Ago 2023",
          title: "React Developer",
          organization: "Webdox CLM",
          description:
            "Desarroll\u00e9 y mantuve una aplicaci\u00f3n de Gesti\u00f3n del Ciclo de Vida de Contratos (CLM) usando React y TypeScript. Constru\u00ed componentes del design system con Storybook, resolv\u00ed vulnerabilidades de seguridad y refactoric\u00e9 c\u00f3digo legacy.",
          isActive: false,
        },
        {
          period: "Mar 2020 — Nov 2021",
          title: "Full Stack Developer",
          organization: "Initium Software",
          description:
            "Desarroll\u00e9 funcionalidades de cotizaci\u00f3n de seguros y servicios REST utilizando JavaScript, jQuery y Symfony para la plataforma web de una aseguradora.",
          isActive: false,
        },
        {
          period: "Ene 2018 — Mar 2020",
          title: "Full Stack Developer",
          organization: "Technology 4 Solutions LLC",
          description:
            "Constru\u00ed una aplicaci\u00f3n de monitoreo y seguridad de autobuses escolares con rastreo GPS, m\u00f3dulos de historial de rutas e integraci\u00f3n de aplicaciones de escritorio usando AngularJS y CakePHP.",
          isActive: false,
        },
        {
          period: "Ene 2017 — Ene 2018",
          title: "Full Stack Developer",
          organization: "Soluciones Medianet, C.A.",
          description:
            "Desarroll\u00e9 p\u00e1ginas web responsive y m\u00f3dulos full-stack para la gesti\u00f3n de p\u00f3lizas de seguros vehiculares usando AngularJS y C#.",
          isActive: false,
        },
      ],
    },
    education: {
      title: "Educaci\u00f3n",
      items: [
        {
          period: "2017 — 2018",
          title: "Ingenier\u00eda en Sistemas",
          organization: "Universidad Bicentenaria de Aragua",
          description:
            "T\u00edtulo de ingenier\u00eda enfocado en arquitectura de software, algoritmos y dise\u00f1o de sistemas.",
          isActive: true,
        },
      ],
    },
    certifications: {
      title: "Certificaciones",
      items: [
        {
          period: "Sep 2023",
          title: "React PRO: Lleva tus bases al siguiente nivel",
          organization: "Udemy",
          description: "Patrones avanzados de React y mejores prácticas.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-17b120c8-b81b-4919-a9f5-9c694f6c6e5a/",
        },
        {
          period: "Jun 2022",
          title: "Using Specialized Types and Language Features in TypeScript",
          organization: "Pluralsight",
          description:
            "Sistema de tipos avanzado y características del lenguaje TypeScript.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/b889fd37-3fca-4393-b289-55470315ab39",
        },
        {
          period: "Jun 2022",
          title: "Creating and Using Generics in TypeScript 4",
          organization: "Pluralsight",
          description: "Tipos genéricos, restricciones y patrones avanzados.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/f41f278f-f8df-4c3a-b781-90fde41f0f3e",
        },
        {
          period: "Jun 2022",
          title: "Designing React 17 Components",
          organization: "Pluralsight",
          description: "Patrones de diseño y arquitectura de componentes.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/ab07a3a7-9e8c-4134-80a8-d81dd1ef4293",
        },
        {
          period: "Jun 2022",
          title: "Styling React Components",
          organization: "Pluralsight",
          description: "CSS-in-JS, módulos y estrategias de estilizado.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/7a17386f-cbc7-45bd-832e-4ed30538233c",
        },
        {
          period: "Jun 2022",
          title: "Building React Apps with TypeScript",
          organization: "Pluralsight",
          description: "Desarrollo de aplicaciones React con tipado seguro.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/55604499-51c7-4abd-bf52-9de8c408ffb9",
        },
        {
          period: "Jun 2022",
          title: "Principios SOLID y Clean Code",
          organization: "Udemy",
          description: "Principios de diseño de software y código limpio.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-ad8eb4a3-79f2-42cd-bdfc-c13e5d7bde2c/",
        },
        {
          period: "Jun 2022",
          title: "Using TypeScript 4 Modules",
          organization: "Pluralsight",
          description:
            "Sistemas de módulos, namespaces y organización de código.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/98b359db-606f-48f2-a0f6-1f932eeacf6a",
        },
        {
          period: "Ene 2022",
          title: "Mastering Git",
          organization: "Pluralsight",
          description:
            "Flujos de trabajo avanzados de Git y control de versiones.",
          isActive: false,
          url: "https://app.pluralsight.com/achievements/share/1f832a49-b7bc-4826-bf55-57b19399b6ad",
        },
        {
          period: "Mar 2020",
          title: "TypeScript: tu completa guía y manual de mano",
          organization: "Udemy",
          description: "Guía completa de referencia de TypeScript.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-9cd800eb-eee6-4c4a-9e76-030da1e68b0c/",
        },
        {
          period: "Feb 2020",
          title: "JavaScript: ECMAScript 6 y todos sus detalles",
          organization: "Udemy",
          description: "Características de ES6+ y JavaScript moderno.",
          isActive: false,
          url: "https://www.udemy.com/certificate/UC-063ca8b3-25c6-411b-8b68-db5d3d26a2d0/",
        },
        {
          period: "Nov 2017",
          title: "MTA 98-375: Application Development Fundamentals",
          organization: "Microsoft",
          description: "Certificación Microsoft Technology Associate.",
          isActive: false,
          url: "https://www.credly.com/badges/b9cd898f-3081-4255-99cb-e0f11014f316/public_url",
        },
      ],
    },
    portfolio: {
      label: "Showcase",
      title: "Logros Destacados",
      items: [
        {
          icon: "swap_horiz",
          title: "Migración CakePHP → Next.js",
          organization: "Beyond",
          description:
            "Lideré la migración completa de una plataforma e-commerce de fotografía de PHP legacy a Next.js/React, manteniendo cobertura de código 90%+ e implementando feature flags para despliegue progresivo.",
          tags: ["Next.js", "React", "Feature Flags", "Testing"],
        },
        {
          icon: "widgets",
          title: "Design System & Librería de Componentes",
          organization: "Webdox CLM / Lottofy",
          description:
            "Construí y mantuve librerías de componentes reutilizables con Storybook, Jest y React Testing Library. Diseñé componentes compuestos con enfoque bottom-up para máxima reutilización.",
          tags: ["Storybook", "React", "TypeScript", "Testing"],
        },
        {
          icon: "accessible",
          title: "Accesibilidad & Optimización SEO",
          organization: "VML Enterprise Solutions",
          description:
            "Mejoré el cumplimiento WCAG y SEO de una plataforma e-commerce líder en calzado. Implementé atributos ARIA, schema markup, etiquetas canónicas y optimicé Core Web Vitals.",
          tags: ["WCAG", "SEO", "Next.js", "Accesibilidad"],
        },
        {
          icon: "smart_toy",
          title: "Sistema Multi-Agente con IA",
          organization: "Lottofy",
          description:
            "Diseñé un sistema multi-agente con Claude Code para automatizar code reviews, auditorías de QA y verificaciones de seguridad. Definí arquitectura, flujos de trabajo y ciclos de feedback estructurados.",
          tags: ["Claude Code", "Automatización", "QA", "IA"],
        },
      ],
    },
    freelance: {
      title: "Proyectos",
      items: [
        {
          period: "2022 — Presente (Soporte Técnico)",
          title: "Frontend Developer",
          organization: "Shanelle Productions LLC",
          description:
            "Desarrollé un sitio web informativo responsive, interactivo y multilenguaje. Configuré el hosting y manejé el despliegue completo. Actualmente brindo soporte técnico continuo.",
          isActive: false,
          url: "https://shanelleproductions.com",
        },
      ],
    },
    cv: {
      download: "Descargar CV",
    },
    contact: {
      label: "Conexi\u00f3n",
      title: "Hablemos de tu pr\u00f3ximo proyecto",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre completo",
        email: "Email",
        emailPlaceholder: "correo@ejemplo.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Algo salió mal. Inténtalo de nuevo.",
        invalidEmail: "Por favor ingresa un email válido.",
      },
    },
    footer: {
      copyright: "\u00a9 2026 Pablo Sierra",
    },
  },
};

interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  isActive: boolean;
  url?: string;
}

interface SkillEntry {
  icon: string;
  title: string;
  description: string;
}

interface AchievementEntry {
  icon: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

interface StatEntry {
  value: string;
  label: string;
}

export interface TranslationType {
  nav: { items: string[]; menu: string };
  hero: {
    roles: string[];
    subtitle: {
      before: string;
      bold1: string;
      middle: string;
      bold2: string;
      after: string;
    };
    linkedin: string;
    github: string;
  };
  about: {
    label: string;
    title: string;
    bio1: string;
    bio2: string;
    stats: StatEntry[];
  };
  skills: {
    label: string;
    title: string;
    items: SkillEntry[];
  };
  experience: {
    title: string;
    items: TimelineEntry[];
  };
  education: {
    title: string;
    items: TimelineEntry[];
  };
  certifications: {
    title: string;
    items: (TimelineEntry & { url?: string })[];
  };
  portfolio: {
    label: string;
    title: string;
    items: AchievementEntry[];
  };
  freelance: {
    title: string;
    items: (TimelineEntry & { url?: string })[];
  };
  cv: {
    download: string;
  };
  contact: {
    label: string;
    title: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      invalidEmail: string;
    };
  };
  footer: {
    copyright: string;
  };
}

export const typedTranslations: Record<Locale, TranslationType> = translations;
