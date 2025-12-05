import React from "react";

const PastMeHatesThis = () => {
  const confessions = [
    {
      date: "4 Dic 2024",
      title: "Cuando pensaba que los IDs numéricos eran suficientes",
      text: "Mi yo de hace 2 años: 'Para qué voy a usar UUIDs si puedo usar 1, 2, 3...'. Mi yo actual después de tener colisiones en producción: 'Necesito terapia por esto'. Ahora uso UUIDs para todo y duermo tranquila. Lección: la escalabilidad no es opcional, es inevitable.",
      beforeThought: "Los IDs numéricos son simples y funcionan perfectamente.",
      afterRealization:
        "Hasta que necesitas merge de bases de datos o sincronización offline.",
      tags: ["Base de datos", "Errores del pasado"],
    },
    {
      date: "2 Dic 2024",
      title: "Mi guerra contra las variables descriptivas",
      text: "Solía nombrar variables así: x, y, data, tmp, arr. Pensaba que era 'eficiente'. Ahora cuando tengo que revisar ese código antiguo quiero viajar en el tiempo y darme una charla sobre clean code. ¿Qué hace 'tmp'? ¿Por qué 'x' tiene 200 líneas de vida? Nadie lo sabe.",
      beforeThought:
        "Nombres cortos = código rápido de escribir = más productividad.",
      afterRealization:
        "Nombres descriptivos = código que entiendes 6 meses después = productividad real.",
      tags: ["Clean Code", "Variables", "Naming"],
    },
    {
      date: "30 Nov 2024",
      title: "Cuando creía que los comentarios eran para débiles",
      text: "Plot twist: los comentarios no son para débiles, son para humanos. Mi yo del pasado escribía código 'autoexplicativo' que nadie entendía. Mi yo actual escribe comentarios que explican el POR QUÉ, no el QUÉ. El código dice qué hace, los comentarios dicen por qué existe.",
      beforeThought:
        "El código debe ser autoexplicativo, los comentarios sobran.",
      afterRealization:
        "El código explica el CÓMO, los comentarios explican el POR QUÉ y el CONTEXTO.",
      tags: ["Comentarios", "Documentación", "Evolución"],
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">💡</span>
        <h2 className="blog-section-title">
          Mi Yo del Pasado Me Odiaría Por Esto
        </h2>
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
