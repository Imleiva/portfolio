import React from "react";
import "./ComingSoon.css";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ComingSoon = ({ projectName }) => {
  const { projectName: urlProjectName } = useParams();
  const { t } = useTranslation();
  const displayName =
    projectName || urlProjectName || t("portfolio.project", "Proyecto");
  return (
    <div className="coming-soon">
      <div className="coming-soon__container">
        <div className="coming-soon__content">
          <h1 className="coming-soon__title">
            {t("comingSoon.title")}{" "}
            <span className="coming-soon__icon">🔧</span>
          </h1>
          <h2 className="coming-soon__subtitle">{displayName}</h2>

          <div className="coming-soon__progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-text">{t("comingSoon.progress")}</span>
          </div>

          <p className="coming-soon__description">
            {t("comingSoon.description")}
          </p>

          <div className="coming-soon__actions">
            <Link to="/portfolio" className="btn btn-primary">
              {t("comingSoon.backToProjects")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
