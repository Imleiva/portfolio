/*
 * Portfolio.jsx - Mi galería de proyectos
 *
 * Aquí muestro mis proyectos favoritos con sus respectivos logos.
 * Cada tarjeta lleva a una página de detalle donde explico más
 * sobre cada proyecto.
 */

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/Projects/ProjectCard";
import momMatchLogo from "../../assets/images/projects/MomMatch.png";
import leivaRollLogo from "../../assets/images/projects/logoLRHF.svg";
import noahVersoLogo from "../../assets/images/projects/Noahverso.svg";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();
  useScrollToTop(); // Vuelvo al inicio cada vez que entro aquí

  // Mis tres proyectos principales
  const projects = [
    {
      id: 1,
      slug: "mommatch",
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.description"),
      image: momMatchLogo,
    },
    {
      id: 2,
      slug: "leiva-roll",
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.description"),
      image: leivaRollLogo,
    },
    {
      id: 3,
      slug: "noahverso",
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.description"),
      image: noahVersoLogo,
    },
  ];

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {t("portfolio.title")}
      </motion.h1>
      <motion.div
        className="portfolio-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
