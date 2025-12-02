/*
 * config.js - Configuración de idiomas
 *
 * Aquí manejo todas las traducciones de mi portfolio.
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Todas mis traducciones organizadas por idioma
const resources = {
  es: {
    translation: {
      // Header
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.portfolio": "Portfolio",
      "nav.blog": "Blog",

      // Home Page
      "home.greeting": "Hola, soy",
      "home.title": "Desarrolladora Web",
      "home.description":
        "Estudiante apasionada por el desarrollo web. Construyendo proyectos con React, JavaScript y explorando el mundo del desarrollo full stack.",
      "home.viewProjects": "Ver mis proyectos",
      "home.learnMore": "Conoce más sobre mí",

      // Features
      "features.title": "En lo que me estoy especializando",
      "features.frontend.title": "Desarrollo Frontend",
      "features.frontend.description":
        "Creando interfaces con HTML, CSS, JavaScript y React. Aprendiendo constantemente nuevas tecnologías",
      "features.fullstack.title": "Proyectos Full Stack",
      "features.fullstack.description":
        "Desarrollando aplicaciones completas con React, Node.js y bases de datos",
      "features.learning.title": "Aprendizaje Continuo",
      "features.learning.description":
        "Explorando nuevas tecnologías y mejorando mis habilidades cada día",

      // Skills
      "skills.title": "Tecnologías que uso",

      // CTA
      "cta.title": "¿Tienes un proyecto en mente?",
      "cta.description":
        "Me encantaría ayudarte a convertir tus ideas en realidad",
      "cta.contact": "Contáctame",

      // Footer
      "footer.description":
        "Desarrolladora web apasionada por aprender y crear experiencias web.",
      "footer.quickLinks": "Enlaces Rápidos",
      "footer.rights": "Todos los derechos reservados.",
      "footer.madeWith": "Hecho con mucho",
      "footer.and": "y React",

      // About Page
      "about.title": "Sobre Mí",
      "about.subtitle": "Mi camino en el desarrollo web",
      "about.intro":
        "¡Hola! Soy Ana, desarrolladora web apasionada por la tecnología. Actualmente estoy terminando mi grado y construyendo proyectos reales como MomMatch, Leiva'n Roll Hall of Fame, y Noahverso: Crónicas de una Infancia.",
      "about.experience":
        "He trabajado con HTML, CSS, JavaScript, React, Node.js, C#, PHP y Git. Cada proyecto es una oportunidad para aprender algo nuevo y mejorar mis habilidades de desarrollo.",
      "about.collaboration":
        "Estoy emocionada por seguir aprendiendo y colaborar en proyectos interesantes. ¡No dudes en contactarme!",

      // Personal Interests Section
      "about.personal.title": "Intereses Personales",
      "about.personal.design.title": "Diseño & UI/UX",
      "about.personal.design.description":
        "Me apasiona crear interfaces bonitas y funcionales",
      "about.personal.drawing.title": "Dibujo & Arte",
      "about.personal.drawing.description":
        "El arte digital y tradicional alimentan mi creatividad",
      "about.personal.social.title": "Proyectos Sociales",
      "about.personal.social.description":
        "Creo en la tecnología como herramienta para el cambio social",
      "about.personal.learning.title": "Aprendizaje Continuo",
      "about.personal.learning.description":
        "Siempre explorando nuevas tecnologías y metodologías",

      // Portfolio Page
      "portfolio.title": "Mis Proyectos",
      "portfolio.subtitle": "Algunos proyectos en los que he estado trabajando",
      "portfolio.project1.title": "MomMatch",
      "portfolio.project1.description":
        "Aplicación para conectar madres, desarrollada con React y Node.js",
      "portfolio.project2.title": "Leiva'n Roll Hall of Fame",
      "portfolio.project2.description":
        "Museo digital desarrollado con React y Vite que exhibe más de 500 reseñas musicales del crítico Maese Leiva de DirtyRock",
      "portfolio.project3.title": "Noahverso: Crónicas de una Infancia",
      "portfolio.project3.description":
        "Juego narrativo interactivo desarrollado en Unity con C# que convierte recuerdos de la infancia en aventuras jugables",
      "portfolio.viewProject": "Ver Proyecto",
      "portfolio.viewDemo": "Ver Demo",
      "portfolio.viewCode": "Ver Código",

      // Project Details Pages
      "portfolio.project1.longDescription":
        "Aplicación web full-stack para conectar madres y facilitar el intercambio de experiencias. Incluye sistema de registro, perfiles de usuario, chat en tiempo real y sistema de recomendaciones.",
      "portfolio.project1.feature1": "Sistema de autenticación seguro",
      "portfolio.project1.feature2": "Chat en tiempo real",
      "portfolio.project1.feature3": "Perfiles de usuario personalizables",
      "portfolio.project1.feature4": "Sistema de recomendaciones",

      "portfolio.project2.longDescription":
        "Museo digital interactivo que recopila y presenta más de 500 reseñas musicales del reconocido crítico Maese Leiva. Incluye sistema de búsqueda avanzada, filtros por género y año, y reproductor de música integrado.",
      "portfolio.project2.feature1": "Búsqueda avanzada de reseñas",
      "portfolio.project2.feature2": "Filtros por género y año",
      "portfolio.project2.feature3": "Interfaz responsive",
      "portfolio.project2.feature4": "Integración con APIs musicales",

      "portfolio.project3.longDescription":
        "Juego narrativo interactivo desarrollado en Unity que transforma recuerdos de la infancia en aventuras jugables. Incluye múltiples finales, sistema de decisiones y gráficos 2D artesanales.",
      "portfolio.project3.feature1": "Narrativa interactiva",
      "portfolio.project3.feature2": "Múltiples finales",
      "portfolio.project3.feature3": "Sistema de decisiones",
      "portfolio.project3.feature4": "Arte 2D original",

      "portfolio.technologies": "Tecnologías utilizadas",
      "portfolio.features": "Características principales",
      "portfolio.screenshots": "Capturas de pantalla",
      "portfolio.screenshotsComingSoon": "Capturas de pantalla próximamente...",
      "portfolio.backToPortfolio": "Volver al Portfolio",
      "portfolio.projectNotFound": "Proyecto no encontrado",
      "portfolio.status.development": "En desarrollo",
      "portfolio.status.completed": "Completado",

      // Coming Soon Page
      "comingSoon.title": "¡Próximamente!",
      "comingSoon.description":
        "🚀 Actualmente trabajando en este proyecto.\n¡Estará disponible muy pronto!",
      "comingSoon.progress": "Desarrollando... 85%",
      "comingSoon.backToProjects": "← Ver otros proyectos",

      // Not Found Page
      "notFound.number": "404",
      "notFound.title": "¡Ups! Página perdida",
      "notFound.description":
        "🧭 Parece que navegaste hacia una dimensión alternativa donde esta página no existe. ¡Pero no te preocupes, tengo muchas cosas geniales que mostrarte!",
      "notFound.backHome": "🏠 Volver al inicio",
      "notFound.viewProjects": "✨ Ver mis proyectos",

      // Common
      name: "Ana Leiva",
    },
  },
  en: {
    translation: {
      // Header
      "nav.home": "Home",
      "nav.about": "About",
      "nav.portfolio": "Portfolio",
      "nav.blog": "Blog",

      // Home Page
      "home.greeting": "Hi, I'm",
      "home.title": "Web Developer",
      "home.description":
        "Computer science student passionate about web development. Building projects with React, JavaScript and exploring the full stack world.",
      "home.viewProjects": "View my projects",
      "home.learnMore": "Learn more about me",

      // Features
      "features.title": "What I'm learning",
      "features.frontend.title": "Development",
      "features.frontend.description":
        "Building interfaces with HTML, CSS, JavaScript and React. Constantly learning new technologies",
      "features.fullstack.title": "Full Stack Projects",
      "features.fullstack.description":
        "Developing complete applications with React, Node.js and databases",
      "features.learning.title": "Continuous Learning",
      "features.learning.description":
        "Exploring new technologies and improving my skills every day",

      // Skills
      "skills.title": "Technologies I use",

      // CTA
      "cta.title": "Have a project in mind?",
      "cta.description": "I'd love to help you turn your ideas into reality",
      "cta.contact": "Contact me",

      // Footer
      "footer.description":
        "Web developer passionate about creating incredible web experiences.",
      "footer.quickLinks": "Quick Links",
      "footer.rights": "All rights reserved.",
      "footer.madeWith": "Made with",
      "footer.and": "and React",

      // About Page
      "about.title": "About Me",
      "about.subtitle": "Learn about my story and experience",
      "about.intro":
        "Welcome to my portfolio! I am Ana, a passionate web developer currently finishing my degree and building real projects like MomMatch, Leiva'n Roll Hall of Fame, and Noahverso: Chronicles of a Childhood.",
      "about.experience":
        "I have worked with HTML, CSS, JavaScript, React, Node.js, C#, PHP and Git. Each project is an opportunity to learn something new and perfect my development skills.",
      "about.collaboration":
        "Feel free to explore my projects and reach out if you have any questions or opportunities for collaboration!",

      // Personal Interests Section
      "about.personal.title": "Personal Interests",
      "about.personal.design.title": "Design & UI/UX",
      "about.personal.design.description":
        "I'm passionate about creating beautiful and functional interfaces",
      "about.personal.drawing.title": "Drawing & Art",
      "about.personal.drawing.description":
        "Digital and traditional art fuel my creativity",
      "about.personal.social.title": "Social Projects",
      "about.personal.social.description":
        "I believe in technology as a tool for social change",
      "about.personal.learning.title": "Continuous Learning",
      "about.personal.learning.description":
        "Always exploring new technologies and methodologies",

      // Portfolio Page
      "portfolio.title": "My Portfolio",
      "portfolio.subtitle": "Some of my most outstanding projects",
      "portfolio.project1.title": "MomMatch",
      "portfolio.project1.description":
        "Application to connect mothers, built with React and Node.js",
      "portfolio.project2.title": "Leiva'n Roll Hall of Fame",
      "portfolio.project2.description":
        "Digital museum built with React and Vite showcasing over 500 music reviews by critic Maese Leiva from DirtyRock magazine. Features advanced search, genre/year filters, and a music player.",
      "portfolio.project3.title": "Noahverso: Chronicles of a Childhood",
      "portfolio.project3.description":
        "Interactive narrative game developed in Unity with C# that turns childhood memories into playable adventures",
      "portfolio.viewProject": "View Project",
      "portfolio.viewDemo": "View Demo",
      "portfolio.viewCode": "View Code",

      // Project Details Pages
      "portfolio.project1.longDescription":
        "Full-stack web application to connect mothers and facilitate the exchange of experiences. Includes registration system, user profiles, real-time chat and recommendation system.",
      "portfolio.project1.feature1": "Secure authentication system",
      "portfolio.project1.feature2": "Real-time chat",
      "portfolio.project1.feature3": "Customizable user profiles",
      "portfolio.project1.feature4": "Recommendation system",

      "portfolio.project2.longDescription":
        "Interactive digital museum that compiles and presents over 500 music reviews by renowned critic Maese Leiva. Includes advanced search system, filters by genre and year, integrated music player, and a responsive design for seamless browsing.",
      "portfolio.project2.feature1": "Advanced review search",
      "portfolio.project2.feature2": "Genre and year filters",
      "portfolio.project2.feature3": "Responsive interface",
      "portfolio.project2.feature4": "Music API integration",

      "portfolio.project3.longDescription":
        "Interactive narrative game developed in Unity that transforms childhood memories into playable adventures. Includes multiple endings, decision system and handcrafted 2D graphics.",
      "portfolio.project3.feature1": "Interactive narrative",
      "portfolio.project3.feature2": "Multiple endings",
      "portfolio.project3.feature3": "Decision system",
      "portfolio.project3.feature4": "Original 2D art",

      "portfolio.technologies": "Technologies used",
      "portfolio.features": "Key features",
      "portfolio.screenshots": "Screenshots",
      "portfolio.screenshotsComingSoon": "Screenshots coming soon...",
      "portfolio.backToPortfolio": "Back to Portfolio",
      "portfolio.projectNotFound": "Project not found",
      "portfolio.status.development": "In development",
      "portfolio.status.completed": "Completed",

      // Coming Soon Page
      "comingSoon.title": "Coming Soon!",
      "comingSoon.description":
        "🚀 Currently working on this project.\nIt will be available very soon!",
      "comingSoon.progress": "Developing... 85%",
      "comingSoon.backToProjects": "← View other projects",

      // Not Found Page
      "notFound.number": "404",
      "notFound.title": "Oops! Page Lost",
      "notFound.description":
        "🧭 It seems you navigated to an alternate dimension where this page doesn't exist. But don't worry, I have many amazing things to show you!",
      "notFound.backHome": "🏠 Back to home",
      "notFound.viewProjects": "✨ View my projects",

      // Common
      name: "Ana Leiva",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    lng: "es", // idioma por defecto
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
