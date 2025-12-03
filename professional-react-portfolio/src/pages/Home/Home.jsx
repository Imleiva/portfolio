/*
 * Home.jsx - La página principal de mi portfolio
 *
 * Aquí es donde la gente me conoce por primera vez.
 * Tiene mi foto con efecto pixel art al hacer hover, pequeña intro, y mis skills principales.
 *
 * El diseño está pensado para ser acogedor pero profesional
 */

import React, { useRef, useEffect, useState } from "react";
import profileImg from "../../assets/fotoperfilSF.svg";
import profilePixelartImg from "../../assets/fotoperfilpixelSF.webp";
import fondoPixelado from "../../assets/fondopixel.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, GitBranch, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPixelated, setIsPixelated] = useState(false);
  useScrollToTop(); // Para que siempre empiece desde arriba

  const handleProfileClick = () => {
    setIsPixelated(!isPixelated);
  };

  // Componentes de iconos personalizados para tecnologías específicas
  const HTMLIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  );

  const CSSIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.351l5.568-1.58.744-8.157z" />
    </svg>
  );

  const ReactIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.865.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.01 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.988-1.36-1.56z" />
    </svg>
  );

  // Tecnologías con iconos específicos
  const skills = [
    { name: "HTML", category: "frontend", icon: <HTMLIcon /> },
    { name: "CSS", category: "frontend", icon: <CSSIcon /> },
    { name: "JavaScript", category: "frontend", icon: <Code size={18} /> },
    { name: "React", category: "frontend", icon: <ReactIcon /> },
    { name: "Node.js", category: "backend", icon: <Server size={18} /> },
    { name: "Git", category: "tools", icon: <GitBranch size={18} /> },
    { name: "C#", category: "backend", icon: <Database size={18} /> },
    { name: "PHP", category: "backend", icon: <Code size={18} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  // Precargar la imagen para evitar el salto
  useEffect(() => {
    // Preload fondo pixelado para evitar saltos visuales
    const img = new Image();

    // Establecer inicialmente la opacidad en 0
    document.documentElement.style.setProperty("--fondo-opacity", "0");

    img.onload = () => {
      // Primero establecer la imagen usando el import estático
      document.documentElement.style.setProperty(
        "--fondo-pixelado",
        `url(${fondoPixelado})`
      );

      // Pequeño delay para asegurar que la imagen esté aplicada antes de hacer fade-in
      setTimeout(() => {
        document.documentElement.style.setProperty("--fondo-opacity", "1");
      }, 50);
    };

    img.onerror = () => {
      console.warn("No se pudo cargar el fondo pixelado");
      // Fallback: mostrar sin imagen
      document.documentElement.style.setProperty("--fondo-opacity", "1");
    };

    img.src = fondoPixelado;

    // Cleanup
    return () => {
      document.documentElement.style.removeProperty("--fondo-pixelado");
      document.documentElement.style.removeProperty("--fondo-opacity");
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero__title" variants={itemVariants}>
              {t("home.greeting")}{" "}
              <span className="hero__name">{t("name")}</span>
            </motion.h1>
            <motion.h2 className="hero__subtitle" variants={itemVariants}>
              {t("home.title")}
            </motion.h2>
            <motion.p className="hero__description" variants={itemVariants}>
              {t("home.description")}
            </motion.p>
            <motion.div className="hero__actions" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/portfolio" className="btn btn-primary">
                  <span>{t("home.viewProjects")}</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/about" className="btn btn-secondary">
                  {t("home.learnMore")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile photo wrapper - fuera del hero__bg para que reciba eventos */}
        <div
          className={`hero__profile-bg-wrapper ${isPixelated ? 'is-pixelated' : ''}`}
          onClick={handleProfileClick}
          style={{
            "--fondo-pixelado": `url(${fondoPixelado})`,
          }}
        >
          {/* Círculo decorativo detrás de la foto pixelada */}
          <div className="hero__profile-blur-bg" />
          <img
            src={profileImg}
            alt="Foto de perfil Ana Leiva"
            className="hero__profile-img hero__profile-img--normal"
            draggable="false"
          />
          <img
            src={profilePixelartImg}
            alt="Capa de transición facial"
            className="hero__profile-img hero__profile-img--face-bridge"
            draggable="false"
          />
          <img
            src={profilePixelartImg}
            alt="Foto de perfil pixelada Ana Leiva"
            className="hero__profile-img hero__profile-img--pixelart"
            draggable="false"
          />
        </div>

        {/* Animated background elements */}
        <div className="hero__bg"></div>
      </section>

      {/* Skills Section */}
      <section className="skills section">
        <div className="container">
          <motion.h2
            className="skills__title text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("skills.title")}
          </motion.h2>
          <motion.div
            className="skills__grid"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`skill-tag skill-tag--${skill.category}`}
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="skill-tag__icon">{skill.icon}</span>
                <span className="skill-tag__name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div
            className="cta__content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta__title">{t("cta.title")}</h2>
            <p className="cta__description">{t("cta.description")}</p>
            <div className="cta__buttons">
              <motion.a
                href="mailto:aleivagar@gmail.com?subject=Contacto desde tu portfolio&body=Hola Ana,%0D%0A%0D%0AMe interesa contactarte..."
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {t("cta.contact")}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
