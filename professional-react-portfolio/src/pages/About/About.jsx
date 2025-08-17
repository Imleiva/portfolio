/*
 * About.jsx - Mi página más personal 💜
 *
 * Aquí comparto quien soy realmente, más allá del código.
 * Mis pasiones, lo que me motiva, y un poco de mi historia.
 * Es la página donde más me gusta mostrar mi personalidad.
 */

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaPalette, FaPencilAlt, FaHeart, FaLightbulb } from "react-icons/fa";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./About.css";

const About = () => {
  const { t } = useTranslation();
  useScrollToTop(); // Me lleva al inicio cada vez que entro a esta página

  // Mis intereses personales - lo que realmente me apasiona
  const personalInterests = [
    {
      icon: FaPalette,
      titleKey: "about.personal.design.title",
      descriptionKey: "about.personal.design.description",
      color: "var(--color-3)",
    },
    {
      icon: FaPencilAlt,
      titleKey: "about.personal.drawing.title",
      descriptionKey: "about.personal.drawing.description",
      color: "var(--color-5)",
    },
    {
      icon: FaHeart,
      titleKey: "about.personal.social.title",
      descriptionKey: "about.personal.social.description",
      color: "var(--color-7)",
    },
    {
      icon: FaLightbulb,
      titleKey: "about.personal.learning.title",
      descriptionKey: "about.personal.learning.description",
      color: "var(--color-4)",
    },
  ];

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {t("about.title")}
      </motion.h1>

      {/* Contenido principal */}
      <motion.div
        className="about__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t("about.intro")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t("about.experience")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t("about.collaboration")}
        </motion.p>
      </motion.div>

      {/* Sección de intereses personales */}
      <motion.div
        className="about__personal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="about__personal-title">{t("about.personal.title")}</h2>

        <div className="about__personal-grid">
          {personalInterests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <motion.div
                key={index}
                className="personal-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div
                  className="personal-card__icon"
                  style={{ color: interest.color }}
                >
                  <IconComponent />
                </div>
                <h3 className="personal-card__title">{t(interest.titleKey)}</h3>
                <p className="personal-card__description">
                  {t(interest.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
