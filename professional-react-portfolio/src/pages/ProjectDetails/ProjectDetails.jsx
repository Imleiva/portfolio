import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./ProjectDetails.css";

// Importamos las imágenes de los proyectos
import momMatchLogo from "../../assets/images/projects/MomMatch.webp";
import logoLRHF from "../../assets/images/projects/logoLRHF.png";
import noahVersoLogo from "../../assets/images/projects/Noahverso.svg";

// Importamos las capturas de pantalla de Leiva'n Roll
import cp1 from "../../assets/images/screenshots/leivanrock/cp1.png";
import cp2 from "../../assets/images/screenshots/leivanrock/cp2.png";
import cp3 from "../../assets/images/screenshots/leivanrock/cp3.png";
import cp4 from "../../assets/images/screenshots/leivanrock/cp4.png";
import cp5 from "../../assets/images/screenshots/leivanrock/cp5.png";
import cp6 from "../../assets/images/screenshots/leivanrock/cp6.png";
import cp7 from "../../assets/images/screenshots/leivanrock/cp7.png";

const ProjectDetails = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  useScrollToTop(); // Lleva automáticamente al usuario al inicio de la página

  // Aquí están todos los datos de cada proyecto
  const projectsData = {
    mommatch: {
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.description"),
      longDescription: t(
        "portfolio.project1.longDescription",
        "Aplicación web full-stack para conectar madres y facilitar el intercambio de experiencias. Incluye sistema de registro, perfiles de usuario, chat en tiempo real y sistema de recomendaciones."
      ),
      image: momMatchLogo,
      technologies: [
        "React",
        "Node.js",
        "MySQL",
        "Express",
        "Socket.io",
        "JWT",
      ],
      features: [
        t("portfolio.project1.feature1", "Sistema de autenticación seguro"),
        t("portfolio.project1.feature2", "Chat en tiempo real"),
        t("portfolio.project1.feature3", "Perfiles de usuario personalizables"),
        t("portfolio.project1.feature4", "Sistema de recomendaciones"),
      ],
      demoLink: "#",
      codeLink: "#", // Enlace al código en GitHub
      status: t("portfolio.status.completed", "Completado"),
      hasDemoAvailable: false, // Cuando esté ok, cambiar a true
    },
    "leiva-roll": {
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.description"),
      longDescription: t(
        "portfolio.project2.longDescription",
        "Museo digital interactivo que celebra la historia de la música a través de una colección curada de más de 500 reseñas musicales del reconocido crítico Maese Leiva. Ofrece una experiencia inmersiva con un diseño visual atractivo, un sistema de búsqueda avanzada, filtros dinámicos por género, año y artista, y un reproductor de música integrado que permite explorar canciones destacadas. Además, incluye secciones interactivas como galerías de pósters de conciertos, avatares personalizados y datos curiosos sobre bandas y artistas."
      ),
      image: logoLRHF,
      technologies: [
        "React",
        "Vite",
        "CSS3",
        "JavaScript",
        "Three.js",
        "API REST",
      ],
      features: [
        t(
          "portfolio.project2.feature1",
          "Búsqueda avanzada y filtros dinámicos"
        ),
        t(
          "portfolio.project2.feature2",
          "Galerías interactivas de pósters y avatares"
        ),
        t("portfolio.project2.feature3", "Reproductor de música integrado"),
        t("portfolio.project2.feature4", "Datos curiosos y trivia musical"),
        t(
          "portfolio.project2.feature5",
          "Interfaz responsive y optimizada para dispositivos móviles"
        ),
        t(
          "portfolio.project2.feature6",
          "Integración con APIs de música y datos culturales"
        ),
      ],
      demoLink: "https://imleiva.github.io/musicmuseum/", // Enlace a la demo
      codeLink: "https://github.com/Imleiva/musicmuseum", // Enlace al repositorio
      status: t("portfolio.status.completed", "Completado"),
      hasDemoAvailable: true,
    },
    noahverso: {
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.description"),
      longDescription: t(
        "portfolio.project3.longDescription",
        "Juego narrativo interactivo desarrollado en Unity que transforma recuerdos de la infancia en aventuras jugables. Incluye múltiples finales, sistema de decisiones y gráficos 2D artesanales."
      ),
      image: noahVersoLogo,
      technologies: ["Unity", "C#", "Game Development", "2D Graphics"],
      features: [
        t("portfolio.project3.feature1", "Narrativa interactiva"),
        t("portfolio.project3.feature2", "Múltiples finales"),
        t("portfolio.project3.feature3", "Sistema de decisiones"),
        t("portfolio.project3.feature4", "Arte 2D original"),
      ],
      demoLink: "#", // Aquí se pondrá el enlace de descarga o demo
      codeLink: "#", // Repositorio del código del juego
      status: t("portfolio.status.development", "En desarrollo"),
      hasDemoAvailable: false, // Cambiar cuando la demo esté lista
    },
  };

  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>{t("portfolio.projectNotFound", "Proyecto no encontrado")}</h1>
        <Link to="/portfolio" className="back-link">
          {t("portfolio.backToPortfolio", "Volver al Portfolio")}
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="project-header">
        <Link to="/portfolio" className="back-button">
          ← {t("portfolio.backToPortfolio", "Volver al Portfolio")}
        </Link>

        <motion.div
          className="project-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="project-hero-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-hero-content">
            <span className="project-status">{project.status}</span>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-description">
              {project.longDescription}
            </p>

            <div className="project-actions">
              {project.hasDemoAvailable ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  🚀 {t("portfolio.viewDemo", "Ver Demo")}
                </a>
              ) : (
                <Link
                  to={`/coming-soon/${encodeURIComponent(project.title)}`}
                  className="btn btn-primary"
                >
                  🚀 {t("portfolio.viewDemo", "Ver Demo")}
                </Link>
              )}
              {/* El botón "Ver Código" está oculto por ahora hasta tener los repositorios listos
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💻 {t("portfolio.viewCode", "Ver Código")}
              </a>
              */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sección de tecnologías utilizadas */}
      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>{t("portfolio.technologies", "Tecnologías utilizadas")}</h2>
        <div className="technologies-grid">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge-large">
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Lista de características principales */}
      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>{t("portfolio.features", "Características principales")}</h2>
        <div className="features-grid">
          {project.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Sección de capturas de pantalla */}
      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>{t("portfolio.screenshots", "Capturas de pantalla")}</h2>
        {slug === "leiva-roll" ? (
          <div className="screenshots-grid">
            <img
              src={cp1}
              alt="Leiva'n Roll Hall of Fame - Screenshot 1"
              className="screenshot-desktop"
            />
            <img
              src={cp2}
              alt="Leiva'n Roll Hall of Fame - Screenshot 2"
              className="screenshot-desktop"
            />
            <img
              src={cp3}
              alt="Leiva'n Roll Hall of Fame - Screenshot 3"
              className="screenshot-desktop"
            />
            <img
              src={cp4}
              alt="Leiva'n Roll Hall of Fame - Screenshot 4"
              className="screenshot-desktop"
            />
            <img
              src={cp5}
              alt="Leiva'n Roll Hall of Fame - Screenshot 5"
              className="screenshot-desktop"
            />
            <img
              src={cp6}
              alt="Leiva'n Roll Hall of Fame - Mobile Screenshot 1"
              className="screenshot-mobile"
            />
            <img
              src={cp7}
              alt="Leiva'n Roll Hall of Fame - Mobile Screenshot 2"
              className="screenshot-mobile"
            />
          </div>
        ) : (
          <div className="screenshots-placeholder">
            <p>
              {t(
                "portfolio.screenshotsComingSoon",
                "Capturas de pantalla próximamente..."
              )}
            </p>
          </div>
        )}
      </motion.section>
    </motion.div>
  );
};

export default ProjectDetails;
