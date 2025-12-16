import React from "react";
import { useTranslation } from "react-i18next";

const HiddenSurprises = () => {
  const { t } = useTranslation();
  const entries = t("hiddenSurprises.entries", { returnObjects: true });

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🎮</span>
        <h2 className="blog-section-title">{t("hiddenSurprises.title")}</h2>
      </div>
      <div className="blog-section-content">
        {entries.map((entry, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{entry.date}</div>
            <h3 className="blog-entry-title">{entry.title}</h3>

            {entry.content &&
              entry.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="blog-entry-text">
                  {paragraph}
                </p>
              ))}

            {entry.hint && (
              <p className="blog-entry-text">
                <strong>{entry.hint}</strong>
              </p>
            )}

            <div className="blog-entry-tags">
              {entry.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="blog-entry-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiddenSurprises;
