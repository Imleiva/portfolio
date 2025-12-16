import React from "react";
import { useTranslation } from "react-i18next";

const PastMeHatesThis = () => {
  const { t } = useTranslation();
  const confessions = t("pastMeHatesThis.entries", { returnObjects: true });

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">💡</span>
        <h2 className="blog-section-title">{t("pastMeHatesThis.title")}</h2>
      </div>
      <div className="blog-section-content">
        {confessions.map((confession, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{confession.date}</div>
            <h3 className="blog-entry-title">{confession.title}</h3>
            <p className="blog-entry-text">{confession.text}</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "1rem",
                padding: "1rem",
                background: "var(--surface-color)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "var(--text-muted)",
                  }}
                >
                  🤦 Antes pensaba:
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                  }}
                >
                  {confession.beforeThought}
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "var(--text-muted)",
                  }}
                >
                  💡 Ahora sé:
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                  }}
                >
                  {confession.afterRealization}
                </p>
              </div>
            </div>

            <div className="blog-entry-tags">
              {confession.tags.map((tag, tagIndex) => (
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

export default PastMeHatesThis;
