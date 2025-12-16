import React from "react";
import { useTranslation } from "react-i18next";

const CodeAsArt = () => {
  const { t } = useTranslation();
  const artEntries = t("codeAsArt.entries", { returnObjects: true });

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🎨</span>
        <h2 className="blog-section-title">{t("codeAsArt.title")}</h2>
      </div>
      <div className="blog-section-content">
        {artEntries.map((entry, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{entry.date}</div>
            <h3 className="blog-entry-title">{entry.title}</h3>

            {/* Entrada tipo texto con párrafos */}
            {entry.content && (
              <>
                {entry.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="blog-entry-text">
                    {paragraph}
                  </p>
                ))}

                {/* Galería de imágenes de IOGraph */}
                {entry.images && entry.images.length > 0 && (
                  <div
                    className="iograph-gallery"
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "1rem",
                      margin: "1.5rem 0",
                    }}
                  >
                    {entry.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="iograph-image-container"
                        style={{
                          borderRadius: "var(--radius-md)",
                          overflow: "hidden",
                          border: "1px solid var(--border-color)",
                          background: "var(--surface-color)",
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                        {image.caption && (
                          <p
                            style={{
                              padding: "0.75rem",
                              fontSize: "0.85rem",
                              color: "var(--text-secondary)",
                              fontStyle: "italic",
                              margin: 0,
                            }}
                          >
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {entry.link && (
                  <p className="blog-entry-text">
                    <a
                      href={entry.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--primary-color)",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}
                    >
                      → {entry.link.text}
                    </a>
                  </p>
                )}
              </>
            )}

            {/* Entrada tipo código con paleta y poema */}
            {entry.code && (
              <div className="code-art-container">
                <pre className="code-snippet">{entry.code}</pre>
                <div className="code-art-interpretation">
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        color: "var(--text-color)",
                      }}
                    >
                      Paleta de Colores
                    </h4>
                    <div className="art-palette">
                      {entry.palette.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="color-swatch"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        color: "var(--text-color)",
                      }}
                    >
                      Interpretación Poética
                    </h4>
                    <div className="art-poem">{entry.poem}</div>
                  </div>
                  <p className="blog-entry-text">{entry.description}</p>
                </div>
              </div>
            )}

            {/* Tags */}
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

export default CodeAsArt;
