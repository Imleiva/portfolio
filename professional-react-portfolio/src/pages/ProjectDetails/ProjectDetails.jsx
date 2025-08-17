import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./ProjectDetails.css";

// Importamos las imágenes de los proyectos
import momMatchLogo from "../../assets/images/projects/MomMatch.webp";
import leivaRollLogo from "../../assets/images/projects/LeivanRoll.svg";
import noahVersoLogo from "../../assets/images/projects/Noahverso.svg";

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
      demoLink: "#", // Aquí irá el enlace al proyecto funcionando
      codeLink: "#", // Aquí irá el enlace al código en GitHub
      status: t("portfolio.status.completed", "Completado"),
    },
    "leiva-roll": {
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.description"),
      longDescription: t(
        "portfolio.project2.longDescription",
        "Museo digital interactivo que recopila y presenta más de 500 reseñas musicales del reconocido crítico Maese Leiva. Incluye sistema de búsqueda avanzada, filtros por género y año, y reproductor de música integrado."
      ),
      image: leivaRollLogo,
      technologies: ["React", "Vite", "CSS3", "JavaScript", "API REST"],
      features: [
        t("portfolio.project2.feature1", "Búsqueda avanzada de reseñas"),
        t("portfolio.project2.feature2", "Filtros por género y año"),
        t("portfolio.project2.feature3", "Interfaz responsive"),
        t("portfolio.project2.feature4", "Integración con APIs musicales"),
      ],
      demoLink: "#", // Enlace para probar el proyecto
      codeLink: "#", // Enlace al repositorio de código
      status: t("portfolio.status.development", "En desarrollo"),
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
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                🚀 {t("portfolio.viewDemo", "Ver Demo")}
              </a>
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

      {/* Sección de capturas de pantalla - pendiente de implementar */}
      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>{t("portfolio.screenshots", "Capturas de pantalla")}</h2>
        <div className="screenshots-placeholder">
          <p>
            {t(
              "portfolio.screenshotsComingSoon",
              "Capturas de pantalla próximamente..."
            )}
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ProjectDetails;
