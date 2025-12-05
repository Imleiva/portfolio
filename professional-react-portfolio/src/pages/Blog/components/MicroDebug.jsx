import React from "react";

const MicroDebug = () => {
  const debugEntries = [
    {
      date: "4 Dic 2024",
      title: "El misterio del z-index perdido",
      text: "Bug del día: me pasé 2h buscando un div que estaba oculto tras un z-index. Resulta que el problema no era el z-index... era que el elemento tenía `display: none`. A veces las respuestas más obvias son las más difíciles de ver.",
      tags: ["CSS", "Debug", "Lección aprendida"],
    },
    {
      date: "3 Dic 2024",
      title: "Patch note emocional",
      text: "Patch note emocional: hoy subo +2 en paciencia después de descubrir que el bug era un espacio extra en una clase CSS. Un. Espacio. Extra. Respirar profundo ayuda.",
      tags: ["Paciencia", "CSS", "Vida dev"],
    },
    {
      date: "2 Dic 2024",
      title: "El console.log que olvidé borrar",
      text: "Subí a producción con 37 console.log() activos. El sitio funcionaba perfecto pero mi console parecía un chat de WhatsApp a las 3am. Recordatorio: revisar antes de hacer push.",
      tags: ["JavaScript", "Oops", "Producción"],
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <span className="blog-section-icon">🧩</span>
        <h2 className="blog-section-title">Debug Personal</h2>
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
