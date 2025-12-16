import React from "react";
import { useTranslation } from "react-i18next";

const MicroDebug = () => {
  const { t } = useTranslation();
  const debugEntries = t("microDebug.entries", { returnObjects: true });

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🧩</span>
        <h2 className="blog-section-title">{t("microDebug.title")}</h2>
      </div>
      <div className="blog-section-content">
        {debugEntries.map((entry, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{entry.date}</div>
            <h3 className="blog-entry-title">{entry.title}</h3>
            <p className="blog-entry-text">{entry.text}</p>
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

export default MicroDebug;
