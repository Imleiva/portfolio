/*
 * ThemeContext.jsx - El cerebro del cambio de tema
 *
 * Este contexto maneja todo el tema del portfolio. Por defecto
 * uso tema oscuro🌙
 *
 * Guarda la preferencia en localStorage para que la próxima
 * vez que entres, recuerde la elección.
 */

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Modo oscuro por defecto😎
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Revisar si ya había una preferencia guardada
    const savedTheme = localStorage.getItem("ana-portfolio-theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Si es primera vez, modo oscuro por defecto
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Aplicar el tema al HTML y guardarlo
    if (isDarkMode) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("ana-portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("ana-portfolio-theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
