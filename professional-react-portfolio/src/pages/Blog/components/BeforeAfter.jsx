import React from "react";

const BeforeAfter = () => {
  const projects = [
    {
      date: "5 Dic 2024",
      title: "Museo Virtual Leiva'n Roll: Cuando una idea simple se transforma",
      before: {
        image: null,
        description:
          "La idea original: un museo virtual sencillo. Limpio. Solo mostrar artistas y canciones del proyecto Leiva'n Roll. Nada más.",
      },
      after: {
        image: null,
        description:
          "Lo que se convirtió: una experiencia interactiva completa con Maese como guía personalizable, burbujas de información específica según el avatar, enlaces directos a Spotify y YouTube, y un easter egg en el proyector de video con los créditos. Todo un descubrimiento musical.",
      },
      decision:
        "¿Qué pasó? Empecé y las ideas no paraban de surgir... Si Maese podía ser guía, ¿por qué no dejarlo personalizable? Y si cada caracterización cambiaba el avatar, ¿por qué no hacer que traiga información específica? Y si el objetivo era descubrir música... mejor facilitar los enlaces directos. Una cosa llevó a la otra. Así funciona mi proceso creativo: empiezo en un punto A y termino en un punto Z que ni imaginaba.",
      discarded:
        "Ideas descartadas: En un momento pensé en hacer el museo completamente en 3D con WebGL... pero era demasiado complejo y perdía el foco. También barajé añadir un sistema de votación para los artistas, pero habría desviado la atención de lo importante: descubrir y disfrutar la música.",
      tags: ["Museo Virtual", "Evolución", "Proceso Creativo", "Leiva'n Roll"],
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🔍</span>
        <h2 className="blog-section-title">Antes / Después</h2>
      </div>
      <div className="blog-section-content">
        {projects.map((project, index) => (
          <div key={index} className="blog-entry">
            <div className="blog-entry-date">{project.date}</div>
            <h3 className="blog-entry-title">{project.title}</h3>

            <div className="before-after-container">
              <div className="before-after-item before">
                <div className="before-after-label">❌ Antes</div>
                <div className="before-after-image">
                  <span className="before-after-image-placeholder">
                    📸 Captura pendiente
                  </span>
                </div>
                <p className="before-after-description">
                  {project.before.description}
                </p>
              </div>

              <div className="before-after-item after">
                <div className="before-after-label">✅ Después</div>
                <div className="before-after-image">
                  <span className="before-after-image-placeholder">
                    📸 Captura pendiente
                  </span>
                </div>
                <p className="before-after-description">
                  {project.after.description}
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "var(--text-color)",
                }}
              >
                🎯 ¿Qué me llevó a esta decisión?
              </h4>
              <p className="blog-entry-text">{project.decision}</p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "var(--text-color)",
                }}
              >
                🗑️ Versiones descartadas
              </h4>
              <p className="blog-entry-text">{project.discarded}</p>
            </div>

            <div className="blog-entry-tags">
              {project.tags.map((tag, tagIndex) => (
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

export default BeforeAfter;
