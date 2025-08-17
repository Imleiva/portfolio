import React, { useState, useEffect } from "react";
import "./NotFoundNew.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="not-found">
      {/* Fondo pixel art animado */}
      <div className="floating-elements"></div>

      <div className="not-found__container">
        <div className="not-found__content">
          {/* Número 404 */}
          <div className="not-found__number">
            <span className="gradient-text">4</span>
            <span className="gradient-text">0</span>
            <span className="gradient-text">4</span>
          </div>

          {/* Título y descripción */}
          <h1 className="not-found__title">{t("notFound.title")}</h1>

          <div className="not-found__description">
            <p className="magic-text">{t("notFound.description")}</p>
          </div>

          {/* Botones con el estilo de tu portfolio */}
          <div className="not-found__actions">
            <Link to="/" className="btn-portfolio primary">
              <span className="btn-icon">🏠</span>
              <span>{t("notFound.backHome").replace("🏠 ", "")}</span>
            </Link>

            <Link to="/portfolio" className="btn-portfolio secondary">
              <span className="btn-icon">✨</span>
              <span>{t("notFound.viewProjects").replace("✨ ", "")}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
