/*
 * LanguageToggle.jsx -Botón de idiomas
 *
 * Esto me permite cambiar entre español e inglés, quería que mi portfolio pudiera
 * mostrarse en ambos idiomas.
 */

import React from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  // Función para cambiar entre español e inglés
  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "es" ? "en" : "es";
    console.log("Idioma actual:", currentLang, "Cambiando a:", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Cambiar a ${i18n.language === "es" ? "English" : "Español"}`}
    >
      <div className="language-toggle__content">
        <Languages size={16} />
        <span className="language-toggle__text">
          {/* Muestro las iniciales del idioma disponible, no el actual */}
          {i18n.language === "es" ? "EN" : "ES"}
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
