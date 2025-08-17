/*
 * Header.jsx - La navegación de mi portfolio
 *
 * Tiene animaciones sutiles y se adapta bien al scroll.
 * El logo AL.png es mi toque personal
 */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // Iconos para el menú hamburguesa
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import logoImg from "../../assets/AL.png"; // Importo el logo desde assets para que funcione en producción
import "./Header.css";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const location = useLocation();

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar cambios en el tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Si cambiamos a desktop, cerrar el menú móvil
      if (newWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Animaciones para el menú móvil
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "header--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header__content">
          {/* Mi logo personal */}
          <Link to="/" className="header__logo" onClick={closeMobileMenu}>
            <img
              src={logoImg}
              alt="Logo Ana Leiva"
              className="header__logo-img"
              style={{
                height: 40,
                width: 40,
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          <div className="header__actions">
            {/* Navegación principal */}
            <nav
              className={`header__nav ${
                isMobileMenuOpen ? "header__nav--open" : ""
              }`}
            >
              <AnimatePresence>
                {(isMobileMenuOpen || windowWidth > 768) && (
                  <motion.ul
                    className="header__nav-list"
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <motion.li
                      className="header__nav-item"
                      variants={itemVariants}
                    >
                      <Link
                        to="/"
                        className={`header__nav-link ${
                          location.pathname === "/"
                            ? "header__nav-link--active"
                            : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {t("nav.home")}
                      </Link>
                    </motion.li>
                    <motion.li
                      className="header__nav-item"
                      variants={itemVariants}
                    >
                      <Link
                        to="/about"
                        className={`header__nav-link ${
                          location.pathname === "/about"
                            ? "header__nav-link--active"
                            : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {t("nav.about")}
                      </Link>
                    </motion.li>
                    <motion.li
                      className="header__nav-item"
                      variants={itemVariants}
                    >
                      <Link
                        to="/portfolio"
                        className={`header__nav-link ${
                          location.pathname === "/portfolio"
                            ? "header__nav-link--active"
                            : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {t("nav.portfolio")}
                      </Link>
                    </motion.li>
                    <motion.li
                      className="header__nav-item"
                      variants={itemVariants}
                    >
                      <Link
                        to="/blog"
                        className={`header__nav-link ${
                          location.pathname === "/blog"
                            ? "header__nav-link--active"
                            : ""
                        }`}
                        onClick={closeMobileMenu}
                      >
                        {t("nav.blog")}
                      </Link>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>

            {/* Controles: idioma y tema */}
            <div className="header__controls">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Botón hamburguesa para móvil */}
            <motion.button
              className={`header__mobile-toggle ${
                isMobileMenuOpen ? "header__mobile-toggle--open" : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Abrir menú de navegación"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X size={20} color="var(--primary-color)" />
              ) : (
                <Menu size={20} color="var(--primary-color)" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
