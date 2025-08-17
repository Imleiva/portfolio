/*
 * ThemeToggle.jsx - Mi toggle favorito ✨
 *
 * Este boton permite cambiar
 * entre modo claro y oscuro. Personalmente prefiero el modo
 * oscuro, pero está bien tener opciones.
 *
 * La animación del sol/luna es mi toque personal favorito.
 */

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${isDarkMode ? "claro" : "oscuro"}`}
      title={`Activar tema ${isDarkMode ? "claro" : "oscuro"}`}
    >
      <motion.div
        className="theme-toggle__track"
        animate={{
          backgroundColor: isDarkMode ? "#7364d2" : "#e2e8f0",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="theme-toggle__thumb"
          animate={{
            x: isDarkMode ? 24 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          <motion.div
            animate={{
              rotate: isDarkMode ? 360 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {isDarkMode ? (
              <Moon size={14} color="white" />
            ) : (
              <Sun size={14} color="#7364d2" />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
