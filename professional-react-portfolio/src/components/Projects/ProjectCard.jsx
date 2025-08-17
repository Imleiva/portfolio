/*
 * ProjectCard.jsx - Componente de tarjetas de proyecto
 *
 * Cada tarjeta muestra mis proyectos
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, slug }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.01 }} // Un hover sutil que no molesta
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="project-image-container">
        {/* Las imágenes se muestran solo en hover para un efecto limpio */}
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2 }}
        >
          <Link to={`/portfolio/${slug}`} className="project-link">
            {/* Uso la traducción para múltiples idiomas */}
            {t("portfolio.viewProject", "Ver Proyecto")}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
