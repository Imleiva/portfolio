/*
 * Footer.jsx - Pie de página del portfolio
 *
 * Aquí pongo toda la información importante, como mis redes sociales,
 * enlaces rápidos y un mensaje personal.
 */

import React from "react";
import { motion } from "framer-motion";
import { Mail, Heart, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Mis redes sociales - donde me pueden encontrar
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Imleiva",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ana-leiva-gar",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Email",
      url: "mailto:aleivagar@gmail.com",
      icon: <Mail size={20} />,
    },
  ];

  // Enlaces rápidos para navegación fácil
  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.portfolio"), href: "/portfolio" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer__section">
            <h3 className="footer__title">{t("name")}</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: 0 }}>
              {t("footer.description")}
            </p>
            <div className="footer__social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">{t("footer.quickLinks")}</h4>
            <ul className="footer__links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {t("name")}. {t("footer.rights")}
          </p>
          <p className="footer__credits">
            {t("footer.madeWith")}{" "}
            <Heart
              size={16}
              style={{
                display: "inline",
                color: "var(--accent-color)",
                verticalAlign: "middle",
              }}
            />{" "}
            {t("footer.and")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
